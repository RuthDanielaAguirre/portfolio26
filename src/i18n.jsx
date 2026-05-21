import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'portfolio-language'
const REMOTE_COPY_URL = import.meta.env.VITE_PORTFOLIO_API_URL?.trim()

const copy = {
  es: {
    nav: {
      links: [
        { label: 'Trabajo', href: '#projects' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Contacto', href: '#contact' },
      ],
      status: 'disponible 2026',
      languageLabel: 'Idioma',
    },
    hero: {
      chapter: 'presencia',
      title: [
        'construyo para que',
        { before: 'la vida se pueda ', emphasis: 'sentir' },
        'desde cualquier lugar.',
      ],
      subtitle: ['Fullstack developer.', 'Barcelona — disponible 2026.'],
      meta: [
        { label: 'GitHub', value: '/RuthDanielaAguirre' },
        { label: 'Stack', value: 'Full' },
        { label: 'Estado', value: 'activa' },
      ],
      scroll: 'scroll',
    },
    chapters: [
      { num: '01', title: 'Quién soy', hint: 'la persona detrás' },
      { num: '02', title: 'Lo que construí', hint: 'proyectos reales' },
      { num: '03', title: 'Dónde estuve', hint: 'experiencia' },
      { num: '04', title: 'Hablamos', hint: 'contacto' },
    ],
    about: {
      title: 'Quién soy',
      subtitle: 'la persona detrás del código',
      paragraphs: [
        'No soy solo la persona que escribe el código.',
        'Soy la que piensa en cómo debería sentirse antes de que exista.',
        'He construido productos internacionales, plataformas de bienestar, comunidades y herramientas de IA. En cada uno aprendí que la tecnología solo importa cuando conecta con algo real en quien la usa.',
        'Actualmente en Barcelona. Siempre construyendo.',
      ],
      emphasis: [
        'cómo debería sentirse',
        'conecta con algo real',
      ],
      skills: [
        { cat: 'Frontend', tags: ['React', 'TypeScript', 'Flutter', 'Tailwind'] },
        { cat: 'Backend', tags: ['Laravel', 'NestJS', 'FastAPI', 'Node.js'] },
        { cat: 'Datos', tags: ['PostgreSQL', 'MongoDB', 'Supabase', 'Oracle'] },
        { cat: 'Infraestructura', tags: ['Docker', 'Jenkins', 'Linux', 'Git'] },
      ],
    },
    projects: {
      title: 'Lo que construí',
      subtitle: 'proyectos que existen de verdad',
      visitProject: 'Ver proyecto',
      moreWork: 'Ver más trabajos',
      openProjectAria: 'Abrir proyecto {name} en una pestaña nueva',
      openMoreWorkAria: 'Ver más trabajos de Ruth Daniela Aguirre en GitHub',
      listLabel: 'Listado de proyectos destacados',
      items: [
        {
          num: '01',
          name: 'GamePlat',
          desc: 'Plataforma de juegos con reconocimiento facial en tiempo real. Arquitectura de microservicios, CI/CD en Raspberry Pi y experiencia de usuario construida desde cero.',
          stack: ['Laravel', 'React', 'FastAPI', 'Docker'],
          url: 'https://github.com/RuthDanielaAguirre',
        },
        {
          num: '02',
          name: 'TUDU',
          desc: 'To-do controlado por voz que se adapta al estado emocional del usuario. Whisper, FastAPI y una interfaz que escucha de verdad.',
          stack: ['Python', 'FastAPI', 'Whisper', 'MySQL'],
          url: 'https://github.com/RuthDanielaAguirre/TUDU',
        },
        {
          num: '03',
          name: 'FemCoders Club',
          desc: 'Plataforma para impulsar mujeres en tecnología. Comunidad, formación y proyectos colaborativos construidos con TypeScript de principio a fin.',
          stack: ['TypeScript', 'React', 'NestJS', 'Tailwind'],
          url: 'https://www.femcodersclub.com/',
        },
        {
          num: '04',
          name: 'Happy Rental Bike',
          desc: 'E-commerce real para alquiler de bicicletas en Barcelona. Reservas, pagos online y gestión de inventario funcionando en producción.',
          stack: ['WordPress', 'WooCommerce'],
          url: 'https://happyrentalbike.com/',
        },
      ],
    },
    experience: {
      title: 'Dónde estuve',
      subtitle: 'experiencia real',
      items: [
        {
          date: '2024 — hoy',
          role: 'Fullstack Developer · Bit Genius Ltd.',
          desc: 'Interfaces para proyectos internacionales. APIs, Stripe, arquitecturas que escalan.',
        },
        {
          date: '2024',
          role: 'Product Owner & Backend · Bonita BCN',
          desc: 'Definí la arquitectura completa de una plataforma de bienestar. Supabase, RLS y backend desde cero.',
        },
        {
          date: '2023 — 2024',
          role: 'Data Analyst · TELUS International',
          desc: 'Entrenamiento de modelos de IA y análisis de datos aplicado a lenguaje natural.',
        },
        {
          date: '2023',
          role: 'Contributor · FemCoders Club',
          desc: 'Mentoría técnica y proyectos colaborativos para mujeres en tecnología.',
        },
      ],
    },
    closing: {
      title: ['¿construimos', { before: 'algo ', emphasis: 'juntos' }],
      subtitle: 'disponible para proyectos, colaboraciones y conversaciones buenas',
      emailAria: 'Enviar un correo a hola@danielaaguirre.dev',
    },
    footer: {
      copyright: '© 2026 Ruth Daniela Aguirre',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/RuthDanielaAguirre',
          external: true,
          aria: 'Abrir perfil de GitHub de Ruth Daniela Aguirre',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/ruth-daniela-aguirre/',
          external: true,
          aria: 'Abrir perfil de LinkedIn de Ruth Daniela Aguirre',
        },
        {
          label: 'Email',
          href: 'mailto:hola@danielaaguirre.dev',
          aria: 'Enviar un correo a hola@danielaaguirre.dev',
        },
      ],
    },
  },
  en: {
    nav: {
      links: [
        { label: 'Work', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
      ],
      status: 'available 2026',
      languageLabel: 'Language',
    },
    hero: {
      chapter: 'presence',
      title: [
        'I build so that',
        { before: 'life can be ', emphasis: 'felt' },
        'from anywhere.',
      ],
      subtitle: ['Full-stack developer.', 'Barcelona — available 2026.'],
      meta: [
        { label: 'GitHub', value: '/RuthDanielaAguirre' },
        { label: 'Stack', value: 'Full' },
        { label: 'Status', value: 'active' },
      ],
      scroll: 'scroll',
    },
    chapters: [
      { num: '01', title: 'Who I Am', hint: 'the person behind it' },
      { num: '02', title: 'What I Built', hint: 'real projects' },
      { num: '03', title: 'Where I Worked', hint: 'experience' },
      { num: '04', title: 'Let’s Talk', hint: 'contact' },
    ],
    about: {
      title: 'Who I Am',
      subtitle: 'the person behind the code',
      paragraphs: [
        'I am not just the person writing the code.',
        'I am the one thinking about how it should feel before it exists.',
        'I have built international products, wellbeing platforms, communities, and AI tools. In each one I learned that technology only matters when it connects with something real in the person using it.',
        'Currently in Barcelona. Always building.',
      ],
      emphasis: [
        'how it should feel',
        'connects with something real',
      ],
      skills: [
        { cat: 'Frontend', tags: ['React', 'TypeScript', 'Flutter', 'Tailwind'] },
        { cat: 'Backend', tags: ['Laravel', 'NestJS', 'FastAPI', 'Node.js'] },
        { cat: 'Data', tags: ['PostgreSQL', 'MongoDB', 'Supabase', 'Oracle'] },
        { cat: 'Infrastructure', tags: ['Docker', 'Jenkins', 'Linux', 'Git'] },
      ],
    },
    projects: {
      title: 'What I Built',
      subtitle: 'projects that are live and real',
      visitProject: 'Visit project',
      moreWork: 'More work',
      openProjectAria: 'Open project {name} in a new tab',
      openMoreWorkAria: 'View more work by Ruth Daniela Aguirre on GitHub',
      listLabel: 'Featured projects list',
      items: [
        {
          num: '01',
          name: 'GamePlat',
          desc: 'Gaming platform with real-time facial recognition. Microservice architecture, CI/CD on Raspberry Pi, and a user experience built from scratch.',
          stack: ['Laravel', 'React', 'FastAPI', 'Docker'],
          url: 'https://github.com/RuthDanielaAguirre',
        },
        {
          num: '02',
          name: 'TUDU',
          desc: 'Voice-controlled to-do app that adapts to the user’s emotional state. Whisper, FastAPI, and an interface that actually listens.',
          stack: ['Python', 'FastAPI', 'Whisper', 'MySQL'],
          url: 'https://github.com/RuthDanielaAguirre/TUDU',
        },
        {
          num: '03',
          name: 'FemCoders Club',
          desc: 'Platform built to empower women in tech. Community, learning, and collaborative projects delivered end-to-end with TypeScript.',
          stack: ['TypeScript', 'React', 'NestJS', 'Tailwind'],
          url: 'https://www.femcodersclub.com/',
        },
        {
          num: '04',
          name: 'Happy Rental Bike',
          desc: 'Real e-commerce for bike rentals in Barcelona. Reservations, online payments, and live inventory management in production.',
          stack: ['WordPress', 'WooCommerce'],
          url: 'https://happyrentalbike.com/',
        },
      ],
    },
    experience: {
      title: 'Where I Worked',
      subtitle: 'real experience',
      items: [
        {
          date: '2024 — now',
          role: 'Full-stack Developer · Bit Genius Ltd.',
          desc: 'Interfaces for international products. APIs, Stripe, and architectures that scale.',
        },
        {
          date: '2024',
          role: 'Product Owner & Backend · Bonita BCN',
          desc: 'Defined the full architecture of a wellbeing platform. Supabase, RLS, and backend from zero.',
        },
        {
          date: '2023 — 2024',
          role: 'Data Analyst · TELUS International',
          desc: 'AI model training and data analysis focused on natural language.',
        },
        {
          date: '2023',
          role: 'Contributor · FemCoders Club',
          desc: 'Technical mentoring and collaborative projects for women in technology.',
        },
      ],
    },
    closing: {
      title: ['shall we build', { before: 'something ', emphasis: 'together' }],
      subtitle: 'available for projects, collaborations, and good conversations',
      emailAria: 'Send an email to hola@danielaaguirre.dev',
    },
    footer: {
      copyright: '© 2026 Ruth Daniela Aguirre',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/RuthDanielaAguirre',
          external: true,
          aria: 'Open Ruth Daniela Aguirre GitHub profile',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/ruth-daniela-aguirre/',
          external: true,
          aria: 'Open Ruth Daniela Aguirre LinkedIn profile',
        },
        {
          label: 'Email',
          href: 'mailto:hola@danielaaguirre.dev',
          aria: 'Send an email to hola@danielaaguirre.dev',
        },
      ],
    },
  },
}

