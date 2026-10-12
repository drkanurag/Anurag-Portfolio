import React from 'react';
import { ArrowUp, BookOpen, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';
import { PROFILE_DATA } from '../data/portfolioData';
import { STATIC_NAV_ROUTES } from '../lib/catalogueEngine';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer className="border-t border-slate-800/90 bg-[#050811] py-12 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="font-display text-base font-bold text-white">
              ANURAG PODDER · AI &amp; DATA SCIENCE ENGINEER
            </div>
            <p className="text-slate-400 mt-1 font-sans text-xs max-w-xl">
              MBA Candidate in AI &amp; Data Science at TAPMI Manipal · Former Associate Software
              Engineer at Mphasis · Project Management at MEC Tech · Published IJCRT Researcher.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {STATIC_NAV_ROUTES.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => onNavigateSection(r.id)}
                className="hover:text-cyan-300 transition"
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Anurag Podder (@drkanurag). Engineered with React 18,
            TypeScript, Tailwind CSS &amp; O(1) Map/Set Catalogue Architecture.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROFILE_DATA.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white inline-flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE_DATA.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white inline-flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PROFILE_DATA.contacts.ijcrtPaper}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white inline-flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>IJCRT2305259</span>
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
