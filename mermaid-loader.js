import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'default' });

async function renderMermaidFromFiles() {
  const hosts = Array.from(document.querySelectorAll('[data-mermaid-src]'));
  await Promise.all(hosts.map(async host => {
    const sourcePath = host.getAttribute('data-mermaid-src');
    if (!sourcePath) return;
    try {
      const response = await fetch(sourcePath);
      if (!response.ok) throw new Error(`Impossible de charger ${sourcePath}`);
      const diagram = document.createElement('div');
      diagram.className = 'mermaid';
      diagram.textContent = (await response.text()).trim();
      host.replaceChildren(diagram);
    } catch (error) {
      host.replaceChildren(Object.assign(document.createElement('p'), {
        className: 'diagram-error',
        textContent: error instanceof Error ? error.message : 'Erreur de chargement du diagramme'
      }));
    }
  }));
  const diagrams = document.querySelectorAll('.mermaid');
  if (diagrams.length) await mermaid.run({ nodes: diagrams });
}

renderMermaidFromFiles();
