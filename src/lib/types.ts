// Shared TypeScript interfaces — EXCALIBUR v2.0

export interface CaseStudy {
  id: number
  slug: string
  title: string
  description: string
  tags: string[]
  symptomTags: string[]
  roleTags: string[]
  audienceTags: string[]
  metrics: Array<{ value: string | number; label: string }>
  timeline: Array<{ company: string; role: string; period: string; isLast?: boolean }>
  techStack: Array<{ skill: string; level: number; levelLabel: string }>
  nextCase: { slug: string; title: string } | null
  publishedAt: string
}

export interface TitanModule {
  hubName: string
  hubTitle: string
  description: string
  momentum: 'M0' | 'M1' | 'M2' | 'M3' | 'M4' | 'M5'
  commandsCount: number
  features?: string[]
}

export interface SkillEntry {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'process' | 'ai'
}

export interface AudienceCardData {
  title: string
  description: string
  iconName?: string
  tag?: 'cliente' | 'reclutador' | 'comunidad' | 'normal'
  targetSlug?: string
}

export interface HeroData {
  title: string
  subtitle: string
  metrics: Array<{ value: string | number; label: string }>
  ctaLabel?: string
  ctaSecondaryLabel?: string
}

export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiListResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiError {
  status: number
  name: string
  message: string
  details?: Record<string, unknown>
}
