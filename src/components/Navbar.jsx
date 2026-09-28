import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { Code2, Github, Linkedin, Mail, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel border-b border-dark-border py-3 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
          aria-label="Scroll to top"
        >
          <div className="w-9 h-9 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-accent group-hover:border-accent/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
            <Terminal className="w-4 h-4 text-accent" />
          </div>
          <div>
            <div className="font-semibold text-slate-100 tracking-tight text-sm sm:text-base flex items-center gap-2">
              <span>{portfolioData.personal.name}</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-accent/10 text-accent border border-accent/20">
                SRI LANKA
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              SE Internship Candidate
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-surface/80 p-1.5 rounded-full border border-dark-border shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-accent text-dark-bg font-semibold shadow-[0_0_12px_rgba(16,185,129,0.4)]' 
                    : 'text-slate-400 hover:text-slate-100 hover:bg-dark-hover/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Links & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 rounded-lg bg-dark-surface hover:bg-dark-hover text-slate-300 hover:text-accent border border-dark-border hover:border-accent/40 transition-all"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 rounded-lg bg-dark-surface hover:bg-dark-hover text-slate-300 hover:text-accent border border-dark-border hover:border-accent/40 transition-all"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-dark-surface hover:bg-accent/10 text-accent border border-accent/30 hover:border-accent transition-all"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-dark-surface text-slate-300 border border-dark-border hover:text-accent focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-dark-border px-4 pt-3 pb-5 mt-2 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-accent/10 text-accent border border-accent/30 font-semibold'
                  : 'text-slate-300 hover:bg-dark-hover hover:text-slate-100'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-dark-border flex items-center gap-3">
            <a
              href={portfolioData.personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-dark-surface border border-dark-border text-slate-300 text-xs font-mono"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={portfolioData.personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-dark-surface border border-dark-border text-slate-300 text-xs font-mono"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
