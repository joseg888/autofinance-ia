import type { Project } from '@/types';
import Badge from './Badge';
import { ArrowUpRight, AlertCircle, Lightbulb } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const statusConfig: Record<string, { dot: string; text: string }> = {
  'Completado': {
    dot: 'bg-emerald-400',
    text: 'text-emerald-400',
  },
  'En desarrollo': {
    dot: 'bg-accent-secondary',
    text: 'text-accent-secondary',
  },
  'Open Source': {
    dot: 'bg-accent-primary',
    text: 'text-accent-primary',
  },
  'OSS': {
    dot: 'bg-accent-primary',
    text: 'text-accent-primary',
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status] ?? statusConfig['Completado'];

  return (
    <article
      className="
        relative flex flex-col gap-5
        bg-surface
        border border-border
        rounded-lg
        p-6
        card-hover-glow
        h-full
      "
    >
      <header className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-text-primary leading-snug">
          {project.title}
        </h3>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver repositorio de ${project.title}`}
            className="
              shrink-0 mt-0.5
              text-text-muted hover:text-accent-primary
              transition-colors duration-200
            "
          >
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        )}
      </header>

      <div className="flex items-center gap-2">
        <span className="relative flex items-center justify-center w-2.5 h-2.5">
          {project.status === 'En desarrollo' && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.dot} opacity-50`}
              aria-hidden="true"
            />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${status.dot}`} />
        </span>
        <span className={`font-data text-xs ${status.text}`}>
          {project.status}
        </span>
      </div>

      <section aria-label="Problema técnico">
        <div className="flex items-center gap-1.5 mb-2">
          <AlertCircle
            size={13}
            className="text-accent-secondary shrink-0"
            aria-hidden="true"
          />
          <span className="font-data text-xs text-accent-secondary uppercase tracking-wider">
            Problema
          </span>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          {project.problem}
        </p>
      </section>

      <section aria-label="Solución técnica">
        <div className="flex items-center gap-1.5 mb-2">
          <Lightbulb
            size={13}
            className="text-accent-primary shrink-0"
            aria-hidden="true"
          />
          <span className="font-data text-xs text-accent-primary uppercase tracking-wider">
            Solución
          </span>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">
          {project.solution}
        </p>
      </section>

      <footer className="flex flex-wrap gap-2 pt-1 mt-auto">
        {project.tools.map((tool) => (
          <Badge key={tool} label={tool} />
        ))}
      </footer>
    </article>
  );
}
