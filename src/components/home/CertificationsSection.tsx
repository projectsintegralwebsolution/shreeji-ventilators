import React from 'react';
import { Award, ShieldCheck, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-[#0e382c] to-[#155e4b] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" /> Quality Assurance & Standards
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                AN ISO 9001:2015 Certified Manufacturing Facility
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
                Every Shreeji Simpovent Turbo Ventilator is manufactured under strict ISO quality control protocols. Each unit undergoes dynamic balancing tests, bearing friction assessment, and simulated monsoon water-resistance verification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hindalco 8011 Metallurgy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dynamic Balance Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Rain Ingress Proof</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/certificate"
                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-emerald-50 text-slate-900 font-bold text-center text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <FileCheck className="w-4 h-4 text-emerald-700" />
                <span>View ISO Certificate</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
