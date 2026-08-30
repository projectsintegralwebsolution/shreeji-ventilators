import React from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CFMCalculator } from '@/components/home/CFMCalculator';
import { FAQAccordion } from '@/components/home/FAQAccordion';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: "Industrial Ventilation & CFM Calculator - Air Changes Sizing Tool",
  description: "Calculate factory shed volume, required Air Changes Per Hour (ACPH), and exact count of 21-inch and 24-inch wind turbine ventilators for your warehouse or industrial shed.",
  canonicalUrl: "/calculator",
  keywords: [
    "Ventilation Calculator",
    "CFM Calculator for Factory",
    "Turbo Ventilator Sizing Tool",
    "Air Changes Per Hour Warehouse"
  ]
});

export default function CalculatorPage() {
  return (
    <div className="w-full">
      <Breadcrumb items={[{ name: "CFM Calculator", url: "/calculator" }]} />
      <CFMCalculator />

      {/* Sizing Guide Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            How Industrial Sizing is Determined (Engineering Guidelines)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Industrial roof ventilation sizing is based on international ASHRAE (American Society of Heating, Refrigerating and Air-Conditioning Engineers) and IS (Indian Standards) design codes for industrial air change rates.
          </p>

          <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
            <h3 className="font-bold text-slate-900">The 3-Step Sizing Formula:</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-600">
              <li><strong>Calculate Shed Volume:</strong> Length (ft) × Width (ft) × Height (ft) = Total Cubic Feet (Cu. Ft.).</li>
              <li><strong>Calculate Total CFM Needed:</strong> (Shed Volume × Required ACPH) ÷ 60 Minutes.</li>
              <li><strong>Calculate Ventilator Count:</strong> Total Required CFM ÷ Rated CFM of chosen model (e.g. 2,400 CFM for a 24&quot; Turbo Ventilator).</li>
            </ol>
          </div>
        </div>
      </section>

      <FAQAccordion title="CFM & Sizing Frequently Asked Questions" />
    </div>
  );
}
