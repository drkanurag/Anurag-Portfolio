import React, { useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Network,
  Search,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from 'lucide-react';
import { PORTFOLIO_DATA_STRUCTURES, PROJECTS_CATALOGUE } from '../data/portfolioData';
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
    tech: 'React 18 · Tailwind CSS · Accessible Dialogs · 60 FPS Motion',
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
    tech: 'Verified Repository Links · Isomorphic Client/Edge Sandboxes',
    responsibility:
      'Direct links to live deployments, interactive in-browser labs (RoadVision WBF, DataLens RLS, Rooted 3NF, AETHER DSA).',
  },
  {
    layer: '05 · Delivery & Engineering Quality',
    tech: 'Vite Production Bundle · Vitest Suite · GitHub Actions CI/CD',
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
      className="py-20 sm:py-24 border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
            06 / ENGINEERING APPROACH, SYSTEM DESIGN &amp; DATA STRUCTURES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Pragmatic System Architecture &amp; Algorithmic Rigor
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">
            Good engineering means matching architectural complexity to actual system requirements:
            using clean $O(1)$ data structures and static CDN delivery for content-driven web
            experiences, while deploying multi-service FastAPI/Spring Boot backends and PostgreSQL
            18 schemas where real domain workloads demand them.
          </p>
        </div>

        {/* 5-Layer Portfolio System Architecture Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 rounded-2xl bg-[#090e1c]/95 border border-slate-800/90 p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <h3 className="font-display text-lg font-bold text-white">
                  5-Layer Portfolio System Architecture
                </h3>
              </div>
              <span className="font-mono text-xs text-cyan-300">Static CDN + Typed Engine</span>
            </div>

            <div className="space-y-3">
              {ARCHITECTURE_LAYERS.map((item) => (
                <div
                  key={item.layer}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-indigo-500/40 transition"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-indigo-300">
                      {item.layer}
                    </span>
                    <span className="font-mono text-[11px] text-cyan-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {item.tech}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {item.responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Decision Record (Microservices vs Static Content) & Live O(1) Map Inspector */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* ADR Card */}
            <div className="rounded-2xl bg-[#090e1c]/95 border border-slate-800/90 p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-2">
                ARCHITECTURAL DECISION RECORD (ADR-01)
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                When to Use Static Delivery vs. Microservices
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                A personal portfolio is primarily a content and interactive demonstration platform.
                Introducing a distributed microservices cluster or database just to render 10
                project descriptions would add latency, operational cost, and cold-start failure
                modes without user benefit.
              </p>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
                  ✓ Core Portfolio: Static CDN delivery + O(1) client Map/Set indices for zero-ms navigation.
                </div>
                <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-200">
                  ✓ Domain Projects (RoadVision AI, DataLens, AETHER): Multi-service Python FastAPI &amp; Java Spring Boot backends where real CV inference, RLS/CLS governance, and psychrometric engines justify service isolation.
                </div>
              </div>
            </div>

            {/* Interactive Live O(1) Map Lookup Inspector */}
            <div className="rounded-2xl bg-[#090e1c]/95 border border-cyan-500/30 p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-semibold">
                  Live O(1) Map Lookup Inspector
                </div>
                <span className="font-mono text-[11px] text-emerald-400">
                  PROJECT_BY_SLUG.get(slug)
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {PROJECTS_CATALOGUE.slice(0, 5).map((p) => (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => setTestSlug(p.slug)}
                    className={`px-2.5 py-1 rounded font-mono text-[11px] border transition ${
                      testSlug === p.slug
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {p.slug}
                  </button>
                ))}
              </div>

              {resolvedProject && (
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5">
                  <div className="text-emerald-400">
                    → Resolved in O(1) via ReadonlyMap&lt;ProjectSlug, Project&gt;
                  </div>
                  <div className="text-white font-semibold">{resolvedProject.title}</div>
                  <div className="text-[11px] text-slate-400 break-words">
                    <span className="text-indigo-300">Search Index Blob: </span>
                    {indexedTokensPreview}
                  </div>
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy(resolvedProject.slug)}
                      className="text-cyan-300 hover:underline text-[11px]"
                    >
                      Open {resolvedProject.shortTitle} Case Study →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Data Structures Specification Table */}
        <div className="rounded-2xl bg-[#090e1c]/95 border border-slate-800/90 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h3 className="font-display text-xl font-bold text-white">
              Data Structures Implemented in This Portfolio (`src/lib/catalogueEngine.ts`)
            </h3>
            <span className="font-mono text-xs text-emerald-400">
              Verified by Automated Vitest Suite
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900/95 border-b border-slate-800 font-mono text-slate-400">
                  <th className="p-3.5">Requirement</th>
                  <th className="p-3.5">Data Structure</th>
                  <th className="p-3.5">TypeScript Signature</th>
                  <th className="p-3.5">Time Complexity</th>
                  <th className="p-3.5">Engineering Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-[#070b14]">
                {PORTFOLIO_DATA_STRUCTURES.map((ds) => (
                  <tr key={ds.requirement} className="text-slate-300">
                    <td className="p-3.5 font-mono font-semibold text-white">{ds.requirement}</td>
                    <td className="p-3.5 font-mono text-cyan-300">{ds.structure}</td>
                    <td className="p-3.5 font-mono text-indigo-300">{ds.typescriptSignature}</td>
                    <td className="p-3.5 font-mono text-emerald-300">{ds.complexity}</td>
                    <td className="p-3.5 text-slate-400">{ds.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

