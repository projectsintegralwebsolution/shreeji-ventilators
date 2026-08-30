import React from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CertificationsSection } from '@/components/home/CertificationsSection';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { QuoteButton } from '@/components/common/QuoteButton';

export const metadata: Metadata = constructMetadata({
  title: "Quality Certifications & ISO 9001:2015 Standards - Shreeji",
  description: "View ISO 9001:2015 certificates and quality testing benchmarks for Shreeji Sales Corporation (Simpovent) Wind Ventilators.",
  canonicalUrl: "/certificate",
  keywords: [
    "ISO 9001:2015 Ventilator Certificate",
    "Hindalco Aluminium Test Certificate",
    "Wind Ventilator Quality Benchmark"
  ]
});

export default function CertificatePage() {
  return (
    <div className="w-full">
      <Breadcrumb items={[{ name: "Certificates", url: "/certificate" }]} />
      <div className="bg-[#0e382c] text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black">
          Quality Assurance & ISO 9001:2015 Certification
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200 mt-2 max-w-2xl mx-auto">
          Certified manufacturing standards, raw material metallurgy verification, and structural durability tests.
        </p>
      </div>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  ISO 9001:2015 Quality Management System
                </h2>
                <span className="text-xs text-emerald-700 font-semibold">
                  Certified for Design, Manufacturing, and Supply of Industrial Wind Ventilators
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
              <p>
                <strong>Shreeji Sales Corporation</strong> operates in complete adherence to ISO 9001:2015 standards. Our manufacturing processes include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Spectrometry Metallurgy Test:</strong> Verification of Hindalco 8011 Aluminium purity and high tensile resistance.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Dynamic Balance Testing:</strong> Electronic rotor balancing to prevent vibration and ensure silent rotation.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Simulated Monsoon Water-Tightness Test:</strong> Zero droplet penetration during high-velocity water jetting.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Bearing Friction & Life Assessment:</strong> Sealed HCH 6001 ZZ bearing inspection under continuous load.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Need compliance certificates for your project?</span>
              <QuoteButton productName="ISO Compliance Certificates & Catalog" className="px-4 py-2 text-xs" />
            </div>
          </div>
        </div>
      </section>

      <CertificationsSection />
    </div>
  );
}
