import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HeroVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  onReady?: () => void;
}

export default function HeroVideo({ src, className = '', style, onReady }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Keep onReady stable so useEffect dep array size never changes
  const onReadyRef = useRef(onReady);
  useEffect(() => { onReadyRef.current = onReady; });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        autoStartLoad: true,
        // Never cap quality to player size
        capLevelToPlayerSize: false,
        // Start fetching the highest level from the first segment
        startLevel: -1,
        // Large buffer — preload aggressively during loading screen
        maxMaxBufferLength: 120,
        maxBufferLength: 60,
        maxBufferSize: 200 * 1000 * 1000, // 200 MB
        // Tight ABR — prefer quality over switching speed
        abrEwmaFastLive: 5.0,
        abrEwmaSlowLive: 15.0,
        abrBandWidthFactor: 0.98,
        abrBandWidthUpFactor: 0.9,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, (_e, data) => {
        // Lock to the highest rendition immediately
        const top = data.levels.length - 1;
        hls.currentLevel = top;
        hls.loadLevel = top;
        // Start playing (may be muted/hidden — browser allows this)
        video.play().catch(() => {});
        onReadyRef.current?.();
      });

      // Hard-lock: never let ABR downgrade
      hls.on(Hls.Events.LEVEL_SWITCHING, () => {
        const top = hls.levels.length - 1;
        if (hls.currentLevel < top) {
          hls.currentLevel = top;
          hls.loadLevel = top;
        }
      });

      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.play().catch(() => {});
      onReadyRef.current?.();
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={className}
      style={{
        ...style,
      }}
    />
  );
}
