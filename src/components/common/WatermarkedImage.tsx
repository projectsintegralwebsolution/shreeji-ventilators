import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Wind } from 'lucide-react';

interface WatermarkedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  watermarkText?: string;
  watermarkPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'center';
}

export const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  aspectRatio = "aspect-[4/3]",
  priority = false,
  watermarkText = "Shreeji Simpovent™ • ISO 9001:2015",
  watermarkPosition = "bottom-right"
}) => {
  const positionClasses = {
    'bottom-right': 'bottom-2 right-2',
    'bottom-left': 'bottom-2 left-2',
    'top-right': 'top-2 right-2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div className={`relative overflow-hidden group select-none ${aspectRatio}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${className}`}
        loading={priority ? 'eager' : 'lazy'}
      />
      {/* Subtle Gradient Shadow for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Industrial Verification Watermark Overlay Badge */}
      <div className={`absolute ${positionClasses[watermarkPosition]} z-10 pointer-events-none`}>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/70 backdrop-blur-md border border-white/20 text-white shadow-md">
          <Wind className="w-3 h-3 text-emerald-400 shrink-0 animate-spin-slow" />
          <span className="text-[10px] font-black tracking-wider uppercase text-emerald-100/90 whitespace-nowrap">
            {watermarkText}
          </span>
        </div>
      </div>
    </div>
  );
};
