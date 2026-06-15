#!/usr/bin/env python3
"""
EXCALIBUR v2.0 — Audit Individual post-LOCK
TITAN v7.0 | M3 | Ejecutar despues de cada LOCK

Uso:
  python3 docs/m3/audit/audit_individual.py EX-v2-ATOM-001 Button atoms

Verifica el encadenamiento:
  VERSION_CERTIFICATE.json <-> codigo real <-> TRACEABILITY_MATRIX <-> COMPONENT_REGISTRY
"""

import sys
import os
import json
from datetime import date

def audit_individual(spec_id, component_name, level):
    """Audit de un componente individual post-LOCK."""
    
    results = {
        "spec_id": spec_id,
        "component": component_name,
        "level": level,
        "audit_date": str(date.today()),
        "checks": [],
        "gaps": [],
        "verdict": "PENDING"
    }
    
    def check(name, condition, evidence, severity="ERROR"):
        status = "PASS" if condition else "FAIL"
        results["checks"].append({
            "name": name,
            "status": status,
            "evidence": evidence,
            "severity": severity
        })
        if not condition:
            results["gaps"].append(f"{severity}: {name}")
        return condition
    
    # Paths
    comp_path = f"src/components/{level}/{component_name}"
    cert_path = f"{comp_path}/VERSION_CERTIFICATE.json"
    trace_path = "docs/m2/spec/TRACEABILITY_MATRIX.md"
    registry_path = "docs/m3/certificates/COMPONENT_REGISTRY.json"
    
    # Check 1: VERSION_CERTIFICATE existe
    cert_exists = os.path.exists(cert_path)
    check("VERSION_CERTIFICATE.json existe", cert_exists, cert_path)
    
    if cert_exists:
        with open(cert_path) as f:
            cert = json.load(f)
        
        # Check 2: spec_id correcto
        check("spec_id en certificado es correcto",
              cert.get("spec_id") == spec_id,
              f"Declarado: {cert.get('spec_id')} | Esperado: {spec_id}")
        
        # Check 3: status LOCKED
        check("status es LOCKED",
              cert.get("status") == "LOCKED",
              f"Status: {cert.get('status')}")
        
        # Check 4: axe_violations = 0
        check("axe_violations es 0",
              cert.get("axe_violations") == 0,
              f"Violations: {cert.get('axe_violations')}")
        
        # Check 5: tests_passing = true
        check("tests_passing es true",
              cert.get("tests_passing") == True,
              f"Tests: {cert.get('tests_passing')}")
        
        # Check 6: coverage existe y es un string con valor
        coverage = cert.get("coverage", "")
        check("coverage declarado (no vacio)",
              bool(coverage) and coverage != "TODO",
              f"Coverage: {coverage}")
        
        # Check 7: wcag_criteria no vacio
        wcag = cert.get("wcag_criteria", [])
        check("wcag_criteria declarados",
              len(wcag) > 0,
              f"WCAG: {wcag}")
        
        # Check 8: LH-1 — VERSION_CERTIFICATE no afirma mas que el codigo
        comp_file = f"{comp_path}/{component_name}.tsx"
        comp_exists = os.path.exists(comp_file)
        check("LH-1: componente .tsx existe",
              comp_exists,
              comp_file)
        
        # Check 9: LH-2 — codigo implementa los wcag declarados (manual)
        results["checks"].append({
            "name": "LH-2: wcag_criteria verificados en codigo (revision manual)",
            "status": "MANUAL",
            "evidence": f"Abrir {comp_file} y verificar que {wcag} estan implementados",
            "severity": "WARNING"
        })
        
        # Check 10: tests existen
        test_file = f"{comp_path}/{component_name}.test.tsx"
        check("Test file existe",
              os.path.exists(test_file),
              test_file)
        
        # Check 11: stories existen
        story_file = f"{comp_path}/{component_name}.stories.tsx"
        check("Stories file existe",
              os.path.exists(story_file),
              story_file)
        
        # Check 12: barrel export existe
        index_file = f"{comp_path}/index.ts"
        check("Barrel export (index.ts) existe",
              os.path.exists(index_file),
              index_file)
    
    # Check TRACEABILITY
    if os.path.exists(trace_path):
        with open(trace_path) as f:
            trace_content = f.read()
        check("TRACEABILITY_MATRIX muestra LOCKED",
              f"{spec_id}" in trace_content and "LOCKED" in trace_content,
              f"Buscar {spec_id} en {trace_path}")
    
    # Check COMPONENT_REGISTRY
    if os.path.exists(registry_path):
        with open(registry_path) as f:
            registry = json.load(f)
        check("Componente en COMPONENT_REGISTRY",
              component_name in str(registry),
              f"Buscar {component_name} en {registry_path}")
    
    # Veredicto
    fails = [c for c in results["checks"] if c["status"] == "FAIL"]
    manuals = [c for c in results["checks"] if c["status"] == "MANUAL"]
    
    if len(fails) == 0 and len(manuals) == 0:
        results["verdict"] = "PASS — LOCK CERTIFICADO"
    elif len(fails) == 0:
        results["verdict"] = f"PASS CON REVISION MANUAL — {len(manuals)} items requieren verificacion manual"
    else:
        results["verdict"] = f"FAIL — {len(fails)} gaps criticos"
    
    return results

def main():
    if len(sys.argv) < 4:
        print("Uso: python3 audit_individual.py SPEC_ID ComponentName nivel")
        print("Ej:  python3 audit_individual.py EX-v2-ATOM-001 Button atoms")
        sys.exit(1)
    
    spec_id = sys.argv[1]
    component = sys.argv[2]
    level = sys.argv[3]
    
    print(f"\n=== AUDIT INDIVIDUAL: {spec_id} — {component} ===")
    results = audit_individual(spec_id, component, level)
    
    # Mostrar resultados
    passes = sum(1 for c in results["checks"] if c["status"] == "PASS")
    fails = sum(1 for c in results["checks"] if c["status"] == "FAIL")
    manuals = sum(1 for c in results["checks"] if c["status"] == "MANUAL")
    total = len(results["checks"])
    
    print(f"\nResultados: {passes} PASS | {fails} FAIL | {manuals} MANUAL REVIEW")
    for c in results["checks"]:
        icon = "✅" if c["status"] == "PASS" else ("⚠️" if c["status"] == "MANUAL" else "❌")
        print(f"  {icon} {c["name"]}")
        if c["status"] != "PASS":
            print(f"     → {c["evidence"]}")
    
    print(f"\nVEREDICTO: {results["verdict"]}")
    
    # Guardar reporte
    os.makedirs("docs/m3/audit", exist_ok=True)
    report_path = f"docs/m3/audit/AUDIT_{spec_id}_{date.today().strftime("%Y%m%d")}.json"
    with open(report_path, "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\nReporte guardado en: {report_path}")
    
    # Exit code
    sys.exit(0 if fails == 0 else 1)

if __name__ == "__main__":
    main()
