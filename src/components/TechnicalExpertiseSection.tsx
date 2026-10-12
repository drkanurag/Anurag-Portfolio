import React, { useState } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Database,
  Layout,
  Server,
  ShieldCheck,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { getProjectBySlug } from '../lib/catalogueEngine';
import { ProjectSlug, SkillDomainId } from '../types/portfolio';

interface TechnicalExpertiseSectionProps {
  onOpenCaseStudy: (slug: ProjectSlug) => void;
}

export const TechnicalExpertiseSection: React.FC<TechnicalExpertiseSectionProps> = ({
  onOpenCaseStudy,
}) => {
  const [activeDomainId, setActiveDomainId] = useState<SkillDomainId | 'all'>('all');

  const visibleCategories =
    activeDomainId === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeDomainId);

  const renderDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-violet-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
              03 / TECHNICAL EXPERTISE BY ENGINEERING DOMAIN
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Evidence-Backed Engineering Competencies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Grouped by engineering domain rather than arbitrary proficiency percentages. Every
              capability is linked directly to the production work at Mphasis, MEC Tech, or
              verified project case studies where it was applied.
            </p>
          </div>

          {/* Domain Selector Tabs */}
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setActiveDomainId('all')}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs border transition ${
                activeDomainId === 'all'
                  ? 'bg-indigo-600 text-white border-indigo-500 font-semibold'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              All 6 Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveDomainId(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs border transition ${
                  activeDomainId === cat.id
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 font-semibold'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {cat.title.split(',')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-[#090e1c]/95 border border-slate-800/90 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {renderDomainIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {category.title}
                      </h3>
                      <div className="font-mono text-xs text-indigo-300">
                        {category.subtitle}
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-400 shrink-0">
                    {category.skills.length} Core Skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="font-mono text-xs sm:text-sm font-semibold text-white">
                            {skill.name}
                          </span>
                        </div>
                        {skill.isCoreHighlight && (
                          <span className="px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/30 font-mono text-[10px] text-cyan-300">
                            Primary Specialization
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 mt-1.5 pl-5">
                        {skill.roleContext}
                      </p>

                      {/* Linked Project Evidence Pills (O(1) Map Lookup) */}
                      {skill.appliedInProjects && skill.appliedInProjects.length > 0 && (
                        <div className="mt-2.5 pl-5 flex flex-wrap items-center gap-1.5">
                          <span className="font-mono text-[10px] text-slate-500">
                            Verified in:
                          </span>
                          {skill.appliedInProjects.map((slug) => {
                            const proj = getProjectBySlug(slug);
                            if (!proj) return null;
                            return (
                              <button
                                key={slug}
                                type="button"
                                onClick={() => onOpenCaseStudy(slug)}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-950 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 font-mono text-[10px] text-indigo-300 transition"
                              >
                                <span>{proj.shortTitle}</span>
                                <ArrowUpRight className="w-2.5 h-2.5" />
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

