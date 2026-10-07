interface SectionHeadingProps {
  label: string;
  heading: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  heading,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <header className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      <span className="font-data text-xs tracking-[0.2em] uppercase text-accent-primary" aria-hidden="true">
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
        {heading}
      </h2>
      <div className="section-divider mt-1" aria-hidden="true" />
    </header>
  );
}
