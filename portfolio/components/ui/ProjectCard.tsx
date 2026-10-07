import type { Project } from '@/types';
import Badge from './Badge';
import { ArrowUpRight, AlertCircle, Lightbulb } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusConfig: Record<string, { dot: string; text: string; bg: string }> = {
  'Completado': {
    dot:  'bg-emerald-400',
    text: 'text-emerald-400',
    bg:   'bg-emerald-400/10',
  },
  'En desarrollo': {
    dot:  'bg-accent-primary',
    text: 'text-accent-primary',
    bg:   'bg-accent-primary/10',
  },
  'Open Source': {
    dot:  'bg-accent-fuchsia',
    text: 'text-accent-fuchsia',
    bg:   'bg-accent-fuchsia/10',
  },
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const status = statusConfig[project.status] ?? statusConfig['Completado'];

  return (
    <article
      className="
        relative flex flex-col gap-5
        bg-surface border border-border rounded-2xl p-6
        card-hover-glow h-full overflow-hidden
      "
    >
      {/* Glow de acento en la esquina superior */}
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none rounded-full -translate-y-12 translate-x-12"
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, rgba(168,85,247,${0.1 + index * 0.02}) 0%, transparent 70%)`,
        }}
      />

      {/* Línea decorativa superior de color según estado */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: project.status === 'En desarrollo'
            ? 'linear-gradient(90deg, transparent, #A855F7, transparent)'
            : 'linear-gradient(90deg, transparent, #5B21B6, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <header className="flex items-start justify-between gap-3 relative z-10">
        <h3 className="font-display text-base font-semibold text-text-primary leading-snug">
          {project.title}
        </h3>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver repositorio de ${project.title}`}
            className="
              shrink-0 mt-0.5 p-1.5 rounded-lg
              text-text-muted
              border border-transparent
              transition-all duration-200
              hover:text-accent-primary hover:border-border hover:bg-surface-2
            "
          >
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </header>

      {/* Status */}
      <div className={`inline-flex items-center gap-2 self-start px-2.5 py-1 rounded-full ${status.bg}`}>
        <span className="relative flex items-center justify-center w-2 h-2">
          {project.status === 'En desarrollo' && (
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.dot} opacity-50`} aria-hidden="true" />
          )}
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${status.dot}`} />
        </span>
        <span className={`font-data text-xs ${status.text}`}>{project.status}</span>
      </div>

      {/* Problema */}
      <section aria-label="Problema técnico">
        <div className="flex items-center gap-1.5 mb-2">
          <AlertCircle size={12} className="text-accent-fuchsia shrink-0" aria-hidden="true" />
          <span className="font-data text-[10px] text-accent-fuchsia uppercase tracking-wider">Problema</span>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">{project.problem}</p>
      </section>

      {/* Solución */}
      <section aria-label="Solución técnica">
        <div className="flex items-center gap-1.5 mb-2">
          <Lightbulb size={12} className="text-accent-primary shrink-0" aria-hidden="true" />
          <span className="font-data text-[10px] text-accent-primary uppercase tracking-wider">Solución</span>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">{project.solution}</p>
      </section>

      {/* Tools */}
      <footer className="flex flex-wrap gap-2 pt-1 mt-auto">
        {project.tools.map((tool) => (
          <Badge key={tool} label={tool} />
        ))}
      </footer>
    </article>
  );
}
