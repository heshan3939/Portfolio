import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-6 h-px bg-accent" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education
          </h2>
        </div>

        {/* Simple timeline */}
        <div className="relative ml-3 border-l border-dark-border space-y-10">
          {education.map((edu, i) => (
            <div key={i} className="relative pl-7">
              {/* Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-accent bg-dark-bg" />

              <div className="space-y-1">
                {/* Degree */}
                <h3 className="text-base font-semibold text-slate-100">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-sm text-slate-400">
                  {edu.institution}
                </p>

                {/* Period + optional note */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar className="w-3 h-3 text-accent" />
                    {edu.period}
                  </span>

                  {edu.note && (
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      {edu.note}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
