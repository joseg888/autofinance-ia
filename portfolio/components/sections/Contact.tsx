/* ─────────────────────────────────────────────────────────────────────────────
   components/sections/Contact.tsx
   Sección de contacto con CTA directo, email, GitHub y LinkedIn.
───────────────────────────────────────────────────────────────────────────── */

import { contactContent } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import { Mail, Github, Linkedin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* Mapa de nombres de iconos (strings en content.ts) → componentes Lucide */
const ICON_MAP: Record<string, LucideIcon> = {
  Mail,
  Github,
  Linkedin,
};

export default function Contact() {
  const { sectionLabel, heading, subheading, email, availability, socialLinks } =
    contactContent;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          label={sectionLabel}
          heading={heading}
          align="center"
          className="mb-6"
        />

        <p className="text-text-muted leading-relaxed mb-10">
          {subheading}
        </p>

        {/* ── CTA de email principal ── */}
        <a
          href={`mailto:${email}`}
          className="
            inline-flex items-center gap-3
            px-8 py-4
            rounded-lg
            border border-[rgba(34,211,238,0.3)]
            bg-[rgba(34,211,238,0.05)]
            text-accent-primary
            font-display font-semibold text-lg
            transition-all duration-200
            hover:bg-[rgba(34,211,238,0.1)]
            hover:border-accent-primary
            hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]
            active:scale-[0.98]
            mb-10
          "
          aria-label={`Enviar email a ${email}`}
        >
          <Mail size={20} aria-hidden="true" />
          {email}
        </a>

        {/* ── Badge de disponibilidad ── */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <Clock size={13} className="text-accent-secondary" aria-hidden="true" />
          <span className="font-data text-xs text-accent-secondary">
            {availability}
          </span>
        </div>

        {/* ── Links de redes sociales ── */}
        <nav aria-label="Redes sociales y contacto">
          <ul className="flex items-center justify-center gap-4">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = ICON_MAP[icon] ?? Mail;

              return (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className="
                      inline-flex items-center justify-center
                      w-11 h-11
                      rounded-lg
                      border border-border
                      bg-surface
                      text-text-muted
                      transition-all duration-200
                      hover:border-accent-primary
                      hover:text-accent-primary
                      hover:bg-[rgba(34,211,238,0.05)]
                      hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]
                    "
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
