import React from 'react';

export interface Project {
  title: string;
  description: string;
  stack: string[];
  links: {
    label: string;
    url: string;
  }[];
}

export interface ResearchPaper {
  title: string;
  status: string;
  description: string;
  url?: string;
  pdfUrl?: string;
  certificateImage?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

export interface WorkExperience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}