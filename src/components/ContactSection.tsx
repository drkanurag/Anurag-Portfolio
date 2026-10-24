import React, { useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
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
    subject: 'Engineering / AI & Data Science Opportunity',
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
          subject: 'Engineering / AI & Data Science Opportunity',
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
    <section id="contact" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 6 Columns: Direct Contact Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
                08 / CONTACT &amp; COLLABORATION
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Let’s Build Impactful Systems Together
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                Currently pursuing an MBA in AI &amp; Data Science at TAPMI Manipal (2026–2028).
                Open to summer internships (2027), live projects, and full-time roles in AI/ML
                engineering, data science, and backend engineering.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {/* Personal Email - First */}
              <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] text-slate-400">Direct Personal Email</div>
                    <a
                      href={`mailto:${PROFILE_DATA.contacts.personalEmail}`}
                      className="font-mono text-xs sm:text-sm text-white hover:text-cyan-300 truncate block"
                    >
                      {PROFILE_DATA.contacts.personalEmail}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE_DATA.contacts.personalEmail)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 font-mono text-xs text-slate-300 inline-flex items-center gap-1 shrink-0"
                >
                  {copiedEmail === PROFILE_DATA.contacts.personalEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* TAPMI Academic Email - Second */}
              <div className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] text-slate-400">
                      TAPMI email
                    </div>
                    <a
                      href={`mailto:${PROFILE_DATA.contacts.academicEmail}`}
                      className="font-mono text-xs sm:text-sm text-white hover:text-cyan-300 truncate block"
                    >
                      {PROFILE_DATA.contacts.academicEmail}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE_DATA.contacts.academicEmail)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 font-mono text-xs text-slate-300 inline-flex items-center gap-1 shrink-0"
                >
                  {copiedEmail === PROFILE_DATA.contacts.academicEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn & GitHub Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PROFILE_DATA.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 hover:border-indigo-500/50 flex items-center justify-between transition"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-indigo-400" />
                    <div>
                      <div className="font-mono text-xs font-bold text-white">LinkedIn</div>
                      <div className="font-mono text-[11px] text-slate-400">anurag-podder</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                <a
                  href={PROFILE_DATA.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#090e1c] border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between transition"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="font-mono text-xs font-bold text-white">GitHub</div>
                      <div className="font-mono text-[11px] text-slate-400">@drkanurag</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Location & Resume Quick Box */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PROFILE_DATA.location}</span>
              </div>
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Right 6 Columns: Accessible Validated Contact Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-[#090e1c]/95 border border-slate-800/90 p-6 sm:p-8 space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="font-display text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
                <span className="font-mono text-[11px] text-emerald-400">
                  Replies within 2 business days
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs text-slate-300 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs text-slate-300 mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs text-slate-300 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs text-slate-300 mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hello Anurag, I reviewed your RoadVision AI and DataLens case studies..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Honeypot Spam Trap */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-mono text-xs font-semibold shadow-lg transition disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {submitStatus === 'submitting' ? 'Sending Message...' : 'Send Message'}
                  </span>
                </button>

                <a
                  href={`mailto:${PROFILE_DATA.contacts.personalEmail}?subject=${encodeURIComponent(
                    formState.subject
                  )}&body=${encodeURIComponent(formState.message)}`}
                  className="font-mono text-xs text-slate-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Or open directly in your Email Client →
                </a>
              </div>

              {submitStatus === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 font-mono text-xs text-emerald-300">
                  ✓ Thank you! Your message has been delivered.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 font-mono text-xs text-amber-200">
                  Couldn&apos;t send your message right now. Please email me directly at{' '}
                  <a
                    href={`mailto:${PROFILE_DATA.contacts.personalEmail}`}
                    className="underline font-bold"
                  >
                    {PROFILE_DATA.contacts.personalEmail}
                  </a>.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
