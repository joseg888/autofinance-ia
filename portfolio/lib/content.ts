import type { Project, TechCategory, SocialLink, HighlightStat } from '@/types';

export const siteConfig = {
  name: 'José Gregorio Gamboa',
  role: 'AI & Systems Software Engineer',
  tagline: 'Construyendo sistemas de IA confiables para operaciones financieras y automotrices.',
  url: 'https://github.com/joseg888',
} as const;

export const heroContent = {
  overline: 'Software Engineering · Applied AI · Distributed Systems',
  headline: 'Diseño sistemas inteligentes\npara resolver problemas reales.',
  subheadline:
    'Ingeniero de software enfocado en pipelines de IA, microservicios de baja latencia ' +
    'y arquitecturas modulares para sectores de alta exigencia.',
  ctas: {
    primary: {
      label: 'Ver Proyectos',
      href: '#projects',
    },
    secondary: {
      label: 'Contacto Directo',
      href: '#contact',
    },
  },
} as const;

export const aboutContent = {
  sectionLabel: '01 / Sobre mí',
  heading: 'Enfoque de Ingeniería',
  paragraphs: [
    'Mi trabajo se centra en llevar modelos de machine learning y arquitecturas de agentes ' +
      'más allá de los notebooks: hacia servicios de producción estables, testeables y medibles.',

    'Actualmente desarrollo AutoFinance AI, una plataforma modular que combina orquestación ' +
      'de agentes, scoring de riesgo crediticio con ML, verificación biométrica y asistentes ' +
      'RAG para automatizar la colocación de financiamiento vehicular de punta a punta.',

    'Priorizo la observabilidad, la reducción de latencia y la simplicidad arquitectónica ' +
      'antes que la sobreingeniería. Trabajo principalmente con Python, FastAPI, TypeScript, ' +
      'Docker y ecosistemas modernos en la nube.',
  ],
  highlights: [
    { value: '4+', label: 'Años desarrollando software y datos' },
    { value: '<120ms', label: 'Latencia promedio en inferencia de API' },
    { value: 'End-to-End', label: 'Desde modelado hasta despliegue' },
  ] satisfies HighlightStat[],
} as const;

export const techStackContent = {
  sectionLabel: '02 / Stack Tecnológico',
  heading: 'Tecnologías & Herramientas',
  categories: [
    {
      label: 'IA & Machine Learning',
      icon: 'Cpu',
      items: [
        'PyTorch',
        'scikit-learn',
        'LangChain',
        'OpenCV',
        'RAG Pipelines',
        'Pandas / NumPy',
      ],
    },
    {
      label: 'Backend & Sistemas',
      icon: 'Activity',
      items: [
        'Python',
        'FastAPI',
        'PostgreSQL',
        'Docker',
        'REST APIs',
        'Microservicios',
      ],
    },
    {
      label: 'Frontend & UI',
      icon: 'Monitor',
      items: [
        'Next.js 14',
        'TypeScript',
        'React',
        'Tailwind CSS',
        'Responsive Design',
      ],
    },
    {
      label: 'DevOps & Tooling',
      icon: 'Wrench',
      items: [
        'Git & GitHub',
        'Linux / Bash',
        'CI/CD Pipelines',
        'Virtual Environments',
        'Postman',
      ],
    },
  ] satisfies TechCategory[],
} as const;

export const projectsContent = {
  sectionLabel: '03 / Proyectos Destacados',
  heading: 'Sistemas en Producción & Desarrollo',
  items: [
    {
      id: 'autofinance-ai',
      title: 'AutoFinance AI — Plataforma Inteligente de Crédito Automotriz',
      problem:
        'Los trámites de financiamiento automotriz tradicionales requieren días de validación ' +
        'manual, presentan alto riesgo de fraude por identidad sintética y carecen de evaluación ' +
        'crediticia instantánea en el punto de venta.',
      solution:
        'Ecosistema integral en microservicios: orquestador de agentes para flujo crediticio, ' +
        'módulo de verificación facial anti-spoofing, modelo ML para scoring de riesgo en tiempo ' +
        'real y chatbot RAG para responder sobre políticas financieras. Backend unificado con FastAPI.',
      tools: ['FastAPI', 'Python', 'PyTorch', 'OpenCV', 'LangChain', 'Docker'],
      status: 'En desarrollo',
      href: 'https://github.com/joseg888',
    },
    {
      id: 'telemetry-diagnostic-suite',
      title: 'Motor de Telemetría y Diagnóstico de Anomalías',
      problem:
        'Detección tardía de fallas y pérdida de trazabilidad en flujos continuos de señales ' +
        'técnicas en entornos industriales, generando paradas no planificadas.',
      solution:
        'Pipeline de ingesta de señales con algoritmos de detección de valores atípicos y ' +
        'clasificación de patrones anómalos. Microservicio con alertas tempranas y dashboard ' +
        'en tiempo real con WebSocket.',
      tools: ['Python', 'FastAPI', 'scikit-learn', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      status: 'Completado',
      href: 'https://github.com/joseg888',
    },
    {
      id: 'rag-knowledge-engine',
      title: 'Motor de Búsqueda Semántica & RAG para Documentación Técnica',
      problem:
        'Dificultad de los equipos operativos para consultar manuales técnicos extensos ' +
        'y normativas financieras rápidamente durante auditorías y revisiones en vivo.',
      solution:
        'Pipeline RAG optimizado con embeddings vectoriales, re-ranking semántico y guardrails ' +
        'para evitar alucinaciones, permitiendo respuestas auditables con citas de fuentes exactas.',
      tools: ['LangChain', 'Python', 'Vector DB', 'FastAPI', 'PostgreSQL'],
      status: 'Completado',
      href: 'https://github.com/joseg888',
    },
  ] satisfies Project[],
} as const;

export const contactContent = {
  sectionLabel: '04 / Contacto',
  heading: 'Conectemos',
  subheading:
    '¿Buscas colaborar en proyectos de ingeniería de IA, arquitecturas de datos o desarrollo ' +
    'de sistemas robustos? Conversemos.',
  email: 'josegregoriogdc@gmail.com',
  availability: 'Disponible para consultoría técnica y roles de ingeniería',
  socialLinks: [
    {
      label: 'Email',
      href: 'mailto:josegregoriogdc@gmail.com',
      icon: 'Mail',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/joseg888',
      icon: 'Github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jose-gregorio-gamboa-de-caires-6ba5b4437/',
      icon: 'Linkedin',
    },
  ] satisfies SocialLink[],
} as const;
