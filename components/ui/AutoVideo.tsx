"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface AutoVideoProps {
  src: string;
  poster: string;
  className?: string;
}

export function AutoVideo({ src, poster, className }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(v);
    return () => io.disconnect();
  }, []);

  // Fallback to image if reduced motion or data saver
  const saveData =
    typeof navigator !== "undefined" &&
    (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData;
  if (typeof window !== "undefined" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || saveData)) {
    return <Image src={poster} alt="" className={className} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />;
  }

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
