import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { siteConfig } from '@/lib/content';

export default function Page() {
  return (
    <>
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only
          focus:fixed focus:top-4 focus:left-4
          focus:z-[100]
          px-4 py-2 rounded
          bg-accent-primary text-bg
          font-display font-semibold text-sm
        "
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-data text-xs text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name} — Todos los derechos reservados
          </p>
          <p className="font-data text-xs text-text-muted">
            Construido con{' '}
            <span className="text-accent-primary">Next.js</span>
            {' '}·{' '}
            <span className="text-accent-primary">TypeScript</span>
            {' '}·{' '}
            <span className="text-accent-primary">Tailwind</span>
          </p>
        </div>
      </footer>
    </>
  );
}
