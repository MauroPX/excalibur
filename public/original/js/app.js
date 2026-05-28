
/* TITAN MODULE_A11Y_ONBOARDING — Capa 1: OS inference (sin fricción) */
(function inferOS() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.setAttribute('data-a11y-motion', 'reduced');
    var b = document.getElementById('btn-motion');
    if (b) { b.classList.add('a11y-option--active'); b.setAttribute('aria-checked','true'); }
  }
  if (window.matchMedia('(prefers-contrast: more)').matches) {
    document.documentElement.setAttribute('data-a11y-contrast', 'high');
    var b2 = document.getElementById('btn-contrast');
    if (b2) { b2.classList.add('a11y-option--active'); b2.setAttribute('aria-checked','true'); }
  }
})();

/* TITAN MODULE_A11Y_ONBOARDING — Capa 2: toggles explícitos */
var a11yState = { contrast:false, dyslexic:false, textsize:false, focus:false, motion:false };

function toggleA11y(f) {
  a11yState[f] = !a11yState[f];
  var root = document.documentElement;
  var btn = document.getElementById('btn-' + f);
  var ann = document.getElementById('lang-announcer');
  var map = { contrast:'data-a11y-contrast', dyslexic:'data-a11y-font', textsize:'data-a11y-text-size', focus:'data-a11y-focus-mode', motion:'data-a11y-motion' };
  var vals = { contrast:'high', dyslexic:'dyslexic', textsize:'large', focus:'on', motion:'reduced' };
  var msgs = { en:{ contrast:['High contrast on','High contrast off'], dyslexic:['Dyslexia font on','Off'], textsize:['Large text on','Off'], focus:['Focus mode on','Off'], motion:['Reduced motion on','Off'] }, es:{ contrast:['Alto contraste activado','Desactivado'], dyslexic:['Fuente dislexia activada','Desactivada'], textsize:['Texto grande activado','Desactivado'], focus:['Modo enfoque activado','Desactivado'], motion:['Movimiento reducido activado','Desactivado'] } };
  if (a11yState[f]) { root.setAttribute(map[f], vals[f]); btn.classList.add('a11y-option--active'); btn.setAttribute('aria-checked','true'); }
  else { root.removeAttribute(map[f]); btn.classList.remove('a11y-option--active'); btn.setAttribute('aria-checked','false'); }
  var lang = root.getAttribute('data-lang') || 'en';
  if (ann) ann.textContent = msgs[lang][f][a11yState[f] ? 0 : 1];
  try { localStorage.setItem('a11y-' + f, a11yState[f]); } catch(e) {}
}

function toggleA11yMenu() {
  var panel = document.getElementById('a11yPanel');
  var trigger = document.getElementById('a11yTrigger');
  var open = panel.classList.contains('a11y-menu__panel--open');
  panel.classList.toggle('a11y-menu__panel--open', !open);
  trigger.setAttribute('aria-expanded', String(!open));
  if (!open) { var first = panel.querySelector('.a11y-option'); if (first) first.focus(); }
}

document.addEventListener('click', function(e) {
  var m = document.getElementById('a11yMenu');
  if (m && !m.contains(e.target)) {
    document.getElementById('a11yPanel').classList.remove('a11y-menu__panel--open');
    document.getElementById('a11yTrigger').setAttribute('aria-expanded','false');
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('a11yPanel').classList.remove('a11y-menu__panel--open');
    document.getElementById('a11yTrigger').setAttribute('aria-expanded','false');
    document.getElementById('a11yTrigger').focus();
  }
});

/* BILINGUAL ENGINE */
function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(function(el) {
    var v = el.getAttribute('data-' + lang);
    if (v) el.textContent = v;
  });
  var en = document.getElementById('btn-en'), es = document.getElementById('btn-es');
  en.classList.toggle('lang-btn', true);
  en.classList.toggle('active', lang === 'en');
  es.classList.toggle('active', lang === 'es');
  en.setAttribute('aria-pressed', String(lang === 'en'));
  es.setAttribute('aria-pressed', String(lang === 'es'));
  document.title = lang === 'es'
    ? 'Mauricio Gómez — Staff Product Architect y Staff Product Architect | Remoto USD'
    : 'Mauricio Gómez — Staff Product Architect | Remote USD';
  var ann = document.getElementById('lang-announcer');
  if (ann) { ann.textContent = lang === 'en' ? 'Language changed to English' : 'Idioma cambiado a español'; setTimeout(function(){ ann.textContent = ''; }, 2000); }
  try { localStorage.setItem('portfolio-lang', lang); } catch(e) {}
}

/* SCROLL REVEAL — WCAG 2.3.3 */
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced) {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function(){ entry.target.classList.add('visible'); }, i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('visible'); });
}

