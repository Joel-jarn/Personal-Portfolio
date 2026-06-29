import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import HeroVideo from './HeroVideo';

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
const WHATSAPP_LINK = 'https://wa.me/918867318022?text=Hello%20Joel%2C%20I%20came%20across%20your%20portfolio.';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joel-j-george-998a00314/', id: 'footer-linkedin', icon: 'linkedin' as const },
  { label: 'GitHub', href: 'https://github.com/Joel-jarn/', id: 'footer-github', icon: 'github' as const },
  { label: 'Email', href: 'mailto:joeljgeorge08@gmail.com', id: 'footer-email', icon: 'email' as const },
];

function SocialIcon({ type }: { type: 'linkedin' | 'github' | 'email' }) {
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12Zm-1.3 1.2h2.6V18h-2.6V9.7Zm4.2 0h2.49v1.13h.03c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.13 1.74 3.13 4V18h-2.6v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.95V18h-2.6V9.7Z" />
      </svg>
    );
  }

  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.88 10.96.58.11.79-.25.79-.56v-2.17c-3.21.7-3.89-1.38-3.89-1.38-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.19A11.1 11.1 0 0 1 12 6.42c.98 0 1.97.13 2.89.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="m4.5 7 7.5 5.5 7.5-5.5" />
    </svg>
  );
}

function EmailCTA() {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="relative inline-flex rounded-full"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span
        className="absolute rounded-full pointer-events-none transition-opacity duration-300"
        style={{ inset: '-1.5px', background: 'linear-gradient(90deg,#89aacc,#4e85bf)', opacity: hov ? 1 : 0 }}
      />
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        id="contact-email"
        className="relative z-10 inline-flex items-center gap-3 rounded-full px-8 py-4 transition-all duration-300 text-sm md:text-base font-medium"
        style={{
          color: 'hsl(var(--text))',
          background: 'rgba(12,12,12,0.8)',
          border: '1px solid rgba(255,255,255,0.1)',
          margin: hov ? '1.5px' : '0',
          transform: hov ? 'scale(1.04)' : 'scale(1)',
          fontFamily: 'Inter, sans-serif',
          backdropFilter: 'blur(8px)',
        }}
      >
        WhatsApp me
        <span className="text-lg" style={{ opacity: 0.6 }}>↗</span>
      </a>
    </div>
  );
}

export default function ContactSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden pt-20 md:pt-24 pb-8 md:pb-10" style={{ background: 'hsl(var(--bg))' }}>
      {/* BG video flipped */}
      <div className="absolute inset-0 overflow-hidden">
        <HeroVideo
          src={HLS_SRC}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover"
          style={{ transform: 'translate(-50%, -50%) scaleY(-1)' }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute top-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to bottom, hsl(var(--bg)), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, hsl(var(--bg)), transparent)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-20 md:mb-28">
          <div ref={marqueeRef} className="flex whitespace-nowrap select-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="font-display italic pr-10"
                style={{
                  color: 'rgba(245,245,245,0.07)',
                  fontSize: 'clamp(3rem,8vw,7rem)',
                  fontStyle: 'italic',
                }}
              >
                BUILDING THE FUTURE •{' '}
              </span>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <div className="site-container flex flex-col items-center text-center gap-8 mb-24 md:mb-32">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <span
              className="text-[11px] uppercase tracking-[0.3em]"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
            >
              Get in touch
            </span>
            <div className="w-6 h-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
          </div>

          <h2
            className="font-display italic leading-[0.92] tracking-tight"
            style={{ color: '#f5f5f5', fontSize: 'clamp(3rem,10vw,7.5rem)', fontStyle: 'italic' }}
          >
            Let's build
            <br />
            something great
          </h2>

          <p
            className="text-sm md:text-base max-w-sm leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}
          >
            Have a project in mind? I'm always open to discussing new work, creative ideas
            or opportunities to be part of something ambitious.
          </p>

          <EmailCTA />
        </div>

        {/* Footer bar */}
        <div
          className="site-container pt-7 border-t flex flex-col gap-6"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                id={s.id}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/14 hover:border-white/30"
                style={{ color: 'rgba(255,255,255,0.86)', fontFamily: 'Inter, sans-serif', backdropFilter: 'blur(10px)' }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-sm transition-colors duration-200 group-hover:bg-white/20">
                  <SocialIcon type={s.icon} />
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em]">{s.label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Availability */}
            <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: '#4ade80' }} />
            <span className="text-[11px] uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>
              Available for projects
            </span>
          </div>

            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif' }}>
              © 2026 Joel J George
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
