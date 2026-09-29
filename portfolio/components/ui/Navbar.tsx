/* ─────────────────────────────────────────────────────────────────────────────
   components/ui/Navbar.tsx
   Barra de navegación fija con blur de fondo — accesible por teclado.
───────────────────────────────────────────────────────────────────────────── */

import { siteConfig } from '@/lib/content';

const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        border-b border-border
        bg-[rgba(10,14,20,0.8)]
        backdrop-blur-md
      "
    >
      <nav
        className="
          max-w-6xl mx-auto
          px-6 h-14
          flex items-center justify-between
        "
        aria-label="Navegación principal"
      >
        {/* Logo / nombre */}
        <a
          href="#hero"
          className="
            font-display font-bold text-sm
            text-text-primary
            tracking-tight
            hover:text-accent-primary
            transition-colors duration-200
          "
          aria-label={`${siteConfig.name} — Ir al inicio`}
        >
          {/* Corchetes de "función" — guiño a la estética de telemetría */}
          <span className="font-data text-accent-primary mr-0.5" aria-hidden="true">[</span>
          {siteConfig.name}
          <span className="font-data text-accent-primary ml-0.5" aria-hidden="true">]</span>
        </a>

        {/* Links de navegación — ocultos en mobile muy pequeño */}
        <ul className="hidden sm:flex items-center gap-1" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="
                  px-3 py-1.5
                  rounded
                  font-body text-sm text-text-muted
                  transition-colors duration-150
                  hover:text-text-primary
                  hover:bg-[rgba(255,255,255,0.04)]
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA compacto en la derecha */}
        <a
          href="#contact"
          className="
            hidden sm:inline-flex items-center
            px-4 py-1.5 rounded
            border border-[rgba(34,211,238,0.35)]
            font-data text-xs text-accent-primary
            transition-all duration-200
            hover:bg-[rgba(34,211,238,0.08)]
            hover:border-accent-primary
          "
        >
          Contáctame
        </a>
      </nav>
    </header>
  );
}
