/* ─────────────────────────────────────────────────────────────────────────────
   components/sections/Projects.tsx
   Grid de proyectos destacados — 1 col mobile, 2-3 col desktop.
───────────────────────────────────────────────────────────────────────────── */

import { projectsContent } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  const { sectionLabel, heading, items } = projectsContent;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={sectionLabel}
          heading={heading}
          className="mb-12"
        />

        {/*
          Grid de proyectos:
          - 1 columna en mobile
          - 2 columnas en tablet (≥768px)
          - 3 columnas en desktop si hay 3+ proyectos (≥1280px)

          items-stretch asegura que todas las cards tengan la misma altura en cada fila.
        */}
        <ul
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            items-stretch
          "
          aria-label="Lista de proyectos destacados"
        >
          {items.map((project) => (
            <li key={project.id} className="flex">
              {/* ProjectCard ocupa el 100% del li para igualar alturas */}
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
