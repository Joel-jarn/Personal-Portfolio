import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import HeroVideo from './HeroVideo';
import Navbar from './Navbar';

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
const ROLES = ['AI/ML Engineer', 'Embedded Systems', 'Technical Leader', 'Innovator'];
const WHATSAPP_LINK = 'https://wa.me/918867318022?text=Hello%20Joel%2C%20I%20came%20across%20your%20portfolio.';

interface HeroSectionProps {
  /** Set to true once the loading screen has completed — triggers GSAP entrance */
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  // Role cycling — only while visible
  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(id);
  }, [isVisible]);

  // GSAP entrance — fires once when isVisible flips to true
  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      // Expo-like custom ease for silky smoothness
      const EASE = 'expo.out';

      gsap
        .timeline({ defaults: { ease: EASE } })
        // Name slides up from a short distance — no blur, pure transform
        .fromTo(
          '.hero-name',
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1.4, delay: 0.05 }
        )
        // Supporting text fades up with gentle stagger
        .fromTo(
          '.hero-blur',
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 1.1, stagger: 0.1 },
          '-=1.0'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="home" className="relative w-full min-h-screen overflow-hidden pb-20 md:pb-0">

      {/* ─── Background video ─────────────────────────────────────── */}
      <div className="absolute inset-0">
        <HeroVideo
          src={HLS_SRC}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          style={{
            // Subtle filter boost — makes sky colours richer and edges crisper
            filter: 'contrast(1.08) saturate(1.15) brightness(0.96)',
          }}
        />

        {/* Very light overlay — let the video breathe */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.18)' }} />

        {/* Bottom fade into the dark page background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{ background: 'linear-gradient(to top, hsl(var(--bg)) 0%, transparent 100%)' }}
        />
      </div>

      <Navbar />

      {/* ─── Hero content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 md:px-8 lg:px-10 py-28 sm:py-32 md:py-36">

        {/* Eyebrow */}
        <p
          className="hero-blur text-[11px] tracking-[0.35em] uppercase mb-7 mt-24"
          style={{ color: 'rgba(255,255,255,0.42)', fontFamily: 'Inter, sans-serif', opacity: 0 }}
        >
          APPLIED AI & HARDWARE
        </p>

        {/* Name */}
        <h1
          className="hero-name font-display italic leading-[1.08] tracking-tight mb-9"
          style={{
            color: '#f5f5f5',
            fontSize: 'clamp(3.7rem, 10vw, 8.6rem)',
            fontStyle: 'italic',
            opacity: 0,
          }}
        >
          Joel J George
        </h1>

        {/* Role tagline */}
        <p
          className="hero-blur text-lg sm:text-xl md:text-2xl mb-5 max-w-[42rem] px-2"
          style={{
            color: 'rgba(255,255,255,0.62)',
            fontFamily: 'Instrument Serif, serif',
            letterSpacing: '0',
            opacity: 0,
          }}
        >
          An{' '}
          <span
            key={roleIndex}
            className="font-display italic animate-role-fade-in inline-block"
            style={{ color: '#f5f5f5', fontStyle: 'italic' }}
          >
            {ROLES[roleIndex]}
          </span>{' '}
          bridging intelligent software and physical embedded systems.
        </p>

        {/* Description */}
        <p
          className="hero-blur text-sm md:text-base leading-relaxed max-w-[38rem] px-3 mb-12"
          style={{
            color: 'rgba(255,255,255,0.42)',
            fontFamily: 'Inter, sans-serif',
            opacity: 0,
          }}
        >
          B.Tech AI/ML Honors student (3.8/4 GPA) with pre-incubated research. Building functional utility tools for real-world impact.
        </p>

        {/* CTAs */}
        <div className="hero-blur flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center px-2" style={{ opacity: 0 }}>
          <SeeWorksBtn />
          <ReachOutBtn />
        </div>
      </div>

      {/* ─── Scroll indicator ─────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: 'rgba(255,255,255,0.28)', fontFamily: 'Inter, sans-serif' }}
        >
          SCROLL
        </span>
        <div
          className="relative overflow-hidden rounded-full"
          style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }}
        >
          <div className="absolute inset-x-0 top-0 h-full animate-scroll-down accent-gradient rounded-full" />
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Buttons ─────────────────────────────────────────────────── */

function SeeWorksBtn() {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="relative rounded-full"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span
        className="absolute rounded-full pointer-events-none transition-opacity duration-300"
        style={{ inset: '-2px', background: 'rgba(255,255,255,0.24)', opacity: hov ? 1 : 0.35 }}
      />
      <button
        id="hero-see-works"
        onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
        className="relative z-10 rounded-full text-sm font-medium px-9 py-4 transition-transform duration-200 cursor-pointer min-w-[190px] text-center"
        style={{
          background: hov
            ? 'linear-gradient(135deg, rgba(0,0,0,0.58), rgba(0,0,0,0.3))'
            : 'linear-gradient(135deg, rgba(0,0,0,0.44), rgba(0,0,0,0.18))',
          color: '#f5f5f5',
          fontFamily: 'Inter, sans-serif',
          transform: hov ? 'translateY(-1px) scale(1.02)' : 'translateY(0) scale(1)',
          border: '1.5px solid rgba(255,255,255,0.34)',
          backdropFilter: 'blur(24px) saturate(185%)',
          WebkitBackdropFilter: 'blur(24px) saturate(185%)',
          boxShadow: hov
            ? '0 16px 38px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.42)'
            : '0 10px 28px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.32)'
        }}
      >
        View Projects
      </button>
    </div>
  );
}

function ReachOutBtn() {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="relative rounded-full"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span
        className="absolute rounded-full pointer-events-none transition-opacity duration-300"
        style={{ inset: '-2px', background: 'rgba(255,255,255,0.24)', opacity: hov ? 1 : 0.35 }}
      />
      <a
        id="hero-reach-out"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-2 rounded-full text-sm font-medium px-9 py-4 transition-transform duration-200 min-w-[190px] justify-center"
        style={{
          background: hov
            ? 'linear-gradient(135deg, rgba(0,0,0,0.58), rgba(0,0,0,0.3))'
            : 'linear-gradient(135deg, rgba(0,0,0,0.44), rgba(0,0,0,0.18))',
          color: '#f5f5f5',
          border: '1.5px solid rgba(255,255,255,0.34)',
          backdropFilter: 'blur(24px) saturate(185%)',
          WebkitBackdropFilter: 'blur(24px) saturate(185%)',
          boxShadow: hov
            ? '0 16px 38px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.42)'
            : '0 10px 28px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.32)',
          fontFamily: 'Inter, sans-serif',
          transform: hov ? 'translateY(-1px) scale(1.02)' : 'translateY(0) scale(1)'
        }}
      >
        Reach out
      </a>
    </div>
  );
}
