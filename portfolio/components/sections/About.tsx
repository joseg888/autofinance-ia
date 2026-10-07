'use client';

import { useEffect, useRef } from 'react';
import { aboutContent } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// Subcomponente para envolver cada elemento que queramos animar por separado
function RevealItem({ children, delayIndex, className = '' }: { children: React.ReactNode, delayIndex: number, className?: string }) {
  const ref = useReveal(delayIndex * 120);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export default function About() {
  const { sectionLabel, heading, paragraphs, highlights } = aboutContent;

  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado */}
        <RevealItem delayIndex={0} className="mb-12">
          <SectionHeading label={sectionLabel} heading={heading} />
        </RevealItem>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Texto narrativo — 3 columnas */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {paragraphs.map((p, i) => (
              <RevealItem key={i} delayIndex={i + 1}>
                <p className="text-base text-text-muted leading-relaxed">
                  {p}
                </p>
              </RevealItem>
            ))}
          </div>

          {/* Stats / Highlights — 2 columnas */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {highlights.map(({ value, label }, i) => (
              <RevealItem key={label} delayIndex={i + 3}>
                <div className="flex flex-col gap-1 px-6 py-5 rounded-xl border border-border bg-surface card-hover-glow">
                  <span className="font-display text-3xl font-bold text-gradient-purple leading-none">
                    {value}
                  </span>
                  <span className="font-data text-xs text-text-muted leading-snug uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              </RevealItem>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
