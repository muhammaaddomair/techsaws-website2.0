"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home-hero-section.module.css";

export default function HomeHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let visible = false;
    let disposed = false;
    const updatePlayback = () => {
      if (disposed) return;
      if (!visible || document.hidden || reducedMotion.matches || connection?.saveData) {
        video.pause();
        return;
      }
      if (!video.getAttribute("src")) {
        video.src = "/videos/test2.mp4";
        video.load();
      }
      void video.play().catch(() => { /* Keep the dark fallback when autoplay is unavailable. */ });
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: .01 });
    observer.observe(video);
    document.addEventListener("visibilitychange", updatePlayback);
    reducedMotion.addEventListener("change", updatePlayback);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      reducedMotion.removeEventListener("change", updatePlayback);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  return (
    <section className={`surface-dark ${styles.hero}`} aria-label="Home introduction">
      <div className={styles.background} aria-hidden="true">
        <video ref={videoRef} className={styles.video} data-ready={ready} muted loop playsInline preload="none" disablePictureInPicture disableRemotePlayback tabIndex={-1} onPlaying={() => setReady(true)} onError={() => setReady(false)} />
        <div className={styles.glass} />
        <div className={styles.mask} />
      </div>
      <div className={`page-layout ${styles.content}`} />
    </section>
  );
}
