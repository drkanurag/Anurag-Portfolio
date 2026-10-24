import React, { useState } from 'react';
import {
  Copy,
  Download,
} from 'lucide-react';
import { BLUME_RESEARCH_DATA } from '../data/portfolioData';
import { ProjectSlug } from '../types/portfolio';

interface ResearchSectionProps {
  onOpenCaseStudy: (slug: ProjectSlug) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({
  onOpenCaseStudy,
}) => {
  const [bibtexOpen, setBibtexOpen] = useState(false);
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const pub = BLUME_RESEARCH_DATA;

  const bibtexCode = `@article{podder2023blume,
  author    = {Pathak, A. and Bhatt, A. and Podder, Anurag and Sharma, O.},
  title     = {BLUME: Behavioral Learning and Understanding in Malfeasance Evaluation — Crime Identification and Reporting Application},
  journal   = {International Journal of Creative Research Thoughts (IJCRT)},
  volume    = {11},
  number    = {5},
  pages     = {c259--c267},
  month     = {May},
  year      = {2023},
  issn      = {2320-2882},
  url       = {https://ijcrt.org/viewfull.php?p_id=IJCRT2305259}
}`;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(bibtexCode);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <section className="py-space-2xl bg-surface-container-lowest/70 border-t border-border-glass" id="research">
      <div className="max-w-[1320px] mx-auto px-space-md sm:px-space-xl">
        {/* Research Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4 border-b border-border-glass pb-space-md">
          <div>
            <div className="flex items-center gap-2 text-primary-container font-label-badge text-label-badge mb-1 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">auto_stories</span>
              SCHOLARLY PUBLICATIONS &amp; PEDIGREE
            </div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-text-primary">
              Published AI Research &amp; Academic Credentials
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-DEFAULT bg-surface-card border border-border-glass text-primary-container font-label-code text-label-code hover:border-glow transition-all"
              href={pub.publicationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Verified Journal Author</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenCaseStudy('blume-research')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-DEFAULT bg-primary-container text-surface-base font-label-code text-label-code font-bold hover:shadow-[0_0_16px_rgba(0,240,255,0.4)] transition-all"
            >
              <span>Explore Benchmark Lab</span>
            </button>
          </div>
        </div>

        {/* Featured Publication Card */}
        <div className="bg-surface-card/90 border border-border-glass rounded-xl p-space-md md:p-space-xl mb-space-xl glow-border transition-all">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-glass pb-space-sm mb-space-md">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-primary-container text-surface-base font-label-badge text-label-badge font-bold">
                PEER-REVIEWED JOURNAL PUBLICATION
              </span>
              <span className="font-label-code text-label-code text-text-muted">
                UIN: {pub.uin} · ISSN: {pub.issn}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="font-label-code text-label-code text-secondary hover:underline flex items-center gap-1"
                onClick={() => setBibtexOpen(!bibtexOpen)}
              >
                <span className="material-symbols-outlined text-sm">data_object</span>
                <span>{bibtexOpen ? 'Hide BibTeX' : 'Toggle BibTeX Citation'}</span>
              </button>

              <a
                href={pub.pdfDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-code text-label-code text-primary-container hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF (2.4 MB)</span>
              </a>
            </div>
          </div>

          <h3 className="text-headline-md font-headline-md text-text-primary mb-2">
            {pub.title}
          </h3>

          <div className="font-label-code text-label-code text-text-muted mb-space-sm">
            <span>Journal: {pub.journal} ({pub.volumeIssue}, {pub.date})</span>
            <span className="mx-2">·</span>
            <span>Authors: {pub.authors.join(', ')}</span>
          </div>

          <p className="text-body-sm font-body-sm text-text-muted mb-space-md leading-relaxed">
            <strong className="text-text-primary">Abstract: </strong>
            {pub.abstract}
          </p>

          {/* Collapsible BibTeX Citation Drawer */}
          {bibtexOpen && (
            <div className="relative bg-surface-base border border-border-glass rounded p-3 mb-space-md font-label-code text-label-code text-tertiary-container overflow-x-auto">
              <button
                type="button"
                onClick={handleCopyBibtex}
                className="absolute right-2 top-2 px-2 py-1 rounded bg-surface-container-high text-xs text-text-primary hover:bg-surface-container-highest flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedBibtex ? 'Copied!' : 'Copy'}</span>
              </button>
              <pre className="text-xs leading-relaxed">{bibtexCode}</pre>
            </div>
          )}

          {/* Citation Benchmarks Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-space-xs border-t border-border-glass/60 text-label-code font-label-code">
            <div>
              <span className="text-text-muted block text-label-badge">CITATION INDEX</span>
              <span className="text-primary-container font-semibold">IJCRT Thomson Reuters ID</span>
            </div>
            <div>
              <span className="text-text-muted block text-label-badge">PRIMARY DOMAIN</span>
              <span className="text-text-primary font-semibold">Vision &amp; Pattern Anomaly</span>
            </div>
            <div>
              <span className="text-text-muted block text-label-badge">BENCHMARK DATASET</span>
              <span className="text-text-primary font-semibold">Augmented 600 CCTV Set</span>
            </div>
            <div>
              <span className="text-text-muted block text-label-badge">STATUS</span>
              <span className="text-tertiary-container font-semibold">Published &amp; Indexed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
