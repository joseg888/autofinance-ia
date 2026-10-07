'use client';

import { heroContent } from '@/lib/content';
import { ArrowRight, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

/* ── Elemento visual 3D: anillos orbitales animados ── */
function OrbitalRings() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      {/* Glow central nebular */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="nebula-blob-1 w-64 h-64 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #A855F7 0%, #7C3AED 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="nebula-blob-2 absolute w-48 h-48 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #E879F9 0%, #A855F7 50%, transparent 70%)',
            filter: 'blur(30px)',
            top: '20%',
            right: '15%',
          }}
        />
      </div>

      {/* SVG de anillos orbitales */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[480px] max-h-[480px] relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#A855F7" stopOpacity="0.9" />
            <stop offset="60%"  stopColor="#7C3AED" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06010F" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ringGrad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#E879F9" stopOpacity="0" />
            <stop offset="50%"  stopColor="#A855F7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
          </radialGradient>
          <filter id="blur-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Anillo exterior — gira lento */}
        <g className="ring-spin" style={{ transformOrigin: '200px 200px' }}>
          <ellipse
            cx="200" cy="200" rx="175" ry="60"
            fill="none"
            stroke="#A855F7"
            strokeWidth="1"
            strokeDasharray="12 6"
            opacity="0.35"
          />
          {/* Orbe en el anillo */}
          <circle cx="375" cy="200" r="5" fill="#E879F9" filter="url(#blur-glow)" opacity="0.9" />
        </g>

        {/* Anillo medio — inclinado, gira en reversa */}
        <g className="ring-spin-rev" style={{ transformOrigin: '200px 200px' }}>
          <ellipse
            cx="200" cy="200" rx="130" ry="45"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="1.5"
            strokeDasharray="8 4"
            opacity="0.5"
            transform="rotate(30, 200, 200)"
          />
          <circle
            cx="323" cy="160" r="4"
            fill="#A855F7"
            filter="url(#blur-glow)"
            opacity="0.95"
          />
        </g>

        {/* Anillo interior — rápido */}
        <g className="ring-spin-fast" style={{ transformOrigin: '200px 200px' }}>
          <ellipse
            cx="200" cy="200" rx="85" ry="28"
            fill="none"
            stroke="#818CF8"
            strokeWidth="1.5"
            opacity="0.6"
            transform="rotate(-20, 200, 200)"
          />
          <circle cx="284" cy="192" r="3.5" fill="#818CF8" filter="url(#blur-glow)" opacity="1" />
        </g>

        {/* Círculo de líneas tipo radar */}
        <circle
          cx="200" cy="200" r="160"
          fill="none"
          stroke="#2A1A5E"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="ring-draw"
        />
        <circle
          cx="200" cy="200" r="120"
          fill="none"
          stroke="#2A1A5E"
          strokeWidth="1"
          strokeDasharray="3 6"
          className="ring-draw"
          style={{ animationDelay: '0.3s' }}
        />

        {/* Núcleo central */}
        <circle cx="200" cy="200" r="28" fill="url(#centerGlow)" className="ring-pulse" />
        <circle cx="200" cy="200" r="14" fill="#A855F7" opacity="0.85" className="ring-pulse" />
        <circle cx="200" cy="200" r="6" fill="#F0EEFF" opacity="0.95" />

        {/* Cruz/crosshair central */}
        <line x1="200" y1="185" x2="200" y2="195" stroke="#F0EEFF" strokeWidth="1" opacity="0.6" />
        <line x1="205" y1="200" x2="215" y2="200" stroke="#F0EEFF" strokeWidth="1" opacity="0.6" />

        {/* Puntos de datos flotantes */}
        {[
          { cx: 90,  cy: 90,  r: 2.5, color: '#A855F7', opacity: 0.6 },
          { cx: 320, cy: 100, r: 2,   color: '#E879F9', opacity: 0.5 },
          { cx: 60,  cy: 300, r: 3,   color: '#818CF8', opacity: 0.55 },
          { cx: 340, cy: 310, r: 2,   color: '#A855F7', opacity: 0.6 },
          { cx: 150, cy: 50,  r: 2,   color: '#E879F9', opacity: 0.45 },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx} cy={dot.cy} r={dot.r}
            fill={dot.color}
            opacity={dot.opacity}
            style={{ animation: `ring-pulse ${3 + i * 0.7}s ease-in-out ${i * 0.4}s infinite` }}
          />
        ))}

        {/* Líneas de conexión tipo constelación */}
        <line x1="200" y1="200" x2="90"  y2="90"  stroke="#2A1A5E" strokeWidth="0.5" opacity="0.4" />
        <line x1="200" y1="200" x2="320" y2="100" stroke="#2A1A5E" strokeWidth="0.5" opacity="0.3" />
        <line x1="200" y1="200" x2="340" y2="310" stroke="#2A1A5E" strokeWidth="0.5" opacity="0.4" />
      </svg>
    </div>
  );
}