const I18nContext = createContext(null)

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function mergeMessages(base, incoming) {
  if (!isPlainObject(incoming)) {
    return base
  }

  return Object.keys(base).reduce((acc, key) => {
    const baseValue = base[key]
    const incomingValue = incoming[key]

    if (Array.isArray(baseValue)) {
      acc[key] = Array.isArray(incomingValue) ? incomingValue : baseValue
      return acc
    }

    if (isPlainObject(baseValue)) {
      acc[key] = mergeMessages(baseValue, incomingValue)
      return acc
    }

    acc[key] = incomingValue ?? baseValue
    return acc
  }, {})
}

function isRemoteCopyPayload(data) {
  return isPlainObject(data)
    && isPlainObject(data.content)
    && isPlainObject(data.content.es)
    && isPlainObject(data.content.en)
}

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'es'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') {
    return stored
  }

  return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)
  const [remoteCopy, setRemoteCopy] = useState(null)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    if (!REMOTE_COPY_URL) {
      return undefined
    }

    const controller = new AbortController()

    fetch(REMOTE_COPY_URL, {
      headers: {
        Accept: 'application/json',
      },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        return response.json()
      })
      .then((data) => {
        if (isRemoteCopyPayload(data)) {
          setRemoteCopy(data.content)
        }
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.warn('Unable to load portfolio content from backend:', error)
        }
      })

    return () => {
      controller.abort()
    }
  }, [])

  const value = useMemo(() => ({
    language,
    setLanguage,
    content: mergeMessages(copy[language], remoteCopy?.[language]),
    hasRemoteContent: Boolean(remoteCopy),
  }), [language, remoteCopy])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider')
  }

  return context
}