import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Code2,
  Compass,
  ExternalLink,
  FileText,
  Search,
  X,
} from 'lucide-react';
import { PROFILE_DATA, PROJECTS_CATALOGUE } from '../data/portfolioData';
import { STATIC_NAV_ROUTES } from '../lib/catalogueEngine';
import { ProjectSlug } from '../types/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (slug: ProjectSlug) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onNavigateSection,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();
  const matchedProjects = PROJECTS_CATALOGUE.filter(
    (p) =>
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.primaryDomain.toLowerCase().includes(q)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-sm"
    >
      <div className="w-full max-w-2xl rounded-2xl bg-[#090e1c] border border-slate-700 shadow-2xl overflow-hidden">
        <div className="flex items-center px-4 py-3 border-b border-slate-800">
          <Search className="w-4 h-4 text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to any case study, section, or technology (e.g. RoadVision, PostgreSQL, IJCRT)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Case Studies */}
          <div>
            <div className="px-2 pb-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Engineering Case Studies ({matchedProjects.length})
            </div>
            <div className="space-y-1">
              {matchedProjects.map((proj) => (
                <button
                  key={proj.slug}
                  type="button"
                  onClick={() => {
                    onSelectProject(proj.slug);
                    onClose();
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-900 flex items-center justify-between gap-2 group"
                >
                  <div>
                    <div className="font-display text-sm font-semibold text-white group-hover:text-cyan-300">
                      {proj.title}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400">
                      {proj.primaryDomain} · {proj.tags.slice(0, 3).join(' · ')}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div>
            <div className="px-2 pb-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Portfolio Sections
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {STATIC_NAV_ROUTES.map((route) => (
                <button
                  key={route.id}
                  type="button"
                  onClick={() => {
                    onNavigateSection(route.id);
                    onClose();
                  }}
                  className="px-3 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-left font-mono text-xs text-slate-200"
                >
                  <span className="text-indigo-400 mr-1.5">{route.number}</span>
                  {route.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="px-3 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-left font-mono text-xs text-indigo-200"
              >
                📄 View Résumé
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