/* ── Partículas de fondo ── */
function Particles() {
  const particles = [
    { left: '10%', bottom: '20%', delay: '0s', color: '#A855F7' },
    { left: '25%', bottom: '15%', delay: '0.8s', color: '#E879F9' },
    { left: '40%', bottom: '25%', delay: '1.6s', color: '#818CF8' },
    { left: '60%', bottom: '10%', delay: '0.4s', color: '#A855F7' },
    { left: '75%', bottom: '30%', delay: '1.2s', color: '#E879F9' },
    { left: '88%', bottom: '18%', delay: '2s',   color: '#818CF8' },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            animationDelay: p.delay,
            animationDuration: `${3 + i * 0.5}s`,
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Hook de scroll reveal ── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Hero() {
  const { overline, headline, subheadline, ctas } = heroContent;

  return (
    <section
      id="hero"
      aria-label="Presentación"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Fondo nebular */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="nebula-blob-1 absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 65%)', filter: 'blur(80px)' }}
        />
        <div
          className="nebula-blob-2 absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 65%)', filter: 'blur(80px)' }}
        />
        {/* Líneas de grid muy sutiles */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#A855F7 1px, transparent 1px), linear-gradient(90deg, #A855F7 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <Particles />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Columna izquierda: texto ── */}
          <div className="flex flex-col gap-7">

            {/* Overline */}
            <span
              className="inline-flex items-center gap-2 font-data text-xs tracking-[0.2em] uppercase text-accent-primary animate-fade-up"
              style={{ opacity: 0, animationDelay: '0.1s' }}
            >
              <span className="w-6 h-px bg-accent-primary" />
              {overline}
            </span>

            {/* Headline */}
            <h1
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] animate-fade-up"
              style={{ opacity: 0, animationDelay: '0.25s' }}
            >
              {headline.split('\n').map((line, i) => (
                <span key={i} className={`block ${i === 1 ? 'text-gradient-purple' : 'text-text-primary'}`}>
                  {line}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className="text-base sm:text-lg text-text-muted max-w-[52ch] leading-relaxed animate-fade-up"
              style={{ opacity: 0, animationDelay: '0.42s' }}
            >
              {subheadline}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-2 animate-fade-up"
              style={{ opacity: 0, animationDelay: '0.58s' }}
            >
              {/* Primario — con borde gradiente animado */}
              <a
                href={ctas.primary.href}
                className="
                  relative inline-flex items-center justify-center gap-2.5
                  px-7 py-3.5 rounded-xl
                  font-display font-semibold text-sm text-white
                  overflow-hidden
                  transition-all duration-300
                  hover:scale-[1.03] active:scale-[0.98]
                  group
                "
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #A855F7, #7C3AED)',
                  backgroundSize: '200% 200%',
                  boxShadow: '0 0 24px rgba(168, 85, 247, 0.45)',
                }}
              >
                <span className="relative z-10">{ctas.primary.label}</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                {/* Shine effect */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #A855F7, #E879F9, #818CF8)', backgroundSize: '200% 200%' }}
                />
              </a>

              {/* Secundario */}
              <a
                href={ctas.secondary.href}
                className="
                  inline-flex items-center justify-center gap-2.5
                  px-7 py-3.5 rounded-xl
                  border border-border
                  font-display font-medium text-sm text-text-muted
                  transition-all duration-300
                  hover:border-accent-primary hover:text-text-primary
                  hover:bg-[rgba(168,85,247,0.06)]
                  hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
                  active:scale-[0.98]
                "
              >
                <Mail size={15} aria-hidden="true" />
                {ctas.secondary.label}
              </a>
            </div>

            {/* Stat badges */}
            <div
              className="flex flex-wrap gap-4 pt-2 animate-fade-up"
              style={{ opacity: 0, animationDelay: '0.72s' }}
            >
              {[
                { value: '4+', label: 'años de experiencia' },
                { value: 'FastAPI', label: 'Backend principal' },
                { value: 'End-to-End', label: 'Proyectos de IA' },
              ].map(({ value, label }) => (
                <div
                  key={value}
                  className="flex flex-col px-4 py-3 rounded-lg border border-border bg-surface gap-0.5"
                >
                  <span className="font-display font-bold text-lg text-gradient-purple leading-none">{value}</span>
                  <span className="font-data text-[10px] text-text-muted uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: elemento visual 3D ── */}
          <div
            className="hidden lg:flex items-center justify-center h-[500px] animate-fade-up"
            style={{ opacity: 0, animationDelay: '0.35s' }}
          >
            <OrbitalRings />
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30" aria-hidden="true">
        <span className="font-data text-[9px] tracking-widest text-text-muted uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent-primary to-transparent" />
      </div>
    </section>
  );
}
