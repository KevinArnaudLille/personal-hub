/* Read-only content maintained by Hermes from Telegram requests. */
const hub = {
  updatedAt: 'Dernière mise à jour via Telegram',
  notes: [{ title: 'Note Telegram', body: 'pensé à passer l\'aspirateur partout.' }],
  sessions: [{
    id: 'S-20260908-001',
    title: 'Progressive disclosure',
    summary: 'Nous avons défini la divulgation progressive en UX et pour les agents conversationnels. Application retenue : garder une mémoire courte et durable, organiser les skills en couches (déclencheur, règle principale, procédure détaillée, références), afficher d’abord le résultat utile et ne révéler les détails techniques ou les conséquences sensibles que lorsque c’est nécessaire ou demandé.'
  }]
};

const emptyMessage = 'Rien à afficher pour le moment.';
const esc = value => { const node = document.createElement('div'); node.textContent = value; return node.innerHTML; };

function render() {
  document.getElementById('today').textContent = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date());
  document.getElementById('updated-at').textContent = `Contenu : ${hub.updatedAt}`;
  document.getElementById('note-count').textContent = hub.notes.length;
  document.getElementById('session-count').textContent = hub.sessions.length;
  document.getElementById('note-list').innerHTML = hub.notes.length
    ? hub.notes.map(note => `<article class="note"><strong>${esc(note.title)}</strong><p>${esc(note.body)}</p></article>`).join('')
    : `<p class="empty">${emptyMessage}</p>`;
  document.getElementById('session-list').innerHTML = hub.sessions.length
    ? hub.sessions.map(session => `<article class="session"><div class="session-meta"><code>${esc(session.id)}</code><span>Session</span></div><h3>${esc(session.title)}</h3><p>${esc(session.summary)}</p></article>`).join('')
    : `<p class="empty">${emptyMessage}</p>`;
}

document.getElementById('theme-toggle').addEventListener('click', () => document.body.classList.toggle('dark'));
render();
