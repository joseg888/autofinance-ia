interface BadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'fuchsia';
  className?: string;
}

export default function Badge({ label, variant = 'default', className = '' }: BadgeProps) {
  const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
    default:
      'bg-[rgba(42,26,94,0.5)] border border-border text-text-muted hover:border-accent-primary hover:text-accent-primary',
    accent:
      'bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.35)] text-accent-primary',
    fuchsia:
      'bg-[rgba(232,121,249,0.1)] border border-[rgba(232,121,249,0.3)] text-accent-fuchsia',
  };

  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-1 rounded-md
        text-xs leading-none font-data
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
