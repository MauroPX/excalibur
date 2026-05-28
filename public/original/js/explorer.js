
/* TITAN EVIDENCE EXPLORER LOGIC */
let projectData = [];

async function loadEvidence() {
  const grid = document.getElementById('evidence-grid');
  if (!grid) return;
  
  try {
    const response = await fetch('data/evidence.json');
    projectData = await response.json();
    renderGrid(projectData);
  } catch (error) {
    grid.innerHTML = '<p style="color: var(--color-accent-light); padding: 20px;">Auditing evidence... Please wait.</p>';
    console.error('Error loading evidence:', error);
  }
}

function renderGrid(data) {
  const grid = document.getElementById('evidence-grid');
  if (!grid) return;
  
  grid.innerHTML = data.map(p => `
    <article class="evidence-card" onclick="openDossier('${p.id}')" data-atomic="molecule">
      <div class="evidence-card__header">
        <span class="evidence-year">${p.year}</span>
        <span class="evidence-sector">${p.sector}</span>
      </div>
      <h3 class="evidence-title">${p.project}</h3>
      <p class="evidence-impact">${p.impact}</p>
      <div class="evidence-tech-pills">
        ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function filterEvidence() {
  const sector = document.getElementById('filter-sector').value;
  const filtered = sector === 'all' ? projectData : projectData.filter(p => p.sector === sector);
  renderGrid(filtered);
}

function openDossier(id) {
  const p = projectData.find(item => item.id === id);
  if (!p) return;
  
  const body = document.getElementById('dossier-body');
  const modal = document.getElementById('dossierModal');
  
  body.innerHTML = `
    <header class="dossier-header">
      <span class="dossier-sector-tag">${p.sector}</span>
      <h2 class="dossier-title">${p.project} <span class="dossier-year">(${p.year})</span></h2>
    </header>
    <div class="dossier-content">
      <section class="dossier-section">
        <h4>Contexto & Arquitectura</h4>
        <p>${p.details.context}</p>
      </section>
      <section class="dossier-section">
        <h4>Logros Clave</h4>
        <ul>
          ${p.details.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </section>
      <div class="dossier-footer">
        <div class="dossier-metric">
          <span class="metric-label">Impacto de Negocio:</span>
          <span class="metric-value">${p.details.metrics}</span>
        </div>
        <div class="dossier-method">
          <span class="method-label">Metodología:</span>
          <span class="method-pills">${p.methodology}</span>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('dossier-modal--open');
  document.body.style.overflow = 'hidden';
}

function closeDossier() {
  document.getElementById('dossierModal').classList.remove('dossier-modal--open');
  document.body.style.overflow = '';
}

// Initial Load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadEvidence);
} else {
  loadEvidence();
}
