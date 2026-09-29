/* ─────────────────────────────────────────────────────────────────────────────
   components/ui/SectionHeading.tsx
   Encabezado de sección con etiqueta de telemetría + línea decorativa.
───────────────────────────────────────────────────────────────────────────── */

interface SectionHeadingProps {
  /** Etiqueta pequeña en fuente mono (ej: "01 / Sobre mí") */
  label: string;
  /** Título principal de la sección */
  heading: string;
  /** Alineación del texto (default: izquierda) */
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Cabecera de sección consistente en todo el sitio.
 * La etiqueta actúa como "número de canal" de telemetría.
 */
export default function SectionHeading({
  label,
  heading,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <header className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {/* Etiqueta de canal en fuente mono y color muted */}
      <span
        className="font-data text-xs tracking-widest uppercase text-accent-primary"
        aria-hidden="true"
      >
        {label}
      </span>

      {/* Título principal */}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
        {heading}
      </h2>

      {/* Línea decorativa en gradiente cian */}
      <div
        className="section-divider mt-1"
        aria-hidden="true"
      />
    </header>
  );
}
