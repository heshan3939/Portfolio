import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Code2, Cpu, Database, Cloud, Wrench, GitBranch, Layers } from 'lucide-react';

const icons = {
  Languages: Code2,
  Frameworks: Cpu,
  Databases: Database,
  Cloud: Cloud,
  Tools: Wrench,
  Methodologies: GitBranch,
  Architecture: Layers,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-dark-border/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-6 h-px bg-accent" />
            <span>Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Skills
          </h2>
        </div>

        {/* Grouped tags */}
        <div className="space-y-8">
          {skills.map((group) => {
            const Icon = icons[group.category] || Code2;
            return (
              <div key={group.category}>
                {/* Category heading */}
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon className="w-4 h-4 text-accent" />
                  <h3 className="text-sm font-semibold text-slate-200 tracking-wide">
                    {group.category}
                  </h3>
                  <span className="flex-1 h-px bg-dark-border/60" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md text-xs font-mono text-slate-300 bg-dark-surface border border-dark-border hover:border-accent/40 hover:text-accent transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
