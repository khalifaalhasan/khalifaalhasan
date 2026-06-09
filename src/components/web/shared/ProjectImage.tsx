"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ProjectImage({ src, fallbackSrc, alt, containerClassName = "", imageClassName = "", priority = false }: ProjectImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const currentSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div 
      className={`relative w-full overflow-hidden bg-secondary/30 aspect-[1200/630] ${containerClassName}`}
    >
      {fallbackSrc && !hasError && (
        <Image
          src={fallbackSrc}
          alt={`Fallback for ${alt}`}
          width={1200}
          height={630}
          unoptimized={true}
          className={`absolute inset-0 w-full h-full object-cover opacity-30 blur-sm`}
        />
      )}

      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-sm">
          <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
        </div>
      )}
      
      <Image
        src={currentSrc}
        alt={alt}
        width={1200}
        height={630}
        priority={priority}
        unoptimized={true}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (!hasError && fallbackSrc) {
            setHasError(true);
            setIsLoading(true);
          } else {
            setIsLoading(false);
          }
        }}
        className={`relative z-20 w-full h-full object-cover transition-all duration-700 ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'} ${imageClassName}`}
      />
    </div>
  );
}
