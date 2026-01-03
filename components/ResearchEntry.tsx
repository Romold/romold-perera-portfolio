import React from 'react';
import { ResearchPaper } from '../types';
import { FileText, Download } from 'lucide-react';

interface ResearchEntryProps {
  paper: ResearchPaper;
}

export const ResearchEntry: React.FC<ResearchEntryProps> = ({ paper }) => {
  return (
    <div className="mb-12 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
        <h3 className="text-base font-medium text-neutral-200 leading-snug">
          {paper.title}
        </h3>
        <span className="shrink-0 text-xs font-mono px-2 py-0.5 rounded border border-neutral-800 text-neutral-500 bg-neutral-900">
          {paper.status}
        </span>
      </div>
      
      <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl mb-4">
        {paper.description}
      </p>

      {paper.certificateImage && (
        <div className="mb-6 mt-4">
          <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-2 border-b border-neutral-900 pb-1 inline-block">
            Certificate of Participation
          </div>
          <img 
            src={paper.certificateImage} 
            alt={`Certificate for ${paper.title}`}
            className="w-full max-w-md rounded-sm border border-neutral-800 bg-neutral-900 opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      )}
      
      <div className="flex gap-4">
        {paper.pdfUrl && (
          <a 
            href={paper.pdfUrl} 
            download
            className="inline-flex items-center text-xs font-mono text-neutral-300 hover:text-white transition-colors border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 px-3 py-1.5 rounded-sm"
          >
            <Download size={14} className="mr-2" />
            Download PDF
          </a>
        )}

        {paper.url && (
          <a 
            href={paper.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors py-1.5"
          >
            <FileText size={12} className="mr-2" />
            Read Online
          </a>
        )}
        
        {!paper.url && !paper.pdfUrl && (
          <span className="text-xs font-mono text-neutral-600 py-1.5">
            Link forthcoming
          </span>
        )}
      </div>
    </div>
  );
};