import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types & Constants ---
interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  cols: string;
  image: string;
  overview: string;
  execution: string;
  impact: string;
  stack: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI-Based DCD/ASD Detection',
    category: 'ML & Healthcare',
    year: 'Pre-Incubated',
    cols: 'md:col-span-7',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80',
    overview: 'A diagnostic system engineered for the early detection of Developmental Coordination Disorder (DCD) and Autism Spectrum Disorder (ASD).',
    execution: 'Leverages machine learning for comprehensive video-based data analysis, accurately extracting complex behavioral features and motion patterns.',
    impact: 'Prioritizes model scalability and real-world clinical deployment over purely theoretical applications.',
    stack: ['Python', 'Machine Learning', 'Computer Vision', 'Pattern Recognition'],
  },
  {
    id: 2,
    title: 'Agentic AI Document Workflow',
    category: 'Autonomous AI',
    year: 'Active',
    cols: 'md:col-span-5',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&auto=format&fit=crop&q=80',
    overview: 'An intelligent, multi-agent AI workflow architected for autonomous document drafting and continuous verification.',
    execution: 'Bypasses standard ingestion pipelines in favor of a dynamic feedback loop utilizing distinct agents specifically designed as "The Writer" and "The Critic."',
    impact: 'Employs LangGraph orchestration and FastAPI integration to streamline and automate rigorous content evaluation.',
    stack: ['Python', 'LangGraph', 'FastAPI', 'LLMs'],
  },
  {
    id: 3,
    title: 'Adaptive Driving Intelligence',
    category: 'Embedded Systems',
    year: 'Completed',
    cols: 'md:col-span-5',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=900&auto=format&fit=crop&q=80',
    overview: 'An embedded systems project that actively improves night driving safety through advanced glare reduction.',
    execution: 'Fuses LDR and IR sensor data with embedded decision logic, programmed directly onto Arduino/ESP microcontrollers.',
    impact: 'Delivers a highly responsive, adaptive vehicle lighting system capable of real-time environmental adjustments.',
    stack: ['C', 'C++', 'Arduino/ESP', 'Embedded ML Logic', 'Sensor Fusion'],
  },
  {
    id: 4,
    title: 'Sustainable Energy Generation',
    category: 'Hardware Engineering',
    year: 'Academic',
    cols: 'md:col-span-7',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80',
    overview: 'An innovative hardware solution that replaces traditional gym weights with a hydraulic resistance framework.',
    execution: 'Successfully implements mechanical-to-electrical energy conversion for sustainable power generation.',
    impact: 'Highly optimized for efficiency, load adaptability, and modularity in physical deployment.',
    stack: ['Mechanical Design', 'Hydraulic Systems', 'Energy Conversion'],
  },
  {
    id: 5,
    title: 'CONLOG (Adyatva Labs)',
    category: 'Production-Grade Logistics',
    year: 'Deployed',
    cols: 'md:col-span-12',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
    overview: 'An event-driven logistics engine architected to digitize and automate construction site data capture, entirely eliminating manual reporting latency in field operations.',
    execution: 'Engineered a decoupled architecture featuring a mobile-optimized edge interface that transmits secure payloads to an n8n orchestration engine for asynchronous processing and automated ledgering.',
    impact: 'Bridged the gap between decentralized field teams and centralized management, delivering real-time inventory visibility and enterprise-grade security through CORS-enforced webhooks and stateless execution.',
    stack: ['JavaScript', 'Vercel Edge', 'n8n', 'Google Sheets API', 'Webhooks'],
  },
];

const smoothFade = { 
  duration: 0.85, 
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
};

// --- Sub-Components ---

function SectionHeader() {
  return (
    <motion.div
      className="flex items-end justify-between mb-10 md:mb-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={smoothFade}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-[hsl(var(--stroke))]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--muted))] font-sans font-medium">
            Selected Work
          </span>
        </div>
        <h2 className="font-body font-light leading-tight text-[hsl(var(--text))] text-clamp">
          Featured <em className="font-display not-italic font-serif italic">projects</em>
        </h2>
        <p className="text-sm mt-2 max-w-xs leading-relaxed text-[hsl(var(--muted))] font-sans">
          Functional AI tools and embedded logic built for real-world impact.
        </p>
      </div>
    </motion.div>
  );
}

