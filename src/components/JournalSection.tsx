import { motion } from 'framer-motion';

const smoothFade = { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

export default function JournalSection() {
  return (
    <section id="leadership" className="py-20 md:py-28" style={{ background: 'hsl(var(--bg))' }}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          className="flex items-end justify-between mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={smoothFade}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px" style={{ background: 'hsl(var(--stroke))' }} />
              <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}>
                Leadership & Impact
              </span>
            </div>
            <h2 className="font-body font-light leading-tight" style={{ color: 'hsl(var(--text))', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
              Operational <em className="font-display" style={{ fontStyle: 'italic' }}>scale</em>
            </h2>
            <p className="text-sm mt-4 max-w-lg leading-relaxed" style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}>
              Proving executive leadership and communication skills necessary to lead technical teams.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full rounded-[22px] border p-11 md:p-20 lg:p-24"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.62), rgba(0,0,0,0.28))',
            borderColor: 'rgba(255,255,255,0.13)',
            boxShadow: '0 0 0 8px rgba(255,255,255,0.025), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...smoothFade, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16 xl:gap-20">
            <div className="flex-1 max-w-[820px]">
              <div className="flex flex-wrap items-center gap-5 mb-8">
                <span className="text-[10px] uppercase tracking-[0.15em] px-4 py-2 rounded-full" style={{ background: 'hsl(var(--stroke))', color: 'hsl(var(--text))', fontFamily: 'Inter, sans-serif' }}>
                  Student Welfare Office (SWO)
                </span>
                <span className="text-xs" style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}>Christ University</span>
              </div>
              <h3 className="text-2xl md:text-[2.1rem] font-light mb-9" style={{ color: 'hsl(var(--text))' }}>
                Senior Volunteer & Domain Lead
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-10 max-w-3xl" style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}>
                Orchestrated the logistical and technical frameworks for 50+ high-pressure university-level events. Managed central campus assets and directed operations for massive-scale tech and cultural fests like Magnovite and Darpan.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
                {[
                  'Led the Music Domain for Darpan, handling technical rider coordination and stage management.',
                  'Directed central operations for Magnovite, ensuring seamless cross-functional execution.',
                  'Managed high-stakes stakeholder coordination and central campus assets.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(90deg,#89aacc,#4e85bf)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'hsl(var(--text))', fontFamily: 'Inter, sans-serif' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative min-h-[360px] overflow-hidden rounded-[20px] border lg:self-center" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&auto=format&fit=crop&q=80"
                alt="University event operations"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 halftone-overlay pointer-events-none" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.22))' }} />
              <div className="absolute left-5 right-5 bottom-5 grid grid-cols-3 gap-3">
                {[
                  ['50+', 'events'],
                  ['2', 'fests'],
                  ['SWO', 'ops'],
                ].map(([value, label]) => (
                  <div key={label} className="flex flex-col items-start">
                    <div className="font-display italic text-2xl md:text-3xl mb-1" style={{ color: '#fff' }}>
                      {value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.13em] leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'Inter, sans-serif' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
