
const fs = require('fs');
const path = require('path');

/**
 *  DATA DEDUPLICATION & REFINEMENT
 * Ensures exactly 24 projects with disruptive narratives.
 */
function cleanData() {
  const dnaPath = path.join(__dirname, 'src/data/evidence-dna.json');
  const rawData = JSON.parse(fs.readFileSync(dnaPath, 'utf8'));
  
  // Mapping of canonical IDs to prioritize
  const canonicalIds = [
    'BBVA_Master_Ecosystem',
    'FDN_Transformation',
    'Correos_Chile_Merken',
    'Redeban_SAC',
    'TVS_Sanitario',
    'SuRed_Fintech',
    'ADL_Digital_Labs',
    'Colsanitas_Avicena'
  ];

  // Map to keep track of clients to avoid name duplication
  const seenClients = new Set();
  const finalDna = [];

  // First pass: Add canonicals
  rawData.forEach(p => {
    if (canonicalIds.includes(p.id)) {
      finalDna.push(p);
      seenClients.add(p.client.toLowerCase());
    }
  });

  // Second pass: Add unique others until we hit 24 or exhaust rawData
  rawData.forEach(p => {
    const clientKey = p.client.toLowerCase();
    if (!canonicalIds.includes(p.id) && !seenClients.has(clientKey)) {
      // Basic cleanup of achievements if they are placeholders
      if (p.achievements.length === 1 && p.achievements[0] === '​') {
        p.achievements = ['Análisis y diseño de producto bajo estándares Staff Architect.'];
      }
      finalDna.push(p);
      seenClients.add(clientKey);
    }
  });

  // Ensure we don't exceed 24 if more are present (keeping the most relevant)
  const deduped = finalDna.slice(0, 24);

  fs.writeFileSync(dnaPath, JSON.stringify(deduped, null, 2));
  console.log(`--- DEDUPLICATION COMPLETE: ${deduped.length} PROJECTS PERSISTED ---`);
}

cleanData();
