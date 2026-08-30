import React from 'react';
import { Table, CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import { QuoteButton } from '../common/QuoteButton';

export const TechSpecsComparison: React.FC = () => {
  const specsData = [
    { parameter: "Throat Diameter (Neck Dia)", standard24: '24" Inch (610 MM)', standard21: '21" Inch (530 MM)', motorized24: '24" Inch (610 MM)' },
    { parameter: "Outer Diameter", standard24: '30" Inch (760 MM)', standard21: '28" Inch (710 MM)', motorized24: '32" Inch (810 MM)' },
    { parameter: "Number of Vanes (Blades)", standard24: "42 Nos. Aerodynamic Curved", standard21: "36 Nos. Aerodynamic Curved", motorized24: "42 External + Axial Motor" },
    { parameter: "Blade Material (MOC)", standard24: "Hindalco Aluminium Grade 8011", standard21: "Hindalco Aluminium Grade 8011", motorized24: "Aluminium 8011 / SS 304" },
    { parameter: "Top Cover Size & Material", standard24: "510 MM (Stainless Steel SS 304)", standard21: "450 MM (Stainless Steel SS 304)", motorized24: "510 MM Heavy Duty SS Cowl" },
    { parameter: "Central Shaft & Diameter", standard24: "EN-8 Steel (125mm x 280mm)", standard21: "EN-8 Steel (125mm x 250mm)", motorized24: "EN-9 High Tensile Steel" },
    { parameter: "Bearing Make & Type", standard24: "Dual HCH 6001 ZZ Sealed", standard21: "Dual HCH 6001 ZZ Sealed", motorized24: "Dual Heavy Duty Sealed" },
    { parameter: "Base Plate Size & MOC", standard24: "1650 x 1100 mm (Heavy Duty FRP)", standard21: "1650 x 1100 mm (Heavy Duty FRP)", motorized24: "Engineered Heavy Duty Curb" },
    { parameter: "Power Consumption", standard24: "0 Watts (Zero Power)", standard21: "0 Watts (Zero Power)", motorized24: "0.25 kW - 0.75 kW (Hybrid)" },
    { parameter: "Exhaust Flow Capacity", standard24: "2,000 - 3,200 CFM", standard21: "1,800 - 2,500 CFM", motorized24: "3,500 - 6,500 CFM" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
            ENGINEERING SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Technical Specification Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Detailed dimensions, metallurgy, bearing makes, and CFM exhaust metrics for Shreeji Simpovent industrial roof ventilators.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-[#0e382c] text-white">
                <th className="p-4 font-bold uppercase tracking-wider text-xs">Technical Parameter</th>
                <th className="p-4 font-bold text-emerald-300 text-xs uppercase tracking-wider">24" Turbo Ventilator (Standard)</th>
                <th className="p-4 font-bold text-emerald-300 text-xs uppercase tracking-wider">21" Turbo Ventilator (Compact)</th>
                <th className="p-4 font-bold text-amber-300 text-xs uppercase tracking-wider">24" Motorized Hybrid Ventilator</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {specsData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 hover:bg-emerald-50/40 transition-colors'}>
                  <td className="p-3.5 font-bold text-slate-900">{row.parameter}</td>
                  <td className="p-3.5 text-slate-700 font-medium">{row.standard24}</td>
                  <td className="p-3.5 text-slate-700 font-medium">{row.standard21}</td>
                  <td className="p-3.5 text-slate-800 font-semibold">{row.motorized24}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>All models conform to ISO 9001:2015 standards and structural wind load test parameters.</span>
          </div>

          <div className="flex items-center gap-3">
            <QuoteButton productName="24 Inch Turbo Ventilator (Technical Spec Quotation)" className="px-4 py-2 text-xs" />
          </div>
        </div>
      </div>
    </section>
  );
};
