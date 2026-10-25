import React from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { PROJECTS_CATALOGUE } from '../data/portfolioData';
import { Project, ProjectSlug } from '../types/portfolio';
import { InteractiveProjectLab } from './InteractiveProjectLab';
import { CaseStudyEngineering } from './CaseStudyEngineering';

interface ProjectCaseStudyPageProps {
  project: Project;
  onClose: () => void;
  onSelectProject: (slug: ProjectSlug) => void;
}

export const ProjectCaseStudyPage: React.FC<ProjectCaseStudyPageProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const currentIndex = PROJECTS_CATALOGUE.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0
      ? PROJECTS_CATALOGUE[currentIndex - 1]
      : PROJECTS_CATALOGUE[PROJECTS_CATALOGUE.length - 1];
  const nextProject =
    currentIndex < PROJECTS_CATALOGUE.length - 1
      ? PROJECTS_CATALOGUE[currentIndex + 1]
      : PROJECTS_CATALOGUE[0];

  const { caseStudy } = project;

  return (
    <div className="pt-20 pb-24 min-h-screen bg-[#060911]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-4 mb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Portfolio Overview</span>
            </button>
            <span>/</span>
            <span>PROJECTS</span>
            <span>/</span>
            <span className="text-white font-semibold">{project.shortTitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject.slug)}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 font-mono text-xs text-slate-300"
            >
              ← {prevProject.shortTitle}
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject.slug)}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 font-mono text-xs text-slate-300"
            >
              {nextProject.shortTitle} →
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <header className="rounded-2xl bg-[#090e1c] border border-slate-800/90 p-6 sm:p-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.featuredRank && (
              <span className="px-2.5 py-1 rounded bg-indigo-500/20 border border-indigo-400/40 font-mono text-xs font-bold text-indigo-300">
                CASE STUDY #{project.featuredRank}
              </span>
            )}
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 font-mono text-xs text-cyan-300">
              {project.primaryDomain}
            </span>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-300">
              {project.statusBadge}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="font-mono text-xs sm:text-sm text-indigo-300 mt-2">{project.subtitle}</p>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-4xl">
            {project.tagline}
          </p>

          {/* Hero Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
            {project.heroMetrics.map((m) => (
              <div
                key={m.label}
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800"
              >
                <div className="font-mono text-[11px] text-slate-400">{m.label}</div>
                <div className="font-display text-xl font-bold text-white mt-1">{m.value}</div>
                <div className="text-xs text-slate-400 mt-1">{m.detail}</div>
                <span
                  className={`inline-block mt-2 px-1.5 py-0.5 rounded border font-mono text-[10px] ${
                    m.verified
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  }`}
                >
                  {m.verified ? 'Measured' : 'Target / estimate'}
                </span>
              </div>
            ))}
          </div>

          {/* Primary Action Bar (08. Links) */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold transition shadow"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.links.secondaryDemo && (
              <a
                href={project.links.secondaryDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-mono text-xs transition"
              >
                <span>{project.links.secondaryDemoLabel || 'Alternate Link'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.links.paperUrl && (
              <a
                href={project.links.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-semibold transition"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Paper (IJCRT)</span>
              </a>
            )}
            {project.links.paperPdfUrl && (
              <a
                href={project.links.paperPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-violet-500/40 text-violet-300 font-mono text-xs transition"
              >
                <span>Download Paper PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs transition"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>
          </div>
        </header>

        {/* Interactive Demonstration Lab */}
        <div className="mb-10">
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
            INTERACTIVE TECHNICAL DEMONSTRATION
          </div>
          <InteractiveProjectLab
            demoType={project.interactiveDemoType}
            project={project}
          />
        </div>

        {/* 8-Section Structured Engineering Case Study */}
        <div className="space-y-8">
          {/* 01. Problem & 02. Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section className="rounded-2xl bg-[#090e1c] border border-slate-800/90 p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
                01 / THE PROBLEM
              </div>
              <h2 className="font-display text-xl font-bold text-white mb-3">
                {caseStudy.problem.headline}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {caseStudy.problem.context}
              </p>
              <div className="space-y-2">
                <div className="font-mono text-xs uppercase text-slate-400">Core Constraints:</div>
                {caseStudy.problem.painPoints.map((pt) => (
                  <div
                    key={pt}
                    className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-900/80 border border-slate-800"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-[#090e1c] border border-slate-800/90 p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
                02 / THE SOLUTION
              </div>
              <h2 className="font-display text-xl font-bold text-white mb-3">
                {caseStudy.solution.headline}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {caseStudy.solution.summary}
              </p>
              <div className="space-y-2">
                <div className="font-mono text-xs uppercase text-slate-400">Implemented Deliverables:</div>
                {caseStudy.solution.keyCapabilities.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-900/80 border border-slate-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 03. Architecture & Data Flow */}
          <section className="rounded-2xl bg-[#090e1c] border border-slate-800/90 p-6 sm:p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
              03 / SYSTEM ARCHITECTURE &amp; DATA FLOW
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h2 className="font-display text-2xl font-bold text-white">
                {caseStudy.architecture.patternName}
              </h2>
              <span className="font-mono text-xs text-cyan-300 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                Data Pipeline Verification
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {caseStudy.architecture.summary}
            </p>

            {/* Architecture Node Map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {caseStudy.architecture.nodes.map((node) => (
                <div
                  key={node.id}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-white">{node.label}</span>
                    <span className="font-mono text-[10px] text-cyan-400 uppercase">
                      {node.layer}
                    </span>
                  </div>
                  {node.portOrTech && (
                    <div className="font-mono text-[11px] text-indigo-300 mt-1">{node.portOrTech}</div>
                  )}
                  <p className="text-[11px] text-slate-400 mt-1">{node.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Step-by-Step Flow Pipeline */}
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase text-slate-400 mb-1">
                Data Flow Execution Pipeline:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {caseStudy.architecture.flows.map((step) => (
                  <div
                    key={step.step}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5"
                  >
                    <span className="font-mono text-xs font-bold text-cyan-400 shrink-0 w-6 h-6 rounded-full bg-cyan-950/60 border border-cyan-800 flex items-center justify-center">
                      {step.step}
                    </span>
                    <div>
                      <div className="font-mono text-xs font-semibold text-white">
                        {step.from} → {step.to}
                      </div>
                      <div className="text-[11px] text-indigo-300 font-mono mt-0.5">
                        {step.protocol}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 04. Technology Decisions Table */}
          <section className="rounded-2xl bg-[#090e1c] border border-slate-800/90 p-6 sm:p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
              04 / TECHNOLOGY EVALUATION &amp; DECISION MATRIX
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              Why These Specific Tools &amp; Libraries
            </h2>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-900/95 border-b border-slate-800 font-mono text-slate-400">
                    <th className="p-3.5">Technology</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Decision Rationale &amp; Trade-off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-[#070b14]">
                  {caseStudy.technologyDecisions.map((td) => (
                    <tr key={td.technology} className="text-slate-300">
                      <td className="p-3.5 font-mono font-semibold text-white">{td.technology}</td>
                      <td className="p-3.5 font-mono text-emerald-300">{td.category}</td>
                      <td className="p-3.5 text-slate-300">{td.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 05. Engineering Challenges & 06. Measured Results */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section className="lg:col-span-7 rounded-2xl bg-[#090e1c] border border-slate-800/90 p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
                05 / ENGINEERING CHALLENGES &amp; HARD BUGS
              </div>
              <h2 className="font-display text-xl font-bold text-white mb-4">
                What Broke &amp; How It Was Resolved
              </h2>
              <div className="space-y-4">
                {caseStudy.engineeringChallenges.map((ch) => (
                  <div
                    key={ch.title}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2"
                  >
                    <h3 className="font-display text-base font-bold text-white">{ch.title}</h3>
                    <div className="text-xs text-slate-400">
                      <strong className="text-amber-300 font-mono">Constraint: </strong>
                      {ch.symptomOrConstraint}
                    </div>
                    <div className="text-xs text-slate-300">
                      <strong className="text-cyan-300 font-mono">Engineering Fix: </strong>
                      {ch.engineeringSolution}
                    </div>
                    <div className="text-xs text-emerald-300 font-mono">
                      ✓ Outcome: {ch.outcome}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="lg:col-span-5 rounded-2xl bg-[#090e1c] border border-slate-800/90 p-6 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
                  06 / MEASURED RESULTS &amp; OUTCOMES
                </div>
                <h2 className="font-display text-xl font-bold text-white mb-3">
                  Results
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {caseStudy.results.summary}
                </p>
                <div className="space-y-2.5">
                  {caseStudy.results.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-mono text-xs text-white font-semibold">{m.label}</div>
                        <div className="text-[11px] text-slate-400">{m.detail}</div>
                        <span
                          className={`inline-block mt-1 px-1.5 py-0.5 rounded border font-mono text-[10px] ${
                            m.verified
                              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                              : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          }`}
                        >
                          {m.verified ? 'Measured' : 'Target / estimate'}
                        </span>
                      </div>
                      <span className="font-mono text-sm font-bold text-emerald-400">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* System Design, Microservices Architecture, and Algorithmic Rigor */}
          <CaseStudyEngineering caseStudy={caseStudy} />

          {/* 07. Honest Limitations & Next Steps */}
          <section className="rounded-2xl bg-[#090e1c] border border-slate-800/90 p-6 sm:p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-2">
              07 / LIMITATIONS &amp; NEXT STEPS (ENGINEERING TRANSPARENCY)
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              Current Boundaries &amp; Planned Roadmap
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-mono text-xs uppercase text-slate-400 mb-2.5">
                  Known Engineering Limitations
                </h3>
                <ul className="space-y-2">
                  {caseStudy.limitationsAndNextSteps.limitations.map((lim) => (
                    <li
                      key={lim}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300"
                    >
                      {lim}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase text-slate-400 mb-2.5">
                  Implementation Status &amp; Next Steps
                </h3>
                <div className="space-y-2.5">
                  {caseStudy.limitationsAndNextSteps.roadmap.map((item) => (
                    <div
                      key={item.feature}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs font-semibold text-white">
                          {item.feature}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                            item.status === 'Implemented'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{item.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Case Study Footer Navigation */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject.slug)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold"
          >
            <span>Next Case Study: {nextProject.shortTitle}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

