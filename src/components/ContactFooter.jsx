import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

export default function ContactFooter() {
  const { personal } = portfolioData;

  return (
    <>
      {/* ─── Contact Section ─── */}
      <section id="contact" className="py-20 md:py-28 border-t border-dark-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          {/* Heading */}
          <div>
            <div className="inline-flex items-center gap-2 text-accent text-xs font-mono tracking-widest uppercase mb-2">
              <span className="w-6 h-px bg-accent" />
              <span>Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
              Open to internship and entry-level software engineering opportunities. Reach out via email or find me on GitHub and LinkedIn.
            </p>
          </div>

          {/* Icon links row */}
          <div className="flex items-center justify-center gap-5">
            <a
              href={`mailto:${personal.contact.email}`}
              className="p-3 rounded-xl bg-dark-surface hover:bg-dark-hover text-slate-300 hover:text-accent border border-dark-border hover:border-accent/40 transition-all"
              aria-label="Email"
              title={personal.contact.email}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-surface hover:bg-dark-hover text-slate-300 hover:text-accent border border-dark-border hover:border-accent/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-surface hover:bg-dark-hover text-slate-300 hover:text-accent border border-dark-border hover:border-accent/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mailto button */}
          <a
            href={`mailto:${personal.contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-dark-bg font-semibold text-sm hover:bg-accent-light transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            <Mail className="w-4 h-4" />
            Send an Email
          </a>

        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-dark-border py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <span>© {new Date().getFullYear()} {personal.name}</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-1.5 rounded-md hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </>
  );
}
