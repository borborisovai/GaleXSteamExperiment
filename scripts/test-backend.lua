-- Logic smoke test for plugin/backend/main.lua with stubbed Millennium APIs.
-- Run with LuaJIT: luajit scripts/test-backend.lua
local config_store, ready, css_path, css_regex, removed_hook = {}, false, nil, nil, nil
local env, last_command = {}, nil
local session_exists, executable_exists = false, true
local backend = '/plugin/backend'
local session_path = '/plugin/runtime/session-aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa.json'
local executable = '/plugin/bin/gale'
local session_body = '{"pid":99,"port":12345,"token":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","bridgeVersion":2}'
local snapshot_body = '{"data":{"ok":true,"bridgeVersion":2,"core":"Gale","coreVersion":"1.23.3","games":[],"activeSlug":"lethal-company","dataDir":"/tmp/gale","installing":false}}'

package.preload['millennium'] = function()
  return {
    config = {
      get = function(key) return config_store[key] end,
      set = function(key, value) config_store[key] = value; return true end,
    },
    ready = function() ready = true end,
    add_browser_css = function(path, regex) css_path, css_regex = path, regex; return 7 end,
    remove_browser_module = function(id) removed_hook = id; return true end,
  }
end
package.preload['http'] = function()
  return {
    request = function(url, opts)
      assert(url == 'http://127.0.0.1:12345/rpc')
      assert(opts.headers.Authorization == 'Bearer aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
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
package.preload['cjson'] = function()
  return {
    encode = function() return '{}' end,
    decode = function(text)
      if text == session_body then return { pid = 99, port = 12345, token = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', bridgeVersion = 2 } end
      if text == snapshot_body then return { data = { ok = true, bridgeVersion = 2, core = 'Gale', coreVersion = '1.23.3', games = {}, activeSlug = 'lethal-company', dataDir = '/tmp/gale', installing = false } } end
      if text == '{"path":"/tmp/gale"}' then return { path = '/tmp/gale' } end
      if text == '{"method":"prefs","args":{}}' then return { method = 'prefs', args = {} } end
      if text == '{"method":"mods","args":{}}' then return { method = 'mods', args = {} } end
      if text == '{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/","slug":"lethal-company"}' then return { url = 'ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/', slug = 'lethal-company' } end
      if text == '{"url":"https://example.com","slug":"lethal-company"}' then return { url = 'https://example.com', slug = 'lethal-company' } end
      if text == '{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/"}' then return { url = 'ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/' } end
      error('unexpected json: ' .. tostring(text))
    end,
  }
end

local real_io_open = io.open
io.open = function(path, mode)
  if path == session_path then
    return { read = function() return session_body end, close = function() end }
  end
  return real_io_open(path, mode)
end

local M = dofile('plugin/backend/main.lua')
assert(type(M.on_load) == 'function' and type(M.on_unload) == 'function')
M.on_load()
assert(ready, 'millennium.ready called')
assert(env.GALEX_HEADLESS == '1' and env.GALEX_PARENT_PID == '4242', 'child env uses current Steam PID')
assert(#env.GALEX_TOKEN >= 32, 'token length')
assert(last_command and last_command:find('nohup', 1, true) and last_command:find(executable, 1, true), 'non-blocking spawn')
assert(css_path == '/plugin/.millennium/Dist/browser.css', 'browser CSS hook path')
assert(css_regex == '^https://thunderstore\\.io/.*', 'Thunderstore URL regex')

session_exists = true
local snap = snapshot()
assert(snap.ok and snap.data.core == 'Gale' and snap.data.pendingLinks, 'snapshot envelope')
local prefs = command('{"method":"prefs","args":{}}')
assert(prefs.ok, 'global prefs do not require a game slug')
local missing = command('{"method":"mods","args":{}}')
assert(not missing.ok, 'game commands require slug')

assert(queue_link('{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/","slug":"lethal-company"}').ok)
assert(not queue_link('{"url":"https://example.com","slug":"lethal-company"}').ok, 'reject non-ror2mm')
assert(not queue_link('{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/"}').ok, 'dismiss requires slug')
assert(#snapshot().data.pendingLinks == 1, 'link queued')
assert(dismiss_link('{"url":"ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/"}').ok)
assert(#snapshot().data.pendingLinks == 0, 'link dismissed')

assert(set_config('{"path":"/tmp/gale"}').ok)
assert(get_config().data == '/tmp/gale')
assert(restart().ok, 'restart waits for session removal')
assert(removed_hook == 7, 'browser hook removed on unload')
M.on_unload()
print('✓ Lua backend: spawn, session IPC, snapshots, links, config, restart, cleanup')
