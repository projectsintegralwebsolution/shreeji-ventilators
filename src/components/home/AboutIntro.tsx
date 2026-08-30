import React from 'react';
import Link from 'next/link';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Factory, Users, Sparkles, MapPin } from 'lucide-react';
import { companyData } from '@/data/companyData';
import { QuoteButton } from '../common/QuoteButton';
import { WatermarkedImage } from '../common/WatermarkedImage';

export const AboutIntro: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/40">
              <WatermarkedImage
                src="/images/products/exhaust-installation-1.jpg"
                alt="Shreeji Simpovent Factory Shed Installation"
                aspectRatio="aspect-[4/3]"
                watermarkText="Shreeji Simpovent™ • Factory Site"
                watermarkPosition="bottom-right"
              />
            </div>

            {/* Quick Stat Pill */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
                <span className="text-2xl md:text-3xl font-black text-emerald-700 block">20+ Years</span>
                <span className="text-xs font-semibold text-slate-600">Manufacturing Experience</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
                <span className="text-2xl md:text-3xl font-black text-emerald-700 block">100,000+</span>
                <span className="text-xs font-semibold text-slate-600">Units Installed Across India</span>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
                MANUFACTURER PROFILE • SHREEJI SALES CORPORATION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Quality Industrial Roof Ventilation Engineered for Indian Factories
              </h2>
            </div>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Established in <strong>2005</strong> in Vasai (East), Palghar, Maharashtra, <strong>Shreeji Sales Corporation</strong> manufactures and supplies heavy-duty, zero-power <strong>Wind Driven Turbo Roof Ventilators</strong> and <strong>Industrial Exhaust Systems</strong> under our registered brand <strong className="text-emerald-800">Simpovent™</strong>.
            </p>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              In industrial sheds, boiler houses, and warehouses, summer temperatures under metal roofing sheets can easily cross 48°C. Our wind-driven turbo ventilators work 24 hours a day using only natural wind currents and heat convection to extract trapped hot air, smoke, humidity, and chemical vapors — without consuming a single unit of electricity.
            </p>

            {/* Primary Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Hindalco Grade 8011 Aluminium</strong>
                  <span className="text-slate-600">Aerodynamically curved vanes with rolled edges for structural rigidity.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Dual Sealed HCH 6001 ZZ Bearings</strong>
                  <span className="text-slate-600">Hermetically sealed against dust and moisture for 100% silent, greaseless rotation.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Matching FRP Roof Base Plates</strong>
                  <span className="text-slate-600">Custom molded to match Tata Bluescope, Kirby, JSW, and asbestos profiles with zero leakage.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Direct Factory Supply & Dispatch</strong>
                  <span className="text-slate-600">Prompt supply across Mumbai, Thane, Pune, Gujarat, Rajasthan, and nationwide.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e382c] hover:bg-[#155e4b] text-white font-bold text-sm shadow-md transition-colors"
              >
                <span>Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <QuoteButton variant="outline" className="px-6 py-3 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
