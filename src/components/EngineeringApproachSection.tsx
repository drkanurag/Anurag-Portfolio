import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { PORTFOLIO_DATA_STRUCTURES, PROJECTS_CATALOGUE } from '../data/portfolioData';
import { PROJECT_ALGORITHMS } from '../data/engineeringData';
import {
  NORMALIZED_SEARCH_INDEX,
  PROJECT_BY_SLUG,
} from '../lib/catalogueEngine';
import { ProjectSlug } from '../types/portfolio';

interface EngineeringApproachSectionProps {
  onOpenCaseStudy: (slug: ProjectSlug) => void;
}

const ARCHITECTURE_LAYERS = [
  {
    layer: '01 · Presentation Layer',
    tech: 'React 18 · Tailwind CSS · Accessible Dialogs · Reduced-Motion Support',
    responsibility:
      'Responsive dark-engineering UI, keyboard navigation (⌘K), transform/opacity hardware acceleration, and reduced-motion support.',
  },
  {
    layer: '02 · Application & Routing Layer',
    tech: 'TypeScript · Deterministic Route State · Deep-Link Slugs',
    responsibility:
      'Instant case-study view transitions (#/projects/:slug), Set-based multi-tag filtering, and pre-normalized token search.',
  },
  {
    layer: '03 · Typed Content Repository',
    tech: 'ReadonlyMap<ProjectSlug, Project> · Strict TS Contracts',
    responsibility:
      'Single source of truth for 8-section project case studies, domain skills, timeline metrics, and IJCRT research benchmarks.',
  },
  {
    layer: '04 · GitHub & Live Demo Integration',
    tech: 'GitHub Repositories · In-Browser Demo Labs',
    responsibility:
      "Links to each project's repository and interactive in-browser demos (RoadVision, DataLens, Rooted, BLUME, AETHER). Demos run on sample data.",
  },
  {
    layer: '05 · Delivery & Engineering Quality',
    tech: 'Vite · Node Test Runner · GitHub Actions CI/CD',
    responsibility:
      'Static CDN delivery with zero-config GitHub Pages & Vercel compatibility, automated TypeScript checks, and unit tests.',
  },
];

