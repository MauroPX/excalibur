
const fs = require('fs');
const path = require('path');

const SRC_FILE = path.join(__dirname, '../public/original/index.html');
const DEST_FILE = path.join(__dirname, '../public/original/index_clean.html');
const DNA_FILE = path.join(__dirname, '../src/data/evidence-dna.json');

function runMasterBuild() {
  console.log('--- STARTING MASTER BUILD v91.0 (PAR METHOD) ---');

  if (!fs.existsSync(SRC_FILE)) {
    console.error('ERROR: Source index.html not found.');
    return;
  }

  let html = fs.readFileSync(SRC_FILE, 'utf8');

  // 1. APPLE GLASS ICONS
  const icons = {
    '⚙️': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    '🔐': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    '★': '<svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
  };
  for (const [emoji, svg] of Object.entries(icons)) { html = html.split(emoji).join(svg); }

  // 2. ABSOLUTE FONT PURGE & ROBOTO FLEX LOCKDOWN
  html = html.replace(/<link[^>]*fonts\.googleapis\.com[^>]*family=Syne.*?["']/gi, '<!-- PURGED SYNE -->');
  html = html.replace(/<link[^>]*fonts\.googleapis\.com[^>]*family=DM\+Sans.*?["']/gi, '<!-- PURGED DM SANS -->');
  
  const styleLock = "<style id='titan-font-unity'>" +
    "@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap');" +
    ":root { --font-display: 'Roboto Flex', sans-serif !important; --font-body: 'Roboto Flex', sans-serif !important; }" +
    "* { font-family: 'Roboto Flex', sans-serif !important; }" +
    "h1, h2, h3, h4, h5, h6, .nav-logo, .hero-name, .doc-title, .doc-chapter-title, .timeline-chapter-label {" +
    " font-weight: 1000 !important; font-variation-settings: 'wght' 1000, 'wdth' 120, 'opsz' 48 !important; letter-spacing: -0.02em !important; }" +
    "body, p, li, span, div, td, th { font-variation-settings: 'wght' 400, 'wdth' 100, 'opsz' 14 !important; line-height: 1.45 !important; }" +
    ".doc-timeline { position: relative; width: 100%; margin: 32px 0; padding-left: 40px; border-left: 2px solid rgba(68,138,255,0.3); box-sizing: border-box; }" +
    ".timeline-item article { background: rgba(255,255,255,0.02); padding: 24px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(10px); width: 100% !important; box-sizing: border-box; margin-bottom: 30px; }" +
    ".par-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin: 16px 0; border-left: 1.5px solid rgba(96,165,250,0.2); padding-left: 16px; }" +
    ".par-label { font-size: 9px; font-weight: 900; color: #60a5fa; text-transform: uppercase; opacity: 0.6; letter-spacing: 1px; }" +
    ".par-value { font-size: 13.5px; color: #e2e8f0; line-height: 1.4; display: block; }" +
    ".tag-box { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }" +
    ".tag-skill { font-size: 10px; font-weight: 800; color: #4ade80; background: rgba(74,222,128,0.1); padding: 4px 8px; border-radius: 4px; }" +
    ".tag-method { font-size: 10px; font-weight: 800; color: #fbbf24; background: rgba(251,191,36,0.1); padding: 4px 8px; border-radius: 4px; }" +
    "</style>";
  html = html.replace('</head>', styleLock + '</head>');

  // 3. SSOT TOTAL ERASURE & REBUILD (PAR METHOD)
  if (fs.existsSync(DNA_FILE)) {
    const dna = JSON.parse(fs.readFileSync(DNA_FILE, 'utf8'));
    const sectors = [...new Set(dna.map(p => p.sector))];
    let timelineHtml = '<div class="doc-timeline">';
    sectors.forEach((sector, idx) => {
      timelineHtml += "<div class='timeline-chapter'><span style='background:#1E4ED8;color:white;padding:8px 24px;border-radius:50px;font-size:11px;font-weight:900;text-transform:uppercase;margin-bottom:32px;display:inline-block'>Capítulo " + (idx + 1) + ": " + sector + "</span>";
      dna.filter(p => p.sector === sector).forEach(p => {
        timelineHtml += " \
          <div class='timeline-item' style='position:relative; padding-left:40px; margin-bottom:40px; border-left:2px solid rgba(255,255,255,0.1)'> \
            <div style='position:absolute; left:-47px; top:0; width:12px; height:12px; border-radius:50%; background:#1E4ED8; border:2px solid #fff'></div> \
            <article> \
              <h3 style='color:white; margin:0 0 4px 0; font-size:20px'>" + p.client + " <span style='opacity:0.4; font-size:13px; font-weight:300;'>(" + p.year + ")</span></h3> \
              <p style='font-size:13px; opacity:0.6; font-style:italic; margin-bottom:12px;'>" + p.context + "</p> \
              <div class='par-grid'> \
                <div class='par-item'><span class='par-label'>[P] Problema</span><span class='par-value'>" + p.par.problem + "</span></div> \
                <div class='par-item'><span class='par-label'>[A] Acción</span><span class='par-value'>" + p.par.action + "</span></div> \
                <div class='par-item'><span class='par-label'>[R] Resultado</span><span class='par-value'>" + p.par.result + "</span></div> \
              </div> \
              <div class='tag-box'> \
                " + p.skills.map(s => "<span class='tag-skill'>" + s + "</span>").join('') + " \
                " + p.methodologies.map(m => "<span class='tag-method'>" + m + "</span>").join('') + " \
              </div> \
            </article> \
          </div>";
      });
      timelineHtml += '</div>';
    });
    timelineHtml += '</div>';

    const ssotMarker = 'id="layer-ssot"';
    const sStart = html.indexOf(ssotMarker);
    const sEnd = html.indexOf('</div><!-- end #layer-ssot -->');
    if (sStart !== -1 && sEnd !== -1) {
       const header = "<nav class='doc-navbar'><button onclick='navigateTo(\"home\")' class='btn-back'>← Regresar al Portafolio</button></nav><div class='doc-container'><header class='doc-header'><h1 class='doc-title'>Mauricio Gómez</h1><div class='doc-subtitle'>TITAN_SSOT_v5.0 — MASTER TECHNICAL FILE</div><p style='margin-top:20px;font-size:14px;opacity:0.7'>Evidencia técnica bajo método PAR (Problema, Acción, Resultado).</p></header>";
       const openTagEnd = html.indexOf('>', sStart) + 1;
       html = html.substring(0, openTagEnd) + header + timelineHtml + "</div>" + html.substring(sEnd);
    }
  }

  html = html.replace(/href=\"css\//g, 'href="/original/css/').replace(/src=\"js\//g, 'src="/original/js/');
  fs.writeFileSync(DEST_FILE, html);
  console.log('--- MASTER BUILD v91.0 COMPLETE ---');
}
runMasterBuild();
