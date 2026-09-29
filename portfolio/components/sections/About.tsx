/* ─────────────────────────────────────────────────────────────────────────────
   components/sections/About.tsx
   Sección "Sobre mí" — narrativa en columna estrecha + highlights de datos.
───────────────────────────────────────────────────────────────────────────── */

import { aboutContent } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';

export default function About() {
  const { sectionLabel, heading, paragraphs, highlights } = aboutContent;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label={sectionLabel}
          heading={heading}
          className="mb-10"
        />

        {/*
          Layout de una columna con ancho máximo ~65ch para
          una longitud de línea cómoda en la lectura del texto narrativo.
        */}
        <div className="max-w-prose">

          {/* Párrafos de narrativa */}
          <div className="flex flex-col gap-5">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base text-text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* ── Highlights / Stats ── */}
          {/*
            gap-px + bg-border en el padre actúa como separador de 1px entre celdas.
            Cada celda tiene bg-surface, por lo que el "fondo" del grid son los separadores.
          */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-12 border border-border rounded-lg overflow-hidden bg-border"
            role="list"
            aria-label="Datos destacados"
          >
            {highlights.map(({ value, label }) => (
              <div
                key={label}
                role="listitem"
                className="flex flex-col gap-1 px-5 py-5 bg-surface"
              >
                {/* Valor numérico o etiqueta destacada en fuente display */}
                <span
                  className="font-display text-2xl font-bold text-gradient-cyan"
                  aria-label={`${value} — ${label}`}
                >
                  {value}
                </span>
                {/* Descripción en mono y color muted */}
                <span className="font-data text-xs text-text-muted leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
