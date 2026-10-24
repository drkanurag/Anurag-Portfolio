import React, { useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  FileText,
  Mail,
  Send,
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';
import { PROFILE_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResumeModal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Enterprise AI & Vision Systems Architecture',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );

  const handleCopy = (email: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }
    setSubmitStatus('submitting');
    try {
      const response = await fetch(PROFILE_DATA.contacts.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...formState, _gotcha: honeypot }),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: 'Enterprise AI & Vision Systems Architecture',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section className="py-space-2xl max-w-[1320px] mx-auto px-space-md sm:px-space-xl" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center" id="console">
        {/* Terminal Prompt Context (5 cols) */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-primary-container font-label-badge text-label-badge mb-1 uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">terminal</span>
            ESTABLISH CONNECTION // CONSOLE
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-text-primary mb-space-sm">
            Let&apos;s Engineer Next-Gen AI Infrastructure Together
          </h2>
          <p className="text-body-md font-body-md text-text-muted mb-space-md leading-relaxed">
            Available for Enterprise AI Architecture, Staff AI/Software Engineering appointments,
            technical consultations, and collaborative research initiatives.
          </p>

          {/* Quick SSH / Protocol Matrix */}
          <div className="bg-surface-card border border-border-glass p-3.5 rounded-lg font-label-code text-label-code space-y-2 mb-space-md">
            <div className="flex items-center justify-between text-xs text-text-muted">
              <span>PRIMARY_EMAIL</span>
              <button
                type="button"
                onClick={() => handleCopy(PROFILE_DATA.contacts.personalEmail)}
                className="text-primary-container hover:underline flex items-center gap-1 font-semibold"
              >
                <span>{PROFILE_DATA.contacts.personalEmail}</span>
                {copiedEmail === PROFILE_DATA.contacts.personalEmail ? (
                  <Check className="w-3 h-3 text-tertiary-container" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-between text-xs text-text-muted">
              <span>ACADEMIC_EMAIL</span>
              <button
                type="button"
                onClick={() => handleCopy(PROFILE_DATA.contacts.academicEmail)}
                className="text-secondary hover:underline flex items-center gap-1 font-semibold"
              >
                <span>{PROFILE_DATA.contacts.academicEmail}</span>
                {copiedEmail === PROFILE_DATA.contacts.academicEmail ? (
                  <Check className="w-3 h-3 text-tertiary-container" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-between text-xs text-text-muted">
              <span>COMM_CHANNELS</span>
              <span className="text-tertiary-container font-semibold">SECURE_EMAIL // BOOK_CALL</span>
            </div>
            <div className="flex items-center justify-between text-xs text-text-muted">
              <span>LOCATION_HUB</span>
              <span className="text-text-primary font-semibold">{PROFILE_DATA.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-space-sm">
            <a
              className="w-10 h-10 rounded-DEFAULT bg-surface-card border border-border-glass flex items-center justify-center text-text-muted hover:text-primary-container hover:border-glow transition-all"
              href={PROFILE_DATA.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              className="w-10 h-10 rounded-DEFAULT bg-surface-card border border-border-glass flex items-center justify-center text-text-muted hover:text-primary-container hover:border-glow transition-all"
              href={PROFILE_DATA.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              className="w-10 h-10 rounded-DEFAULT bg-surface-card border border-border-glass flex items-center justify-center text-text-muted hover:text-primary-container hover:border-glow transition-all"
              href={`mailto:${PROFILE_DATA.contacts.personalEmail}`}
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="h-10 px-3 rounded-DEFAULT bg-surface-card border border-border-glass flex items-center gap-1.5 text-text-muted hover:text-primary-container hover:border-glow font-label-code text-xs transition-all"
              title="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-primary-container" />
              <span>Resume.sys</span>
            </button>
          </div>
        </div>

        {/* Developer Terminal Interactive Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-surface-card/90 backdrop-blur-xl border border-border-glass rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.65)] glow-border overflow-hidden">
            {/* Terminal Window Header */}
            <div className="bg-surface-base px-4 py-2.5 border-b border-border-glass flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-secondary-container/70 inline-block" />
                <span className="w-3 h-3 rounded-full bg-tertiary-container/70 inline-block" />
                <span className="font-label-code text-label-code text-text-muted ml-2">
                  bash -- anurag@systems-console:~$
                </span>
              </div>
              <span className="font-label-badge text-label-badge text-text-muted">
                PORT: 443 [TLS 1.3]
              </span>
            </div>

            {/* Form Area */}
            <form onSubmit={handleSubmit} className="p-space-md md:p-space-lg space-y-space-md font-label-code text-label-code">
              {/* Honeypot anti-spam field */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label htmlFor="caller_name" className="block text-text-muted text-xs mb-1">
                    CALLER_IDENTIFIER [NAME]
                  </label>
                  <input
                    id="caller_name"
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Dr. Elena Vance"
                    className="w-full bg-surface-base/85 border border-outline-variant/30 rounded-DEFAULT px-3 py-2 text-text-primary focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="caller_email" className="block text-text-muted text-xs mb-1">
                    TRANSMISSION_RETURN [EMAIL]
                  </label>
                  <input
                    id="caller_email"
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@enterprise.org"
                    className="w-full bg-surface-base/85 border border-outline-variant/30 rounded-DEFAULT px-3 py-2 text-text-primary focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="caller_scope" className="block text-text-muted text-xs mb-1">
                  ENGAGEMENT_SCOPE [SELECT INTENT]
                </label>
                <select
                  id="caller_scope"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-surface-base/85 border border-outline-variant/30 rounded-DEFAULT px-3 py-2 text-text-primary focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
                >
                  <option>Enterprise AI &amp; Vision Systems Architecture</option>
                  <option>Distributed Microservices &amp; Spring Boot Engineering</option>
                  <option>Full-Time Senior / Lead Engineering Opportunities</option>
                  <option>Academic Research Collaboration &amp; Keynote</option>
                </select>
              </div>

              <div>
                <label htmlFor="caller_message" className="block text-text-muted text-xs mb-1">
                  TRANSMISSION_PAYLOAD [MESSAGE]
                </label>
                <textarea
                  id="caller_message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="// Enter technical project specs, latency goals, or opportunity overview..."
                  className="w-full bg-surface-base/85 border border-outline-variant/30 rounded-DEFAULT px-3 py-2 text-text-primary focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-3 rounded bg-tertiary-container/10 border border-tertiary-container/30 text-tertiary-container text-xs">
                  [SYS_ACK]: Transmission received. Telemetry packet dispatched to Anurag Podder.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
                  <span>Note: Endpoint busy. Please send directly via mail:</span>
                  <a
                    href={`mailto:${PROFILE_DATA.contacts.personalEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(formState.message)}`}
                    className="font-bold underline flex items-center gap-1"
                  >
                    <span>Send via Client</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-text-muted flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
                  Socket: READY [200 OK]
                </span>

                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="px-space-md py-2.5 bg-primary-container text-surface-base rounded-DEFAULT font-label-code text-label-code font-bold shadow-[0_0_16px_rgba(0,240,255,0.4)] hover:shadow-[0_0_24px_rgba(0,240,255,0.6)] active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {submitStatus === 'submitting' ? (
                    <span>Dispatching...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch Packet</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
