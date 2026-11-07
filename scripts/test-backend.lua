-- Logic smoke test for plugin/backend/main.lua with stubbed Millennium APIs.
-- Run with LuaJIT: luajit scripts/test-backend.lua
local config_store, ready, css_path, css_regex, removed_hook = {}, false, nil, nil, nil
local env, last_command = {}, nil
local logs = {}
local frontend_calls = {}
local session_exists, executable_exists = false, true
local startup_error_body = nil
local startup_error_path = '/plugin/runtime/startup-error.json'
local backend = '/plugin/backend'
local session_path = '/plugin/runtime/session-aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa.json'
local executable = '/plugin/bin/gale'
local session_body = '{"pid":99,"port":12345,"token":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","bridgeVersion":2}'
local snapshot_body = '{"data":{"ok":true,"bridgeVersion":2,"core":"Gale","coreVersion":"1.23.3","games":[],"activeSlug":"lethal-company","dataDir":"/tmp/gale","installing":false}}'
local progress_body = '{"data":{"active":false,"tasks":[],"networkBytesPerSecond":0,"diskBytesPerSecond":0,"history":[]}}'

-- Millennium registers lua-cjson under the module name `json`. A clean install
-- has no `cjson` module; this test must fail if the backend requires it again.
package.preload['cjson'] = nil
package.loaded['cjson'] = nil

local array_mt = { __galex_test_array = true }
local array_mt_enabled, empty_object_enabled = false, false
local function escape(s)
  return (s:gsub('[%c"\\]', function(c)
    if c == '"' then return '\\"' end
    if c == '\\' then return '\\\\' end
    if c == '\n' then return '\\n' end
    if c == '\r' then return '\\r' end
    if c == '\t' then return '\\t' end
    return string.format('\\u%04x', c:byte())
  end))
end
local function is_array(v)
  if getmetatable(v) == array_mt then return true end
  local n = #v
  if n == 0 then return false end
  local count = 0
  for _ in pairs(v) do count = count + 1 end
  if count ~= n then return false end
  for i = 1, n do if v[i] == nil then return false end end
  return true
