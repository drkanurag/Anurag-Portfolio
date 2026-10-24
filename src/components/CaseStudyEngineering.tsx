import React from 'react';
import type { ProjectCaseStudy, SdlcPhaseNote } from '../types/portfolio';

const STATUS_STYLE: Record<SdlcPhaseNote['status'], string> = {
  Done: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Designed only': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Simulated: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  'Not applicable': 'bg-slate-700/40 text-slate-300 border-slate-600',
};

const Card: React.FC<{
  kicker: string;
  kickerClass: string;
  title: string;
  children: React.ReactNode;
}> = ({ kicker, kickerClass, title, children }) => (
  <section className="rounded-2xl bg-[#090e1c] border border-slate-800/90 p-6 sm:p-8">
    <div className={`font-mono text-xs uppercase tracking-widest mb-2 ${kickerClass}`}>{kicker}</div>
    <h2 className="font-display text-2xl font-bold text-white mb-4">{title}</h2>
    {children}
  </section>
);

const Bullets: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div>
    <h3 className="font-mono text-xs uppercase text-slate-400 mb-2.5">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const CaseStudyEngineering: React.FC<{ caseStudy: ProjectCaseStudy }> = ({ caseStudy }) => {
  const { sdlc, systemDesign, algorithms } = caseStudy;
  if (!sdlc && !systemDesign && !algorithms) return null;

  return (
    <>
      {sdlc && (
        <Card kicker="SDLC / HOW THIS WAS BUILT" kickerClass="text-cyan-400" title="From Requirements to Delivery">
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sdlc.map((p) => (
              <li key={p.phase} className="p-4 rounded-xl bg-slate-900/85 border border-slate-800">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-xs font-semibold text-white">{p.phase}</span>
                  <span className={`px-2 py-0.5 rounded border font-mono text-[10px] ${STATUS_STYLE[p.status]}`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{p.summary}</p>
              </li>
            ))}
          </ol>
        </Card>
      )}

      {systemDesign && (
        <Card kicker="SYSTEM DESIGN & SERVICES" kickerClass="text-indigo-400" title="Requirements, Scale and Trade-offs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Bullets title="Functional requirements" items={systemDesign.requirements.functional} />
            <Bullets title="Non-functional requirements" items={systemDesign.requirements.nonFunctional} />
            <Bullets title="API design" items={systemDesign.apiDesign} />
            <Bullets title="Scaling plan" items={systemDesign.scaling} />
            <Bullets title="Failure handling" items={systemDesign.failureHandling} />
            <div>
              <h3 className="font-mono text-xs uppercase text-slate-400 mb-2.5">Data model</h3>
              <p className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                {systemDesign.dataModel}
              </p>
            </div>
          </div>

          {systemDesign.services && systemDesign.services.length > 0 && (
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-900/95 border-b border-slate-800 font-mono text-slate-400">
                    <th className="p-3.5">Service</th>
                    <th className="p-3.5">Responsibility</th>
                    <th className="p-3.5">Owns data</th>
                    <th className="p-3.5">Exposes</th>
                    <th className="p-3.5">Stack</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-[#070b14]">
                  {systemDesign.services.map((s) => (
                    <tr key={s.name} className="text-slate-300">
                      <td className="p-3.5 font-mono font-semibold text-white">{s.name}</td>
                      <td className="p-3.5">{s.responsibility}</td>
                      <td className="p-3.5">{s.ownsData}</td>
                      <td className="p-3.5 font-mono text-cyan-300">{s.exposes}</td>
                      <td className="p-3.5 font-mono text-indigo-300">{s.techStack}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6 space-y-3">
            <h3 className="font-mono text-xs uppercase text-slate-400">Design trade-offs</h3>
            {systemDesign.tradeoffs.map((t) => (
              <div key={t.decision} className="p-4 rounded-xl bg-slate-900/85 border border-slate-800 text-xs space-y-1">
                <div className="font-display text-sm font-bold text-white">{t.decision}</div>
                <div className="text-emerald-300"><strong className="font-mono">Chosen: </strong>{t.chosen}</div>
                <div className="text-amber-300"><strong className="font-mono">Rejected: </strong>{t.rejected}</div>
                <div className="text-slate-300"><strong className="font-mono">Why: </strong>{t.reason}</div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {algorithms && (
        <Card kicker="ALGORITHMS & DATA STRUCTURES" kickerClass="text-emerald-400" title="Where the Fundamentals Show Up">
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900/95 border-b border-slate-800 font-mono text-slate-400">
                  <th className="p-3.5">Problem</th>
                  <th className="p-3.5">Structure / algorithm</th>
                  <th className="p-3.5">Signature</th>
                  <th className="p-3.5">Complexity</th>
                  <th className="p-3.5">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-[#070b14]">
                {algorithms.map((a) => (
                  <tr key={a.requirement} className="text-slate-300">
                    <td className="p-3.5 font-semibold text-white">{a.requirement}</td>
                    <td className="p-3.5 font-mono text-cyan-300">{a.structure}</td>
                    <td className="p-3.5 font-mono text-indigo-300">{a.typescriptSignature}</td>
                    <td className="p-3.5 font-mono text-emerald-300">{a.complexity}</td>
                    <td className="p-3.5 text-slate-400">{a.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </>
  );
};

