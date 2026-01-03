import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col items-start p-6 border border-neutral-800 bg-neutral-900/20 hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300 rounded-sm">
      <div className="flex justify-between items-start w-full mb-3">
        <h3 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-3">
          {project.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label={`Visit ${link.label} for ${project.title}`}
            >
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </div>
      
      <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((tech) => (
          <span 
            key={tech} 
            className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};