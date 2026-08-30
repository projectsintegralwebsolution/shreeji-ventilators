import React from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ShieldCheck, Award, Factory, Users, CheckCircle2, Sparkles, Trophy, Video } from 'lucide-react';
import { companyData } from '@/data/companyData';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { QuoteButton } from '@/components/common/QuoteButton';
import { AwardVideoSection } from '@/components/home/AwardVideoSection';

export const metadata: Metadata = constructMetadata({
  title: "About Us | Shreeji Sales Corporation - Simpovent™",
  description: "Learn about Shreeji Sales Corporation, founded in 2005. ISO 9001:2015 certified leading manufacturer of Simpovent wind turbo ventilators awarded by Harbhajan Singh.",
  canonicalUrl: "/about"
});

export default function AboutPage() {
  return (
    <div className="w-full">
      <Breadcrumb items={[{ name: "About Us", url: "/about" }]} />

      {/* Hero Banner */}
      <div className="bg-[#0e382c] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5" /> Established In 2005 • Vasai, Maharashtra
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            About Shreeji Sales Corporation
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200/90 max-w-xl mx-auto leading-relaxed">
            India's foremost ISO 9001:2015 certified manufacturer of <strong>Simpovent™</strong> industrial wind ventilators, power-free roof extractors, and heavy-duty exhaust blowers.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block">
              OUR HERITAGE & MANUFACTURING COMMITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Engineering Precision Natural Ventilation for Over Two Decades
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded in 2005 in Vasai (East), Palghar, Maharashtra, <strong>Shreeji Sales Corporation</strong> has grown into one of India's most trusted manufacturers and exporters of industrial wind-driven roof turbo ventilators under our registered brand <strong>Simpovent™</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equipped with heavy-duty metal spinning lathes, hydraulic presses, precision CNC forming machinery, and dynamic balancing rigs, our Vasai factory manufactures ventilators adhering strictly to Indian Standards (IS) and international ASHRAE HVAC principles.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                <span className="text-2xl sm:text-3xl font-black text-emerald-800 block">20+</span>
                <span className="text-[11px] text-emerald-900 font-semibold">Years Manufacturing Experience</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                <span className="text-2xl sm:text-3xl font-black text-emerald-800 block">2,500+</span>
                <span className="text-[11px] text-emerald-900 font-semibold">Plants & Factories Powered</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                <span className="text-2xl sm:text-3xl font-black text-emerald-800 block">100%</span>
                <span className="text-[11px] text-emerald-900 font-semibold">Zero-Power Green Energy</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="/images/slides/slide-1.jpg"
              alt="Shreeji Sales Corporation Factory Rooftop Installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Award & Video Section */}
      <AwardVideoSection />
    </div>
  );
}
