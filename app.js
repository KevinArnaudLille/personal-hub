/* Read-only content maintained by Hermes from Telegram requests. */
const hub = {
  updatedAt: 'Dernière mise à jour via Telegram',
  tasks: [],
  notes: [{ title: 'Note Telegram', body: 'pensé à passer l\'aspirateur partout.' }],
  ideas: [],
  links: []
};

const emptyMessage = 'Rien à afficher pour le moment.';
const esc = value => { const node = document.createElement('div'); node.textContent = value; return node.innerHTML; };
const count = items => items.length;

function render() {
  document.getElementById('today').textContent = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date());
  document.getElementById('updated-at').textContent = `Contenu : ${hub.updatedAt}`;
  document.getElementById('todo-count').textContent = count(hub.tasks);
  document.getElementById('note-count').textContent = count(hub.notes);
  document.getElementById('idea-count').textContent = count(hub.ideas);
  document.getElementById('link-count').textContent = count(hub.links);

  document.getElementById('task-list').innerHTML = hub.tasks.length
    ? hub.tasks.map(task => `<li><span class="item-main"><span class="status-dot"></span><span>${esc(task)}</span></span></li>`).join('')
    : `<li class="empty">${emptyMessage}</li>`;
  document.getElementById('idea-list').innerHTML = hub.ideas.length
    ? hub.ideas.map(idea => `<li><span>${esc(idea)}</span></li>`).join('')
    : `<li class="empty">${emptyMessage}</li>`;
  document.getElementById('note-list').innerHTML = hub.notes.length
    ? hub.notes.map(note => `<article class="note"><strong>${esc(note.title)}</strong><p>${esc(note.body)}</p></article>`).join('')
    : `<p class="empty">${emptyMessage}</p>`;
  document.getElementById('link-list').innerHTML = hub.links.length
    ? hub.links.map(link => `<div class="link-row"><a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)}</a></div>`).join('')
    : `<p class="empty">${emptyMessage}</p>`;
}

document.getElementById('theme-toggle').addEventListener('click', () => document.body.classList.toggle('dark'));
render();
