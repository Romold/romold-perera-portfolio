import React from 'react';
import { WorkExperience } from '../types';

interface WorkExperienceEntryProps {
  experience: WorkExperience;
}

export const WorkExperienceEntry: React.FC<WorkExperienceEntryProps> = ({ experience }) => {
  return (
    <div className="mb-12 last:mb-0 relative">
      <div className="absolute -left-[41px] md:-left-[49px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-950 z-10 hidden sm:block" />
      
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
        <h3 className="text-lg font-medium text-neutral-200">
          {experience.role}
        </h3>
        <span className="text-xs font-mono text-neutral-500 mt-1 sm:mt-0 shrink-0">
          {experience.period}
        </span>
      </div>
      
      <div className="text-sm font-mono text-neutral-400 mb-4 flex flex-wrap gap-x-2 gap-y-1 items-center">
        <span className="text-neutral-300 font-medium">{experience.company}</span>
        <span className="text-neutral-700">•</span>
        <span>{experience.location}</span>
        <span className="text-neutral-700">•</span>
        <span>{experience.type}</span>
      </div>

      <ul className="list-disc list-outside ml-4 text-sm text-neutral-400 leading-relaxed space-y-2 mb-5 marker:text-neutral-700">
        {experience.description.map((item, idx) => (
          <li key={idx} className="pl-1">{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span 
            key={skill} 
            className="text-xs font-mono text-neutral-500 bg-neutral-900/50 border border-neutral-800 px-2 py-0.5 rounded-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};