# AI Automotive Portfolio

Portfolio profesional de desarrollador de software / ingeniero de IA con enfoque en sistemas automotrices e industriales.

**Estética:** Panel de telemetría / diagnóstico técnico  
**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Lucide React

---

## Estructura del proyecto

```
portfolio/
├── app/
│   ├── globals.css          # Variables CSS del sistema de diseño + grid de fondo
│   ├── layout.tsx           # Fuentes (next/font) + SEO metadata
│   └── page.tsx             # Página principal — orquesta las secciones
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Headline + osciloscopio animado + CTAs
│   │   ├── About.tsx        # Narrativa + highlights de datos
│   │   ├── TechStack.tsx    # Categorías de tecnologías con badges
│   │   ├── Projects.tsx     # Grid de ProjectCards
│   │   └── Contact.tsx      # CTA email + redes sociales
│   └── ui/
│       ├── Navbar.tsx       # Barra fija con blur
│       ├── Badge.tsx        # Chip de tecnología (JetBrains Mono)
│       ├── ProjectCard.tsx  # Tarjeta con glow border + Problema/Solución
│       └── SectionHeading.tsx  # Encabezado con label monospace
├── lib/
│   └── content.ts           # TODO el copy — edita aquí, nunca en los .tsx
├── public/
│   └── og-image.png         # ← Coloca tu imagen OG (1200×630px)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm start
```

## Personalizar contenido

**Un solo archivo para todo el copy:**

```ts
// lib/content.ts
export const heroContent = {
  headline: 'Tu headline aquí',
  // ...
};
```

Edita `lib/content.ts` para actualizar:
- Headline y subheadline del Hero
- Texto de la sección Sobre mí
- Categorías y herramientas del Stack
- Proyectos (título, problema, solución, herramientas)
- Email, GitHub, LinkedIn

## Paleta de colores

| Token                 | Valor     | Uso                              |
|-----------------------|-----------|----------------------------------|
| `--bg`                | `#0A0E14` | Fondo base                       |
| `--surface`           | `#121924` | Tarjetas y paneles               |
| `--border`            | `#1E293B` | Líneas y separadores             |
| `--accent-primary`    | `#22D3EE` | Cian — IA, links, glow effects   |
| `--accent-secondary`  | `#F0A868` | Ámbar — detalles automotrices    |
| `--text-primary`      | `#E8ECF1` | Texto principal                  |
| `--text-muted`        | `#8B98AC` | Texto secundario                 |

## Deploy en Vercel

```bash
# Con Vercel CLI
npx vercel

# O conecta el repo en vercel.com
# → Import Project → Next.js se detecta automáticamente
```

> **Antes del deploy:** actualiza el `url` en `metadata` de `app/layout.tsx` 
> y en `siteConfig` de `lib/content.ts` con tu dominio real.
