import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import {
  ALL_PROJECT_DOMAINS,
  FEATURED_PROJECTS,
  filterProjectsCatalogue,
} from '../lib/catalogueEngine';
import { ProjectDomain, ProjectSlug } from '../types/portfolio';
import { InteractiveProjectLab } from './InteractiveProjectLab';

interface ProjectsSectionProps {
  selectedDomain: ProjectDomain | 'All';
  onSelectDomain: (domain: ProjectDomain | 'All') => void;
  selectedTechTag: string | null;
  onSelectTechTag: (tag: string | null) => void;
  onOpenCaseStudy: (slug: ProjectSlug) => void;
  reducedMotion: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedDomain,
  onSelectDomain,
  selectedTechTag,
  onSelectTechTag,
  onOpenCaseStudy,
  reducedMotion,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedInteractiveSlug, setExpandedInteractiveSlug] = useState<ProjectSlug>('roadvision-ai');

  const techTagSet = React.useMemo(
    () => (selectedTechTag ? new Set([selectedTechTag]) : undefined),
    [selectedTechTag]
  );

  const filteredAllProjects = React.useMemo(
    () =>
      filterProjectsCatalogue({
        selectedDomain,
        selectedTechTags: techTagSet,
        searchQuery,
      }),
    [selectedDomain, techTagSet, searchQuery]
  );

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
              <span>02 / FEATURED SYSTEMS &amp; CASE STUDIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Flagship Engineering Case Studies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Leading with technical depth across Computer Vision, Enterprise Data Governance,
              PostgreSQL 18 3NF Systems, Peer-Reviewed AI Research, and Resilient Frontend Architecture.
              Every project includes an interactive demonstration and a full 8-part engineering case study.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              5 Flagship Deep Dives
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">
              10 Verified GitHub Repositories
            </span>
          </div>
        </div>

        {/* 5 Flagship Case-Study Cards */}
        <div className="space-y-10">
          {FEATURED_PROJECTS.map((project) => {
            const isLabOpen = expandedInteractiveSlug === project.slug;
            const accentBorder =
              project.accentColor === 'cyan'
                ? 'border-cyan-500/30 hover:border-cyan-400/60'
                : project.accentColor === 'indigo'
                ? 'border-indigo-500/30 hover:border-indigo-400/60'
                : project.accentColor === 'emerald'
                ? 'border-emerald-500/30 hover:border-emerald-400/60'
                : project.accentColor === 'violet'
                ? 'border-violet-500/30 hover:border-violet-400/60'
                : 'border-amber-500/30 hover:border-amber-400/60';

            return (
              <article
                key={project.slug}
                className={`rounded-2xl bg-[#090e1c]/95 border ${accentBorder} p-6 sm:p-8 shadow-xl transition-all`}
              >
                {/* Top Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 border border-indigo-400/40 font-mono text-xs font-bold text-indigo-300">
                      {project.featuredRank} · FEATURED CASE STUDY
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 font-mono text-xs text-cyan-300">
                      {project.primaryDomain}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 font-mono text-[11px] text-emerald-300">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Direct Action Links */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.links.liveDemo && (
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-200 font-mono text-xs transition"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links.paperUrl && (
                      <a
                        href={project.links.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/40 text-violet-200 font-mono text-xs transition"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>IJCRT Publication</span>
                      </a>
                    )}
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs transition"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-3">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy(project.slug)}
                        className="text-left hover:text-cyan-300 transition-colors"
                      >
                        {project.title}
                      </button>
                    </h3>
                    <p className="font-mono text-xs text-indigo-300">{project.subtitle}</p>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Problem -> Solution Quick Digest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-amber-400 mb-1">
                          Engineering Problem
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy.problem.headline}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 mb-1">
                          Architectural Solution
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy.solution.headline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right 5 Columns: Verified Metrics Grid */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                    {project.heroMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-mono text-[11px] text-slate-400">{metric.label}</span>
                          {metric.verified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          )}
                        </div>
                        <div className="font-display text-lg sm:text-xl font-bold text-white mt-1">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {metric.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges & Case Study CTA Bar */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() =>
                          onSelectTechTag(selectedTechTag === tag ? null : tag)
                        }
                        className={`px-2.5 py-1 rounded-md font-mono text-xs transition ${
                          selectedTechTag === tag
                            ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200'
                            : 'bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedInteractiveSlug(
                          isLabOpen ? ('' as ProjectSlug) : project.slug
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 font-mono text-xs transition"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>
                        {isLabOpen ? 'Hide Interactive Demo' : 'Launch Interactive Lab'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy(project.slug)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-mono text-xs font-semibold shadow-md transition group"
                    >
                      <span>Read Full Case Study (8 Sections)</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Embedded Interactive Demonstration Sandbox */}
                {isLabOpen && (
                  <div className="mt-6">
                    <InteractiveProjectLab
                      demoType={project.interactiveDemoType}
                      project={project}
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Searchable & Filterable All-Projects Catalogue (10 Repositories) */}
        <div
          id="all-projects-catalogue"
          className="mt-20 pt-16 border-t border-slate-800/80"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-1">
                COMPLETE PROJECT DIRECTORY · O(1) MAP &amp; SET ENGINE
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Searchable All-Projects Catalogue ({filteredAllProjects.length} / 10)
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Filter across AI/ML, Data Analytics, Backend &amp; Web Development, or search by
                technology, standard, or problem domain. Every card links to real repositories and
                working demos.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search e.g. PostgreSQL, YOLOv8, RLS, DOCX..."
                aria-label="Search all projects"
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Domain Filter Chips + Active Tag Chip */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => onSelectDomain('All')}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs border transition ${
                selectedDomain === 'All'
                  ? 'bg-indigo-600 text-white border-indigo-500 font-semibold'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              All Domains (10)
            </button>
            {ALL_PROJECT_DOMAINS.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => onSelectDomain(domain)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs border transition ${
                  selectedDomain === domain
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 font-semibold'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {domain}
              </button>
            ))}

            {selectedTechTag && (
              <button
                type="button"
                onClick={() => onSelectTechTag(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-200 font-mono text-xs"
              >
                <span>Tag: {selectedTechTag}</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* All Projects Grid */}
          {filteredAllProjects.length === 0 ? (
            <div className="p-10 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <p className="font-mono text-sm text-slate-300">
                No projects matched your current filter combination.
              </p>
              <button
                type="button"
                onClick={() => {
                  onSelectDomain('All');
                  onSelectTechTag(null);
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-indigo-600 text-white font-mono text-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredAllProjects.map((proj) => (
                <div
                  key={proj.slug}
                  className={`rounded-2xl bg-slate-900/75 border border-slate-800/90 hover:border-indigo-500/50 p-5 flex flex-col justify-between transition-all ${
                    !reducedMotion ? 'hover:-translate-y-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 font-mono text-[11px] text-cyan-300">
                        {proj.primaryDomain}
                      </span>
                      {proj.featured && (
                        <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px] border border-indigo-500/30">
                          Featured #{proj.featuredRank}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-lg font-bold text-white leading-snug">
                      {proj.shortTitle}
                    </h4>
                    <div className="font-mono text-[11px] text-slate-400 mt-0.5">
                      {proj.subtitle}
                    </div>
                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                      {proj.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {proj.tags.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800/90 font-mono text-[10px] text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy(proj.slug)}
                      className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-cyan-300 hover:text-white transition"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {proj.links.liveDemo && (
                        <a
                          href={proj.links.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 font-mono text-[11px] text-emerald-300"
                        >
                          Live ↗
                        </a>
                      )}
                      {proj.links.paperUrl && (
                        <a
                          href={proj.links.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded bg-violet-500/15 hover:bg-violet-500/25 border border-violet-500/30 font-mono text-[11px] text-violet-300"
                        >
                          Paper ↗
                        </a>
                      )}
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 font-mono text-[11px] text-slate-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
