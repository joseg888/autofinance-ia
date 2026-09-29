/* ─────────────────────────────────────────────────────────────────────────────
   components/ui/Badge.tsx
   Chip de tecnología en fuente monospace, estilo "terminal label".
───────────────────────────────────────────────────────────────────────────── */

interface BadgeProps {
  /** Texto del badge (nombre de tecnología o etiqueta) */
  label: string;
  /** Variante visual del badge */
  variant?: 'default' | 'accent' | 'amber';
  className?: string;
}

/**
 * Badge de tecnología en JetBrains Mono.
 * Usado en TechStack y en ProjectCard para las herramientas de cada proyecto.
 */
export default function Badge({
  label,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
    // Chip base: fondo surface, borde sutil, texto muted
    default:
      'bg-surface border border-border text-text-muted hover:border-accent-primary hover:text-accent-primary',
    // Chip resaltado en cian (para herramientas de IA/principales)
    accent:
      'bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.3)] text-accent-primary',
    // Chip en ámbar/cobre (detalles automotrices)
    amber:
      'bg-[rgba(240,168,104,0.08)] border border-[rgba(240,168,104,0.3)] text-accent-secondary',
  };

  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-1
        rounded
        text-xs leading-none
        font-data
        transition-colors duration-200
        select-none
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {label}
    </span>
  );
}
