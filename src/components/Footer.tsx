import React from 'react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer className="w-full bg-surface-base border-t border-border-glass">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-space-md sm:px-space-xl max-w-[1320px] mx-auto py-space-lg gap-space-md">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-space-sm text-center sm:text-left">
          <span className="text-body-sm font-body-sm font-bold text-text-primary">
            ANURAG PODDER // AI ARCHITECT
          </span>
          <span className="hidden sm:inline text-text-muted">|</span>
          <span className="text-body-sm font-body-sm text-text-muted">
            © 2026 ANURAG PODDER. ALL SYSTEMS OPERATIONAL [SYS_STAT: 200 OK]. BUILT FOR AUTONOMOUS SCALE.
          </span>
        </div>

        {/* Technical Footer Navigation Links */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-space-md font-label-code text-label-code">
          <button
            type="button"
            onClick={() => onNavigateSection('architecture')}
            className="text-text-muted hover:text-primary-container transition-colors duration-150"
          >
            Architecture Specs
          </button>
          <button
            type="button"
            onClick={() => onNavigateSection('hero')}
            className="text-text-muted hover:text-primary-container transition-colors duration-150"
          >
            Model Telemetry
          </button>
          <button
            type="button"
            onClick={() => onNavigateSection('research')}
            className="text-text-muted hover:text-primary-container transition-colors duration-150"
          >
            Publications Archive
          </button>
          <button
            type="button"
            onClick={() => onNavigateSection('sdlc')}
            className="text-text-muted hover:text-primary-container transition-colors duration-150"
          >
            SDLC Lifecycle
          </button>
          <button
            type="button"
            onClick={() => onNavigateSection('contact')}
            className="text-text-muted hover:text-primary-container transition-colors duration-150"
          >
            Console Terminal
          </button>
        </nav>
      </div>
    </footer>
  );
};
