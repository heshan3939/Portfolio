import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowDown, FileDown } from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-50 tracking-tight leading-none mb-5">
          {personal.name}
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-slate-300 font-medium mb-4 max-w-2xl mx-auto">
          {personal.title}
        </p>

        {/* One-line value statement — factual, no buzzwords */}
        <p className="text-base text-slate-400 font-mono mb-10 max-w-xl mx-auto">
          Building full-stack applications and cloud infrastructure with C#, Laravel, React.js, and AWS.
        </p>

        {/* Two buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-accent text-dark-bg font-semibold text-sm tracking-wide hover:bg-accent-light transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)]"
          >
            View projects
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href="/Heshan_Hettiarachchi_CV.pdf"
            download
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-dark-surface text-slate-200 border border-dark-border font-medium text-sm hover:border-accent/50 hover:text-accent transition-all"
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
