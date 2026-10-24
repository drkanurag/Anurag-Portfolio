import React from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Download,
  ExternalLink,
} from 'lucide-react';
import { BLUME_RESEARCH_DATA } from '../data/portfolioData';
import { ProjectSlug } from '../types/portfolio';

interface ResearchSectionProps {
  onOpenCaseStudy: (slug: ProjectSlug) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({
  onOpenCaseStudy,
}) => {
  const pub = BLUME_RESEARCH_DATA;

  return (
    <section
      id="research"
      className="py-20 sm:py-24 border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-2">
              05 / PEER-REVIEWED PUBLISHED RESEARCH
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Published AI &amp; Computer Vision Research
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Peer-reviewed journal publication in real-time CCTV weapon &amp; anomaly detection,
              transfer learning evaluation, and automated incident alerting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={pub.publicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-semibold transition shadow"
            >
              <BookOpen className="w-4 h-4" />
              <span>View IJCRT Publication ({pub.uin})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={pub.pdfDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs transition"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Paper (PDF)</span>
            </a>
          </div>
        </div>

        {/* Main Publication Card */}
        <div className="rounded-2xl bg-[#090e1c]/95 border border-violet-500/30 p-6 sm:p-8 shadow-xl space-y-8">
          {/* Citation & Metadata Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-violet-500/20 border border-violet-400/40 font-mono text-xs text-violet-200 font-bold">
                  PAPER UIN: {pub.uin}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300">
                  ISSN: {pub.issn}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300">
                  {pub.journal} · {pub.volumeIssue} ({pub.date})
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                {pub.title}
              </h3>

              <div className="font-mono text-xs text-slate-400">
                Authors:{' '}
                {pub.authors.map((author, idx) => (
                  <span
                    key={author}
                    className={
                      author.includes('Anurag Podder')
                        ? 'text-cyan-300 font-bold underline underline-offset-4'
                        : 'text-slate-300'
                    }
                  >
                    {author}
                    {idx < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenCaseStudy('blume-research')}
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-violet-500/40 text-violet-200 font-mono text-xs"
            >
              <span>Open Full BLUME Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Research Question & Abstract */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="font-mono text-xs uppercase tracking-wider text-violet-300 mb-2">
                Core Research Question
              </div>
              <p className="text-sm text-white font-medium leading-relaxed">
                “{pub.researchQuestion}”
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 font-mono text-xs text-slate-400">
                <strong className="text-cyan-300">Dataset: </strong>
                {pub.datasetDetails}
              </div>
            </div>

            <div className="lg:col-span-7 p-5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="font-mono text-xs uppercase tracking-wider text-cyan-300 mb-2">
                Abstract &amp; System Scope
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{pub.abstract}</p>
            </div>
          </div>

          {/* 4-Stage Methodology */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
              Research Methodology &amp; Pipeline
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {pub.methodologySteps.map((m) => (
                <div
                  key={m.step}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800"
                >
                  <div className="font-mono text-xs text-violet-400 font-bold mb-1">
                    STAGE {m.step}
                  </div>
                  <div className="font-display text-sm font-bold text-white mb-1.5">
                    {m.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparative Architecture Evaluation Table */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Comparative Model Evaluation Matrix (Haar Cascade vs CNN vs YOLO vs SSD MobileNet)
              </h4>
              <span className="font-mono text-[11px] text-emerald-400">
                Evaluated on Precision, mAP@0.5, mAP@0.5:0.95 &amp; FPS
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left border-collapse font-mono text-xs">
                <thead>
                  <tr className="bg-slate-900/95 border-b border-slate-800 text-slate-400">
                    <th className="p-3">Architecture</th>
                    <th className="p-3">Role in Study</th>
                    <th className="p-3">Precision</th>
                    <th className="p-3">mAP@0.5</th>
                    <th className="p-3">mAP@0.5:0.95</th>
                    <th className="p-3">Speed (FPS)</th>
                    <th className="p-3">Small Objects</th>
                    <th className="p-3">Engineering Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-[#070b14]">
                  {pub.benchmarks.map((row) => {
                    const isSelected = row.model.includes('SSD MobileNet');
                    return (
                      <tr
                        key={row.model}
                        className={
                          isSelected
                            ? 'bg-violet-950/25 text-white font-semibold'
                            : 'text-slate-300'
                        }
                      >
                        <td className="p-3 text-cyan-300">{row.model}</td>
                        <td className="p-3 text-slate-400">{row.roleInStudy}</td>
                        <td className="p-3">{row.precision}%</td>
                        <td className="p-3 text-emerald-300">{row.mAP50}%</td>
                        <td className="p-3">{row.mAP50_95}%</td>
                        <td className="p-3">{row.fpsCpuOrEdge} FPS</td>
                        <td className="p-3">{row.smallObjectCapability}</td>
                        <td className="p-3 text-slate-400 font-sans text-xs">{row.verdict}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Findings & Limitations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2.5">
                Key Empirical Findings
              </div>
              <ul className="space-y-2">
                {pub.keyFindings.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-2.5">
                Documented Limitations &amp; Future Scope
              </div>
              <ul className="space-y-2">
                {pub.limitations.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-xs text-slate-300">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

