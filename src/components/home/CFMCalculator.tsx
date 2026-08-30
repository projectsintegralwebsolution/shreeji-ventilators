"use client";

import React, { useState } from 'react';
import { Calculator, Sparkles, Wind, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { QuoteButton } from '../common/QuoteButton';

// Deterministic number formatter that produces identical "100,000" on both server and client regardless of locale
function formatNumber(num: number): string {
  if (isNaN(num)) return "0";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const CFMCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(100);
  const [width, setWidth] = useState<number>(50);
  const [height, setHeight] = useState<number>(20);
  const [industryType, setIndustryType] = useState<string>("general");
  const [ventilatorSize, setVentilatorSize] = useState<number>(24); // 24" or 21"

  // Air Changes Per Hour (ACPH) by industry
  const acphRates: Record<string, { label: string; acph: number; desc: string }> = {
    general: { label: "General Factory / Engineering", acph: 15, desc: "Standard manufacturing, assembly, tool rooms" },
    warehouse: { label: "Warehouses & Logistics Hubs", acph: 10, desc: "General storage, packaging, FMCG warehouses" },
    foundry: { label: "Foundries, Forging & Melting", acph: 30, desc: "High heat, furnaces, smelting, casting sheds" },
    boiler: { label: "Boiler Rooms & DG Sheds", acph: 25, desc: "High temperature, generator heat, compressor rooms" },
    chemical: { label: "Chemical & Pharma Units", acph: 20, desc: "Fume exhaustion, solvent handling, compounding" },
    textile: { label: "Textile, Sugar & Paper Mills", acph: 18, desc: "High humidity, dust, steam and fluff dispersal" }
  };

  const currentRate = acphRates[industryType] || acphRates.general;

  // Calculation Logic
  const volumeCuFt = length * width * height;
  const totalCfmRequired = Math.round((volumeCuFt * currentRate.acph) / 60);

  const cfmPerUnit = ventilatorSize === 24 ? 2400 : 1900;
  const unitsRequired = Math.max(1, Math.ceil(totalCfmRequired / cfmPerUnit));

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gradient-to-br from-[#09261e] via-[#0e382c] to-[#144f3e] text-white" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4" suppressHydrationWarning>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>Industrial Sizing Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Factory Ventilation & CFM Sizing Calculator
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-2">
            Calculate your shed air volume, required air changes per hour (ACPH), and exact count of 21" or 24" Shreeji Simpovent Turbo Ventilators needed.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="bg-white text-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-emerald-400/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" suppressHydrationWarning>
          {/* Input Controls (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              <span>Enter Building Dimensions & Industry Type</span>
            </h3>

            {/* Dimensions Inputs */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Length (Feet)
                </label>
                <input
                  type="number"
                  min={10}
                  max={2000}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Width (Feet)
                </label>
                <input
                  type="number"
                  min={10}
                  max={1000}
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Avg Height (Ft)
                </label>
                <input
                  type="number"
                  min={8}
                  max={100}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* Industry Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Industry Application (Determines ACPH Air Exchange Rate)
              </label>
              <select
                value={industryType}
                onChange={(e) => setIndustryType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                suppressHydrationWarning
              >
                {Object.entries(acphRates).map(([key, item]) => (
                  <option key={key} value={key}>
                    {item.label} ({item.acph} Air Changes/Hour)
                  </option>
                ))}
              </select>
              <span className="text-[11px] text-slate-500 block mt-1">
                ℹ️ {currentRate.desc}
              </span>
            </div>

            {/* Ventilator Model Choice */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Ventilator Throat Size
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setVentilatorSize(24)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    ventilatorSize === 24
                      ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-600/30'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                  suppressHydrationWarning
                >
                  <span className="font-bold text-sm text-slate-900 block">24" (610 MM) Heavy Duty</span>
                  <span className="text-xs text-slate-500">Industry Standard (Avg ~2,400 CFM)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setVentilatorSize(21)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    ventilatorSize === 21
                      ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-600/30'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                  suppressHydrationWarning
                >
                  <span className="font-bold text-sm text-slate-900 block">21" (530 MM) Compact</span>
                  <span className="text-xs text-slate-500">Medium Sheds (Avg ~1,900 CFM)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Result Output Card (Right Column) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0e382c] to-[#185d4b] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6" suppressHydrationWarning>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 block mb-1">
                RECOMMENDED SIZING
              </span>
              <h4 className="text-xl font-bold text-white">
                Ventilation Requirement Summary
              </h4>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs sm:text-sm">
                <span className="text-slate-300">Total Building Volume:</span>
                <span className="font-mono font-bold text-white text-base" suppressHydrationWarning>
                  {formatNumber(volumeCuFt)} Cu. Ft.
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs sm:text-sm">
                <span className="text-slate-300">Design Air Change Rate:</span>
                <span className="font-bold text-emerald-300 text-base" suppressHydrationWarning>
                  {currentRate.acph} ACPH
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs sm:text-sm">
                <span className="text-slate-300">Total Required Exhaust:</span>
                <span className="font-mono font-bold text-white text-base" suppressHydrationWarning>
                  {formatNumber(totalCfmRequired)} CFM
                </span>
              </div>

              {/* Highlight Result */}
              <div className="bg-emerald-500/20 border border-emerald-400/40 p-4 rounded-xl text-center" suppressHydrationWarning>
                <span className="text-xs text-emerald-200 block font-medium">Recommended Number of Units:</span>
                <span className="text-4xl sm:text-5xl font-black text-white block my-1" suppressHydrationWarning>
                  {unitsRequired} <span className="text-lg font-bold text-emerald-300">Units</span>
                </span>
                <span className="text-[11px] text-emerald-100/90 block">
                  Shreeji Simpovent {ventilatorSize}" Turbo Ventilators with matching FRP Base Plates
                </span>
              </div>
            </div>

            <QuoteButton
              productName={`${unitsRequired} Units of ${ventilatorSize}" Turbo Ventilator (${formatNumber(totalCfmRequired)} CFM requirement)`}
              className="w-full py-3.5 text-sm"
              variant="primary"
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" /> Get Quotation for {unitsRequired} Units
              </span>
            </QuoteButton>
          </div>
        </div>
      </div>
    </section>
  );
};
