'use client';

import { useEffect, useRef } from 'react';
import { projectsContent } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';

function useReveal(delay = 0) {
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// Wrapper interno para manejar el ref de cada lista y su animación
function ProjectListItem({ project, index }: { project: any; index: number }) {
  // Ajustamos el delay según la columna (index % 3)
  const ref = useReveal((index % 3) * 150);

  return (
    <li ref={ref} className="reveal flex">
      <ProjectCard project={project} index={index} />
    </li>
  );
}

export default function Projects() {
  const { sectionLabel, heading, items } = projectsContent;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative px-6 py-24 sm:py-32">
      {/* Background glow para la sección */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] pointer-events-none translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, #E879F9 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        <SectionHeading label={sectionLabel} heading={heading} className="mb-12" />

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch" aria-label="Lista de proyectos destacados">
          {items.map((project, index) => (
            <ProjectListItem key={project.id} project={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
