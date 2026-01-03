import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-neutral-900 first:border-t-0 ${className}`}>
      <div className="max-w-3xl mx-auto px-6">
        {title && (
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-8 md:mb-12">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};