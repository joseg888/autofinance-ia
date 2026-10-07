'use client';

import { useEffect, useRef } from 'react';
import { techStackContent } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { Cpu, Activity, Monitor, Wrench, type LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = { Cpu, Activity, Monitor, Wrench };

const categoryAccents: Record<number, string> = {
  0: 'from-purple-600/20 to-transparent',
  1: 'from-violet-600/20 to-transparent',
  2: 'from-fuchsia-600/15 to-transparent',
  3: 'from-indigo-600/15 to-transparent',
};

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

function CategoryCard({ category, index }: { category: typeof techStackContent.categories[0]; index: number }) {
  const ref = useReveal(index * 100);
  const Icon = ICON_MAP[category.icon] ?? Cpu;

  return (
    <div
      ref={ref}
      className="reveal flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 card-hover-glow overflow-hidden relative"
    >
      {/* Gradiente de acento en la esquina */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-radial ${categoryAccents[index] ?? categoryAccents[0]} opacity-50 rounded-full -translate-y-8 translate-x-8 pointer-events-none`}
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, rgba(168,85,247,${0.15 - index * 0.02}) 0%, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="p-2 rounded-lg bg-[rgba(168,85,247,0.12)] text-accent-primary">
          <Icon size={16} aria-hidden="true" />
        </span>
        <h3 className="font-display text-sm font-semibold text-text-primary">{category.label}</h3>
      </div>

      {/* Badges */}
      <ul className="flex flex-wrap gap-2" aria-label={`Tecnologías en ${category.label}`}>
        {category.items.map((item) => (
          <li key={item}><Badge label={item} /></li>
        ))}
      </ul>
    </div>
  );
}

export default function TechStack() {
  const { sectionLabel, heading, categories } = techStackContent;
  const headingRef = useReveal();

  return (
    <section id="stack" aria-labelledby="stack-heading" className="relative px-6 py-24 sm:py-32">
      {/* Líneas decorativas */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      {/* Glow de fondo sutil */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse, #7C3AED 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="reveal" ref={headingRef}>
          <SectionHeading label={sectionLabel} heading={heading} className="mb-12" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.label} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