interface ProjectCardProps {
  project: Project;
  i: number;
  onClick: () => void;
}

function ProjectCard({ project, i, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLargeRow = project.cols === 'md:col-span-12';

  return (
    <motion.div
      className={`group relative ${project.cols} rounded-[20px] overflow-hidden cursor-pointer border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] ${isLargeRow ? 'min-h-[580px]' : 'min-h-[500px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ ...smoothFade, delay: i * 0.06 }}
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        loading="lazy"
      />
      <div className="absolute inset-0 halftone-overlay pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      {/* Badges Top Bar */}
      <div
        className={`absolute top-6 left-6 right-6 flex flex-wrap items-start justify-between gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="max-w-[74%] px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.11em] leading-relaxed bg-white/90 text-neutral-900 backdrop-blur-md font-sans font-medium">
          {project.category}
        </div>
        <div className="text-[10px] px-5 py-2.5 rounded-full min-w-[104px] text-center uppercase tracking-[0.1em] bg-black/60 text-white/80 border border-white/10 backdrop-blur-md font-sans">
          {project.year}
        </div>
      </div>

      {/* Content Block */}
      <div className="absolute left-3 right-3 bottom-4 sm:left-6 sm:right-6 sm:bottom-8 md:left-8 md:right-8 md:bottom-10">
        <div className="rounded-[20px] sm:rounded-[24px] bg-black/40 p-6 sm:p-10 md:p-12 backdrop-blur-xl border border-white/10 shadow-lg">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight mb-3 text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl text-white/80 font-sans">
            {project.overview}
          </p>
        </div>
      </div>

      {/* Action Hover Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center p-7 bg-black/70 transition-all duration-400"
        style={{ 
          backdropFilter: isHovered ? 'blur(12px)' : 'blur(0px)', 
          opacity: isHovered ? 1 : 0 
        }}
      >
        <div className="relative p-[1px] rounded-full overflow-hidden group">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500" />
          <span className="relative z-10 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans font-medium bg-white text-neutral-900 transition-colors duration-200 group-hover:bg-neutral-50">
            View Details
          </span>
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetailPage({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-y-auto bg-neutral-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative min-h-screen">
        <button
          onClick={onClose}
          className="fixed top-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/75 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/95 hover:border-white/25 shadow-xl"
        >
          <span>←</span> Go back
        </button>

        <header className="relative">
          <div className="aspect-[21/9] w-full min-h-[350px] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/20" />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-4 pb-6 sm:px-10 lg:px-14">
            <div className="max-w-4xl rounded-[20px] sm:rounded-[24px] border border-white/10 bg-black/40 p-6 sm:p-10 md:p-12 backdrop-blur-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90">
                {project.category}
              </span>
              <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">{project.year}</p>
            </div>
          </div>
        </header>

        <main className="px-4 pb-20 pt-8 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] max-w-7xl mx-auto">
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">Overview</h2>
                <p className="text-base sm:text-lg leading-relaxed text-white/80">{project.overview}</p>
              </section>
              <section className="space-y-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">Technical Execution</h2>
                <p className="text-base sm:text-lg leading-relaxed text-white/80">{project.execution}</p>
              </section>
              <section className="space-y-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">Impact</h2>
                <p className="text-base sm:text-lg leading-relaxed text-white/80">{project.impact}</p>
              </section>
            </div>

            <aside className="h-fit rounded-[20px] sm:rounded-[24px] border border-white/10 bg-white/5 p-8 sm:p-10 md:p-12 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-5">Tech Stack</h2>
              <div className="flex flex-wrap gap-2.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 tracking-wide font-sans"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

// --- Main Section Export ---

export default function WorksSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Safely manage structural document side-effects using an effect block
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <>
      <section id="works" className="py-20 md:py-28 bg-[hsl(var(--bg))]">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
          <SectionHeader />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                i={i} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailPage 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}