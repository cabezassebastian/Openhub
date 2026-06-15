import { useEffect, useRef } from 'react';

const FadingVideo = ({ src, className, style }) => {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const fadingOutRef = useRef(false);

  const fadeTo = (target, durationMs) => {
    if (!videoRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const startOpacity = parseFloat(videoRef.current.style.opacity) || 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      const currentOpacity = startOpacity + (target - startOpacity) * progress;
      if (videoRef.current) {
        videoRef.current.style.opacity = currentOpacity;
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = 0;

    const handleLoadedData = () => {
      video.style.opacity = 0;
      video.play().catch(e => console.error("Autoplay failed", e));
      fadeTo(1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video) return;
      const remaining = video.duration - video.currentTime;
      if (!fadingOutRef.current && remaining <= 0.55 && remaining > 0) {
        fadingOutRef.current = true;
        fadeTo(0, 500);
      }
    };

    const handleEnded = () => {
      if (!video) return;
      video.style.opacity = 0;
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(e => console.error("Play failed", e));
          fadingOutRef.current = false;
          fadeTo(1, 500);
        }
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={style}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
};

export default FadingVideo;
