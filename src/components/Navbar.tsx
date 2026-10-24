import React, { useState } from 'react';
import {
  ArrowLeft,
  Command,
  FileText,
  Menu,
  Moon,
  Sun,
  Terminal,
  X,
} from 'lucide-react';
import { ProjectSlug } from '../types/portfolio';

interface NavbarProps {
  activeSection: string;
  activeCaseStudySlug: ProjectSlug | null;
  onNavigateSection: (sectionId: string) => void;
  onCloseCaseStudy: () => void;
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { id: 'hero', label: 'Telemetry' },
  { id: 'projects', label: 'Case Studies' },
  { id: 'catalogue', label: 'Catalogue' },
  { id: 'skills', label: 'Skills' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Milestones' },
  { id: 'architecture', label: 'Systems' },
  { id: 'contact', label: 'Console' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  activeCaseStudySlug,
  onNavigateSection,
  onCloseCaseStudy,
  onOpenCommandPalette,
  onOpenResumeModal,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-glass backdrop-blur-md border-b border-border-glass shadow-[0_20px_40px_rgba(0,0,0,0.65)]">
      <div className="flex justify-between items-center w-full px-space-md sm:px-space-xl max-w-[1320px] mx-auto py-space-sm">
        {/* Brand Logo / Identity */}
        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_10px_#00F0FF] animate-pulse shrink-0" />
            <span className="text-title-md font-title-md tracking-wider text-text-primary uppercase group-hover:text-primary-container transition-colors">
              ANURAG PODDER // AI ARCHITECT
            </span>
          </button>

          {activeCaseStudySlug && (
            <button
              type="button"
              onClick={onCloseCaseStudy}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-DEFAULT bg-primary-container/10 hover:bg-primary-container/20 border border-primary-container/40 text-primary-container font-label-code text-label-code transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </button>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = !activeCaseStudySlug && activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`font-label-code text-label-code transition-colors ${
                  isActive
                    ? 'text-primary-container border-b-2 border-primary-container pb-1 font-semibold'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center gap-space-xs sm:gap-space-sm">
          {/* Cmd+K Quick Filter Pill */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            title="Search command palette (Ctrl+K / Cmd+K)"
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-DEFAULT bg-surface-card border border-border-glass text-text-muted hover:text-text-primary hover:border-glow font-label-code text-label-code transition-all"
          >
            <Command className="w-3.5 h-3.5 text-primary-container" />
            <span className="text-[11px]">Search</span>
            <kbd className="px-1 py-0.5 rounded bg-surface-container-high text-[10px] text-text-muted border border-outline-variant/30">
              ⌘K
            </kbd>
          </button>

          {/* Deploy Contact CTA */}
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-DEFAULT text-surface-base bg-primary-container font-label-code text-label-code font-bold hover:shadow-[0_0_16px_rgba(0,240,255,0.4)] active:scale-95 transition-all"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Deploy Contact</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-DEFAULT border border-border-glass text-text-primary hover:border-glow hover:text-primary-container font-label-code text-label-code active:scale-95 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-primary-container" />
            <span>Resume.sys</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-label="Toggle theme"
            className="p-1.5 rounded-DEFAULT border border-border-glass text-text-muted hover:text-primary-container hover:border-glow transition"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-primary-container" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-1.5 rounded-DEFAULT border border-border-glass text-text-muted hover:text-text-primary"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-primary-container" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border-glass bg-surface-base/95 backdrop-blur-xl px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`p-2.5 rounded-DEFAULT text-left font-label-code text-label-code border ${
                  activeSection === item.id
                    ? 'bg-primary-container/10 border-primary-container text-primary-container font-bold'
                    : 'border-border-glass text-text-muted hover:text-text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 py-2 px-3 rounded-DEFAULT border border-border-glass text-text-primary font-label-code text-label-code text-center"
            >
              Resume.sys
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('contact');
              }}
              className="flex-1 py-2 px-3 rounded-DEFAULT bg-primary-container text-surface-base font-label-code text-label-code font-bold text-center"
            >
              Deploy Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
