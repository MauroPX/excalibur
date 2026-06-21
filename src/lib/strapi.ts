import type { StrapiListResponse, StrapiResponse, CaseStudy, TitanModule, SkillEntry } from './types'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? ''

async function strapiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText} — ${path}`)
  }

  return res.json() as Promise<T>
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const data = await strapiGet<StrapiListResponse<CaseStudy>>('/case-studies?populate=*&sort=publishedAt:desc')
  return data.data
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const data = await strapiGet<StrapiListResponse<CaseStudy>>(`/case-studies?filters[slug][$eq]=${slug}&populate=*`)
  return data.data[0] ?? null
}

export async function getTitanModules(): Promise<TitanModule[]> {
  const data = await strapiGet<StrapiListResponse<TitanModule>>('/titan-modules?sort=hubName:asc')
  return data.data
}

export async function getSkills(): Promise<SkillEntry[]> {
  const data = await strapiGet<StrapiListResponse<SkillEntry>>('/skills?sort=level:desc')
  return data.data
}

export async function getProfile(): Promise<StrapiResponse<{
  title: string
  subtitle: string
  metrics: Array<{ value: string | number; label: string }>
}>> {
  return strapiGet('/profile?populate=*')
}
