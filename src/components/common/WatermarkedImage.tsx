import React from 'react';
import { ShieldCheck, Wind } from 'lucide-react';

interface WatermarkedImageProps {
  src?: string;
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
  watermarkText = "Shreeji Simpovent® • ISO 9001:2015",
  watermarkPosition = "bottom-right"
}) => {
  const positionClasses = {
    'bottom-right': 'bottom-2 right-2',
    'bottom-left': 'bottom-2 left-2',
    'top-right': 'top-2 right-2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  if (!src || src.trim() === '') {
    return (
      <div className={`relative overflow-hidden group select-none ${aspectRatio} bg-gradient-to-br from-slate-900 via-[#0a271f] to-slate-950 flex flex-col items-center justify-center p-6 text-center border border-emerald-900/30`}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        <div className="relative z-10 space-y-2.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
            <Wind className="w-6 h-6 animate-spin-slow text-emerald-300" />
          </div>

          <div>
            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 block">
              SIMPOVENT® TECHNICAL SPECIFICATION
            </span>
            <span className="text-xs font-bold text-white/90 block mt-0.5 line-clamp-1">
              {alt}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-[9px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-emerald-400" /> Custom Sized to Order
          </span>
        </div>

        {/* Verification watermark */}
        <div className={`absolute ${positionClasses[watermarkPosition]} z-10 pointer-events-none`}>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
            <span className="text-[9px] font-bold uppercase text-slate-300">
              {watermarkText}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden group select-none ${aspectRatio}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${className}`}
        loading={priority ? 'eager' : 'lazy'}
      />
      {/* Subtle gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* Coded Brand Watermark Badge */}
      <div className={`absolute ${positionClasses[watermarkPosition]} z-10 pointer-events-none`}>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/75 backdrop-blur-md border border-white/20 text-white shadow-md">
          <Wind className="w-3 h-3 text-emerald-400 shrink-0 animate-spin-slow" />
          <span className="text-[10px] font-black tracking-wider uppercase text-emerald-100 whitespace-nowrap">
            {watermarkText}
          </span>
        </div>
      </div>
    </div>
  );
};

