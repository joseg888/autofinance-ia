'use client';

import { useEffect, useRef } from 'react';
import { contactContent } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import { Mail, Github, Linkedin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = { Mail, Github, Linkedin };

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => el.classList.add('visible'), delay); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

export default function Contact() {
  const { sectionLabel, heading, subheading, email, availability, socialLinks } = contactContent;
  const ref1 = useReveal(0);
  const ref2 = useReveal(150);
  const ref3 = useReveal(250);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative px-6 py-24 sm:py-32 overflow-hidden">
      {/* Glow de fondo */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-15 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse, #7C3AED 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="reveal" ref={ref1}>
          <SectionHeading label={sectionLabel} heading={heading} align="center" className="mb-6" />
        </div>

        <div className="reveal" ref={ref2} style={{ transitionDelay: '0.1s' }}>
          <p className="text-text-muted leading-relaxed mb-10">{subheading}</p>

          {/* Email CTA */}
          <a
            href={`mailto:${email}`}
            className="
              group inline-flex items-center gap-3
              px-8 py-4 rounded-2xl mb-8
              font-display font-semibold text-lg text-white
              transition-all duration-300
              hover:scale-[1.02] active:scale-[0.98]
            "
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              boxShadow: '0 0 32px rgba(168, 85, 247, 0.4)',
            }}
            aria-label={`Enviar email a ${email}`}
          >
            <Mail size={20} aria-hidden="true" />
            {email}
          </a>

          {/* Disponibilidad */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <Clock size={12} className="text-accent-primary" aria-hidden="true" />
            <span className="font-data text-xs text-accent-primary">{availability}</span>
          </div>
        </div>

        {/* Social links */}
        <nav aria-label="Redes sociales" className="reveal" ref={ref3} style={{ transitionDelay: '0.2s' }}>
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
                      inline-flex items-center justify-center w-12 h-12 rounded-xl
                      border border-border bg-surface text-text-muted
                      transition-all duration-200
                      hover:border-accent-primary hover:text-accent-primary
                      hover:bg-[rgba(168,85,247,0.08)]
                      hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                    "
                  >
                    <Icon size={20} aria-hidden="true" />
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
