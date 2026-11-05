/* GaleX config browser. Values and parsers are supplied by Gale, never eval'd. */
const params = new URLSearchParams(location.search);
const context = {slug: params.get('slug'), profileId: Number(params.get('profileId'))};
const status = document.getElementById('status');
const filesNode = document.getElementById('files');
function node(tag, text, className) { const el = document.createElement(tag); if (text !== undefined) el.textContent = text; if (className) el.className = className; return el; }
async function save(file, section, entry, value, reset, indicator) {
  indicator.textContent = 'Сохранение…';
  try {
    const response = await fetch('/api/config?' + new URLSearchParams(context), {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({file,section,entry,value,reset})});
    if (!response.ok) throw new Error(await response.text());
    indicator.textContent = 'Сохранено';
  } catch (error) { indicator.textContent = error.message; indicator.className = 'save error'; }
}
function control(file, section, entry) {
  const row = node('label', undefined, 'entry');
  const labels = node('span'); labels.append(node('strong', entry.name));
  if (entry.description) labels.append(node('small', entry.description));
  const v = entry.value, content = v.content;
  let input;
  if (v.type === 'bool') { input = node('input'); input.type = 'checkbox'; input.checked = content; }
  else if (v.type === 'enum' || v.type === 'flags') {
    input = node('select');
    if (v.type === 'flags') input.multiple = true;
    content.options.forEach((option, index) => { const item = node('option', option); item.value = index; item.selected = v.type === 'enum' ? index === content.index : content.indicies.includes(index); input.append(item); });
  } else { input = node('input'); input.type = v.type === 'int' || v.type === 'float' ? 'number' : 'text'; input.value = content.value ?? content; if (content.range) { input.min = content.range.start; input.max = content.range.end; } if (v.type === 'float') input.step = 'any'; }
  const indicator = node('span', '', 'save');
  input.addEventListener('change', () => {
    let value;
    if (v.type === 'bool') value = {type:'bool',content:input.checked};
    else if (v.type === 'enum') value = {type:'enum',content:{...content,index:Number(input.value)}};
    else if (v.type === 'flags') value = {type:'flags',content:{...content,indicies:Array.from(input.selectedOptions).map(o => Number(o.value))}};
    else if (v.type === 'int' || v.type === 'float') { if (input.value === '' || !input.checkValidity()) { indicator.textContent = 'Некорректное значение'; return; } value = {type:v.type,content:{...content,value:Number(input.value)}}; }
    else value = {type:'string',content:input.value};
    void save(file.relativePath, section.name, entry.name, value, false, indicator);
  });
  row.append(labels,input,indicator);
  if (entry.default !== undefined && entry.default !== null) { const reset = node('button','Сбросить','reset'); reset.onclick = () => void save(file.relativePath,section.name,entry.name,null,true,indicator); row.append(reset); }
  return row;
}
async function load() {
  try {
    const response = await fetch('/api/config?' + new URLSearchParams(context));
    if (!response.ok) throw new Error(await response.text());
    const files = await response.json(); filesNode.replaceChildren();
    for (const file of files) {
      const details = node('details',undefined,'file'); details.open = true;
      details.append(node('summary',file.displayName));
      if (file.type !== 'ok') { details.append(node('p',file.error || 'Формат не поддерживается. Откройте файл в Gale.')); filesNode.append(details); continue; }
      for (const section of file.sections) { details.append(node('h2',section.name,'section')); for (const entry of section.entries) details.append(control(file,section,entry)); }
      filesNode.append(details);
    }
    status.textContent = files.length ? `${files.length} файлов · ${context.slug}` : 'Конфиги появятся после первого запуска игры с модами.';
  } catch (error) { status.textContent = 'Не удалось открыть конфиги: ' + error.message; status.className = 'error'; }
}
void load();