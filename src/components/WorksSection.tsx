import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
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

const smoothFade = { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

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
          <div className="w-6 h-px" style={{ background: 'hsl(var(--stroke))' }} />
          <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}>
            Selected Work
          </span>
        </div>
        <h2 className="font-body font-light leading-tight" style={{ color: 'hsl(var(--text))', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
          Featured <em className="font-display" style={{ fontStyle: 'italic' }}>projects</em>
        </h2>
        <p className="text-sm mt-2 max-w-xs leading-relaxed" style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}>
          Functional AI tools and embedded logic built for real-world impact.
        </p>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, i, onClick }: { project: typeof PROJECTS[0]; i: number, onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      className={`group relative ${project.cols} rounded-[20px] overflow-hidden cursor-pointer`}
      style={{ background: 'hsl(var(--surface))', border: '1px solid hsl(var(--stroke))', minHeight: project.cols === 'md:col-span-12' ? 580 : 500 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ ...smoothFade, delay: i * 0.06 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        loading="lazy"
      />
      <div className="absolute inset-0 halftone-overlay pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.16) 46%, rgba(0,0,0,0.08) 100%)' }} />

      {/* Badges */}
      <div
        className="absolute top-6 left-6 right-6 flex flex-wrap items-start justify-between gap-4"
        style={{ opacity: hov ? 0 : 1, transition: 'opacity 0.3s ease' }}
      >
        <div
          className="max-w-[74%] px-5 py-3 rounded-full text-[10px] uppercase tracking-[0.11em] leading-relaxed"
          style={{
            background: 'rgba(245,245,245,0.9)',
            color: '#111',
            backdropFilter: 'blur(14px)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {project.category}
        </div>
        <div
          className="text-[10px] px-5 py-3 rounded-full min-w-[104px] text-center uppercase tracking-[0.1em]"
          style={{
            background: 'rgba(0,0,0,0.58)',
            color: 'rgba(255,255,255,0.78)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {project.year}
        </div>
      </div>

      <div className="absolute left-5 right-5 bottom-5 sm:left-6 sm:right-6 sm:bottom-6 md:left-8 md:right-8 md:bottom-8">
        <h3 className="text-xl sm:text-2xl md:text-[2.15rem] font-light leading-tight mb-3" style={{ color: '#fff' }}>
          {project.title}
        </h3>
        <p className="text-sm md:text-base leading-relaxed max-w-[32rem]" style={{ color: 'rgba(255,255,255,0.68)', fontFamily: 'Inter, sans-serif' }}>
          {project.overview}
        </p>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center p-7"
        style={{ background: 'rgba(6,6,6,0.68)', backdropFilter: hov ? 'blur(14px)' : 'blur(0px)', opacity: hov ? 1 : 0, transition: 'opacity 0.4s ease, backdrop-filter 0.4s ease' }}
      >
        <div className="relative rounded-full" style={{ padding: '1.5px' }}>
          <span className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(90deg,#89aacc,#4e85bf)' }} />
          <span className="relative z-10 flex items-center gap-2 px-6 py-3 rounded-full text-sm" style={{ background: '#fff', color: '#111', fontFamily: 'Inter, sans-serif' }}>
            View Details
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectDetailPage({ project, onClose }: { project: typeof PROJECTS[0], onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-y-auto bg-[#030303] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="min-h-screen px-5 py-6 sm:px-8 lg:px-12 xl:px-16">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          ← Go back
        </button>

        <div className="mt-10 space-y-10">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#f5f5f5' }}>
              {project.title}
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">{project.year}</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.2em] text-white/70">Overview</h2>
                <p className="text-base leading-relaxed text-white/80">{project.overview}</p>
              </section>
              <section className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.2em] text-white/70">Technical Execution</h2>
                <p className="text-base leading-relaxed text-white/80">{project.execution}</p>
              </section>
              <section className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.2em] text-white/70">Impact</h2>
                <p className="text-base leading-relaxed text-white/80">{project.impact}</p>
              </section>
            </div>

            <aside className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/70 mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorksSection() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // Lock body scroll when modal is open
  if (typeof window !== 'undefined') {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }

  return (
    <>
      <section id="works" className="py-20 md:py-28" style={{ background: 'hsl(var(--bg))' }}>
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <SectionHeader />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} i={i} onClick={() => setSelectedProject(p)} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailPage project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