/* NAV active state */
window.addEventListener('scroll', function() {
  var cur = '';
  document.querySelectorAll('section[id]').forEach(function(s){
    if (window.scrollY >= s.offsetTop - 130) cur = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var active = a.getAttribute('href') === '#' + cur;
    a.style.color = active ? 'var(--color-white)' : '';
    a.setAttribute('aria-current', active ? 'page' : 'false');
  });
}, { passive: true });

/* INIT — restore Capa 3 preferences */
(function init() {
  try {
    var lang = localStorage.getItem('portfolio-lang') || 'en';
    if (lang === 'es') setLang('es');
    ['contrast','dyslexic','textsize','focus','motion'].forEach(function(f){
      if (localStorage.getItem('a11y-' + f) === 'true') toggleA11y(f);
    });
  } catch(e) {}
})();

/* ════════════════════════════════════════════════
   Contact Modal — WCAG 2.1.1 keyboard, focus trap
════════════════════════════════════════════════ */
var _lastFocus = null;

function openContact() {
  var modal = document.getElementById('contactModal');
  _lastFocus = document.activeElement;
  modal.classList.add('contact-modal--open');
  document.body.style.overflow = 'hidden';
  // Focus first interactive element
  setTimeout(function() {
    var first = modal.querySelector('a, button:not(.contact-modal__close)');
    if (first) first.focus();
  }, 50);
  // Update lang texts
  var lang = document.documentElement.getAttribute('data-lang') || 'en';
  modal.querySelectorAll('[data-' + lang + ']').forEach(function(el) {
    el.textContent = el.getAttribute('data-' + lang);
  });
  // Announce (WCAG 4.1.3)
  var ann = document.getElementById('lang-announcer');
  if (ann) ann.textContent = lang === 'es' ? 'Formulario de contacto abierto' : 'Contact dialog opened';
}

function closeContact() {
  var modal = document.getElementById('contactModal');
  modal.classList.remove('contact-modal--open');
  document.body.style.overflow = '';
  if (_lastFocus) _lastFocus.focus();
  var ann = document.getElementById('lang-announcer');
  if (ann) { ann.textContent = ''; }
}

/* ════════════════════════════════════════════════
   CONTACT PRIVACY LOGIC (WhatsApp Obfuscation)
════════════════════════════════════════════════ */
function openWhatsApp(e) {
  e.preventDefault();
  // Numbers split to prevent easy bot scraping
  const p1 = '57317';
  const p2 = '614';
  const p3 = '4465';
  const msg = 'Hi Mauricio, I saw your portfolio and would like to connect.';
  
  const fullURL = `https://wa.me/${p1}${p2}${p3}?text=${encodeURIComponent(msg)}`;
  window.open(fullURL, '_blank', 'noopener,noreferrer');
}

