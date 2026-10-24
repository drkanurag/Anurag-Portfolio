import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SDLC_PHASES } from '../data/engineeringData';
import { PROJECT_BY_SLUG } from '../lib/catalogueEngine';
import type { ProjectSlug } from '../types/portfolio';

interface SdlcSectionProps {
  onOpenCaseStudy: (slug: ProjectSlug) => void;
}

const STATUS_STYLE = {
  Done: 'bg-tertiary-container/20 text-tertiary-container border-tertiary-container/40',
  Partly: 'bg-secondary-container/20 text-secondary border-secondary-container/40',
  Planned: 'bg-surface-container-high text-text-muted border-outline-variant/40',
} as const;

export const SdlcSection: React.FC<SdlcSectionProps> = ({ onOpenCaseStudy }) => (
  <section id="sdlc" className="py-space-2xl max-w-[1320px] mx-auto px-space-md sm:px-space-xl border-b border-border-glass">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4 border-b border-border-glass pb-space-md">
      <div>
        <div className="flex items-center gap-2 text-primary-container font-label-badge text-label-badge mb-1 uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">developer_mode</span>
          ENGINEERING LIFECYCLE // 8 SDLC DISCIPLINES
        </div>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-text-primary">
          From Requirements to Running Software
        </h2>
      </div>
      <p className="text-body-sm font-body-sm text-text-muted max-w-md">
        The eight structured stages I follow with concrete evidence from production and project architectures.
      </p>
    </div>

    <ol className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {SDLC_PHASES.map((p) => {
        const project = p.caseStudy ? PROJECT_BY_SLUG.get(p.caseStudy) : undefined;
        return (
          <li
            key={p.id}
            className="rounded-xl bg-surface-card/80 border border-border-glass p-space-md md:p-5 flex flex-col justify-between glow-border transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-label-code text-label-code text-primary-container font-semibold">
                  {`${p.number} // ${p.title.toUpperCase()}`}
                </span>
                <span className={`px-2 py-0.5 rounded border font-label-badge text-[10px] ${STATUS_STYLE[p.status]}`}>
                  {p.status}
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-text-primary leading-relaxed">{p.whatIDo}</p>
              {p.evidence.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-xs text-text-muted font-label-code">
                  {p.evidence.map((e) => (
                    <li key={e} className="flex items-start gap-1.5">
                      <span className="text-primary-container">&gt;</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              )}
              {p.gap && (
                <p className="mt-3 p-2.5 rounded bg-surface-container-low border border-border-glass font-label-code text-xs text-secondary">
                  Target Next Step: {p.gap}
                </p>
              )}
            </div>

            {project && (
              <button
                type="button"
                onClick={() => onOpenCaseStudy(project.slug)}
                className="mt-4 inline-flex items-center gap-1.5 self-start font-label-code text-label-code text-primary-container hover:underline"
              >
                <span>Inspect in {project.shortTitle}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
