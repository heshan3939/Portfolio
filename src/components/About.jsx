import React from 'react';
import { portfolioData } from '../data/portfolio';
import { MapPin, Briefcase } from 'lucide-react';

export default function About() {
  const { personal, summary } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="inline-flex items-center gap-2 text-accent text-xs font-mono tracking-widest uppercase mb-4">
          <span className="w-6 h-px bg-accent" />
          <span>About</span>
        </div>

        <div className="space-y-6">
          {/* Summary — straight from portfolio data */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {summary}
          </p>

          {/* What I'm looking for — plain, specific */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-dark-surface border border-dark-border">
            <Briefcase className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-slate-100">Looking for:</span>{' '}
              an internship or entry-level software engineering role where I can contribute to
              real codebases and continue learning on the job.
            </p>
          </div>

          {/* Location chip */}
          <div className="flex items-center gap-1.5 text-sm font-mono text-slate-400">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{personal.location}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
