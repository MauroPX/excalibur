/**
 * Contenido bilingüe de /privacidad (política legal). El cuerpo vive aquí como
 * dato tipado para no tener strings hardcodeados en el JSX de la página.
 * `es` es la versión de referencia legal (Ley 1581 de 2012, Colombia).
 */
import type { AppLocale } from '@/i18n/routing'

/** Fragmento inline: texto plano, enlace de correo, o texto en negrita. */
export type InlinePart = string | { email: string } | { strong: string }

export interface PrivacySection {
  heading: string
  paragraphs: InlinePart[][]
  bullets?: InlinePart[][]
  /** Párrafos que van después de la lista de viñetas. */
  afterBullets?: InlinePart[][]
}

export interface PrivacyContent {
  title: string
  updated: string
  sections: PrivacySection[]
}

const CONTACT = 'lemaogo@gmail.com'

const es: PrivacyContent = {
  title: 'Política de Privacidad',
  updated: 'Última actualización: 2 de julio de 2026',
  sections: [
    {
      heading: '1. Responsable del tratamiento',
      paragraphs: [
        [
          'Leonel Mauricio Gómez Ocampo (en adelante, «el titular»), con correo de contacto ',
          { email: CONTACT },
          ', es el responsable del tratamiento de los datos personales recopilados a través de este sitio web (excalibur-six-chi.vercel.app).',
        ],
      ],
    },
    {
      heading: '2. Datos recopilados y finalidad',
      paragraphs: [
        [
          'Este portafolio recopila únicamente los datos que usted provee de forma voluntaria a través del formulario de contacto:',
        ],
      ],
      bullets: [
        [{ strong: 'Nombre:' }, ' para dirigir la respuesta de forma personalizada.'],
        [{ strong: 'Correo electrónico:' }, ' para responder a su mensaje.'],
        [{ strong: 'Mensaje:' }, ' para comprender su consulta o propuesta.'],
      ],
      afterBullets: [
        [
          'Estos datos se usan exclusivamente para responder a su contacto. No se ceden, venden ni comparten con terceros para fines comerciales.',
        ],
      ],
    },
    {
      heading: '3. Asistente TitanRAGAgent',
      paragraphs: [
        [
          'Las preguntas que usted realiza al asistente conversacional TitanRAGAgent se transmiten a los servicios de inteligencia artificial de Anthropic (Claude) y Google (Gemini) para generar la respuesta. Estos mensajes no se almacenan en ninguna base de datos propia. El tratamiento de dichos datos por parte de Anthropic y Google se rige por sus respectivas políticas de privacidad.',
        ],
      ],
    },
    {
      heading: '4. Analíticas web',
      paragraphs: [
        [
          'Este sitio utiliza Vercel Analytics y Vercel Speed Insights para medir el rendimiento y el tráfico de forma anónima y sin cookies de rastreo. No se recopila información de identificación personal a través de estos servicios.',
        ],
      ],
    },
    {
      heading: '5. Base legal — Ley 1581 de 2012 (Colombia)',
      paragraphs: [
        [
          'El tratamiento de sus datos personales se realiza con base en su consentimiento voluntario al enviar el formulario de contacto, de conformidad con la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia.',
        ],
      ],
    },
    {
      heading: '6. Derechos de habeas data',
      paragraphs: [
        [
          'Usted tiene derecho a conocer, actualizar, rectificar y suprimir los datos personales que haya proporcionado. Para ejercer estos derechos, contáctenos en ',
          { email: CONTACT },
          '. Atenderemos su solicitud en un plazo máximo de 15 días hábiles.',
        ],
      ],
    },
    {
      heading: '7. Contacto',
      paragraphs: [
        [
          'Para cualquier consulta sobre esta política, puede escribirnos a ',
          { email: CONTACT },
          '.',
        ],
      ],
    },
  ],
}

const en: PrivacyContent = {
  title: 'Privacy Policy',
  updated: 'Last updated: July 2, 2026',
  sections: [
    {
      heading: '1. Data controller',
      paragraphs: [
        [
          'Leonel Mauricio Gómez Ocampo (hereinafter, “the owner”), reachable at ',
          { email: CONTACT },
          ', is the controller of the personal data collected through this website (excalibur-six-chi.vercel.app).',
        ],
      ],
    },
    {
      heading: '2. Data collected and purpose',
      paragraphs: [
        [
          'This portfolio collects only the data you voluntarily provide through the contact form:',
        ],
      ],
      bullets: [
        [{ strong: 'Name:' }, ' to address the reply personally.'],
        [{ strong: 'Email address:' }, ' to reply to your message.'],
        [{ strong: 'Message:' }, ' to understand your query or proposal.'],
      ],
      afterBullets: [
        [
          'This data is used solely to reply to your message. It is not transferred, sold, or shared with third parties for commercial purposes.',
        ],
      ],
    },
    {
      heading: '3. TitanRAGAgent assistant',
      paragraphs: [
        [
          'The questions you ask the TitanRAGAgent conversational assistant are sent to the AI services of Anthropic (Claude) and Google (Gemini) to generate the answer. These messages are not stored in any database of our own. Anthropic and Google process that data under their respective privacy policies.',
        ],
      ],
    },
    {
      heading: '4. Web analytics',
      paragraphs: [
        [
          'This site uses Vercel Analytics and Vercel Speed Insights to measure performance and traffic anonymously and without tracking cookies. No personally identifiable information is collected through these services.',
        ],
      ],
    },
    {
      heading: '5. Legal basis — Law 1581 of 2012 (Colombia)',
      paragraphs: [
        [
          'Your personal data is processed on the basis of your voluntary consent when submitting the contact form, in accordance with Statutory Law 1581 of 2012 and Decree 1377 of 2013 of the Republic of Colombia.',
        ],
      ],
    },
    {
      heading: '6. Habeas data rights',
      paragraphs: [
        [
          'You have the right to access, update, correct, and delete the personal data you have provided. To exercise these rights, contact us at ',
          { email: CONTACT },
          '. We will respond to your request within a maximum of 15 business days.',
        ],
      ],
    },
    {
      heading: '7. Contact',
      paragraphs: [
        ['For any question about this policy, write to us at ', { email: CONTACT }, '.'],
      ],
    },
  ],
}

export function getPrivacy(locale: AppLocale): PrivacyContent {
  return locale === 'en' ? en : es
}
