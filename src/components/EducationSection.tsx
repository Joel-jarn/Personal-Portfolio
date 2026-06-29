import { motion } from 'framer-motion';

const smoothFade = { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

const TIMELINE = [
  {
    year: '2023 - Present',
    title: 'B.Tech AI & Machine Learning (Honors in Cyber Security & Ethical Hacking)',
    institution: 'Christ University',
    details: 'Currently maintaining a 3.8/4 GPA. Leading technical logistics for major university fests (Magnovite, Darpan) and driving research in Applied AI.',
  },
  {
    year: '2024 - Present',
    title: 'Project Pre-Incubation',
    institution: 'Christ Innovation Centre (CIC)',
    details: 'Pre-incubated a novel AI-based Developmental Coordination Disorder (DCD) and Autism Spectrum Disorder (ASD) detection system utilizing computer vision for early diagnostic patterns.',
  },
  {
    year: '2026',
    title: 'Full Stack Intern',
    institution: 'Adyatva Labs',
    details: 'Built multiple ready-to-deploy software products across frontend, backend, integrations, and deployment workflows.',
  },
  {
    year: '2026',
    title: 'National Participant',
    institution: 'YESSMIT Multi-Level',
    details: 'Selected as a national participant in YESSMIT Multi-Level 2026 for hardware innovation and systems design.',
  },
  {
    year: '2023',
    title: 'National Nominee',
    institution: 'INSPIRE Award - MANAK',
    details: 'Recognized for innovative technical hardware solutions blending embedded systems and real-world utility.',
  }
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 20% 12%, rgba(137,170,204,0.08), transparent 30%), radial-gradient(circle at 82% 54%, rgba(78,133,191,0.06), transparent 34%), hsl(var(--bg))',
      }}
    >
      {/* Subtle top gradient connecting from About */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #030303, transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to top, hsl(var(--bg)), transparent)' }} />
      
        <div className="site-container relative z-10">
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={smoothFade}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-6 h-px" style={{ background: 'hsl(var(--stroke))' }} />
            <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}>
              Background
            </span>
            <div className="w-6 h-px" style={{ background: 'hsl(var(--stroke))' }} />
          </div>
          <h2 className="font-body font-light leading-tight" style={{ color: 'hsl(var(--text))', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
            Academic <em className="font-display" style={{ fontStyle: 'italic' }}>foundations</em>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'rgba(255,255,255,0.12)' }} />
          
          <div className="space-y-32 md:space-y-40">
            {TIMELINE.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ ...smoothFade, delay: i * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 top-5 w-6 h-6 rounded-full -translate-x-1/2 z-10 flex items-center justify-center timeline-dot"
                    style={{
                      background: 'hsl(var(--bg))',
                      border: '1px solid rgba(137,170,204,0.55)',
                      boxShadow: '0 0 0 10px rgba(3,3,3,0.9), 0 0 0 18px rgba(137,170,204,0.08)',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: '#89aacc' }} />
                  </div>
                  
                  {/* Content Box */}
                  <div className={`ml-16 sm:ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-10 lg:pl-16' : 'md:pr-10 lg:pr-16 text-left md:text-right'}`}>
                    <span className="inline-block text-[11px] uppercase tracking-[0.18em] mb-5 px-5 py-2.5 rounded-full min-w-[152px] text-center" style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(0,0,0,0.48)', color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif', backdropFilter: 'blur(14px)' }}>
                      {item.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-medium mb-1" style={{ color: 'hsl(var(--text))', fontFamily: 'Inter, sans-serif' }}>
                      {item.title}
                    </h3>
                    <h4 className="text-sm italic mb-4" style={{ color: '#89aacc', fontFamily: 'Instrument Serif, serif' }}>
                      {item.institution}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}>
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
