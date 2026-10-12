import React, { useState } from 'react';
import {
  ArrowLeft,
  Command,
  FileText,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import { STATIC_NAV_ROUTES } from '../lib/catalogueEngine';
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

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  activeCaseStudySlug,
  onNavigateSection,
  onCloseCaseStudy,
  onOpenCommandPalette,
  onOpenResumeModal,
  theme,
  onToggleTheme,
  reducedMotion,
  onToggleReducedMotion,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-[#060911]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand Identity / Case Study Back Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-mono font-bold text-sm text-slate-950 shadow-sm">
              AP
            </div>
            <div>
              <div className="font-display font-bold text-sm tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                ANURAG PODDER
              </div>
              <div className="font-mono text-[10px] text-slate-400 hidden sm:block">
                AI &amp; DATA SCIENCE · SWE
              </div>
            </div>
          </button>

          {activeCaseStudySlug && (
            <button
              type="button"
              onClick={onCloseCaseStudy}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-400/40 text-indigo-200 font-mono text-xs transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Projects</span>
            </button>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1">
          {STATIC_NAV_ROUTES.map((route) => {
            const isActive =
              !activeCaseStudySlug && activeSection === route.id;
            return (
              <button
                key={route.id}
                type="button"
                onClick={() => handleNavClick(route.id)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-indigo-500/20 text-cyan-300 border border-indigo-500/40 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/70'
                }`}
              >
                <span className="text-[10px] text-slate-500">{route.number}</span>
                <span>{route.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Command Palette, Motion/Theme Controls & Resume */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            title="Open Command Palette (Ctrl+K / ⌘K)"
            className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-mono text-xs transition"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-slate-950 text-slate-400 border border-slate-800">
              ⌘K
            </kbd>
          </button>

          <button
            type="button"
            onClick={onToggleReducedMotion}
            title={
              reducedMotion
                ? 'Reduced Motion Enabled (Click to enable 60FPS animations)'
                : '60FPS Motion Enabled (Click to enable Reduced Motion)'
            }
            className={`px-2 py-1.5 rounded-lg border font-mono text-[11px] transition hidden md:inline-flex items-center gap-1 ${
              reducedMotion
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>{reducedMotion ? 'Motion: Off' : '60FPS'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle Dark or Editorial Light Theme"
            title={
              theme === 'dark'
                ? 'Switch to Direction B (Minimal Editorial Light Mode)'
                : 'Switch to Direction A+C (Premium Dark Engineering Mode)'
            }
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-300" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-medium transition shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Résumé</span>
          </button>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#070b14] px-4 py-3 space-y-1.5">
          {STATIC_NAV_ROUTES.map((route) => (
            <button
              key={route.id}
              type="button"
              onClick={() => handleNavClick(route.id)}
              className="w-full text-left px-3 py-2 rounded-lg font-mono text-xs text-slate-200 hover:bg-slate-900 flex items-center justify-between"
            >
              <span>
                <span className="text-indigo-400 mr-2">{route.number}</span>
                {route.label}
              </span>
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex-1 py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300 text-center"
            >
              Search Projects (⌘K)
            </button>
            <button
              type="button"
              onClick={onToggleReducedMotion}
              className="py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300"
            >
              {reducedMotion ? 'Motion: Reduced' : 'Motion: 60FPS'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

