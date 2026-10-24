import { useEffect, useState } from 'react';
import { CommandPalette } from './components/CommandPalette';
import { ContactSection } from './components/ContactSection';
import { EngineeringApproachSection } from './components/EngineeringApproachSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectCaseStudyPage } from './components/ProjectCaseStudyPage';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { ResumeModal } from './components/ResumeModal';
import { SdlcSection } from './components/SdlcSection';
import { TechnicalExpertiseSection } from './components/TechnicalExpertiseSection';
import { getProjectBySlug, STATIC_NAV_ROUTES } from './lib/catalogueEngine';
import { ProjectDomain, ProjectSlug } from './types/portfolio';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [activeCaseStudySlug, setActiveCaseStudySlug] = useState<ProjectSlug | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<ProjectDomain | 'All'>('All');
  const [selectedTechTag, setSelectedTechTag] = useState<string | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      /* storage unavailable */
    }
    return 'dark';
  });
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Dynamic document title based on active case study
  useEffect(() => {
    const project = getProjectBySlug(activeCaseStudySlug);
    document.title = project
      ? `${project.title} — Case Study | Anurag Podder`
      : 'Anurag Podder — AI & Data Science Engineer';
  }, [activeCaseStudySlug]);

  // Sync URL hash for shareable Case Study pages (#/projects/:slug)
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/projects/')) {
        const rawSlug = hash.replace('#/projects/', '').trim();
        const found = getProjectBySlug(rawSlug);
        if (found) {
          setActiveCaseStudySlug(found.slug);
          window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
          return;
        }
      }
      setActiveCaseStudySlug(null);
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [reducedMotion]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Theme class sync & local persistence
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('theme-editorial-light');
    } else {
      root.classList.remove('theme-editorial-light');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  // Active section IntersectionObserver
  useEffect(() => {
    if (activeCaseStudySlug) return;
    const sectionIds = STATIC_NAV_ROUTES.map((r) => r.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.05 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeCaseStudySlug]);

  const handleOpenCaseStudy = (slug: ProjectSlug) => {
    window.location.hash = `#/projects/${slug}`;
    setActiveCaseStudySlug(slug);
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const handleCloseCaseStudy = () => {
    if (window.location.hash.startsWith('#/projects/')) {
      history.pushState(null, '', window.location.pathname);
    }
    setActiveCaseStudySlug(null);
    setTimeout(() => {
      const projSection = document.getElementById('projects');
      if (projSection) {
        projSection.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      }
    }, 30);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (activeCaseStudySlug) {
      if (window.location.hash.startsWith('#/projects/')) {
        history.pushState(null, '', window.location.pathname);
      }
      setActiveCaseStudySlug(null);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      }, 40);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  const handleExploreProjects = (domainFilter?: ProjectDomain) => {
    if (domainFilter) {
      setSelectedDomain(domainFilter);
      const catalogueEl = document.getElementById('catalogue') || document.getElementById('all-projects-catalogue');
      if (catalogueEl) {
        catalogueEl.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
        return;
      }
    }
    handleNavigateSection('projects');
  };

  const activeCaseStudyProject = getProjectBySlug(activeCaseStudySlug);

  return (
    <div className="min-h-screen bg-surface-base text-text-primary antialiased selection:bg-primary-container selection:text-surface-base relative overflow-x-hidden">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-cyan-500 focus:text-slate-950 focus:font-mono focus:text-xs focus:font-bold"
      >
        Skip to main content
      </a>

      <Navbar
        activeSection={activeSection}
        activeCaseStudySlug={activeCaseStudySlug}
        onNavigateSection={handleNavigateSection}
        onCloseCaseStudy={handleCloseCaseStudy}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion((m) => !m)}
      />

      <main id="main-content">
        {activeCaseStudyProject ? (
          <ProjectCaseStudyPage
            project={activeCaseStudyProject}
            onClose={handleCloseCaseStudy}
            onSelectProject={handleOpenCaseStudy}
          />
        ) : (
          <>
            <HeroSection
              onExploreProjects={handleExploreProjects}
              onOpenCaseStudy={handleOpenCaseStudy}
              onOpenResumeModal={() => setResumeModalOpen(true)}
              reducedMotion={reducedMotion}
            />

            <ProjectsSection
              selectedDomain={selectedDomain}
              onSelectDomain={setSelectedDomain}
              selectedTechTag={selectedTechTag}
              onSelectTechTag={setSelectedTechTag}
              onOpenCaseStudy={handleOpenCaseStudy}
              reducedMotion={reducedMotion}
            />

            <TechnicalExpertiseSection onOpenCaseStudy={handleOpenCaseStudy} />

            <ExperienceSection />

            <ResearchSection onOpenCaseStudy={handleOpenCaseStudy} />

            <SdlcSection onOpenCaseStudy={handleOpenCaseStudy} />

            <EngineeringApproachSection onOpenCaseStudy={handleOpenCaseStudy} />

            <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
          </>
        )}
      </main>

      <Footer onNavigateSection={handleNavigateSection} />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={handleOpenCaseStudy}
        onNavigateSection={handleNavigateSection}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
