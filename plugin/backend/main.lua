-- GaleX Millennium 3.6+ backend. The Lua VM owns the child's lifetime.
-- No HTTP port is exposed to the Steam web context; all calls go through IPC.
local millennium = require('millennium')
local http = require('http')
local utils = require('utils')
local fs = require('fs')
local logger = require('logger')
-- Millennium preloads its vendored lua-cjson as `json`, not as `cjson`.
-- Requiring `cjson` crashes on a clean Steam/Millennium install.
local json = require('json')
-- Preserve JSON arrays when a frontend payload is decoded and sent to Gale.
-- Plain empty Lua tables still encode as objects (`args = {}`), while decoded
-- empty arrays keep cjson's array metatable and encode as `[]`.
if type(json.decode_array_with_array_mt) == 'function' then pcall(json.decode_array_with_array_mt, true) end
if type(json.encode_empty_table_as_object) == 'function' then pcall(json.encode_empty_table_as_object, true) end
local empty_array = json.empty_array or json.decode('[]')
local M = {}
local session, starting, start_error = nil, false, nil
local snapshot_logged = false
local links = {}
local browser_hook = nil
local runtime = fs.parent_path(utils.get_backend_path()) .. '/runtime'
local session_path = runtime .. '/session-' .. utils.uuid() .. '.json'
local log_path = runtime .. '/gale.log'
local windows = package.config:sub(1, 1) == '\\'
local ffi = require('ffi')
if windows then ffi.cdef[[unsigned long __stdcall GetCurrentProcessId(void);]] else ffi.cdef[[int getpid(void);]] end
local function current_pid()
  local ok, pid = pcall(function() return windows and ffi.C.GetCurrentProcessId() or ffi.C.getpid() end)
  return ok and tonumber(pid) or nil
end

local function quote(value)
  if windows then return '"' .. tostring(value):gsub('"', '\\"') .. '"' end
  return "'" .. tostring(value):gsub("'", "'\\''") .. "'"
end
local function configured_path()
  local path = millennium.config.get('galePath')
  if type(path) == 'string' and #path > 0 then return path end
  return fs.parent_path(utils.get_backend_path()) .. '/bin/gale' .. (windows and '.exe' or '')
end
local function read_session()
  if session then return session end
  if not fs.exists(session_path) then return nil end
  local file = io.open(session_path, 'rb')
  if not file then return nil end
  local text = file:read('*a'); file:close()
  local ok, value = pcall(json.decode, text)
  if ok and type(value) == 'table' and value.bridgeVersion == 2 and type(value.token) == 'string' and type(value.port) == 'number' then session = value end
  return session
end
-- Return a JSON string, not a Lua table: Millennium's table->JSON conversion
-- turns empty tables into `{}`, which would break `mods: []`, `games: []`, etc.
-- The frontend bridge already parses string results.
local function reply(value)
  return json.encode(value)
end
local function pending_links()
  return #links > 0 and links or empty_array
end
local function request(path, body, timeout)
  local s = read_session()
  if not s then return nil, start_error or 'Headless Gale запускается. Если запуск не завершается, проверьте путь к сборке GaleX и закройте настольный Gale.' end
  local response, err = http.request('http://127.0.0.1:' .. s.port .. path, {
    method = body and 'POST' or 'GET', data = body and json.encode(body) or nil,
    headers = { ['Authorization'] = 'Bearer ' .. s.token, ['Content-Type'] = 'application/json', ['X-GaleX-Client'] = 'millennium-lua' },
    timeout = timeout or 180, follow_redirects = false
  })
  if not response then return nil, err or 'Нет связи с headless Gale' end
  local ok, result = pcall(json.decode, response.body)
  if not ok or type(result) ~= 'table' then return nil, 'Некорректный ответ Gale (' .. response.status .. ')' end
  if response.status ~= 200 then return nil, result.error or ('Gale HTTP ' .. response.status) end
  return result
end
local function shell(command) local output, status = utils.exec(command); return output, status end
function M.on_load()
  fs.create_directories(runtime)
  starting = true
  local executable = configured_path()
  if not fs.exists(executable) then
    start_error = 'Не найдена headless-сборка Gale. Соберите её: python3 backend/prepare.py && scripts/build-gale.sh. Укажите путь в настройках GaleX.'
    starting = false
    millennium.ready()
    return
  end
  -- Create a private session file; the Rust child creates it with mode 0600.
  if fs.exists(session_path) then fs.remove(session_path) end
  local parent_pid = current_pid()
  if not parent_pid then start_error = 'Не удалось определить процесс Millennium'; starting = false; millennium.ready(); return end
  utils.setenv('GALEX_HEADLESS', '1')
  utils.setenv('GALEX_TOKEN', utils.uuid():gsub('-', '') .. utils.uuid():gsub('-', ''))
  utils.setenv('GALEX_SESSION_FILE', session_path)
  utils.setenv('GALEX_PARENT_PID', tostring(parent_pid))
  -- Do not use Gale --no-gui: upstream exits immediately after its CLI work.
  local command
  if windows then command = 'start "GaleX" /B ' .. quote(executable) .. ' > ' .. quote(log_path) .. ' 2>&1'
  else command = 'nohup ' .. quote(executable) .. ' > ' .. quote(log_path) .. ' 2>&1 < /dev/null &' end
  local _, status = shell(command)
  if status ~= 0 then
    start_error = 'Не удалось запустить headless Gale; см. ' .. log_path
    starting = false
    logger:error(start_error)
  else
    logger:info('GaleX 0.3.2: headless Gale launch requested: ' .. executable)
  end
  -- Keep starting=true until the first successful snapshot; never block Steam startup.
  local css = fs.parent_path(utils.get_backend_path()) .. '/.millennium/Dist/browser.css'
  local ok, id = pcall(millennium.add_browser_css, css, '^https://thunderstore\\.io/.*')
  if ok and type(id) == 'number' and id > 0 then browser_hook = id end
  millennium.ready()
