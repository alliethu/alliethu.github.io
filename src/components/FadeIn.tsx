"use client";

import { useState, useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

/** Delayed fade-in with upward slide. Triggers once after `delay` ms. */
export function FadeIn({ children, delay = 0, style = {}, className = "" }: FadeInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface ScrollFadeInProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

/** Fade-in triggered when element enters viewport via IntersectionObserver. */
export function ScrollFadeIn({ children, style = {}, className = "" }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
