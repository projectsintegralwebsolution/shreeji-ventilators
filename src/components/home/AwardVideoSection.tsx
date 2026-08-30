"use client";

import React, { useState } from 'react';
import { Trophy, Play, Award, ShieldCheck, Sparkles, CheckCircle2, Video, Star, ExternalLink } from 'lucide-react';
import { QuoteButton } from '../common/QuoteButton';

export const AwardVideoSection: React.FC = () => {
  const [videoSource, setVideoSource] = useState<'youtube' | 'mp4'>('youtube');

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-[#071f18] to-slate-900 text-white relative overflow-hidden" suppressHydrationWarning>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>National Recognition & Proven Performance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Awarded by Cricket Icon <span className="text-amber-400">Harbhajan Singh</span> & Live Working Video
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Honored with the <strong>Inspiring Leaders Award 2023</strong> in Mumbai for manufacturing excellence in industrial roof ventilation, coupled with real-time rooftop smoke evacuation performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 bg-slate-950/80 rounded-3xl border border-amber-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-amber-400/60 transition-all">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-xs font-extrabold uppercase text-amber-300 block">Inspiring Leaders Awards 2023</span>
                  <span className="text-[10px] text-slate-400">Presented by Times Applaud • Mumbai</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold text-[10px] uppercase border border-amber-400/30">
                National Honor
              </span>
            </div>

            <div className="my-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl relative group-hover:scale-[1.01] transition-transform">
              <img
                src="/images/awards/harbhajan-singh-award.jpg"
                alt="Harbhajan Singh presenting Inspiring Leaders Award 2023 to Bharat Gurjar of Shreeji Sales Corporation Simpovent"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs text-slate-200 font-semibold leading-snug">
                  Cricketer <strong className="text-white">Harbhajan Singh</strong> presenting the Certificate of Appreciation & Trophy to Founder <strong className="text-white">Bharat Gurjar</strong> (Simpovent™).
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Award Category:</strong> Outstanding Contribution in Leading Manufacturer of Roof Ventilators.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Brand Honored:</strong> Simpovent™ (Mfg by Shreeji Sales Corporation).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Event Partner:</strong> Times Applaud Inspiring Leaders Conclave.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-950/80 rounded-3xl border border-emerald-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-emerald-400/60 transition-all">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-xs font-extrabold uppercase text-emerald-300 block">Live Performance Demonstration</span>
                  <span className="text-[10px] text-slate-400">Zero-Power Natural Heat & Smoke Extraction</span>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl text-[10px] font-bold">
                <button
                  onClick={() => setVideoSource('youtube')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    videoSource === 'youtube' ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:text-white'
                  }`}
                  suppressHydrationWarning
                >
                  YouTube HD
                </button>
                <button
                  onClick={() => setVideoSource('mp4')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    videoSource === 'mp4' ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:text-white'
                  }`}
                  suppressHydrationWarning
                >
                  Direct MP4
                </button>
              </div>
            </div>

            <div className="my-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black aspect-video flex items-center justify-center">
              {videoSource === 'youtube' ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/abD5Itpu6hI?rel=0&autoplay=0"
                  title="Simpovent Wind Ventilator Rooftop Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/slides/slide-1.jpg"
                >
                  <source src="/videos/Simpovent.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              )}
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Natural Aerodynamics:</strong> 100% wind-driven rotation evacuates trapped factory smoke & heat.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>No Electricity Required:</strong> 0 operating costs, dual sealed frictionless SKF/IS bearing assembly.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Weatherproof Integrity:</strong> Engineered to withstand 140+ km/h cyclone wind gusts without rain ingress.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-900/60 via-slate-900 to-amber-950/60 p-6 sm:p-8 rounded-3xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase text-amber-300 tracking-wider">
              TRUSTED BY 2,500+ FACTORIES NATIONWIDE
            </span>
            <h4 className="text-lg sm:text-xl font-black text-white">
              Get an Engineered Ventilation Proposal for Your Factory
            </h4>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <QuoteButton
              productName="Simpovent Wind Ventilator (Award Winning Series)"
              className="px-6 py-3 text-xs sm:text-sm font-bold shadow-xl"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
