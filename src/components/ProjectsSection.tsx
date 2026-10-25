import React, { useState } from 'react';
import {
  BookOpen,
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
import { Project, ProjectDomain, ProjectSlug } from '../types/portfolio';
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
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedInteractiveSlug, setExpandedInteractiveSlug] = useState<ProjectSlug | ''>(
    'roadvision-ai'
  );

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

  const renderProjectVisualHud = (project: Project) => {
    switch (project.slug) {
      case 'roadvision-ai':
        return (
          <div className="bg-surface-container-lowest border border-border-glass rounded-lg p-3 font-label-code text-label-code">
            <div className="text-text-muted text-label-badge font-label-badge border-b border-border-glass pb-1 mb-2 flex justify-between">
              <span>PIPELINE ARCHITECTURE</span>
              <span className="text-primary-container">YOLOV8 ENSEMBLE</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Distress Taxonomy:</span>
                <span className="text-text-primary">8 Defect Classes (ASTM D6433)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Post-Processing:</span>
                <span className="text-secondary">Weighted Boxes Fusion (WBF)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Index Generation:</span>
                <span className="text-tertiary-container">Deduct Value Curves → PCI Score</span>
              </div>
            </div>
          </div>
        );

      case 'datalens-global':
        return (
          <div className="bg-surface-container-lowest border border-border-glass rounded-lg p-3 font-label-code text-label-code">
            <div className="text-text-muted text-label-badge font-label-badge border-b border-border-glass pb-1 mb-2 flex justify-between">
              <span>SECURITY PROTOCOLS &amp; AUDIT TRAILS</span>
              <span className="text-tertiary-container">RLS: ENABLED</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Data Encryption:</span>
                <span className="text-text-primary">AES-256 (At-Rest) / TLS 1.3</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Tenant Isolation:</span>
                <span className="text-primary-container">Row-Level Security Policies</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Audit Stream:</span>
                <span className="text-secondary">Immutable Event Log via Redis Pub/Sub</span>
              </div>
            </div>
          </div>
        );

      case 'rooted-food-platform':
        return (
          <div className="bg-surface-container-lowest border border-border-glass rounded-lg p-3 font-label-code text-label-code">
            <div className="text-text-muted text-label-badge font-label-badge border-b border-border-glass pb-1 mb-2 flex justify-between">
              <span>HEURISTIC OPTIMIZER TELEMETRY</span>
              <span className="text-tertiary-container">DIJKSTRA: ONLINE</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              PostgreSQL 18 3NF schema with transactional constraints. Dynamic multi-stop routing
              with perishable spoilage decay windows. Target: <span className="text-primary-container">40% route efficiency</span> with zero transit SLA breaches.
            </p>
          </div>
        );

      case 'blume-research':
        return (
          <div className="bg-surface-container-lowest border border-border-glass rounded-lg p-3 font-label-code text-label-code">
            <div className="text-text-muted text-label-badge font-label-badge border-b border-border-glass pb-1 mb-2 flex justify-between">
              <span>MODEL INGESTION SPECS</span>
              <span className="text-primary-container">IJCRT2305259</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Frame sampling: 30 FPS downsampled to 10 FPS temporal windows. Convolutional 3D +
              Lucas-Kanade optical flow modules evaluated against real-world CCTV anomaly benchmarks.
            </p>
          </div>
        );

      default:
        return (
          <div className="bg-surface-container-lowest border border-border-glass rounded-lg p-3 font-label-code text-label-code">
            <div className="text-text-muted text-label-badge font-label-badge border-b border-border-glass pb-1 mb-2 flex justify-between">
              <span>MICROSERVICE TELEMETRY</span>
              <span className="text-secondary">CELERY WORKERS</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Distributed asynchronous task queue with Redis caching layer and OpenAPI schema validation.
            </p>
          </div>
        );
    }
  };

  return (
    <>
      {/* ================= 2. FLAGSHIP ENGINEERING CASE STUDIES ================= */}
      <section className="py-space-2xl max-w-[1320px] mx-auto px-space-md sm:px-space-xl" id="projects">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4 border-b border-border-glass pb-space-md">
          <div>
            <div className="flex items-center gap-2 text-primary-container font-label-badge text-label-badge mb-1 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
              PRODUCTION_DEPLOYMENTS // FLAGSHIP SYSTEMS
            </div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-text-primary tracking-tight">
              Pragmatic System Architecture &amp; Algorithmic Rigor
            </h2>
          </div>
          <p className="text-body-sm font-body-sm text-text-muted max-w-md">
            Production-grade AI solutions backed by resilient backend services, high-throughput
            pipelines, and measurable engineering outcomes.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="flex flex-col gap-space-xl">
          {FEATURED_PROJECTS.map((project) => {
            const isLabOpen = expandedInteractiveSlug === project.slug;

            return (
              <article
                key={project.slug}
                className="bg-surface-card/80 backdrop-blur-md border border-border-glass rounded-xl p-space-md md:p-space-xl glow-border transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                  {/* Architectural Summary (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-space-sm">
                        <span className="px-2 py-0.5 rounded-DEFAULT bg-primary-container/10 border border-primary-container/30 text-primary-container font-label-code text-label-code">
                          {project.primaryDomain.toUpperCase()}
                        </span>
                        <span className="px-2 py-0.5 rounded-DEFAULT bg-surface-container-high text-tertiary-container font-label-code text-label-code flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
                          {project.statusBadge}
                        </span>
                        <span className="text-label-badge font-label-badge text-text-muted">
                          FLAGSHIP #{project.featuredRank}
                        </span>
                      </div>

                      <h3 className="text-headline-md font-headline-md text-text-primary hover:text-primary-container transition-colors">
                        <button
                          type="button"
                          onClick={() => onOpenCaseStudy(project.slug)}
                          className="text-left"
                        >
                          {project.title}
                        </button>
                      </h3>

                      <p className="text-body-md font-body-md text-text-muted mt-space-sm">
                        {project.tagline}
                      </p>

                      {/* Tags Array */}
                      <div className="flex flex-wrap gap-1.5 my-space-md">
                        {project.tags.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() =>
                              onSelectTechTag(selectedTechTag === tag ? null : tag)
                            }
                            className={`px-2 py-1 rounded-DEFAULT font-label-code text-label-code border transition ${
                              selectedTechTag === tag
                                ? 'bg-primary-container/20 text-primary-container border-primary-container/50'
                                : 'bg-surface-container-low text-text-muted border-outline-variant/30 hover:text-text-primary'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-space-sm pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedInteractiveSlug(isLabOpen ? '' : project.slug)
                        }
                        className="inline-flex items-center gap-1.5 px-space-md py-2 bg-primary-container text-surface-base rounded-DEFAULT font-label-code text-label-code font-bold hover:shadow-[0_0_16px_rgba(0,240,255,0.4)] transition-all"
                      >
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>{isLabOpen ? 'Close Lab' : 'Try Interactive Lab'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenCaseStudy(project.slug)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 border border-border-glass hover:border-glow text-text-primary rounded-DEFAULT font-label-code text-label-code transition-all"
                      >
                        <span className="material-symbols-outlined text-[16px]">menu_book</span>
                        <span>Read Case Study</span>
                      </button>

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 border border-border-glass hover:border-glow text-text-muted hover:text-text-primary rounded-DEFAULT font-label-code text-label-code transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}

                      {project.links.liveDemo && (
                        <a
                          href={project.links.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 border border-border-glass hover:border-glow text-secondary rounded-DEFAULT font-label-code text-label-code transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Key Metrics + Interactive HUD Visual (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-space-sm">
                    {/* Metric Readout Grid */}
                    <div className="grid grid-cols-3 gap-2 bg-surface-base/80 p-3 rounded-lg border border-border-glass">
                      {project.heroMetrics.slice(0, 3).map((metric) => (
                        <div
                          key={metric.label}
                          className="text-center p-2 bg-surface-card rounded border border-outline-variant/20"
                        >
                          <div className="text-title-md font-title-md text-primary-container font-bold truncate">
                            {metric.value}
                          </div>
                          <div className="text-label-badge font-label-badge text-text-muted truncate">
                            {metric.label.toUpperCase()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive HUD Architecture Visualization */}
                    {renderProjectVisualHud(project)}
                  </div>
                </div>

                {/* Expanded Interactive Simulation Lab */}
                {isLabOpen && (
                  <div className="mt-6 pt-6 border-t border-border-glass">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-label-badge text-label-badge text-primary-container flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>INTERACTIVE LAB // {project.shortTitle.toUpperCase()}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setExpandedInteractiveSlug('')}
                        className="text-text-muted hover:text-text-primary font-label-code text-label-code flex items-center gap-1"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Close Lab</span>
                      </button>
                    </div>
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
      </section>

      {/* ================= 3. INTERACTIVE PROJECT REPOSITORY / CATALOGUE ================= */}
      <section
        className="py-space-2xl bg-surface-container-lowest/50 border-t border-b border-border-glass"
        id="catalogue"
      >
        <div className="max-w-[1320px] mx-auto px-space-md sm:px-space-xl">
          {/* Section Title & Filter Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-4">
            <div>
              <div className="flex items-center gap-2 text-primary-container font-label-badge text-label-badge mb-1 uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">view_comfy</span>
                TECHNICAL ARTIFACTS REGISTRY
              </div>
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-text-primary">
                Searchable All-Projects Catalogue
              </h2>
            </div>

            {/* Filterable category pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectDomain('All')}
                className={`px-3.5 py-1.5 rounded-full font-label-code text-label-code font-bold transition-all ${
                  selectedDomain === 'All'
                    ? 'bg-primary-container text-surface-base shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'bg-surface-card/80 border border-outline-variant/40 hover:border-glow text-text-muted hover:text-text-primary'
                }`}
              >
                All Projects (10)
              </button>
              {ALL_PROJECT_DOMAINS.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  onClick={() => onSelectDomain(domain)}
                  className={`px-3.5 py-1.5 rounded-full font-label-code text-label-code transition-all ${
                    selectedDomain === domain
                      ? 'bg-primary-container text-surface-base font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                      : 'bg-surface-card/80 border border-outline-variant/40 hover:border-glow text-text-muted hover:text-text-primary'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="mb-space-lg">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across stack, benchmarks, or tags..."
                className="w-full bg-surface-card/90 border border-border-glass rounded-DEFAULT pl-9 pr-8 py-2 text-xs font-label-code text-text-primary placeholder:text-text-muted/60 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Rich Technical Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {filteredAllProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-surface-card/80 border border-border-glass rounded-lg p-space-md flex flex-col justify-between hover:border-glow transition-all group"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-label-badge font-label-badge text-primary-container bg-primary-container/10 px-2 py-0.5 rounded-DEFAULT">
                      {project.primaryDomain.toUpperCase()}
                    </span>
                    <div className="flex gap-2 text-text-muted">
                      {project.links.github && (
                        <a
                          className="hover:text-primary-container"
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Source Code"
                        >
                          <span className="material-symbols-outlined text-[18px]">code</span>
                        </a>
                      )}
                      {project.links.liveDemo && (
                        <a
                          className="hover:text-primary-container"
                          href={project.links.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                        >
                          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                        </a>
                      )}
                      {project.links.paperUrl && (
                        <a
                          className="hover:text-primary-container"
                          href={project.links.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Paper URL"
                        >
                          <BookOpen className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-title-md font-title-md text-text-primary group-hover:text-primary-container transition-colors mb-2">
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy(project.slug)}
                      className="text-left"
                    >
                      {project.shortTitle}
                    </button>
                  </h4>

                  <p className="text-body-sm font-body-sm text-text-muted mb-4 line-clamp-3">
                    {project.subtitle}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 bg-surface-base text-text-muted text-[11px] font-label-code rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-border-glass pt-2 text-label-code font-label-code text-secondary flex justify-between items-center">
                    <span className="text-[11px] text-text-muted">BENCHMARK</span>
                    <span className="text-[11px] font-bold text-primary-container">
                      {project.heroMetrics[0]?.value ?? 'Verified'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
