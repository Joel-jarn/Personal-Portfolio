import { SplineScene } from './ui/splite';
import { Spotlight } from './ui/spotlight';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

export default function SplineSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto"
      style={{ background: '#030303' }}
    >
      <Card
        className="w-full rounded-none border-0 relative overflow-hidden"
        style={{
          background: 'rgba(0,0,0,0.96)',
          minHeight: '650px',
          borderTop: '1px solid hsl(var(--stroke))',
          borderBottom: '1px solid hsl(var(--stroke))',
        }}
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row items-center h-full gap-8 md:gap-16" style={{ minHeight: '650px' }}>
          {/* Left — text */}
          <motion.div
            className="flex-1 md:w-[46%] p-6 sm:p-8 md:p-10 lg:p-14 lg:pl-16 relative z-20 flex flex-col justify-center max-w-[700px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px" style={{ background: 'hsl(var(--stroke))' }} />
              <span
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: 'hsl(var(--muted))' }}
              >
                About me
              </span>
            </div>

            <h2
            className="text-4xl md:text-5xl lg:text-[3.35rem] font-bold leading-[1.05] tracking-tight mb-6 max-w-[14ch]"
              style={{
                background: 'linear-gradient(to bottom, #f5f5f5, #737373)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Engineering functional
              <br />
              <span className="inline-block ml-6 sm:ml-10 md:ml-16" style={{ fontStyle: 'italic' }}>
                AI
              </span>
            </h2>

            <p
              className="text-sm md:text-[0.95rem] leading-relaxed max-w-lg mb-8"
              style={{ color: '#a3a3a3' }}
            >
              I am an Applied AI/ML Engineer who bridges the gap between intelligent software and physical embedded systems. Throughout my B.Tech in Artificial Intelligence & Machine Learning at Christ University, I have leaned heavily toward "functional AI"—building tangible, real-world utility software and embedded logic rather than just theoretical algorithms. Beyond technical architecture, I have managed core university-wide logistical operations, proving my ability to bridge technical ownership with cross-functional team collaboration.
            </p>

            {/* Skills pills */}
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Computer Vision', 'Embedded Systems', 'C/C++', 'Python', 'Arduino/ESP'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      color: '#a3a3a3',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right — Spline 3D */}
          <div className="flex-1 md:w-[54%] relative min-h-[360px] sm:min-h-[420px] md:min-h-[520px] overflow-hidden rounded-[22px] md:-mr-6 lg:-mr-8">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full absolute inset-0 translate-x-0 md:translate-x-4 lg:translate-x-6"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