end
function M.on_frontend_loaded()
  -- Millennium logs this in the Steam console, making the frontend -> Lua
  -- handshake visible separately from the child process's gale.log.
  logger:info('GaleX 0.3.2: frontend loaded')
end
function frontend_log(payload)
  local ok, value = pcall(json.decode, payload)
  if ok and type(value) == 'table' and type(value.message) == 'string' then
    local message = value.message:gsub('%c', ' '):sub(1, 500)
    logger:info('GaleX frontend: ' .. message)
  end
  return reply({ok = true})
end
function M.on_unload()
  snapshot_logged = false
  local s = read_session()
  if s then pcall(http.post, 'http://127.0.0.1:' .. s.port .. '/shutdown', '{}', {headers = {['Authorization'] = 'Bearer ' .. s.token, ['X-GaleX-Client'] = 'millennium-lua'}, timeout = 3}) end
  -- Parent-PID watchdog also cleans up after a Steam/plugin crash.
  if browser_hook then pcall(millennium.remove_browser_module, browser_hook); browser_hook = nil end
  session = nil
end
function snapshot()
  local result, err = request('/rpc', {method = 'snapshot', args = {}}, 5)
  if not result then return reply({ok = false, error = err, starting = starting, pendingLinks = pending_links()}) end
  starting = false; start_error = nil
  if not snapshot_logged then
    snapshot_logged = true
    logger:info('GaleX 0.3.2: headless snapshot received')
  end
  local data = result.data
  data.ok = true; data.pendingLinks = pending_links()
  return reply({ok = true, data = data})
end
function progress()
  local result, err = request('/rpc', {method = 'progress', args = {}}, 5)
  if not result then return reply({ok = false, error = err}) end
  return reply({ok = true, data = result.data})
end
function command(payload)
  local ok, envelope = pcall(json.decode, payload)
  if not ok or type(envelope) ~= 'table' or type(envelope.method) ~= 'string' or type(envelope.args) ~= 'table' then return reply({ok = false, error = 'Некорректная команда'}) end
  local global = envelope.method == 'prefs' or envelope.method == 'set_prefs' or envelope.method == 'clear_download_cache' or envelope.method == 'cancel_installs'
  if not global and type(envelope.args.slug) ~= 'string' then return reply({ok = false, error = 'Не выбрана игра'}) end
  local method = envelope.method
  local timeout = (method:find('install') or method:find('update') or method:find('import') or method == 'change_mod_version') and 900 or 180
  local result, err = request('/rpc', envelope, timeout)
  if not result then return reply({ok = false, error = err}) end
  return reply({ok = true, data = result.data})
end
function browser_url(payload)
  local ok, args = pcall(json.decode, payload)
  if not ok or type(args) ~= 'table' then return reply({ok = false, error = 'Некорректный контекст'}) end
  local result, err = request('/browser-url', args, 10)
  if not result then return reply({ok = false, error = err}) end
  return reply({ok = true, data = result})
end
function queue_link(payload)
  local ok, value = pcall(json.decode, payload)
  if not ok or type(value) ~= 'table' or type(value.url) ~= 'string' or type(value.slug) ~= 'string' then return reply({ok = false, error = 'Некорректная ссылка'}) end
  if not value.url:match('^ror2mm://v1/install/thunderstore%.io/[%w_.%%~-]+/[%w_.%%~-]+/[%w_.%%~-]+/?$') then return reply({ok = false, error = 'Поддерживаются только ссылки установки Thunderstore'}) end
  for _, link in ipairs(links) do if link.url == value.url and link.slug == value.slug then return reply({ok = true}) end end
  if #links >= 20 then return reply({ok = false, error = 'Слишком много ожидающих ссылок'}) end
  table.insert(links, {url = value.url, slug = value.slug})
  -- Wake the visible Steam window immediately; the SharedJSContext poll can be
  -- throttled while the Thunderstore popup has focus.
  local notified, err = pcall(millennium.call_frontend_method, 'linkQueued', {json.encode(value)})
  if not notified then logger:error('GaleX linkQueued frontend notification failed: ' .. tostring(err)) end
  return reply({ok = true})
end
function dismiss_link(payload)
  local ok, value = pcall(json.decode, payload)
  if ok and type(value) == 'table' and type(value.url) == 'string' then
    for i, link in ipairs(links) do if link.url == value.url then table.remove(links, i); break end end
  end
  return reply({ok = true})
end
function get_config()
  local value = millennium.config.get('galePath')
  return reply({ok = true, data = type(value) == 'string' and value or ''})
end
function set_config(payload)
  local ok, value = pcall(json.decode, payload)
  if not ok or type(value) ~= 'table' or type(value.path) ~= 'string' or #value.path > 2048 then return reply({ok = false, error = 'Некорректный путь'}) end
  local saved, err = millennium.config.set('galePath', value.path)
  if not saved then return reply({ok = false, error = err or 'Не удалось сохранить настройки'}) end
  return reply({ok = true})
end
function restart()
  M.on_unload()
  -- The bridge removes its session file only after the install queue is empty.
  for _ = 1, 300 do
    if not fs.exists(session_path) then break end
    utils.sleep(100)
  end
  if fs.exists(session_path) then return reply({ok = false, error = 'Gale ещё завершает установки. Повторите перезапуск позже.'}) end
  start_error = nil
  M.on_load()
  return reply({ok = true})
end
return M
