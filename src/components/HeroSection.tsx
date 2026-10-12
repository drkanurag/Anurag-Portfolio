import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
  Mail,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';
import { PROFILE_DATA } from '../data/portfolioData';
import { ProjectDomain, ProjectSlug } from '../types/portfolio';
import portraitImg from '../assets/Design uten navn.png';

interface HeroSectionProps {
  onExploreProjects: (domainFilter?: ProjectDomain) => void;
  onOpenCaseStudy: (slug: ProjectSlug) => void;
  onOpenResumeModal: () => void;
  reducedMotion: boolean;
}

const TOPOLOGY_NODES = [
  {
    id: 'node-cv',
    label: 'Computer Vision & DL',
    metric: '< 50ms CPU (ONNX + WBF)',
    projectSlug: 'roadvision-ai' as ProjectSlug,
    x: 18,
    y: 24,
    accent: '#22d3ee',
  },
  {
    id: 'node-db',
    label: 'PostgreSQL 18 · 3NF & RLS',
    metric: 'DataLens · Rooted',
    projectSlug: 'rooted-food-platform' as ProjectSlug,
    x: 78,
    y: 22,
    accent: '#818cf8',
  },
  {
    id: 'node-java',
    label: 'Java & Spring Boot APIs',
    metric: '+18% Efficiency @ Mphasis',
    projectSlug: 'datalens-global' as ProjectSlug,
    x: 20,
    y: 78,
    accent: '#34d399',
  },
  {
    id: 'node-res',
    label: 'IJCRT Published Research',
    metric: 'UIN: IJCRT2305259',
    projectSlug: 'blume-research' as ProjectSlug,
    x: 80,
    y: 76,
    accent: '#f59e0b',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onOpenCaseStudy,
  onOpenResumeModal,
  reducedMotion,
}) => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-800/80"
    >
      {/* Subtle Radial Ambient Illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[460px] rounded-full bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Positioning & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-mono tracking-wider text-indigo-300 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{PROFILE_DATA.eyebrow}</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-300">MBA (AI & DS) @ TAPMI</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-white leading-[1.1]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300">
                intelligent systems
              </span>{' '}
              that solve real-world problems.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              <strong className="text-white font-semibold">Anurag Podder</strong> — AI &amp; Data Science
              Engineer with Full-Stack Software Engineering experience. Pursuing an{' '}
              <span className="text-indigo-300 font-medium">
                MBA in AI &amp; Data Science at TAPMI Manipal
              </span>
              , with enterprise engineering experience at{' '}
              <span className="text-cyan-300 font-medium">Mphasis</span>, project management leadership
              at <span className="text-emerald-300 font-medium">MEC Tech</span>, and peer-reviewed AI
              research published in <span className="text-amber-300 font-medium">IJCRT</span>.
            </p>

            {/* Fast-Read Credibility Bar (3 Second Recruiter Signal) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800/90 flex items-center gap-2.5">
                <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Production Software</div>
                  <div className="text-slate-400 font-mono text-[11px]">Java · Spring Boot · Python</div>
                </div>
              </div>
              <div className="px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800/90 flex items-center gap-2.5">
                <BrainCircuit className="w-4 h-4 text-indigo-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">AI, Data &amp; DBMS</div>
                  <div className="text-slate-400 font-mono text-[11px]">YOLOv8 WBF · PostgreSQL 18</div>
                </div>
              </div>
              <div className="px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800/90 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Published &amp; Business-Ready</div>
                  <div className="text-slate-400 font-mono text-[11px]">IJCRT2305259 · TAPMI MBA</div>
                </div>
              </div>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onExploreProjects()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-sm shadow-lg shadow-indigo-950/50 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore Projects &amp; Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 font-medium text-sm transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View / Download Résumé</span>
              </button>

              <a
                href={PROFILE_DATA.contacts.ijcrtPaper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-amber-300 border border-amber-500/30 font-mono text-xs transition-all hover:-translate-y-0.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>IJCRT Paper</span>
                <ExternalLink className="w-3 h-3 opacity-75" />
              </a>
            </div>

            {/* Direct Social & Verification Links */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-mono text-slate-400">
              <a
                href={PROFILE_DATA.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>github.com/drkanurag</span>
              </a>
              <a
                href={PROFILE_DATA.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PROFILE_DATA.contacts.academicEmail}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PROFILE_DATA.contacts.academicEmail}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive AI Systems Topology & Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-800/90 bg-[#080d1a]/95 p-5 shadow-2xl overflow-hidden">
              {/* Top Telemetry Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs text-slate-300 font-semibold">
                    ENGINEERING PROFILE · SYSTEM TOPOLOGY
                  </span>
                </div>
                <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-2 py-0.5 rounded">
                  Click any node → Case Study
                </span>
              </div>

              {/* Interactive Network Node Graph + Center Profile */}
              <div className="relative h-72 sm:h-80 w-full rounded-xl bg-[#050811] border border-slate-800/80 overflow-hidden flex items-center justify-center">
                {/* SVG Network Lines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="lineGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {/* Cross-domain mesh connections */}
                  <line x1="20" y1="24" x2="80" y2="22" stroke="rgba(99,102,241,0.18)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="20" y1="78" x2="80" y2="76" stroke="rgba(99,102,241,0.18)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="20" y1="24" x2="20" y2="78" stroke="rgba(34,211,238,0.18)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="80" y1="22" x2="80" y2="76" stroke="rgba(34,211,238,0.18)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />

                  {/* Spokes from Center Profile (50, 50) to each Domain Node */}
                  {TOPOLOGY_NODES.map((node) => (
                    <g key={`edge-${node.id}`}>
                      <line
                        x1="50"
                        y1="50"
                        x2={node.x}
                        y2={node.y}
                        stroke={hoveredNodeId === node.id ? node.accent : 'url(#lineGradCyan)'}
                        strokeWidth={hoveredNodeId === node.id ? '0.9' : '0.45'}
                      />
                    </g>
                  ))}
                </svg>

                {/* Center Profile Hub */}
                <div className="relative z-20 flex flex-col items-center text-center p-3 rounded-2xl bg-slate-900/95 border border-indigo-500/40 shadow-xl backdrop-blur-md">
                  <div className="relative">
                    <img
                      src={portraitImg}
                      alt="Portrait of Anurag Podder"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-cyan-400/70 shadow-md"
                    />
                    <span
                      title="Available for AI, Data Science & Software Engineering roles"
                      className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-slate-950"
                    />
                  </div>
                  <div className="mt-2 font-display font-bold text-sm text-white">Anurag Podder</div>
                  <div className="font-mono text-[10px] text-cyan-300">@drkanurag · B.Tech 9.05 · MBA</div>
                </div>

                {/* 4 Interactive Corner Nodes */}
                {TOPOLOGY_NODES.map((node) => {
                  const isLeft = node.x < 50;
                  const isTop = node.y < 50;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                      onClick={() => onOpenCaseStudy(node.projectSlug)}
                      style={{
                        top: isTop ? '10px' : 'auto',
                        bottom: !isTop ? '10px' : 'auto',
                        left: isLeft ? '10px' : 'auto',
                        right: !isLeft ? '10px' : 'auto',
                      }}
                      className={`absolute z-20 max-w-[155px] sm:max-w-[175px] text-left p-2.5 rounded-xl bg-slate-900/95 border border-slate-700/80 hover:border-cyan-400/70 transition-all shadow-lg group ${
                        !reducedMotion ? 'hover:-translate-y-0.5' : ''
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: node.accent }}
                        />
                        <span className="font-mono text-[11px] font-semibold text-white group-hover:text-cyan-300 truncate">
                          {node.label}
                        </span>
                      </div>
                      <div className="font-mono text-[10px] text-slate-400 mt-0.5 truncate">
                        {node.metric}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Credentials Footer Inside Profile Card */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold text-white">TAPMI Manipal</div>
                  <div className="text-[10px] text-indigo-300">MBA (AI &amp; DS)</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold text-white">Mphasis &amp; MEC</div>
                  <div className="text-[10px] text-emerald-300">SWE &amp; PM Exp</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold text-white">SRMIST CSE</div>
                  <div className="text-[10px] text-cyan-300">9.05 CGPA (90.5%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Blueprint Domain Pillar Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFILE_DATA.domainPillars.map((pillar) => {
            const borderAccent =
              pillar.accent === 'cyan'
                ? 'hover:border-cyan-500/50'
                : pillar.accent === 'indigo'
                ? 'hover:border-indigo-500/50'
                : pillar.accent === 'emerald'
                ? 'hover:border-emerald-500/50'
                : 'hover:border-amber-500/50';

            const badgeClass =
              pillar.accent === 'cyan'
                ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                : pillar.accent === 'indigo'
                ? 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
                : pillar.accent === 'emerald'
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                : 'bg-amber-500/15 text-amber-300 border-amber-500/30';

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => onExploreProjects(pillar.filterTag)}
                className={`text-left p-5 rounded-2xl bg-slate-900/75 border border-slate-800/90 ${borderAccent} transition-all group flex flex-col justify-between ${
                  !reducedMotion ? 'hover:-translate-y-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${badgeClass}`}>
                      {pillar.metric}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <h2 className="font-display text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {pillar.title}
                  </h2>
                  <div className="font-mono text-xs text-indigo-300 mt-0.5">{pillar.subtitle}</div>
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{pillar.detail}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
