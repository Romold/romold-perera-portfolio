import React from 'react';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ResearchEntry } from './components/ResearchEntry';
import { Navigation } from './components/Navigation';
import { WorkExperienceEntry } from './components/WorkExperienceEntry';
import { Github, Linkedin, Database } from 'lucide-react';
import { Project, ResearchPaper, WorkExperience } from './types';

const workExperiences: WorkExperience[] = [
  {
    role: "Intern - AI Automation Engineer",
    company: "Studi-o",
    type: "Full-time",
    period: "Nov 2025 - Present", // Corrected year based on '3 mos' context
    location: "Sri Lanka · Remote",
    description: [
      "Designed and developed end-to-end automation workflows using n8n to streamline repetitive and manual business processes",
      "Integrated multiple third-party applications and APIs including CRMs, databases, cloud platforms, and communication tools",
      "Built AI-powered workflows leveraging large language models for data processing, intelligent routing, and decision-making",
      "Automated data collection, transformation, and synchronization between systems",
      "Implemented webhooks, triggers, and conditional logic for real-time and event-based automations",
      "Optimized workflow performance, error handling, and system reliability",
      "Documented automation architecture and logic for internal use and future scalability",
      "Collaborated with cross-functional teams to identify automation opportunities and improve operational efficiency"
    ],
    skills: ["n8n", "Python", "Google Gemini", "LLMs", "REST APIs", "Automation"]
  },
  {
    role: "Data Analytics Intern",
    company: "Programus Ltd",
    type: "Full-time",
    period: "Mar 2024 - Sep 2024",
    location: "Colombo, Sri Lanka · Hybrid",
    description: [
      "Analyzed employee performance metrics, turnover trends, and engagement data using Excel and Python, enabling the HR team to identify actionable patterns",
      "Automated recurring HR reports using Python (Pandas, Matplotlib), significantly reducing manual effort and ensuring timely data delivery",
      "Created dynamic dashboards in Excel to provide real-time HR analytics for stakeholders",
      "Recommended process improvements based on data insights, contributing to streamlined HR operations"
    ],
    skills: ["Python", "Pandas", "Matplotlib", "Excel", "Data Visualization"]
  }
];

// Content Data
const projects: Project[] = [
  {
    title: "Cyclone Risk Analysis Platform",
    description: "A data-driven system for analyzing tropical cyclone patterns in the North Indian Ocean. Focused on seasonal risk, intensity trends, and regional impact assessment.",
    stack: ["Python", "Typescript"],
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "Demo", url: "https://demo.com" }
    ]
  },
  {
    title: "Semantic Log Analyzer",
    description: "Automated anomaly detection pipeline for distributed system logs using RAG (Retrieval-Augmented Generation) to correlate errors with codebase changes.",
    stack: ["TypeScript", "Elasticsearch", "OpenAI API", "Docker"],
    links: [
      { label: "GitHub", url: "https://github.com" }
    ]
  },
  {
    title: "Neural Architecture Search CLI",
    description: "Command-line tool for automating hyperparameter tuning and architecture selection for vision transformers.",
    stack: ["Python", "PyTorch", "Ray Tune"],
    links: [
      { label: "GitHub", url: "https://github.com" }
    ]
  }
];

const researchPapers: ResearchPaper[] = [
  {
    title: "Ransomware: Emerging Threats and Modern Defense Mechanisms",
    status: "Preprint",
    description: "A comprehensive literature review examining the evolution of ransomware threats, including mobile, locker, and crypto ransomware, and evaluating modern detection and defense mechanisms. Highlights the effectiveness of machine learning, selective hashing, and behavioral analysis, while identifying the need for adaptive, multi-layered security approaches to address increasingly sophisticated ransomware attacks.",
    url: "https://www.researchgate.net/publication/386052845_Ransomware_Emerging_Threats_and_Defense_Mechanisms"
  },
  {
    title: "Enhancing DDoS Detection in SDN-Based Autonomous Vehicles using Transformer-based Feature Transformation",
    status: "Presented at ICECET 2025",
    description: "Presented at the International Conference on Electrical, Computer and Energy Technologies (Paris). This paper introduces a transformer-based feature transformation approach to improve the accuracy of DDoS attack detection in SDN-based autonomous vehicle networks.",
    pdfUrl: "/1260.pdf",
    certificateImage: "/12600.png"
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-400 font-sans selection:bg-neutral-800 selection:text-neutral-200">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-medium text-neutral-100 tracking-tight mb-4">
            Romold Perera
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 font-light mb-8">
            Data & AI Automation Enthusiast 
          </p>
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span className="text-xs font-mono text-neutral-400">Open to collaborations</span>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <Section id="experience" title="Work Experience">
        <div className="border-l border-neutral-800 pl-6 md:pl-8 ml-2">
          {workExperiences.map((exp, idx) => (
            <WorkExperienceEntry key={idx} experience={exp} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Recent Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research" title="Writing & Research">
        <div className="border-l border-neutral-800 pl-6 md:pl-8 ml-2">
          {researchPapers.map((paper, idx) => (
            <ResearchEntry key={idx} paper={paper} />
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About">
        <div className="prose prose-invert prose-neutral max-w-none text-neutral-400">
          <p className="mb-6 leading-relaxed">
            I love to work in the Data & AI automation space, with a strong interest in building reliable, practical systems that turn raw data into usable outcomes.
            My focus is on data engineering, automation workflows
            and applying AI where it genuinely improves efficiency and decision-making.
          </p>
          <p className="mb-6 leading-relaxed">
            I care deeply about clean, maintainable architectures and prefer simple, 
            transparent systems over complex and fragile solutions. 
            I enjoy designing data pipelines, automations, and AI-assisted processes that reduce manual effort while remaining understandable, debuggable, and dependable.
          </p>
          <p className="leading-relaxed">
            My long term goal is to grow as a Data Engineer, 
            while continuing to explore how AI-driven automation can be applied responsibly in real-world data systems.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact" className="mb-24">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm text-neutral-500 mb-2">Email</p>
            <a href="mailto:romoldperera58@gmail.com" className="text-lg text-neutral-200 hover:text-white transition-colors">
              romoldperera58@gmail.com
            </a>
          </div>
          
          <div>
            <p className="text-sm text-neutral-500 mb-4">Connect</p>
            <div className="flex gap-6">
              <a href="https://github.com/Romold" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors">
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="https://www.researchgate.net/profile/Romold-Perera?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors">
                <Database size={20} />
                <span className="hidden sm:inline">ResearchGate</span>
              </a>
              <a href="https://www.linkedin.com/in/romold-perera-b046a3261/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors">
                <Linkedin size={20} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-neutral-900 text-center">
        <p className="text-xs text-neutral-600 font-mono">
          © {new Date().getFullYear()} Romold Perera. Built with precision.
        </p>
      </footer>
    </div>
  );
};

export default App;