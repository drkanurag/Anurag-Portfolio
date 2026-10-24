import React from 'react';
import { CyberneticShaderBackground } from './CyberneticShaderBackground';
import { ProjectDomain, ProjectSlug } from '../types/portfolio';
import portraitImg from '../assets/Design uten navn.png';

interface HeroSectionProps {
  onExploreProjects: (domainFilter?: ProjectDomain) => void;
  onOpenCaseStudy: (slug: ProjectSlug) => void;
  onOpenResumeModal: () => void;
  reducedMotion: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onOpenResumeModal,
  reducedMotion,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-space-2xl pb-space-xl border-b border-border-glass overflow-hidden"
    >
      {/* WebGL Background Shader Injection */}
      <CyberneticShaderBackground reducedMotion={reducedMotion} />

      {/* Subtle Radial Falloff */}
      <div
        className="absolute inset-0 bg-radial-gradient from-transparent via-surface-base/80 to-surface-base pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-space-md sm:px-space-xl w-full">
        {/* Operational Status Pill */}
        <div className="flex justify-start mb-space-md">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-card/80 backdrop-blur-md border border-border-glass text-tertiary font-label-badge text-label-badge shadow-[0_0_15px_rgba(0,240,255,0.06)]">
            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse shadow-[0_0_8px_#65f2b5]" />
            SYS_STATUS: READY FOR ENTERPRISE AI &amp; DISTRIBUTED SYSTEMS // AVAILABLE Q2 2025
          </div>
        </div>

        {/* Hero Grid: Typography + Profile Telemetry Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Main Pitch Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl tracking-tight text-text-primary leading-[1.08]">
              Building{' '}
              <span className="bg-gradient-to-r from-primary-container via-secondary to-primary-fixed bg-clip-text text-transparent underline decoration-primary-container/30 decoration-wavy">
                intelligent systems
              </span>{' '}
              that solve real-world problems.
            </h1>

            <p className="text-body-lg font-body-lg text-text-muted max-w-2xl mt-space-xs">
              <span className="text-text-primary font-semibold">Anurag Podder</span> — AI &amp;
              Data Science Engineer with Full-Stack Software Engineering Expertise. Bridging
              enterprise software engineering at Mphasis, advanced systems engineering, and
              published AI research. MBA candidate in AI &amp; Data Science at TAPMI (2026–2028).
            </p>

            {/* Quick Action CTA Group */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-sm">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-space-md py-3 rounded-DEFAULT bg-primary-container text-surface-base font-label-code text-label-code font-bold shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_28px_rgba(0,240,255,0.6)] active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                Deploy Contact / Book Call
              </a>

              <button
                type="button"
                onClick={() => onExploreProjects()}
                className="inline-flex items-center gap-2 px-space-md py-3 rounded-DEFAULT bg-surface-card/75 border border-border-glass text-text-primary font-label-code text-label-code hover:border-glow hover:text-primary-container active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">account_tree</span>
                View Case Studies
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-3 py-3 rounded-DEFAULT bg-surface-container-low/60 border border-outline-variant/40 text-text-muted hover:text-text-primary font-label-code text-label-code transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">file_download</span>
                Download Resume [.pdf]
              </button>
            </div>

            {/* Live Telemetry Stat Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-md" id="telemetry">
              <div className="bg-surface-card/70 backdrop-blur-md border border-border-glass p-3 rounded-DEFAULT">
                <div className="text-title-md font-title-md text-primary-container font-bold">99.4%</div>
                <div className="text-label-badge font-label-badge text-text-muted">INFERENCING UPTIME</div>
              </div>
              <div className="bg-surface-card/70 backdrop-blur-md border border-border-glass p-3 rounded-DEFAULT">
                <div className="text-title-md font-title-md text-tertiary-container font-bold">8+</div>
                <div className="text-label-badge font-label-badge text-text-muted">MICROSERVICES PROD</div>
              </div>
              <div className="bg-surface-card/70 backdrop-blur-md border border-border-glass p-3 rounded-DEFAULT">
                <div className="text-title-md font-title-md text-secondary font-bold">100K+</div>
                <div className="text-label-badge font-label-badge text-text-muted">VECTORS BENCHMARKED</div>
              </div>
              <div className="bg-surface-card/70 backdrop-blur-md border border-border-glass p-3 rounded-DEFAULT">
                <div className="text-title-md font-title-md text-primary font-bold">1st Place</div>
                <div className="text-label-badge font-label-badge text-text-muted">AI HACKATHON WINNER</div>
              </div>
            </div>
          </div>

          {/* Technical Telemetry & Portrait Pod Right Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-surface-card/90 backdrop-blur-xl border border-border-glass p-space-md rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.65)] glow-border transition-all">
              {/* Window Header Controls */}
              <div className="flex items-center justify-between border-b border-border-glass pb-3 mb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error/70 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-secondary-container/70 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-tertiary-container/70 inline-block" />
                  <span className="ml-2 font-label-code text-label-code text-text-muted">
                    arch_spec_node_v4.2
                  </span>
                </div>
                <span className="font-label-badge text-label-badge text-primary-container bg-surface-container-high px-2 py-0.5 rounded-DEFAULT">
                  LATENCY: 12ms
                </span>
              </div>

              {/* Profile Image Container with Technical HUD Brackets */}
              <div className="relative overflow-hidden rounded-lg border border-border-glass aspect-video sm:aspect-square max-h-[300px] mb-space-sm bg-surface-container-lowest">
                <img
                  alt="Anurag Podder Technical Portrait"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
                  src={portraitImg}
                />
                {/* Monospaced Overlay Readout */}
                <div className="absolute bottom-2 left-2 right-2 bg-surface-base/90 backdrop-blur-md border border-border-glass p-2 flex justify-between items-center rounded-DEFAULT text-label-code font-label-code">
                  <span className="text-tertiary-container flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-ping" />
                    STATUS: EXEC_LEAD
                  </span>
                  <span className="text-text-muted">ROLE: AI_DISTRIBUTED_ENG</span>
                </div>
              </div>

              {/* Live Diagnostic Parameters */}
              <div className="space-y-1.5 font-label-code text-label-code">
                <div className="flex justify-between py-1 border-b border-outline-variant/30 text-text-muted">
                  <span>RUNTIME_TARGET</span>
                  <span className="text-text-primary">PyTorch / Spring Boot v3</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/30 text-text-muted">
                  <span>INFERENCE_ENGINE</span>
                  <span className="text-primary-container">TensorRT 10.x &amp; CUDA 12.4</span>
                </div>
                <div className="flex justify-between py-1 text-text-muted">
                  <span>DATA_STORE_LAYER</span>
                  <span className="text-secondary">PostgreSQL RLS / pgvector / Redis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Ticker / Floating Badge Matrix */}
        <div className="mt-space-xl pt-space-md border-t border-border-glass flex flex-wrap items-center justify-between gap-space-sm">
          <span className="text-label-badge font-label-badge text-text-muted uppercase tracking-wider">
            ENGINEERED WITH ARCHITECTURAL STACK:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-DEFAULT bg-surface-card border border-border-glass text-text-primary font-label-code text-label-code hover:border-glow transition-all">
              PyTorch
            </span>
            <span className="px-2.5 py-1 rounded-DEFAULT bg-surface-card border border-border-glass text-text-primary font-label-code text-label-code hover:border-glow transition-all">
              TensorFlow
            </span>
            <span className="px-2.5 py-1 rounded-DEFAULT bg-surface-card border border-border-glass text-text-primary font-label-code text-label-code hover:border-glow transition-all">
              Spring Boot
            </span>
            <span className="px-2.5 py-1 rounded-DEFAULT bg-surface-card border border-border-glass text-text-primary font-label-code text-label-code hover:border-glow transition-all">
              FastAPI
            </span>
            <span className="px-2.5 py-1 rounded-DEFAULT bg-surface-card border border-border-glass text-text-primary font-label-code text-label-code hover:border-glow transition-all">
              PostgreSQL
            </span>
            <span className="px-2.5 py-1 rounded-DEFAULT bg-surface-card border border-border-glass text-text-primary font-label-code text-label-code hover:border-glow transition-all">
              Kubernetes
            </span>
            <span className="px-2.5 py-1 rounded-DEFAULT bg-surface-card border border-border-glass text-text-primary font-label-code text-label-code hover:border-glow transition-all">
              OpenCV
            </span>
            <span className="px-2.5 py-1 rounded-DEFAULT bg-surface-card border border-border-glass text-primary-container font-label-code text-label-code border-primary-container/40">
              CUDA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
