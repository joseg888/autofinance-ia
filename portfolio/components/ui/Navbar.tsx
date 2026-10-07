import { siteConfig } from '@/lib/content';

const navLinks = [
  { label: 'Sobre mí',  href: '#about' },
  { label: 'Stack',     href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto',  href: '#contact' },
];

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        border-b border-border
        bg-[rgba(6,1,15,0.75)]
        backdrop-blur-xl
      "
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-sm text-text-primary tracking-tight hover:text-accent-primary transition-colors duration-200"
          aria-label={`${siteConfig.name} — Ir al inicio`}
        >
          <span className="font-data text-accent-primary mr-0.5" aria-hidden="true">{'<'}</span>
          {siteConfig.name.split(' ')[0]}
          <span className="font-data text-accent-fuchsia">.</span>
          {siteConfig.name.split(' ').slice(1, 2).join('')}
          <span className="font-data text-accent-primary ml-0.5" aria-hidden="true">{' />'}</span>
        </a>

        {/* Links */}
        <ul className="hidden sm:flex items-center gap-1" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="
                  px-3 py-1.5 rounded-lg
                  font-body text-sm text-text-muted
                  transition-all duration-150
                  hover:text-text-primary hover:bg-[rgba(168,85,247,0.08)]
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="
            hidden sm:inline-flex items-center
            px-4 py-1.5 rounded-lg
            border border-border-bright
            font-data text-xs text-accent-primary
            transition-all duration-200
            hover:bg-[rgba(168,85,247,0.1)]
            hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]
          "
        >
          Contáctame
        </a>
      </nav>
    </header>
  );
}
