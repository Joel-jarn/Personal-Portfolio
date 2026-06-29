import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILLS = [
  {
    value: '01',
    label: 'AI Systems',
    description: 'Model pipelines, computer-vision feature extraction, prompt workflows, and evaluation loops built around measurable utility.',
  },
  {
    value: '02',
    label: 'Embedded Logic',
    description: 'Sensor-driven C/C++ systems on Arduino and ESP boards, with real-time decision logic for physical-world constraints.',
  },
  {
    value: '03',
    label: 'Product Execution',
    description: 'Pre-incubation, technical documentation, stakeholder coordination, and shipping workflows from concept to usable prototype.',
  },
];

const smoothFade = { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

function SkillCard({ skill, i }: { skill: typeof SKILLS[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="flex min-h-[360px] flex-col gap-8 p-6 sm:p-8 md:p-12 rounded-[22px] border"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.62), rgba(0,0,0,0.28))',
        borderColor: 'rgba(255,255,255,0.14)',
        boxShadow: '0 0 0 7px rgba(255,255,255,0.024), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...smoothFade, delay: i * 0.08 }}
    >
      {/* Value */}
      <div
        className="font-display italic leading-none"
        style={{ color: 'hsl(var(--text))', fontSize: 'clamp(3rem, 5.5vw, 4.6rem)', fontStyle: 'italic' }}
      >
        {skill.value}
      </div>

      {/* Divider */}
      <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg,#89aacc,#4e85bf)' }} />

      <div className="flex flex-col gap-4">
        <span
          className="text-sm font-medium uppercase tracking-[0.18em]"
          style={{ color: 'hsl(var(--text))', fontFamily: 'Inter, sans-serif' }}
        >
          {skill.label}
        </span>
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}
        >
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section id="skills" className="py-28 md:py-36" style={{ background: 'hsl(var(--bg))' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={smoothFade}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px" style={{ background: 'hsl(var(--stroke))' }} />
            <span
              className="text-[11px] uppercase tracking-[0.3em]"
              style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}
            >
              Skills & Competencies
            </span>
          </div>
          <h2
            className="font-body font-light leading-tight"
            style={{ color: 'hsl(var(--text))', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Technical{' '}
            <em className="font-display" style={{ fontStyle: 'italic' }}>arsenal</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.label} skill={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
