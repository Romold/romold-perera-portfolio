import React from 'react';
import { Project } from '../types';
import { Github, Globe, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ICON_SIZE = 18;

// Simple Icons Kaggle path
const KaggleIcon = ({ size = ICON_SIZE, className = "" }: { size?: number, className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className}
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Kaggle</title>
    <path d="M18.825 23.859c-.022.092-.117.141-.284.141h-3.139c-.187 0-.351-.082-.493-.248l-5.114-6.592-2.684 2.544v3.919c0 .24-.15.378-.451.417h-2.906c-.22 0-.36-.126-.418-.376V.415c.038-.22.18-.351.418-.396h2.906c.26-.017.42.115.451.354v14.15l8.03-9.528c.15-.175.32-.262.536-.262h3.117c.187 0 .285.068.293.203c.008.086-.05.18-.176.282l-5.96 6.326l6.096 7.42c.118.15.151.246.101.288z"/>
  </svg>
);

const getIconForLink = (label: string) => {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes('github') || lowerLabel.includes('repo') || lowerLabel.includes('code')) {
    return <Github size={ICON_SIZE} strokeWidth={1.8} />;
  }
  if (lowerLabel.includes('demo') || lowerLabel.includes('website') || lowerLabel.includes('app') || lowerLabel.includes('live')) {
    return <Globe size={ICON_SIZE} strokeWidth={1.8} />;
  }
  if (lowerLabel.includes('kaggle') || lowerLabel.includes('dataset') || lowerLabel.includes('models')) {
    return <KaggleIcon size={ICON_SIZE} />;
  }
  return <ArrowUpRight size={ICON_SIZE} strokeWidth={1.8} />;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col items-start p-6 border border-neutral-800 bg-neutral-900/20 hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300 rounded-sm">
      <div className="flex justify-between items-start w-full mb-3">
        <h3 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-4 mt-1">
          {project.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label={`Visit ${link.label} for ${project.title}`}
              title={link.label}
            >
              {getIconForLink(link.label)}
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