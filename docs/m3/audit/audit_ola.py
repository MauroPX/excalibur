#!/usr/bin/env python3
"""
EXCALIBUR v2.0 — Audit Global por Ola
TITAN v7.0 | M3 | Ejecutar al cerrar cada ola

Uso:
  python3 docs/m3/audit/audit_ola.py 0   # audit Ola 0
  python3 docs/m3/audit/audit_ola.py 1   # audit Ola 1
  python3 docs/m3/audit/audit_ola.py 2   # audit Ola 2
  python3 docs/m3/audit/audit_ola.py 3   # audit Ola 3
  python3 docs/m3/audit/audit_ola.py all # audit completo M3

Verifica: encadenamiento de SPEC_IDs, COMPONENT_REGISTRY, TRACEABILITY
"""

import sys
import os
import json
from datetime import date

OLA_SPECS = {
    "0": [
        ("EX-v2-INFRA-001", "Setup", "infra"),
        ("EX-v2-THEME-001", "Theme", "infra"),
        ("EX-v2-I18N-001", "I18N", "infra"),
        ("EX-v2-CMS-001", "CMS", "infra"),
    ],
    "1": [
        ("EX-v2-ATOM-001", "Button", "atoms"),
        ("EX-v2-ATOM-002", "Tag", "atoms"),
        ("EX-v2-ATOM-003", "Badge", "atoms"),
        ("EX-v2-ATOM-004", "Metric", "atoms"),
        ("EX-v2-ATOM-005", "Icon", "atoms"),
        ("EX-v2-MOL-001", "NavTab", "molecules"),
        ("EX-v2-MOL-002", "ProjectCard", "molecules"),
        ("EX-v2-MOL-003", "SkillBar", "molecules"),
        ("EX-v2-MOL-004", "TimelineStep", "molecules"),
        ("EX-v2-MOL-005", "MetricRow", "molecules"),
    ],
    "2": [
        ("EX-v2-HERO-001", "Hero", "organisms"),
        ("EX-v2-NAV-001", "NavBySymptom", "organisms"),
        ("EX-v2-NAV-002", "NavByRole", "organisms"),
        ("EX-v2-NAV-003", "NavAI", "organisms"),
        ("EX-v2-NAV-004", "NavExplore", "organisms"),
        ("EX-v2-CASE-001", "CaseStudy", "organisms"),
        ("EX-v2-CASE-002", "CasePage", "templates"),
        ("EX-v2-CASE-003", "CasesGrid", "organisms"),
        ("EX-v2-TITAN-001", "TitanHero", "organisms"),
        ("EX-v2-TITAN-002", "TitanFeatures", "organisms"),
        ("EX-v2-TITAN-003", "MomentumBPM", "organisms"),
        ("EX-v2-STACK-001", "CapabilityRadar", "organisms"),
        ("EX-v2-STACK-002", "LayerMap", "organisms"),
        ("EX-v2-STACK-003", "StackGrid", "organisms"),
        ("EX-v2-CONTACT-001", "Contact", "organisms"),
    ],
    "3": [
        ("EX-v2-A11Y-001", "InquisitorHUD", "organisms"),
        ("EX-v2-RAG-001", "TitanRAGAgent", "organisms"),
        ("EX-v2-CICD-001", "CICD", "infra"),
    ]
}

def audit_ola(ola_num):
    specs = OLA_SPECS.get(str(ola_num), [])
    if not specs:
        print(f"Ola {ola_num} no reconocida")
        return None
    
    trace_path = "docs/m2/spec/TRACEABILITY_MATRIX.md"
    registry_path = "docs/m3/certificates/COMPONENT_REGISTRY.json"
    
    results = {
        "ola": str(ola_num),
        "fecha": str(date.today()),
        "total_specs": len(specs),
        "locked": 0,
        "gaps": [],
        "tabla": []
    }
    
    with open(trace_path) as f:
        trace = f.read()
    
    registry = {}
    if os.path.exists(registry_path):
        with open(registry_path) as f:
            registry = json.load(f)
    
    for spec_id, component, level in specs:
        locked_in_trace = spec_id in trace and "LOCKED" in trace[trace.find(spec_id):trace.find(spec_id)+200]
        cert_exists = os.path.exists(f"src/components/{level}/{component}/VERSION_CERTIFICATE.json")
        in_registry = component in str(registry)
        
        status = "LOCKED" if (locked_in_trace and cert_exists) else "PENDIENTE"
        if status == "LOCKED":
            results["locked"] += 1
        else:
            gap = f"{spec_id} ({component}): "
            if not locked_in_trace: gap += "no LOCKED en TRACEABILITY "
            if not cert_exists: gap += "sin VERSION_CERTIFICATE "
            if not in_registry: gap += "no en COMPONENT_REGISTRY"
            results["gaps"].append(gap)
        
        results["tabla"].append({
            "spec_id": spec_id,
            "component": component,
            "level": level,
            "traceability": "LOCKED" if locked_in_trace else "PENDIENTE",
            "certificate": "SI" if cert_exists else "NO",
            "registry": "SI" if in_registry else "NO",
            "status": status
        })
    
    pct = int(results["locked"] / results["total_specs"] * 100)
    results["porcentaje"] = pct
    results["veredicto"] = f"OLA {ola_num} SELLADA" if pct == 100 else f"OLA {ola_num} INCOMPLETA ({pct}%)"
    
    return results

def main():
    ola = sys.argv[1] if len(sys.argv) > 1 else "all"
    
    if ola == "all":
        olas = ["0", "1", "2", "3"]
    else:
        olas = [ola]
    
    all_results = []
    for o in olas:
        print(f"\n=== AUDIT OLA {o} ===")
        results = audit_ola(o)
        if not results:
            continue
        all_results.append(results)
        
        # Tabla
        for row in results["tabla"]:
            icon = "✅" if row["status"] == "LOCKED" else "❌"
            print(f"  {icon} {row['spec_id']} | {row['component']} | {row['status']}")
        
        print(f"\n  RESULTADO: {results['locked']}/{results['total_specs']} LOCKED")
        print(f"  VEREDICTO: {results['veredicto']}")
        
        if results["gaps"]:
            print("\n  GAPS:")
            for gap in results["gaps"]:
                print(f"    ❌ {gap}")
    
    # Guardar reporte
    os.makedirs("docs/m3/audit", exist_ok=True)
    report_path = f"docs/m3/audit/OLA_{ola.upper()}_AUDIT_{date.today().strftime('%Y%m%d')}.json"
    with open(report_path, "w") as f:
        json.dump(all_results if len(all_results) > 1 else all_results[0], f, indent=2, ensure_ascii=False)
    print(f"\nReporte guardado en: {report_path}")

if __name__ == "__main__":
    main()
