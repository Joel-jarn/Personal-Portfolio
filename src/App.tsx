import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import SplineSection from './components/SplineSection';
import EducationSection from './components/EducationSection';
import WorksSection from './components/WorksSection';
import JournalSection from './components/JournalSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading screen overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/*
        Main content is ALWAYS mounted — even during the loading screen.
        The hero video begins buffering at maximum quality immediately.
        By the time the 2.7s counter finishes, the stream is already loaded.
        We hide it visually with opacity/pointer-events and reveal it after loading.
      */}
      <main
        style={{
          opacity: isLoading ? 0 : 1,
          pointerEvents: isLoading ? 'none' : 'auto',
          transition: 'opacity 0.6s ease 0.1s',
        }}
      >
        <HeroSection isVisible={!isLoading} />
        <SplineSection />
        <EducationSection />
        <WorksSection />
        <JournalSection />
        <StatsSection />
        <ContactSection />
      </main>
    </>
  );
}