// Keyboard trap inside modal (WCAG 2.1.1)
document.addEventListener('keydown', function(e) {
  var modal = document.getElementById('contactModal');
  if (!modal.classList.contains('contact-modal--open')) return;
  if (e.key === 'Escape') { closeContact(); return; }
  if (e.key === 'Tab') {
    var focusable = modal.querySelectorAll('a[href], button:not([disabled])');
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
/* ════════════════════════════════════════════════
   TITAN LAYERS ROUTING
════════════════════════════════════════════════ */
function navigateTo(viewId) {
  // Hide all layers
  document.querySelectorAll('.titan-layer').forEach(l => {
    l.classList.remove('titan-layer--active');
  });

  // Show target layer
  const target = document.getElementById('layer-' + viewId);
  if (target) {
    target.classList.add('titan-layer--active');
    window.scrollTo(0, 0); // Reset scroll position
  }

  // Accessibility: Move focus to the new view
  if (viewId !== 'home') {
    setTimeout(() => target.focus(), 100);
  }
}

/* ════════════════════════════════════════════════
   TITAN CODE-VIEW LOGIC (ATOMIC PRO)
...
════════════════════════════════════════════════ */
let codeViewActive = false;

function toggleCodeView() {
  const root = document.documentElement;
  const btn = document.getElementById('codeview-btn');
  codeViewActive = !codeViewActive;
  
  if (codeViewActive) {
    root.setAttribute('data-codeview', 'active');
    btn.setAttribute('aria-pressed', 'true');
    document.addEventListener('click', captureCode, true);
    document.addEventListener('focusin', captureFocus, true);
    console.log("TITAN Inspector Pro: Active. Click or Tab through components.");
  } else {
    closeCodeView();
  }
}

function captureFocus(e) {
  if (!codeViewActive) return;
  const target = e.target.closest('[data-atomic]');
  if (target) updateCodeDisplay(target);
}

function captureCode(e) {
  if (!codeViewActive) return;
  const target = e.target.closest('[data-atomic]');
  if (target) {
    e.preventDefault();
    e.stopPropagation();
    updateCodeDisplay(target);
  }
}

function updateCodeDisplay(target) {
  const modal = document.getElementById('codeModal');
  const display = document.getElementById('codeDisplay');
  const level = target.getAttribute('data-atomic') || 'unknown';
  
  // Highlighting logic
  let html = target.outerHTML;
  // Basic Indentation & Escape
  html = html.replace(/></g, '>\n<')
             .replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;');

  // Semantic Coloring
  html = html.replace(/(&lt;\/?[a-z1-6]+)/gi, '<span class="code-tag">$1</span>')
             .replace(/([a-z-]+)=/gi, '<span class="code-attr">$1</span>=')
             .replace(/"([^"]+)"/g, '"<span class="code-val">$1</span>"');

  display.innerHTML = html;
  display.parentElement.setAttribute('data-level', level);
  modal.classList.add('code-modal--open');
}

function closeCodeView() {
  const root = document.documentElement;
  const btn = document.getElementById('codeview-btn');
  const modal = document.getElementById('codeModal');
  
  codeViewActive = false;
  root.removeAttribute('data-codeview');
  btn.setAttribute('aria-pressed', 'false');
  modal.classList.remove('code-modal--open');
  document.removeEventListener('click', captureCode, true);
  document.removeEventListener('focusin', captureFocus, true);
}

/* ════════════════════════════════════════════════
   TITAN PDF VIEWER LOGIC
════════════════════════════════════════════════ */
function openPDF(url) {
  const modal = document.getElementById('pdfModal');
  const frame = document.getElementById('pdfFrame');
  const watermark = document.getElementById('pdfWatermark');
  
  // Generate dynamic watermark grid
  watermark.innerHTML = '<span>[MauroGOOC] CONFIDENTIAL</span>'.repeat(16);
  
  frame.src = url;
  modal.classList.add('pdf-modal--open');
  document.body.style.overflow = 'hidden';
  
  // Anti-screenshot: Blur on focus loss
  window.onblur = () => modal.classList.add('pdf-modal--blurred');
  window.onfocus = () => modal.classList.remove('pdf-modal--blurred');
  
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const ann = document.getElementById('lang-announcer');
  if (ann) ann.textContent = lang === 'es' ? 'Visor seguro abierto' : 'Secure viewer opened';
}

function closePDF() {
  const modal = document.getElementById('pdfModal');
  const frame = document.getElementById('pdfFrame');
  
  modal.classList.remove('pdf-modal--open', 'pdf-modal--blurred');
  window.onblur = null;
  window.onfocus = null;
  frame.src = '';
  document.body.style.overflow = '';
}

/* TITAN EVIDENCE EXPLORER LOGIC */
let projectData = [];

async function loadEvidence() {
  try {
    const response = await fetch('data/evidence.json');
    projectData = await response.json();
    renderGrid(projectData);
  } catch (error) {
    console.error('Error loading evidence:', error);
  }
}

function renderGrid(data) {
  const grid = document.getElementById('evidence-grid');
  if (!grid) return;
  
  grid.innerHTML = data.map(p => `
    <article class="evidence-card" onclick="openDossier('${p.id}')">
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
document.addEventListener('DOMContentLoaded', () => {
  loadEvidence();
});


/* TITAN EVIDENCE EXPLORER LOGIC */
let projectData = [];

async function loadEvidence() {
  const grid = document.getElementById('evidence-grid');
  if (!grid) return;
  
  try {
    const response = await fetch('data/evidence.json');
    if (!response.ok) throw new Error('Network response was not ok');
    projectData = await response.json();
    renderGrid(projectData);
  } catch (error) {
    grid.innerHTML = '<p style="color: var(--color-accent-light); padding: 20px; font-size: 14px; opacity: 0.6;">Interactive explorer requires a local server or Netlify deployment to bypass CORS. <br><br>Evidence data is safe and ready for deployment.</p>';
    console.warn('Explorer notice: Local file access (CORS) blocked JSON fetch. This is normal in local browsers. Deploy to Netlify to see it in action.');
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

// Global hook for initial load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadEvidence);
} else {
  loadEvidence();
}

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

/* TITAN INTERACTIVE EXPLORER (STABLE SEPARATE LAYER) */
function filterEvidenceNew() {
  const sector = document.getElementById('filter-sector-new').value;
  const filtered = sector === 'all' ? projectData : projectData.filter(p => p.sector === sector);
  const grid = document.getElementById('evidence-grid-new');
  if (grid) {
    grid.innerHTML = filtered.map(p => `
      <article class="evidence-card" onclick="openDossier('${p.id}')">
        <div class="evidence-card__header">
          <span class="evidence-year">${p.year}</span>
          <span class="evidence-sector">${p.sector}</span>
        </div>
        <h3 class="evidence-title">${p.project}</h3>
        <p class="evidence-impact">${p.impact}</p>
      </article>
    `).join('');
  }
}

// Re-map the grid initialization to the new section
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (typeof projectData !== 'undefined' && projectData.length > 0) {
      filterEvidenceNew();
    }
  }, 500);
});
