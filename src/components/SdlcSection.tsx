import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SDLC_PHASES } from '../data/engineeringData';
import { PROJECT_BY_SLUG } from '../lib/catalogueEngine';
import type { ProjectSlug } from '../types/portfolio';

interface SdlcSectionProps {
  onOpenCaseStudy: (slug: ProjectSlug) => void;
}

const STATUS_STYLE = {
  Done: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Partly: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Planned: 'bg-slate-700/40 text-slate-300 border-slate-600',
} as const;

export const SdlcSection: React.FC<SdlcSectionProps> = ({ onOpenCaseStudy }) => (
  <section id="sdlc" className="py-20 sm:py-24 border-b border-slate-800/80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
          06 / HOW I BUILD (SDLC)
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          From Requirements to Running Software
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">
          The eight stages I follow, with what I actually did at each one and what is still a gap.
        </p>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SDLC_PHASES.map((p) => {
          const project = p.caseStudy ? PROJECT_BY_SLUG.get(p.caseStudy) : undefined;
          return (
            <li key={p.id} className="rounded-2xl bg-[#090e1c] border border-slate-800/90 p-5 flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs text-indigo-300">
                  {p.number} · {p.title}
                </span>
                <span className={`px-2 py-0.5 rounded border font-mono text-[10px] ${STATUS_STYLE[p.status]}`}>
                  {p.status}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{p.whatIDo}</p>
              {p.evidence.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                  {p.evidence.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              )}
              {p.gap && (
                <p className="mt-3 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                  Next step: {p.gap}
                </p>
              )}
              {project && (
                <button
                  type="button"
                  onClick={() => onOpenCaseStudy(project.slug)}
                  className="mt-3 inline-flex items-center gap-1.5 self-start font-mono text-xs text-cyan-300 hover:underline"
                >
                  <span>See it in {project.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
