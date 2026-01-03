import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'projects', 'research', 'about', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          return;
        }
      }
      if (window.scrollY < 100) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={scrollTo(id)}
      className={`text-sm transition-colors duration-200 ${
        activeSection === id ? 'text-neutral-200 font-medium' : 'text-neutral-500 hover:text-neutral-300'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-900">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={scrollTo('home')} className="font-semibold text-neutral-200 tracking-tight">
          RP
        </button>
        <div className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar mask-gradient">
          <NavLink id="experience" label="Experience" />
          <NavLink id="projects" label="Projects" />
          <NavLink id="research" label="Research" />
          <NavLink id="about" label="About" />
          <NavLink id="contact" label="Contact" />
        </div>
      </div>
    </nav>
  );
};