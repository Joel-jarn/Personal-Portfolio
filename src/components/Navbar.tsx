import { useEffect, useState } from 'react';

const WHATSAPP_LINK = 'https://wa.me/918867318022?text=Hello%20Joel%2C%20I%20came%20across%20your%20portfolio.';

const NAV_LINKS = [
  { label: 'Home', target: 'home' },
  { label: 'Work', target: 'works' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5">
      <div
        className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-2.5 py-2.5 sm:px-3 sm:py-2.5 transition-all duration-500 w-full max-w-[620px] mx-auto"
        style={{
          backdropFilter: 'blur(36px) saturate(190%)',
          WebkitBackdropFilter: 'blur(36px) saturate(190%)',
          background: scrolled
            ? 'linear-gradient(135deg, rgba(0,0,0,0.62), rgba(0,0,0,0.28))'
            : 'linear-gradient(135deg, rgba(0,0,0,0.46), rgba(0,0,0,0.18))',
          border: '1.5px solid rgba(255,255,255,0.28)',
          boxShadow: scrolled
            ? '0 22px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(255,255,255,0.16)'
            : '0 18px 48px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.64), inset 0 -1px 0 rgba(255,255,255,0.12)',
        }}
      >
        {/* Logo */}
        <LogoButton onClick={() => scrollTo('home')} />

        <div className="hidden sm:block w-px h-5 mx-1" style={{ background: 'rgba(255,255,255,0.34)' }} />

        {/* Nav links */}
        <div className="hidden sm:flex flex-1 items-center justify-center gap-1.5 md:gap-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              id={`nav-${link.label.toLowerCase()}`}
              onClick={() => scrollTo(link.target)}
              className="relative text-sm px-3.5 py-2 rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.78)', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#fff';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.34), 0 0 0 1px rgba(255,255,255,0.16)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.78)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden sm:block w-px h-5 mx-1" style={{ background: 'rgba(255,255,255,0.34)' }} />

        {/* Say hi */}
        <SayHiButton />
      </div>
    </nav>
  );
}

function LogoButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      id="nav-logo"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 cursor-pointer flex-shrink-0"
      style={{ transform: hovered ? 'scale(1.1)' : 'scale(1)' }}
    >
      {/* Gradient ring */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.46)',
          transition: 'background 0.4s ease',
          padding: '1.5px',
        }}
      />
      <span
        className="absolute inset-[1.5px] rounded-full flex items-center justify-center"
        style={{
          background: 'rgba(0,0,0,0.34)',
          backdropFilter: 'blur(18px) saturate(180%)',
          WebkitBackdropFilter: 'blur(18px) saturate(180%)',
        }}
      >
        <span
          className="font-display italic text-[11px] leading-none"
          style={{ color: '#fff' }}
        >
          JG
        </span>
      </span>
    </button>
  );
}

function SayHiButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative rounded-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="absolute rounded-full transition-opacity duration-300 pointer-events-none"
        style={{
          inset: '-1.5px',
          background: 'rgba(0,0,0,0.54)',
          opacity: hovered ? 1 : 0,
        }}
      />
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        id="nav-sayhi"
        className="relative z-10 inline-flex items-center gap-2 text-[11px] rounded-full px-4 py-2 transition-transform duration-200 min-w-[92px] justify-center"
        style={{
          color: '#fff',
          background: hovered ? 'rgba(0,0,0,0.44)' : 'rgba(0,0,0,0.26)',
          border: '1.5px solid rgba(255,255,255,0.28)',
          backdropFilter: 'blur(18px) saturate(180%)',
          WebkitBackdropFilter: 'blur(18px) saturate(180%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
          fontFamily: 'Inter, sans-serif',
          transform: hovered ? 'translateY(-1px)' : 'translateY(0)'
        }}
      >
        Say hi
      </a>
    </div>
  );
}
