const KEY = 'personal-hub-v1';
const initial = { tasks: [], notes: [], ideas: [], links: [], dark: false };
let state = load();

function load() {
  try { return { ...initial, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
  catch { return { ...initial }; }
}
function save() { localStorage.setItem(KEY, JSON.stringify(state)); render(); }
function id() { return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`; }
function esc(value) { const div = document.createElement('div'); div.textContent = value; return div.innerHTML; }
function removeItem(type, itemId) { state[type] = state[type].filter(item => item.id !== itemId); save(); }

function render() {
  document.body.classList.toggle('dark', state.dark);
  document.getElementById('today').textContent = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date());
  document.getElementById('todo-count').textContent = state.tasks.filter(task => !task.done).length;
  document.getElementById('note-count').textContent = state.notes.length;
  document.getElementById('idea-count').textContent = state.ideas.length;
  document.getElementById('link-count').textContent = state.links.length;

  const tasks = document.getElementById('task-list');
  tasks.innerHTML = state.tasks.map(task => `<li><label class="item-main"><input class="check" type="checkbox" data-task="${task.id}" ${task.done ? 'checked' : ''}><span class="${task.done ? 'done' : ''}">${esc(task.text)}</span></label><button class="delete" data-remove="tasks" data-id="${task.id}" aria-label="Supprimer">×</button></li>`).join('');
  document.getElementById('task-empty').hidden = state.tasks.length > 0;

  const ideas = document.getElementById('idea-list');
  ideas.innerHTML = state.ideas.map(idea => `<li><span>${esc(idea.text)}</span><button class="delete" data-remove="ideas" data-id="${idea.id}" aria-label="Supprimer">×</button></li>`).join('');
  document.getElementById('idea-empty').hidden = state.ideas.length > 0;

  document.getElementById('note-list').innerHTML = state.notes.map(note => `<article class="note"><button class="delete" data-remove="notes" data-id="${note.id}" aria-label="Supprimer">×</button><strong>${esc(note.title)}</strong><p>${esc(note.body)}</p></article>`).join('');
  document.getElementById('link-list').innerHTML = state.links.map(link => `<div class="link-row"><a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)}</a><button class="delete" data-remove="links" data-id="${link.id}" aria-label="Supprimer">×</button></div>`).join('');
}

document.getElementById('task-form').addEventListener('submit', event => { event.preventDefault(); const input = document.getElementById('task-input'); state.tasks.unshift({ id: id(), text: input.value.trim(), done: false }); input.value = ''; save(); });
document.getElementById('idea-form').addEventListener('submit', event => { event.preventDefault(); const input = document.getElementById('idea-input'); state.ideas.unshift({ id: id(), text: input.value.trim() }); input.value = ''; save(); });
document.getElementById('note-form').addEventListener('submit', event => { event.preventDefault(); const title = document.getElementById('note-title'); const body = document.getElementById('note-body'); state.notes.unshift({ id: id(), title: title.value.trim(), body: body.value.trim() }); title.value = ''; body.value = ''; save(); });
document.getElementById('link-form').addEventListener('submit', event => { event.preventDefault(); const label = document.getElementById('link-label'); const url = document.getElementById('link-url'); state.links.unshift({ id: id(), label: label.value.trim(), url: url.value.trim() }); label.value = ''; url.value = ''; save(); });
document.getElementById('theme-toggle').addEventListener('click', () => { state.dark = !state.dark; save(); });
document.getElementById('clear-data').addEventListener('click', () => { if (confirm('Effacer toutes les données locales ?')) { state = { ...initial }; save(); } });
document.addEventListener('click', event => { const button = event.target.closest('[data-remove]'); if (button) removeItem(button.dataset.remove, button.dataset.id); });
document.addEventListener('change', event => { if (event.target.matches('[data-task]')) { const task = state.tasks.find(item => item.id === event.target.dataset.task); if (task) task.done = event.target.checked; save(); } });
render();
