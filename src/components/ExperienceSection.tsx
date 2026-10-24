import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education' | 'leadership'>('all');

  const items =
    filter === 'all'
      ? TIMELINE_ITEMS
      : TIMELINE_ITEMS.filter((item) => item.category === filter);

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
              04 / EXPERIENCE, EDUCATION &amp; LEADERSHIP TIMELINE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Industry Engineering &amp; Academic Credentials
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Connecting enterprise software engineering at Mphasis, multi-workstream project
              management at MEC Tech, an MBA in AI &amp; Data Science at TAPMI Manipal, and First
              Class with Distinction (9.05 CGPA) in B.Tech CSE at SRMIST.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: 'all', label: 'Complete Timeline' },
                { id: 'experience', label: 'Industry Experience' },
                { id: 'education', label: 'Education (MBA & B.Tech)' },
                { id: 'leadership', label: 'Leadership & Volunteering' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs border transition ${
                  filter === tab.id
                    ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400 font-semibold'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8">
          {items.map((item) => {
            const isEdu = item.category === 'education';
            const isExp = item.category === 'experience';
            const dotColor = isExp
              ? 'bg-cyan-400 ring-cyan-500/20'
              : isEdu
              ? 'bg-indigo-400 ring-indigo-500/20'
              : 'bg-amber-400 ring-amber-500/20';

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Dot */}
                <span
                  className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full ${dotColor} ring-4 bg-slate-950`}
                />

                <div className="rounded-2xl bg-[#090e1c]/95 border border-slate-800/90 hover:border-slate-700 p-6 sm:p-7 transition">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded font-mono text-xs font-semibold ${
                          isExp
                            ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                            : isEdu
                            ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                            : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {item.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.period}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {item.roleOrDegree}
                      </h3>
                      <div className="font-mono text-sm text-indigo-300 mt-0.5">
                        {item.organization}
                      </div>
                      <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                        {item.summary}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((hl) => (
                          <li
                            key={hl}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {item.link && (
                        <div className="mt-4">
                          <a
                            href={item.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-300 hover:text-white"
                          >
                            <span>{item.link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Quantified Impact Metrics & Tech Stack */}
                    <div className="lg:col-span-4 space-y-3">
                      <div className="grid grid-cols-2 gap-2.5">
                        {item.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 rounded-xl bg-slate-900 border border-slate-800"
                          >
                            <div className="font-mono text-[10px] text-slate-400">{m.label}</div>
                            <div className="font-display text-base font-bold text-white mt-0.5">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-2">
                          Tools &amp; Competencies
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

