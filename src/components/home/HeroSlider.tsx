"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Wind, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Calculator, Factory } from 'lucide-react';
import { QuoteButton } from '../common/QuoteButton';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      bgImage: "/images/slides/slide-1.jpg",
      badge: "ISO 9001:2015 Certified • Simpovent™",
      title: "Zero-Power Industrial Wind Turbo Ventilators",
      subtitle: "Continuously exhausts trapped factory heat, smoke, and fumes using 100% natural wind energy — 0 Watts electricity.",
      bullets: [
        "Zero Electricity Bills & Zero Operating Cost",
        "Hindalco 8011 Aluminium Curved Vanes & Dual Sealed Bearings",
        "100% Rainproof Installation with Matching FRP Base Plates"
      ],
      ctaPrimary: "Calculate Ventilation CFM",
      ctaPrimaryUrl: "/calculator"
    },
    {
      bgImage: "/images/slides/slide-2.jpg",
      badge: "High Volume Wall Exhaust Series",
      title: "Heavy Duty Industrial Wall Cone Exhaust Fans",
      subtitle: "Engineered for intense welding smoke, chemical fumes, and process heat evacuation in large factory buildings.",
      bullets: [
        "Dynamically Balanced High-CFM Impeller Blades",
        "Heavy Gauge Corrosion-Proof Powder Coated Body",
        "Direct Factory Supply from Vasai Manufacturing Facility"
      ],
      ctaPrimary: "Get Instant Quotation",
      ctaPrimaryUrl: "/contact"
    },
    {
      bgImage: "/images/slides/slide-3.jpg",
      badge: "Natural Air Flow Systems",
      title: "Industrial Roof Air Hoods & Natural Extractors",
      subtitle: "Custom fabricated FRP and polycarbonate roof extractors designed for metal PEB and asbestos roofs.",
      bullets: [
        "UV-Stabilized Weatherproof Virgin Resin Construction",
        "Seamless Profile Match for Tata Bluescope, JSW & Kirby",
        "Complete Protection Against Monsoon Capillary Water Seepage"
      ],
      ctaPrimary: "Explore 21 Products",
      ctaPrimaryUrl: "/products"
    },
    {
      bgImage: "/images/slides/slide-4.jpg",
      badge: "Thermal Siphon Engineering",
      title: "Eliminate Industrial Heat Blankets in Factory Sheds",
      subtitle: "Reduces indoor temperature by 4°C to 8°C across foundries, boiler rooms, PEB warehouses, and fabrication plants.",
      bullets: [
        "24/7 Silent Extraction Without Noise or Vibrations",
        "10-Year Structural & Rotor Cage Warranty",
        "Pan-India Dispatch & Ready Stock Availability"
      ],
      ctaPrimary: "Request Official Quote",
      ctaPrimaryUrl: "/contact"
    },
    {
      bgImage: "/images/slides/slide-5.jpg",
      badge: "High Static Pressure Blowers",
      title: "Industrial Heavy Duty Cone Blowers & Axial Fans",
      subtitle: "High-capacity air displacement systems designed for severe heat zones, forging shops, and paint booths.",
      bullets: [
        "Precision Aerodynamic Bell Mouth Intake Cowl",
        "Heavy Duty Copper Wound Motor with IP55 Protection",
        "Pan-India Fast Dispatch Directly from Vasai Factory"
      ],
      ctaPrimary: "Consult Ventilation Engineer",
      ctaPrimaryUrl: "/contact"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] overflow-hidden bg-slate-950 text-white flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sliding Background Images with LIGHT overlay so rooftop photos are bright & clear */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === idx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Light, soft gradient overlay so background imagery remains crisp & bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d16]/80 via-[#061d16]/50 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Floating Verification Badge */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none hidden sm:block">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/20 text-white shadow-lg">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-black tracking-wider uppercase text-emerald-200">
            Shreeji Simpovent™
          </span>
        </div>
      </div>

      {/* Concise Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-20 w-full">
        <div className="max-w-2xl space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wide backdrop-blur-md shadow-inner">
            <Factory className="w-3.5 h-3.5 text-emerald-400" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Concise Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
            {slides[currentSlide].title}
          </h1>

          {/* Short Punchy Subtitle */}
          <p className="text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-medium drop-shadow">
            {slides[currentSlide].subtitle}
          </p>

          {/* Bullet Points */}
          <div className="space-y-1.5 pt-1">
            {slides[currentSlide].bullets.map((bullet, bIdx) => (
              <div key={bIdx} className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100 font-medium drop-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <QuoteButton
              productName={slides[currentSlide].title}
              className="px-5 py-3 text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95"
              variant="primary"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Get Instant Quotation</span>
              </span>
            </QuoteButton>

            <Link
              href="/calculator"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm border border-white/30 backdrop-blur-md transition-all active:scale-95 shadow-md"
            >
              <Calculator className="w-4 h-4 text-emerald-300" />
              <span>CFM Calculator</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows & Indicators */}
      <div className="absolute bottom-5 right-6 z-30 flex items-center gap-2.5">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-9 h-9 rounded-full bg-slate-900/70 hover:bg-emerald-600 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentSlide === idx ? 'w-7 bg-emerald-400' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-9 h-9 rounded-full bg-slate-900/70 hover:bg-emerald-600 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
