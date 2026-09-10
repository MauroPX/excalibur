'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { AudienceCard } from '@/components/molecules/AudienceCard'
import { TitanRAGAgent } from '@/components/organisms/TitanRAGAgent'

export interface NavSystemProps {
  symptomCards: Array<{ title: string; description: string; iconName?: string; tag?: 'cliente'|'reclutador'|'comunidad'|'normal'; targetSlug?: string }>
  roleCards: Array<{ title: string; description: string; iconName?: string; tag?: 'cliente'|'reclutador'|'comunidad'|'normal'; targetSlug?: string }>
  featuredProjects?: Array<{ slug: string; title: string; summary: string; tags: string[] }>
  defaultTab?: 'A' | 'B' | 'C' | 'D'
}

const NavSystem: React.FC<NavSystemProps> = ({ symptomCards, roleCards, featuredProjects, defaultTab }) => {
  const t = useTranslations('nav')
  const [activeTab, setActiveTab] = useState(defaultTab === 'B' ? 1 : defaultTab === 'C' ? 2 : defaultTab === 'D' ? 3 : 0)

  return (
    <Box
      component="section"
      data-atomic="organism"
      data-component="NavSystem"
      className="ex-nav-system"
      sx={{ backgroundColor: 'var(--md-sys-color-surface)', py: 6 }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
      {/* TabBar usando MUI Tabs + Tab con value=0,1,2,3 */}
      <Tabs
        aria-label={t('audienceLabel')}
        value={activeTab}
        onChange={(_e, v) => setActiveTab(v)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        className="ex-nav-system__tabs-bar"
        sx={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', mb: 3 }}
      >
        <Tab label={t('tabs.symptoms')} id="tab-0" aria-controls="panel-0" className="ex-nav-system__tab" />
        <Tab label={t('tabs.roles')} id="tab-1" aria-controls="panel-1" className="ex-nav-system__tab" />
        <Tab label={t('tabs.titan')} id="tab-2" aria-controls="panel-2" className="ex-nav-system__tab" />
        <Tab label={t('tabs.explore')} id="tab-3" aria-controls="panel-3" className="ex-nav-system__tab" />
      </Tabs>

      {/* Panel 0 — síntomas */}
      <Box role="tabpanel" id="panel-0" aria-labelledby="tab-0" hidden={activeTab !== 0}
           className="ex-nav-system__tab-panel ex-nav-system--tab-a"
           sx={{ display: activeTab === 0 ? 'grid' : 'none', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 2 }}>
        {symptomCards.map((card, i) => (
          <AudienceCard
            key={i}
            type="symptom"
            title={card.title}
            description={card.description}
            tag={card.tag}
            href={card.targetSlug ? `/casos/${card.targetSlug}` : undefined}
          />
        ))}
      </Box>

      {/* Panel 1 — roles */}
      <Box role="tabpanel" id="panel-1" aria-labelledby="tab-1" hidden={activeTab !== 1}
           className="ex-nav-system__tab-panel ex-nav-system--tab-b"
           sx={{ display: activeTab === 1 ? 'grid' : 'none', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 2 }}>
        {roleCards.map((card, i) => (
          <AudienceCard
            key={i}
            type="role"
            title={card.title}
            description={card.description}
            tag={card.tag}
            href={card.targetSlug ? `/casos/${card.targetSlug}` : undefined}
          />
        ))}
      </Box>

      {/* Panel 2 — TitanRAGAgent */}
      <Box role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden={activeTab !== 2}
           className="ex-nav-system__tab-panel ex-nav-system--tab-c">
        {activeTab === 2 && <TitanRAGAgent />}
      </Box>

      {/* Panel 3 — explorar */}
      <Box role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden={activeTab !== 3}
           className="ex-nav-system__tab-panel ex-nav-system--tab-d">
        {featuredProjects?.map((p, i) => (
          <Box key={i} sx={{ p: 2, borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
            <strong>{p.title}</strong>
            <p style={{ color: 'var(--md-sys-color-on-surface)', margin: '4px 0 0' }}>{p.summary}</p>
          </Box>
        ))}
      </Box>
      </Box>
    </Box>
  )
}

export { NavSystem }
export default NavSystem
