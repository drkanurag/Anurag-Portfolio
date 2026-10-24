import React from 'react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-space-2xl max-w-[1320px] mx-auto px-space-md sm:px-space-xl" id="experience">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4 border-b border-border-glass pb-space-md">
        <div>
          <div className="flex items-center gap-2 text-primary-container font-label-badge text-label-badge mb-1 uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">history_edu</span>
            PEDIGREE &amp; CREDENTIALS // MILESTONES
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-text-primary">
            Academic Degrees &amp; Enterprise Pedigree
          </h2>
        </div>
        <p className="text-body-sm font-body-sm text-text-muted max-w-md">
          Dual foundation combining deep software engineering at Mphasis, project management at
          MEC Tech, and an MBA in AI &amp; Data Science at TAPMI.
        </p>
      </div>

      {/* Education & Career Timeline (Milestones Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg" id="milestones">
        {/* Academic Degrees */}
        <div className="bg-surface-card/60 border border-border-glass rounded-xl p-space-lg glow-border transition-all">
          <div className="flex items-center gap-2 mb-space-md text-text-primary text-title-md font-title-md border-b border-border-glass pb-2">
            <span className="material-symbols-outlined text-primary-container">school</span>
            <span>Academic Degrees &amp; Specialization</span>
          </div>

          <div className="space-y-space-md font-label-code text-label-code">
            <div className="relative pl-6 border-l border-border-glass">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary-container" />
              <span className="text-label-badge font-label-badge text-primary-container">
                POST-GRADUATE DEGREE · 2026–2028
              </span>
              <h4 className="text-body-lg font-body-lg text-text-primary font-semibold mt-0.5">
                MBA in AI &amp; Data Science — TAPMI Manipal
              </h4>
              <p className="text-text-muted text-body-sm font-body-sm mt-1 leading-relaxed">
                T. A. Pai Management Institute (TAPMI), Manipal Academy of Higher Education. Rigorous
                curriculum in machine learning architectures, statistical modeling, distributed
                analytics, and AI business strategy.
              </p>
            </div>

            <div className="relative pl-6 border-l border-border-glass">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-secondary" />
              <span className="text-label-badge font-label-badge text-secondary">
                UNDERGRADUATE DEGREE · 2019–2023
              </span>
              <h4 className="text-body-lg font-body-lg text-text-primary font-semibold mt-0.5">
                B.Tech in Computer Science &amp; Engineering — SRMIST
              </h4>
              <p className="text-text-muted text-body-sm font-body-sm mt-1 leading-relaxed">
                SRM Institute of Science and Technology. Graduated with{' '}
                <strong className="text-text-primary font-semibold">First Class with Distinction</strong>{' '}
                (9.05 CGPA). Core concentration in Data Structures, Algorithms, Distributed Systems,
                Operating Systems, and Database Internals.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Experience Pedigree */}
        <div className="bg-surface-card/60 border border-border-glass rounded-xl p-space-lg glow-border transition-all">
          <div className="flex items-center gap-2 mb-space-md text-text-primary text-title-md font-title-md border-b border-border-glass pb-2">
            <span className="material-symbols-outlined text-tertiary-container">work_history</span>
            <span>Enterprise Industry Pedigree</span>
          </div>

          <div className="space-y-space-md font-label-code text-label-code">
            <div className="relative pl-6 border-l border-border-glass">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-tertiary-container" />
              <span className="text-label-badge font-label-badge text-tertiary-container">
                SOFTWARE ENGINEERING · BANGALORE
              </span>
              <h4 className="text-body-lg font-body-lg text-text-primary font-semibold mt-0.5">
                Mphasis — Associate Software Engineer
              </h4>
              <p className="text-text-muted text-body-sm font-body-sm mt-1 leading-relaxed">
                Engineered robust Java/Spring backend services, optimized enterprise SQL schemas and
                transaction boundaries, resolving critical API bottlenecks and driving an 18% improvement
                in data pipeline throughput.
              </p>
            </div>

            <div className="relative pl-6 border-l border-border-glass">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary-fixed" />
              <span className="text-label-badge font-label-badge text-primary-fixed">
                PROJECT MANAGEMENT &amp; OPERATIONS
              </span>
              <h4 className="text-body-lg font-body-lg text-text-primary font-semibold mt-0.5">
                MEC Tech — Project Management
              </h4>
              <p className="text-text-muted text-body-sm font-body-sm mt-1 leading-relaxed">
                Led technical workstream coordination, tracked sprint milestones, managed cross-functional
                developer and analyst squads, and delivered client-facing milestones on schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
