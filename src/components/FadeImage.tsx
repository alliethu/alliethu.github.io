"use client";

import Image from "next/image";
import { useState } from "react";

interface FadeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function FadeImage({ src, alt, className = "" }: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-[1250ms] ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
}
