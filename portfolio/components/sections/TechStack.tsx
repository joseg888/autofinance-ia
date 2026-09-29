/* ─────────────────────────────────────────────────────────────────────────────
   components/sections/TechStack.tsx
   Stack tecnológico agrupado por categorías, con iconos de Lucide.
───────────────────────────────────────────────────────────────────────────── */

import { techStackContent } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { Cpu, Activity, Monitor, Wrench, type LucideIcon } from 'lucide-react';

/*
  Mapa de nombres de iconos (strings en content.ts) → componentes Lucide.
  Al agregar categorías en content.ts, agrega el ícono aquí también.
*/
const ICON_MAP: Record<string, LucideIcon> = {
  Cpu,
  Activity,
  Monitor,
  Wrench,
};

export default function TechStack() {
  const { sectionLabel, heading, categories } = techStackContent;

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="px-6 py-24 sm:py-32"
    >
      {/* Franja horizontal de fondo para separar visualmente la sección */}
      <div className="relative">
        {/* Línea decorativa superior */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

        <div className="max-w-4xl mx-auto py-16">
          <SectionHeading
            label={sectionLabel}
            heading={heading}
            className="mb-12"
          />

          {/* Grid de categorías — 1 col en mobile, 2 en tablet, 4 en desktop */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
            aria-label="Categorías de tecnologías"
          >
            {categories.map((category) => {
              const Icon = ICON_MAP[category.icon] ?? Cpu;

              return (
                <div
                  key={category.label}
                  role="listitem"
                  className="
                    flex flex-col gap-4
                    bg-surface
                    border border-border
                    rounded-lg
                    p-5
                    transition-colors duration-200
                    hover:border-[rgba(34,211,238,0.25)]
                  "
                >
                  {/* Ícono + label de categoría */}
                  <header className="flex items-center gap-2.5">
                    <span
                      className="
                        p-1.5 rounded
                        bg-[rgba(34,211,238,0.08)]
                        text-accent-primary
                      "
                      aria-hidden="true"
                    >
                      <Icon size={15} />
                    </span>
                    <h3 className="font-display text-sm font-semibold text-text-primary">
                      {category.label}
                    </h3>
                  </header>

                  {/* Badges de herramientas de la categoría */}
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label={`Tecnologías en ${category.label}`}
                  >
                    {category.items.map((item) => (
                      <li key={item}>
                        <Badge label={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
      </div>
    </section>
  );
}
