/* ─────────────────────────────────────────────────────────────────────────────
   components/sections/Hero.tsx
   Sección hero con forma de onda de osciloscopio animada en CSS.
───────────────────────────────────────────────────────────────────────────── */

import { heroContent } from '@/lib/content';
import { ChevronRight, Mail } from 'lucide-react';

/**
 * OscilloscopeLine
 * SVG inline con una trayectoria de forma de onda sinusoidal + cuadrada,
 * dibujada progresivamente mediante stroke-dashoffset (animación en CSS).
 * El SVG es aria-hidden porque es puramente decorativo.
 */
function OscilloscopeLine() {
  return (
    <div
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[200px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/*
          Path principal: mezcla de curvas (onda senoidal) y segmentos rectos (onda cuadrada).
          El efecto "se dibuja solo" viene de stroke-dashoffset animado vía .oscilloscope-line en globals.css.
          stroke-dasharray debe coincidir con la longitud aproximada del path (≈1200px).
        */}
        <path
          d="
            M -50,100
            L  80,100
            Q 100,100 110,80
            C 130,40 150,160 170,100
            L 200,100
            L 200,50
            L 250,50
            L 250,100
            C 270,40 290,160 310,100
            L 340,100
            Q 360,100 370,70
            C 390,30 410,170 430,100
            L 460,100
            L 460,130
            L 510,130
            L 510,100
            C 530,40 550,160 570,100
            L 600,100
            L 600,60
            L 650,60
            L 650,100
            C 670,40 690,160 710,100
            L 740,100
            Q 760,100 770,80
            C 790,40 810,160 830,100
            L 860,100
            L 860,50
            L 910,50
            L 910,100
            C 930,40 950,160 970,100
            L 1000,100
            Q 1020,100 1040,75
            C 1060,30 1080,170 1100,100
            L 1250,100
          "
          fill="none"
          stroke="#22D3EE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="oscilloscope-line"
        />

        {/* Segunda línea más tenue para dar profundidad */}
        <path
          d="M -50,115 C 100,70 200,145 350,110 C 500,75 600,135 750,105 C 900,80 1050,130 1250,115"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.4"
          className="oscilloscope-line"
          style={{ animationDelay: '0.5s' }}
        />
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */

export default function Hero() {
  const { overline, headline, subheadline, ctas } = heroContent;

  return (
    <section
      id="hero"
      aria-label="Presentación"
      className="
        relative
        min-h-[100svh]          /* altura de viewport full, soporta mobile browsers */
        flex flex-col items-center justify-center
        px-6 py-24
        overflow-hidden
        text-center
      "
    >
      {/* Onda decorativa de osciloscopio — posicionada detrás del texto */}
      <OscilloscopeLine />

      {/* Gradiente radial para dar profundidad y separar el texto de la onda */}
      <div
        className="absolute inset-0 bg-radial-to-center pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(10,14,20,0.85) 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Contenido principal (z-10 para quedar sobre la onda) ── */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">

        {/* Etiqueta de especialidad en mono */}
        <span
          className="
            font-data text-xs tracking-[0.2em] uppercase
            text-accent-primary
            border border-[rgba(34,211,238,0.25)] rounded-full
            px-4 py-1.5
            bg-[rgba(34,211,238,0.05)]
            animate-fade-up
          "
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          {overline}
        </span>

        {/* Headline principal */}
        <h1
          className="
            font-display
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-bold
            text-text-primary
            leading-[1.1]
            animate-fade-up
          "
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          {/* La primera línea del headline en color normal, la segunda en gradiente cian */}
          {headline.split('\n').map((line, i) => (
            <span
              key={i}
              className={`block ${i === 1 ? 'text-gradient-cyan' : ''}`}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          className="
            text-base sm:text-lg
            text-text-muted
            max-w-xl
            leading-relaxed
            animate-fade-up
          "
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          {subheadline}
        </p>

        {/* CTAs */}
        <nav
          aria-label="Acciones principales"
          className="
            flex flex-col sm:flex-row
            items-center gap-3 sm:gap-4
            mt-2
            animate-fade-up
          "
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          {/* CTA Primario — Ver proyectos */}
          <a
            href={ctas.primary.href}
            className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-lg
              bg-accent-primary text-bg
              font-display font-semibold text-sm
              transition-all duration-200
              hover:bg-[#38D9F5] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
              active:scale-[0.98]
            "
          >
            {ctas.primary.label}
            <ChevronRight size={16} aria-hidden="true" />
          </a>

          {/* CTA Secundario — Contacto */}
          <a
            href={ctas.secondary.href}
            className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-lg
              border border-border
              text-text-muted
              font-display font-medium text-sm
              transition-all duration-200
              hover:border-accent-primary hover:text-text-primary
              hover:bg-[rgba(34,211,238,0.04)]
            "
          >
            <Mail size={15} aria-hidden="true" />
            {ctas.secondary.label}
          </a>
        </nav>
      </div>

      {/* Indicador de scroll — sutil, en la parte inferior */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        aria-hidden="true"
      >
        <span className="font-data text-[10px] tracking-widest text-text-muted uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
