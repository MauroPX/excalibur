import { notFound } from 'next/navigation'
import { CasePage } from '@/components/templates/CasePage'
import type { CasePageData } from '@/components/templates/CasePage'

// Static case data — replace with Strapi fetch when CMS is ready (Ola 8)
const CASES: Record<string, CasePageData> = {
  rappi: {
    slug: 'rappi',
    title: 'Rappi — Crecimiento ARR +$3.2M',
    description: 'Lideré la estrategia de monetización para el vertical de groceries en Colombia y México, generando $3.2M ARR incremental en 8 meses mediante growth loops y pricing dinámico.',
    tags: ['Crecimiento', 'Monetización', 'LatAm', 'Groceries'],
    metrics: [
      { value: '+$3.2M', label: 'ARR incremental' },
      { value: '8', label: 'meses' },
      { value: '+22%', label: 'conversión checkout' },
      { value: '2', label: 'países' },
    ],
    timeline: [
      { company: 'Rappi', role: 'Discovery & Research', period: 'Mes 1-2' },
      { company: 'Rappi', role: 'Pricing Strategy', period: 'Mes 2-3' },
      { company: 'Rappi', role: 'Growth Loops', period: 'Mes 3-6' },
      { company: 'Rappi', role: 'Scale & Optimize', period: 'Mes 6-8', isLast: true },
    ],
    techStack: [
      { skill: 'A/B Testing', level: 90, levelLabel: 'Experto' },
      { skill: 'SQL / Analytics', level: 85, levelLabel: 'Avanzado' },
      { skill: 'Python (análisis)', level: 72, levelLabel: 'Competente' },
      { skill: 'Amplitude', level: 80, levelLabel: 'Avanzado' },
    ],
    nextCase: { slug: 'bancolombia', title: 'Bancolombia — NPS +40pts' },
  },
  bancolombia: {
    slug: 'bancolombia',
    title: 'Bancolombia — NPS +40 puntos',
    description: 'Rediseñé el journey digital bancario del segmento PyME, mejorando NPS +40 puntos y reduciendo churn en 28% en 12 meses mediante investigación cualitativa y diseño centrado en usuario.',
    tags: ['Banca digital', 'UX Research', 'Retención', 'PyME'],
    metrics: [
      { value: '+40pts', label: 'NPS' },
      { value: '-28%', label: 'Churn' },
      { value: '12', label: 'meses' },
      { value: '200K', label: 'clientes PyME impactados' },
    ],
    timeline: [
      { company: 'Bancolombia', role: 'Research & Discovery', period: 'Mes 1-3' },
      { company: 'Bancolombia', role: 'Co-creación con usuarios', period: 'Mes 3-6' },
      { company: 'Bancolombia', role: 'MVP y testing', period: 'Mes 6-9' },
      { company: 'Bancolombia', role: 'Rollout y medición', period: 'Mes 9-12', isLast: true },
    ],
    techStack: [
      { skill: 'User Research', level: 92, levelLabel: 'Experto' },
      { skill: 'Figma / Prototyping', level: 85, levelLabel: 'Avanzado' },
      { skill: 'NPS / CSAT Analytics', level: 88, levelLabel: 'Avanzado' },
      { skill: 'Feature Flags', level: 75, levelLabel: 'Competente' },
    ],
    nextCase: { slug: 'frubana', title: 'Frubana — CAC -35%' },
  },
  frubana: {
    slug: 'frubana',
    title: 'Frubana — CAC -35%',
    description: 'Optimicé el funnel de adquisición B2B para el mercado de frutas y verduras en Colombia, reduciendo CAC en 35% mediante growth loops y automatización de onboarding.',
    tags: ['B2B', 'Growth', 'Agritech', 'Onboarding'],
    metrics: [
      { value: '-35%', label: 'CAC' },
      { value: '+48%', label: 'Activación onboarding' },
      { value: '6', label: 'meses' },
      { value: '3x', label: 'tasa de referidos' },
    ],
    timeline: [
      { company: 'Frubana', role: 'Funnel Audit', period: 'Mes 1' },
      { company: 'Frubana', role: 'Growth Loop Design', period: 'Mes 1-3' },
      { company: 'Frubana', role: 'Automatización onboarding', period: 'Mes 3-5' },
      { company: 'Frubana', role: 'Referral program', period: 'Mes 5-6', isLast: true },
    ],
    techStack: [
      { skill: 'Growth Hacking', level: 88, levelLabel: 'Avanzado' },
      { skill: 'Marketing Automation', level: 80, levelLabel: 'Avanzado' },
      { skill: 'Mixpanel', level: 82, levelLabel: 'Avanzado' },
      { skill: 'Intercom / CRM', level: 75, levelLabel: 'Competente' },
    ],
    nextCase: { slug: 'rappi', title: 'Rappi — ARR +$3.2M' },
  },
}

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }))
}

export default async function CasePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseData = CASES[slug]
  if (!caseData) notFound()
  return <CasePage caseData={caseData} />
}
