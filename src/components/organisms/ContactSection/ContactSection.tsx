'use client'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/atoms/Button'

export type ContactChannel = 'linkedin' | 'email' | 'github'
export interface ContactSectionProps {
  channels?: ContactChannel[]
  linkedinUrl?: string
  githubUrl?: string
  emailAddress?: string
  onSubmit?: (data: { name: string; email: string; message: string; channel: string }) => Promise<void>
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  channels = ['linkedin', 'email', 'github'],
  linkedinUrl = 'https://www.linkedin.com/in/maurogooc/',
  githubUrl = 'https://github.com/MauroPX',
  emailAddress = 'lemaogo@gmail.com',
  onSubmit,
}) => {
  const t = useTranslations('contact')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [channel, setChannel] = useState<ContactChannel>('linkedin')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = t('form.errors.nameRequired')
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = t('form.errors.emailInvalid')
    if (!message.trim() || message.length < 20) e.message = t('form.errors.messageTooShort')
    return e
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    setSubmitting(true)
    await onSubmit?.({ name, email, message, channel })
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <Box
      component="section"
      data-atomic="organism"
      data-component="ContactSection"
      className="ex-contact-section"
      sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface)' }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
      <Typography variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1 }}>
        {t('title')}
      </Typography>
      <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 4 }}>
        {t('subtitle')}
      </Typography>

      {/* Canal de contacto */}
      <Box className="ex-contact-section__channels" role="group" aria-label={t('channels.label')} sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
        {channels.map(ch => (
          <Button
            key={ch}
            label={t(`channels.${ch}`)}
            variant={channel === ch ? 'filled' : 'outlined'}
            onClick={() => setChannel(ch)}
          />
        ))}
      </Box>

      {/* Info canal */}
      <Box className="ex-contact-section__channel-info" sx={{ mb: 3, p: 2, borderRadius: 1, backgroundColor: 'var(--md-sys-color-surface-container)' }}>
        {channel === 'linkedin' && <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface)' }}>LinkedIn: {linkedinUrl}</Typography>}
        {channel === 'email' && <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface)' }}>Email: {emailAddress}</Typography>}
        {channel === 'github' && <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface)' }}>GitHub: {githubUrl}</Typography>}
      </Box>

      {submitted ? (
        <Box
          role="alert"
          aria-live="polite"
          className="ex-contact-section__success"
          sx={{ p: 3, borderRadius: 2, backgroundColor: 'var(--md-sys-color-primary-container)', textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: 'var(--md-sys-color-on-primary-container)' }}>
            {t('form.success')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-primary-container)', mt: 1 }}>
            {t('form.successDetail')}
          </Typography>
        </Box>
      ) : (
        <Box
          component="form"
          noValidate
          aria-label={t('form.label')}
          className="ex-contact-section__form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Box>
            <TextField
              id="contact-name"
              label={t('form.name')}
              value={name}
              onChange={e => setName(e.target.value)}
              required
              fullWidth
              error={!!errors.name}
              inputProps={{ 'aria-describedby': errors.name ? 'name-error' : undefined }}
              sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--md-sys-color-outline)' } } }}
            />
            {errors.name && <FormHelperText id="name-error" error>{errors.name}</FormHelperText>}
          </Box>
          <Box>
            <TextField
              id="contact-email"
              label={t('form.email')}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              fullWidth
              error={!!errors.email}
              inputProps={{ 'aria-describedby': errors.email ? 'email-error' : undefined }}
              sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--md-sys-color-outline)' } } }}
            />
            {errors.email && <FormHelperText id="email-error" error>{errors.email}</FormHelperText>}
          </Box>
          <Box>
            <TextField
              id="contact-message"
              label={t('form.message')}
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              fullWidth
              multiline
              rows={4}
              error={!!errors.message}
              inputProps={{ 'aria-describedby': errors.message ? 'message-error' : undefined }}
              sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--md-sys-color-outline)' } } }}
            />
            {errors.message && <FormHelperText id="message-error" error>{errors.message}</FormHelperText>}
          </Box>

          <button
            type="submit"
            disabled={submitting}
            className="ex-contact-section__submit"
            style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)', fontSize: '1rem', fontWeight: 600 }}
          >
            {submitting ? t('form.submitting') : t('form.submit')}
          </button>
        </Box>
      )}
      </Box>
    </Box>
  )
}

export default ContactSection
