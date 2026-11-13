'use client';

import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ResilientImage({
  src,
  alt,
  className = '',
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#1C211F] text-[#F3F4ED]/60 p-6 border border-[#F3F4ED]/10 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Dumbbell className="w-8 h-8 text-[#B7D66B] mb-2 opacity-80" />
        <span className="text-xs uppercase tracking-widest text-center font-mono">
          {alt}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