export const EngineeringApproachSection: React.FC<EngineeringApproachSectionProps> = ({
  onOpenCaseStudy,
}) => {
  const [testSlug, setTestSlug] = useState<ProjectSlug>('roadvision-ai');

  const resolvedProject = PROJECT_BY_SLUG.get(testSlug);
  const indexedTokensPreview = (NORMALIZED_SEARCH_INDEX.get(testSlug) || '').slice(0, 145) + '...';

  return (
    <section
      id="architecture"
      className="py-space-2xl max-w-[1320px] mx-auto px-space-md sm:px-space-xl border-b border-border-glass"
    >
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4 border-b border-border-glass pb-space-md">
        <div>
          <div className="flex items-center gap-2 text-primary-container font-label-badge text-label-badge mb-1 uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">hub</span>
            SYSTEM DESIGN // COMPLEXITY MATRIX
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-text-primary tracking-tight">
            Pragmatic System Architecture &amp; Algorithmic Rigor
          </h2>
        </div>
        <p className="text-body-sm font-body-sm text-text-muted max-w-md">
          Matching architectural complexity to domain constraints: clean O(1) in-memory structures
          on the client, with resilient microservices and relational normalization on the backend.
        </p>
      </div>

      {/* 5-Layer Portfolio System Architecture Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
        <div className="lg:col-span-7 rounded-xl bg-surface-card/80 border border-border-glass p-space-md md:p-space-lg glow-border transition-all">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-glass">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary-container" />
              <h3 className="font-title-md text-title-md font-bold text-text-primary">
                5-Layer Portfolio System Architecture
              </h3>
            </div>
            <span className="font-label-code text-xs text-primary-container">
              Static CDN + Typed Engine
            </span>
          </div>

          <div className="space-y-3">
            {ARCHITECTURE_LAYERS.map((item) => (
              <div
                key={item.layer}
                className="p-3.5 rounded-lg bg-surface-container-lowest border border-border-glass hover:border-glow transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-label-code text-xs font-bold text-primary-container">
                    {item.layer}
                  </span>
                  <span className="font-label-code text-[11px] text-text-muted">
                    {item.tech}
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-text-muted mt-1 leading-relaxed">
                  {item.responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Live O(1) Map Hash Lookup Simulator */}
        <div className="lg:col-span-5 rounded-xl bg-surface-card/80 border border-border-glass p-space-md md:p-space-lg flex flex-col justify-between glow-border transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-border-glass">
              <div className="font-label-badge text-label-badge text-tertiary-container uppercase">
                O(1) Map Hash Lookup Inspector
              </div>
              <span className="font-label-code text-[10px] text-tertiary-container bg-surface-container-high px-2 py-0.5 rounded">
                Hash Map Target
              </span>
            </div>

            <p className="text-body-sm font-body-sm text-text-muted mb-4">
              Select a project slug to observe direct Hash-Map access without $O(N)$ linear scans.
            </p>

            {/* Slug Selector Buttons */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {PROJECTS_CATALOGUE.slice(0, 5).map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setTestSlug(p.slug)}
                  className={`px-2.5 py-1 rounded font-label-code text-xs border transition ${
                    testSlug === p.slug
                      ? 'bg-primary-container text-surface-base border-primary-container font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                      : 'bg-surface-container-lowest border-border-glass text-text-muted hover:text-text-primary'
                  }`}
                >
                  {p.slug}
                </button>
              ))}
            </div>

            {/* Resolved Memory Node */}
            {resolvedProject && (
              <div className="p-3.5 rounded bg-surface-container-lowest border border-border-glass space-y-2 font-label-code text-label-code">
                <div className="text-[11px] text-text-muted">
                  MAP_LOOKUP_KEY: <span className="text-primary-container">&quot;{testSlug}&quot;</span>
                </div>
                <div className="text-xs text-text-primary font-semibold">
                  RESOLVED_TITLE: {resolvedProject.shortTitle}
                </div>
                <div className="text-[11px] text-secondary">
                  DOMAIN: {resolvedProject.primaryDomain} · ORDER: #{resolvedProject.order}
                </div>
                <div className="text-[10px] text-text-muted border-t border-border-glass pt-2 truncate">
                  TOKEN_INDEX: {indexedTokensPreview}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-border-glass flex items-center justify-between">
            <span className="font-label-code text-xs text-text-muted">Direct Case Study Access:</span>
            <button
              type="button"
              onClick={() => onOpenCaseStudy(testSlug)}
              className="px-3 py-1.5 rounded bg-primary-container text-surface-base font-label-code text-xs font-bold hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all"
            >
              Open {testSlug} →
            </button>
          </div>
        </div>
      </div>

      {/* Data Structures & Complexity Table Across Featured Projects */}
      <div className="rounded-xl bg-surface-card/80 border border-border-glass p-space-md md:p-space-lg mb-space-xl glow-border transition-all">
        <div className="mb-4">
          <div className="font-label-badge text-label-badge text-primary-container mb-1">
            DATA STRUCTURES &amp; ALGORITHMS IN PRODUCTION
          </div>
          <h3 className="font-title-md text-title-md font-bold text-text-primary">
            Algorithms &amp; Data Structures by Project
          </h3>
          <p className="text-body-sm font-body-sm text-text-muted mt-1">
            Concrete algorithmic decisions implemented across each project, with time and space complexity bounds.
          </p>
        </div>

        <div className="overflow-x-auto rounded border border-border-glass">
          <table className="w-full text-left border-collapse font-label-code text-xs">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-border-glass text-text-muted">
                <th className="p-3">Requirement / Project</th>
                <th className="p-3">Data Structure / Algorithm</th>
                <th className="p-3">Complexity Bounds</th>
                <th className="p-3">Engineering Purpose &amp; Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-glass/60 bg-surface-base/80">
              {PROJECT_ALGORITHMS.map((algo) => (
                <tr key={`${algo.requirement}-${algo.structure}`} className="hover:bg-surface-container-high/40 transition">
                  <td className="p-3 font-semibold text-text-primary">{algo.requirement}</td>
                  <td className="p-3 text-primary-container">{algo.structure}</td>
                  <td className="p-3 font-mono text-tertiary-container">{algo.complexity}</td>
                  <td className="p-3 text-text-muted">{algo.rationale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* In-Memory Portfolio Data Structures Table */}
      <div className="rounded-xl bg-surface-card/80 border border-border-glass p-space-md md:p-space-lg glow-border transition-all">
        <div className="mb-4">
          <div className="font-label-badge text-label-badge text-secondary mb-1">
            PORTFOLIO ENGINE COMPLEXITY
          </div>
          <h3 className="font-title-md text-title-md font-bold text-text-primary">
            This Portfolio&apos;s Client-Side Engine Complexity
          </h3>
        </div>

        <div className="overflow-x-auto rounded border border-border-glass">
          <table className="w-full text-left border-collapse font-label-code text-xs">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-border-glass text-text-muted">
                <th className="p-3">Structure / Pattern</th>
                <th className="p-3">Data Structure</th>
                <th className="p-3">Complexity Bounds</th>
                <th className="p-3">Purpose &amp; Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-glass/60 bg-surface-base/80">
              {PORTFOLIO_DATA_STRUCTURES.map((ds) => (
                <tr key={ds.requirement} className="hover:bg-surface-container-high/40 transition">
                  <td className="p-3 font-semibold text-text-primary">{ds.requirement}</td>
                  <td className="p-3 text-primary-container">{ds.structure}</td>
                  <td className="p-3 font-mono text-tertiary-container">{ds.complexity}</td>
                  <td className="p-3 text-text-muted">{ds.rationale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
