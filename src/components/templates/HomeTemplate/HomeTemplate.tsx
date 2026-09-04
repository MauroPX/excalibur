'use client'
import React from 'react'
import Box from '@mui/material/Box'
import { Hero } from '@/components/organisms/Hero'
import { NavSystem, type NavSystemProps } from '@/components/organisms/NavSystem'
import { CasesSection, type CasesSectionProject } from '@/components/organisms/CasesSection'
import { TitanSection, type TitanModule } from '@/components/organisms/TitanSection'
import { StackSection, type StackSkill } from '@/components/organisms/StackSection'
import { ContactSection, type ContactSectionProps } from '@/components/organisms/ContactSection'
import { InquisitorHUD } from '@/components/organisms/InquisitorHUD'
import type { HeroProps } from '@/components/organisms/Hero'

export interface HomeTemplateProps {
  heroData: HeroProps
  symptomCards: NavSystemProps['symptomCards']
  roleCards: NavSystemProps['roleCards']
  featuredProjects?: NavSystemProps['featuredProjects']
  caseProjects: CasesSectionProject[]
  titanModules: TitanModule[]
  titanVersion?: string
  skills: StackSkill[]
  contactProps?: Omit<ContactSectionProps, 'onSubmit'>
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  heroData, symptomCards, roleCards, featuredProjects,
  caseProjects, titanModules, titanVersion, skills, contactProps,
}) => (
  <main
    id="main-content"
    data-atomic="template"
    data-component="HomeTemplate"
    className="ex-home-template"
  >
    <Box
      component="a"
      href="#main-content"
      className="ex-home-template__skip-link"
      sx={{
        position: 'absolute',
        top: '-100px',
        left: '16px',
        zIndex: 9999,
        padding: '8px 16px',
        backgroundColor: 'var(--md-sys-color-primary)',
        color: 'var(--md-sys-color-on-primary)',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 600,
        '&:focus': { top: '16px' },
      }}
    >
      Saltar al contenido
    </Box>

    <section id="hero" className="ex-home-template__section">
      <Hero {...heroData} />
    </section>

    <section id="nav" className="ex-home-template__section">
      <NavSystem
        symptomCards={symptomCards}
        roleCards={roleCards}
        featuredProjects={featuredProjects}
      />
    </section>

    <section id="casos" className="ex-home-template__section">
      <CasesSection projects={caseProjects} />
    </section>

    <section id="titan" className="ex-home-template__section">
      <TitanSection modules={titanModules} version={titanVersion} />
    </section>

    <section id="stack" className="ex-home-template__section">
      <StackSection skills={skills} />
    </section>

    <section id="contacto" className="ex-home-template__section">
      <ContactSection {...contactProps} />
    </section>

    <InquisitorHUD enabled={process.env.NODE_ENV === 'development'} />
  </main>
)

export default HomeTemplate
