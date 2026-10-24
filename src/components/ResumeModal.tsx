import React, { useEffect } from 'react';
import {
  Download,
  ExternalLink,
  FileText,
  X,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

const cvPdfUrl = `${import.meta.env.BASE_URL}Anurag_Podder_Resume.pdf`;

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#090e1c] border border-slate-700/80 shadow-2xl overflow-hidden">
        {/* Top Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-800 bg-[#060911]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h2 id="resume-modal-title" className="font-display text-base sm:text-lg font-bold text-white">
              Anurag Podder — Resume
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={cvPdfUrl}
              download="Anurag_Podder_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Executive Resume Sheet */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 text-sm">
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">ANURAG PODDER</h3>
              <p className="font-mono text-xs text-cyan-300 mt-0.5">
                AI &amp; Data Science Engineer · Full-Stack Software Engineer · MBA Candidate @ TAPMI
              </p>
            </div>
            <div className="font-mono text-xs text-slate-400 space-y-0.5 sm:text-right">
              <div>{PROFILE_DATA.contacts.academicEmail}</div>
              <div>{PROFILE_DATA.contacts.personalEmail}</div>
              <div>github.com/drkanurag · linkedin.com/in/anurag-podder-4a86211a6</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3">
              EDUCATION
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <div className="font-bold text-white">
                    T. A. Pai Management Institute (TAPMI), Manipal (AACSB &amp; AMBA Accredited)
                  </div>
                  <div className="text-xs text-slate-300">
                    Master of Business Administration (MBA) in Artificial Intelligence &amp; Data Science
                  </div>
                </div>
                <div className="font-mono text-xs text-cyan-300">2026 – 2028</div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <div className="font-bold text-white">
                    SRM Institute of Science and Technology (SRMIST), Kattankulathur
                  </div>
                  <div className="text-xs text-slate-300">
                    Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering — CGPA: 9.05 / 10
                  </div>
                </div>
                <div className="font-mono text-xs text-cyan-300">2019 – 2023</div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3">
              PROFESSIONAL EXPERIENCE
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-white">
                    Mphasis, Pune — Associate Software Engineer
                  </div>
                  <div className="font-mono text-xs text-cyan-300">Dec 2024 – Feb 2025</div>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-1.5 space-y-1">
                  <li>
                    Engineered robust enterprise web applications using Core Java, Spring Boot, RESTful APIs, and JSP/Servlets.
                  </li>
                  <li>
                    Optimized backend REST endpoints, reducing payload overhead and improving response times across high-concurrency flows.
                  </li>
                  <li>
                    Collaborated with QA, UI/UX, and DevOps teams in Agile sprints for stable production deployments.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-white">
                    MEC Tech Engineering Solutions, West Delhi — Computer Associate (Project Management &amp; Planning)
                  </div>
                  <div className="font-mono text-xs text-cyan-300">
                    Jul 2023 – Nov 2024 &amp; Feb 2025 – Aug 2025
                  </div>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-1.5 space-y-1">
                  <li>
                    Planned and maintained multi-workstream project schedules using Microsoft Project, mapping critical paths and milestones.
                  </li>
                  <li>
                    Standardized operational records across workstreams using MS Word, Excel, and AI workflows (+18% reporting consistency).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Published Research & Key Systems */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3">
              PUBLISHED RESEARCH &amp; KEY SYSTEMS
            </h4>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5">
              <li>
                <strong className="text-white">Published Research (IJCRT2305259):</strong>{' '}
                <em>
                  BLUME: Behavioral Learning and Understanding in Malfeasance Evaluation — Crime Identification and Reporting Application
                </em>{' '}
                (IJCRT Vol. 11, Issue 5, May 2023). Real-time CCTV weapon detection using TensorFlow SSD MobileNet Transfer Learning &amp; Telegram Bot API.
              </li>
              <li>
                <strong className="text-white">RoadVision AI:</strong> Dual-model WBF ensemble (<code>rdd2022_india_trained</code> + <code>rdd2022_yolov8n</code>) with morphological black-hat analysis for ASTM D6433 road-condition scoring. About 48 ms CPU inference across 5 FastAPI services (benchmarked on Intel Core i7, 640x640 input resolution).
              </li>
              <li>
                <strong className="text-white">DataLens Global Manager:</strong> 6-service enterprise workforce analytics mesh with Row-Level (RLS) and Column-Level Security (CLS) across 9 governance roles.
              </li>
              <li>
                <strong className="text-white">Rooted Surplus Food Platform:</strong> ACID-compliant 3NF PostgreSQL 18 DBMS, Pandas analytics, and Plotly.js executive decision dashboard targeting 45% → 75% food diversion.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