end
local encode
encode = function(v)
  local t = type(v)
  if t == 'nil' then return 'null' end
  if t == 'boolean' then return tostring(v) end
  if t == 'number' then return string.format('%.14g', v) end
  if t == 'string' then return '"' .. escape(v) .. '"' end
  if t == 'table' then
    if is_array(v) then
      local parts = {}
      for i = 1, #v do parts[i] = encode(v[i]) end
      return '[' .. table.concat(parts, ',') .. ']'
    end
    local keys = {}
    for k in pairs(v) do if type(k) == 'string' then keys[#keys + 1] = k end end
    table.sort(keys)
    local parts = {}
    for _, k in ipairs(keys) do parts[#parts + 1] = encode(k) .. ':' .. encode(v[k]) end
    return '{' .. table.concat(parts, ',') .. '}'
  end
  error('unsupported json type: ' .. t)
end
local function decode(text)
  if text == '[]' then return setmetatable({}, array_mt) end
  if startup_error_body and text == startup_error_body then return { code = 'gale_session_locked', error = 'Gale session is locked. Close desktop Gale before using GaleX.' } end
  if text == session_body then return { pid = 99, port = 12345, token = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', bridgeVersion = 2 } end
  if text == snapshot_body then return { data = { ok = true, bridgeVersion = 2, core = 'Gale', coreVersion = '1.23.3', games = setmetatable({}, array_mt), activeSlug = 'lethal-company', dataDir = '/tmp/gale', installing = false } } end
  if text == progress_body then return { data = { active = false, tasks = setmetatable({}, array_mt), networkBytesPerSecond = 0, diskBytesPerSecond = 0, history = setmetatable({}, array_mt) } } end
  if text == '{"method":"cancel_installs","args":{}}' then return { method = 'cancel_installs', args = {} } end
  if text == '{"method":"job_result","args":{"jobId":"smoke-job"}}' then return { method = 'job_result', args = { jobId = 'smoke-job' } } end
  if text == '{"message":"properties: tab injected"}' then return { message = 'properties: tab injected' } end
  if text == '{"path":"/tmp/gale"}' then return { path = '/tmp/gale' } end
  if text == '{"method":"prefs","args":{}}' then return { method = 'prefs', args = {} } end
  if text == '{"method":"mods","args":{}}' then return { method = 'mods', args = {} } end
  if text == '{"method":"mods","args":{"slug":"lethal-company"}}' then return { method = 'mods', args = { slug = 'lethal-company' } } end
  if text == '{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/","slug":"lethal-company"}' then return { url = 'ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/', slug = 'lethal-company' } end
  if text == '{"url":"https://example.com","slug":"lethal-company"}' then return { url = 'https://example.com', slug = 'lethal-company' } end
  if text == '{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/"}' then return { url = 'ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/' } end
  error('unexpected json: ' .. tostring(text))
end
package.preload['json'] = function()
  return {
    encode = encode,
    decode = decode,
    empty_array = setmetatable({}, array_mt),
    decode_array_with_array_mt = function(value) assert(value == true); array_mt_enabled = true end,
    encode_empty_table_as_object = function(value) assert(value == true); empty_object_enabled = true end,
  }
end

package.preload['logger'] = function()
  local function log(level)
    return function(_, message) logs[#logs + 1] = level .. ': ' .. message end
  end
  return { info = log('info'), warn = log('warn'), error = log('error') }
end
package.preload['millennium'] = function()
  return {
    config = {
      get = function(key) return config_store[key] end,
      set = function(key, value) config_store[key] = value; return true end,
    },
    ready = function() ready = true end,
    add_browser_css = function(path, regex) css_path, css_regex = path, regex; return 7 end,
    remove_browser_module = function(id) removed_hook = id; return true end,
    call_frontend_method = function(method, params) frontend_calls[#frontend_calls + 1] = {method = method, params = params}; return true end,
  }
end
package.preload['http'] = function()
  return {
    request = function(url, opts)
      assert(url == 'http://127.0.0.1:12345/rpc')
      assert(opts.headers.Authorization == 'Bearer aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      assert(opts.headers['X-GaleX-Client'] == 'millennium-lua')
      if opts.data and opts.data:find('progress', 1, true) then return { status = 200, body = progress_body } end
      return { status = 200, body = snapshot_body }
    end,
    post = function(url, body, opts)
      assert(url == 'http://127.0.0.1:12345/shutdown')
      session_exists = false
      return { status = 200, body = '{"ok":true}' }
    end,
  }
end
package.preload['utils'] = function()
  return {
    get_backend_path = function() return backend end,
    uuid = function() return 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa' end,
    setenv = function(key, value) env[key] = value end,
    exec = function(command) last_command = command; return '', 0 end,
    sleep = function(ms) assert(ms == 100) end,
  }
end
package.preload['fs'] = function()
  return {
    parent_path = function(path) assert(path == backend); return '/plugin' end,
    create_directories = function(path) assert(path == '/plugin/runtime') end,
    exists = function(path)
      if path == session_path then return session_exists end
      if path == executable then return executable_exists end
      return false
    end,
    remove = function(path) assert(path == session_path); session_exists = false end,
  }
end
package.preload['ffi'] = function()
  return { cdef = function() end, C = { getpid = function() return 4242 end } }
end

local real_io_open = io.open
io.open = function(path, mode)
  if path == startup_error_path then
    if not startup_error_body then return nil end
    return { read = function() return startup_error_body end, close = function() end, seek = function() return #startup_error_body end }
  end
  if path == session_path then
    return { read = function() return session_body end, close = function() end }
  end
  return real_io_open(path, mode)
end

local M = dofile('plugin/backend/main.lua')
assert(array_mt_enabled and empty_object_enabled, 'cjson array/object round-trip configured')
assert(type(M.on_load) == 'function' and type(M.on_unload) == 'function' and type(M.on_frontend_loaded) == 'function')
M.on_load()
assert(ready, 'millennium.ready called')
M.on_frontend_loaded()
assert(logs[#logs] == 'info: GaleX 0.3.8: frontend loaded', 'frontend-loaded handshake is visible in Steam logs')
assert(frontend_log('{"message":"properties: tab injected"}'):find('"ok":true', 1, true))
assert(logs[#logs] == 'info: GaleX frontend: properties: tab injected', 'frontend diagnostics reach the Steam log')
assert(env.GALEX_HEADLESS == '1' and env.GALEX_PARENT_PID == '4242', 'child env uses the Lua host PID')
assert(env.GALEX_STARTUP_ERROR_FILE == startup_error_path, 'headless child publishes startup failures to the Lua parent')
assert(#env.GALEX_TOKEN >= 32, 'token length')
assert(last_command and last_command:find('nohup', 1, true) and last_command:find(executable, 1, true), 'non-blocking spawn')
assert(css_path == '/plugin/.millennium/Dist/browser.css', 'browser CSS hook path')
assert(css_regex == '^https://thunderstore\\.io/.*', 'Thunderstore URL regex')

startup_error_body = '{"code":"gale_session_locked","error":"Gale session is locked. Close desktop Gale before using GaleX."}'
local locked = snapshot()
assert(locked:find('"ok":false', 1, true) and locked:find('"code":"gale_session_locked"', 1, true), 'locked Gale session returns a structured error code, not generic starting')
assert(command('{"method":"mods","args":{"slug":"lethal-company"}}'):find('"code":"gale_session_locked"', 1, true), 'game commands surface the same lock code')
startup_error_body = nil

session_exists = true
local snap = snapshot()
assert(type(snap) == 'string', 'IPC replies are JSON strings')
assert(snap:find('"ok":true', 1, true) and snap:find('"core":"Gale"', 1, true), 'snapshot envelope')
assert(snap:find('"pendingLinks":[]', 1, true) and snap:find('"games":[]', 1, true), 'empty arrays stay arrays')
assert(logs[#logs] == 'info: GaleX 0.3.8: headless snapshot received', 'first successful snapshot is logged')
for _, message in ipairs(logs) do assert(not message:find(env.GALEX_TOKEN, 1, true), 'logs never expose the bridge token') end
local prefs = command('{"method":"prefs","args":{}}')
assert(prefs:find('"ok":true', 1, true), 'global prefs do not require a game slug')
local missing = command('{"method":"mods","args":{}}')
assert(missing:find('"ok":false', 1, true), 'game commands require slug')
local job = command('{"method":"job_result","args":{"jobId":"smoke-job"}}')
assert(job:find('"ok":true', 1, true), 'job_result is a global command and does not require a game slug')
local prog = progress()
assert(prog:find('"ok":true', 1, true) and prog:find('"active":false', 1, true), 'progress is a global read-only IPC method')
assert(prog:find('"tasks":[]', 1, true) and prog:find('"history":[]', 1, true), 'progress empty arrays stay arrays')
assert(command('{"method":"cancel_installs","args":{}}'):find('"ok":true', 1, true), 'cancel_installs does not require a game slug')

assert(queue_link('{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/","slug":"lethal-company"}'):find('"ok":true', 1, true))
assert(frontend_calls[#frontend_calls] and frontend_calls[#frontend_calls].method == 'linkQueued', 'queue_link wakes the visible Steam frontend immediately')
assert(queue_link('{"url":"https://example.com","slug":"lethal-company"}'):find('"ok":false', 1, true), 'reject non-ror2mm')
assert(queue_link('{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/"}'):find('"ok":false', 1, true), 'queue requires slug')
assert(snapshot():find('"pendingLinks":[{', 1, true), 'link queued')
assert(dismiss_link('{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/"}'):find('"ok":true', 1, true))
assert(snapshot():find('"pendingLinks":[]', 1, true), 'link dismissed')

assert(set_config('{"path":"/tmp/gale"}'):find('"ok":true', 1, true))
assert(get_config():find('"data":"/tmp/gale"', 1, true))
assert(restart():find('"ok":true', 1, true), 'restart waits for session removal')
assert(removed_hook == 7, 'browser hook removed on unload')
M.on_unload()
print('OK Lua backend: json module, spawn, session IPC, JSON replies, structured session-lock code, progress, links, config, restart, cleanup')
