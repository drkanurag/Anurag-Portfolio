import React from 'react';
import { ProjectSlug } from '../types/portfolio';

interface TechnicalExpertiseSectionProps {
  onOpenCaseStudy: (slug: ProjectSlug) => void;
}

export const TechnicalExpertiseSection: React.FC<TechnicalExpertiseSectionProps> = ({
  onOpenCaseStudy,
}) => {
  return (
    <section className="py-space-2xl max-w-[1320px] mx-auto px-space-md sm:px-space-xl" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4 border-b border-border-glass pb-space-md">
        <div>
          <div className="flex items-center gap-2 text-primary-container font-label-badge text-label-badge mb-1 uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">memory</span>
            CORE CAPABILITIES // ARCHITECTURAL PODS
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-text-primary">
            Evidence-Backed Engineering Competencies
          </h2>
        </div>
        <p className="text-body-sm font-body-sm text-text-muted max-w-md">
          Proven technical execution verified by production releases at Mphasis, high-throughput
          systems, and peer-reviewed algorithmic contributions.
        </p>
      </div>

      {/* Four Distinct Glassmorphic Engineering Pods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {/* Pod 1: AI, Deep Learning & Computer Vision */}
        <div className="bg-surface-card/75 border border-border-glass rounded-xl p-space-lg glow-border transition-all">
          <div className="flex items-center justify-between border-b border-border-glass pb-space-sm mb-space-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-container/10 border border-primary-container/30 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div>
                <h3 className="text-title-md font-title-md text-text-primary">
                  AI, Deep Learning &amp; Computer Vision
                </h3>
                <span className="font-label-badge text-label-badge text-primary-container">
                  EDGE &amp; CLOUD INFERENCE
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenCaseStudy('roadvision-ai')}
              className="text-xs font-label-code text-primary-container hover:underline"
            >
              RoadVision AI →
            </button>
          </div>
          <ul className="space-y-3 font-label-code text-label-code">
            <li className="flex items-start gap-2">
              <span className="text-primary-container mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Deep Learning Frameworks: </strong>
                <span className="text-text-muted">
                  PyTorch, TorchVision, TensorFlow 2.x, Keras, HuggingFace Transformers.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-container mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Computer Vision &amp; Detection: </strong>
                <span className="text-text-muted">
                  YOLO (v5, v8), Weighted Boxes Fusion (WBF), OpenCV, Optical Flow, Morphological Black-Hat fissure density.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-container mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Hardware Acceleration: </strong>
                <span className="text-text-muted">
                  ONNX Runtime (CPU/INT8 execution), CUDA 12.x, TensorRT quantization pipelines.
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Pod 2: Enterprise Software Engineering & Cloud */}
        <div className="bg-surface-card/75 border border-border-glass rounded-xl p-space-lg glow-border transition-all">
          <div className="flex items-center justify-between border-b border-border-glass pb-space-sm mb-space-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary-container/10 border border-secondary-container/30 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">dns</span>
              </div>
              <div>
                <h3 className="text-title-md font-title-md text-text-primary">
                  Enterprise Backend &amp; Cloud
                </h3>
                <span className="font-label-badge text-label-badge text-secondary">
                  DISTRIBUTED ARCHITECTURES
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenCaseStudy('datalens-global')}
              className="text-xs font-label-code text-secondary hover:underline"
            >
              DataLens →
            </button>
          </div>
          <ul className="space-y-3 font-label-code text-label-code">
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Enterprise Core: </strong>
                <span className="text-text-muted">
                  Java 17, Spring Boot 3, Spring Security (OAuth2/JWT), FastAPI, Python AsyncIO.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Microservices &amp; Messaging: </strong>
                <span className="text-text-muted">
                  REST, Celery task workers, Redis Pub/Sub, Resilience patterns, Distributed Tracing.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Containers &amp; DevOps: </strong>
                <span className="text-text-muted">
                  Docker, Docker Compose multi-service topologies, GitHub Actions CI/CD gates.
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Pod 3: Distributed Data & High-Throughput DBs */}
        <div className="bg-surface-card/75 border border-border-glass rounded-xl p-space-lg glow-border transition-all">
          <div className="flex items-center justify-between border-b border-border-glass pb-space-sm mb-space-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-tertiary-container/10 border border-tertiary-container/30 flex items-center justify-center text-tertiary-container">
                <span className="material-symbols-outlined">dataset</span>
              </div>
              <div>
                <h3 className="text-title-md font-title-md text-text-primary">
                  Data Engineering &amp; High-Throughput DBs
                </h3>
                <span className="font-label-badge text-label-badge text-tertiary-container">
                  VECTOR &amp; RELATIONAL STORAGE
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenCaseStudy('rooted-food-platform')}
              className="text-xs font-label-code text-tertiary-container hover:underline"
            >
              Rooted 3NF →
            </button>
          </div>
          <ul className="space-y-3 font-label-code text-label-code">
            <li className="flex items-start gap-2">
              <span className="text-tertiary-container mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Relational &amp; Caching: </strong>
                <span className="text-text-muted">
                  PostgreSQL 18 (Row-Level Security, B-Tree &amp; GiST indexing), Redis Cluster (Pub/Sub).
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tertiary-container mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Vector &amp; Semantic Search: </strong>
                <span className="text-text-muted">
                  pgvector, ChromaDB, FAISS, Inverted Indexing, Vector Embeddings similarity.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tertiary-container mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Data Governance: </strong>
                <span className="text-text-muted">
                  3NF normalization, RBAC schema isolation, query performance profiling, automated DB migrations.
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Pod 4: Frontend Engineering & Interactive Systems */}
        <div className="bg-surface-card/75 border border-border-glass rounded-xl p-space-lg glow-border transition-all">
          <div className="flex items-center justify-between border-b border-border-glass pb-space-sm mb-space-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <div>
                <h3 className="text-title-md font-title-md text-text-primary">
                  Interactive Systems &amp; Interfaces
                </h3>
                <span className="font-label-badge text-label-badge text-accent-purple">
                  HIGH DENSITY UIs
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenCaseStudy('aether-weather')}
              className="text-xs font-label-code text-accent-purple hover:underline"
            >
              Aether UI →
            </button>
          </div>
          <ul className="space-y-3 font-label-code text-label-code">
            <li className="flex items-start gap-2">
              <span className="text-accent-purple mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Modern Web Stacks: </strong>
                <span className="text-text-muted">
                  React 18, TypeScript, Tailwind CSS, Vite, Radix UI foundations.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-purple mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Graphics &amp; Telemetry: </strong>
                <span className="text-text-muted">
                  WebGL Shaders, interactive SVG canvas visualizers, dynamic bounding box HUDs.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-purple mt-0.5">&gt;</span>
              <div>
                <strong className="text-text-primary">Architecture: </strong>
                <span className="text-text-muted">
                  Atomic design systems, high-density HUD dashboards, monospaced terminal emulators.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
