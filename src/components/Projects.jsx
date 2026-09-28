import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import {
  Github,
  ExternalLink,
  Calendar,
  ChevronRight,
  X,
  Image as ImageIcon,
  Layers,
  User,
  AlertCircle,
  Network,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  ProjectCard – the compact card shown in the grid                  */
/* ------------------------------------------------------------------ */
function ProjectCard({ project, onOpenDetails }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
      {/* Top: category + period */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-dark-bg/60 px-2.5 py-1 rounded-full border border-dark-border">
            <Calendar className="w-3 h-3 text-accent" />
            {project.period}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-100 mb-3 leading-snug group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Two-line summary */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
          {project.cardSummary}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-bg text-slate-300 border border-dark-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-dark-border/70">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-dark-surface hover:bg-accent/10 border border-dark-border hover:border-accent/40 text-accent text-xs font-mono font-semibold transition-all"
          >
            {project.linkIsGithub ? (
              <Github className="w-3.5 h-3.5" />
            ) : (
              <ExternalLink className="w-3.5 h-3.5" />
            )}
            {project.linkIsGithub ? 'GitHub' : project.linkText}
          </a>
        )}

        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-dark-surface hover:bg-dark-hover border border-dark-border text-slate-200 text-xs font-medium transition-all ml-auto"
        >
          Details
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MediaArea – image gallery / architecture-diagram slot              */
/* ------------------------------------------------------------------ */
function MediaArea({ project }) {
  const basePath = `/assets/${project.id}/`;
  const [images, setImages] = useState([]);
  const [loadAttempted, setLoadAttempted] = useState(false);

  useEffect(() => {
    // Try loading up to 4 numbered images (1.png … 4.png).
    // If none exist the placeholder is shown instead.
    const candidates = ['1.png', '2.png', '3.png', '4.png'];
    const loaded = [];

    let remaining = candidates.length;
    candidates.forEach((name) => {
      const img = new window.Image();
      img.onload = () => {
        loaded.push(basePath + name);
        remaining--;
        if (remaining === 0) {
          setImages([...loaded]);
          setLoadAttempted(true);
        }
      };
      img.onerror = () => {
        remaining--;
        if (remaining === 0) {
          setImages([...loaded]);
          setLoadAttempted(true);
        }
      };
      img.src = basePath + name;
    });
  }, [project.id]);

  // Architecture-diagram slot for the AWS project
  if (project.hasArchDiagram) {
    const diagramSrc = `${basePath}architecture-diagram.png`;
    return (
      <div className="space-y-3">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Network className="w-3.5 h-3.5 text-accent" />
          Architecture Diagram
        </p>
        <div className="rounded-lg border border-dark-border bg-dark-bg overflow-hidden">
          <img
            src={diagramSrc}
            alt={`${project.title} architecture diagram`}
            className="w-full object-contain hidden"
            onLoad={(e) => {
              e.target.classList.remove('hidden');
              e.target.nextElementSibling?.classList.add('hidden');
            }}
            onError={(e) => {
              e.target.classList.add('hidden');
            }}
          />
          <div className="flex flex-col items-center justify-center py-12 text-slate-500 gap-2">
            <ImageIcon className="w-8 h-8 text-slate-600" />
            <span className="text-xs font-mono">
              Place diagram at{' '}
              <code className="text-accent/70">public/assets/{project.id}/architecture-diagram.png</code>
            </span>
          </div>
        </div>

        {/* Also show other images if present */}
        {loadAttempted && images.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            {images.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="rounded-lg border border-dark-border w-full object-cover"
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Generic media area for other projects
  if (loadAttempted && images.length > 0) {
    return (
      <div className="space-y-3">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-accent" />
          Screenshots
        </p>
        <div className="grid grid-cols-2 gap-2">
          {images.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="rounded-lg border border-dark-border w-full object-cover"
            />
          ))}
        </div>
      </div>
    );
  }

  // Placeholder
  return (
    <div className="rounded-lg border border-dashed border-dark-border bg-dark-bg/50 flex flex-col items-center justify-center py-10 text-slate-500 gap-2">
      <ImageIcon className="w-7 h-7 text-slate-600" />
      <span className="text-xs font-mono text-center px-4">
        Add images to{' '}
        <code className="text-accent/70">public/assets/{project.id}/</code>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ProjectModal – detailed overlay                                    */
/* ------------------------------------------------------------------ */
function ProjectModal({ project, onClose }) {
  const backdropRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto pt-16 pb-12 px-4"
    >
      <div className="relative w-full max-w-3xl glass-card rounded-2xl border border-dark-border shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-dark-bg hover:bg-dark-hover text-slate-300 hover:text-accent border border-dark-border transition-all z-10"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
              <span className="uppercase tracking-widest">{project.category}</span>
              <span className="text-dark-border">|</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-accent" />
                {project.period}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug">
              {project.title}
            </h2>
          </div>

          {/* Problem */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-dark-bg border border-dark-border">
            <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Problem
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <User className="w-4 h-4 text-accent" />
            <span className="font-medium text-slate-100">Role:</span>
            <span>{project.role}</span>
          </div>

          {/* What I built – the bullet list */}
          <div>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-accent" />
              What I built
            </p>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="tech-tag"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Media area */}
          <MediaArea project={project} />

          {/* Footer link */}
          {project.link && (
            <div className="pt-4 border-t border-dark-border">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-mono font-semibold hover:bg-accent/20 transition-all"
              >
                {project.linkIsGithub ? (
                  <Github className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                {project.linkText}
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects – main section                                           */
/* ------------------------------------------------------------------ */
export default function Projects() {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-dark-border">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-6 h-px bg-accent" />
            <span>Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Software Projects
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Hands-on work across AWS cloud infrastructure, full-stack web applications, desktop systems, and Agile team delivery.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
