import React from 'react';
import Link from 'next/link';
import { Wind, Zap, Fan, ArrowRight, Sparkles, PhoneCall, Calculator } from 'lucide-react';
import { productsData } from '@/data/productsData';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface MegaMenuProps {
  onItemClick?: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onItemClick }) => {
  const motorized = productsData.filter(p => p.category === 'motorized-hybrid');
  const windDriven = productsData.filter(p => p.category === 'wind-driven');
  const exhaustFans = productsData.filter(p => p.category === 'industrial-exhaust');
  const hvlsFans = productsData.filter(p => p.category === 'hvls-fans');

  return (
    <div className="w-[1080px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-12 gap-6 animate-fadeIn text-slate-800 backdrop-blur-xl">
      {/* Column 1: Motorized Hybrid Series (Priority 1 - 3 cols) */}
      <div className="col-span-3 space-y-3">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-amber-200">
          <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-[#0e382c] uppercase tracking-wider">Motorized & Hybrid</h4>
            <span className="text-[10px] font-bold text-amber-700 block">
              Dual-Action Powered
            </span>
          </div>
        </div>
        <ul className="space-y-1">
          {motorized.map((p) => (
            <li key={p.id}>
              <Link
                href={`/${p.slug}`}
                onClick={onItemClick}
                className="group flex items-center justify-between py-1.5 px-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/80 transition-all"
              >
                <span className="line-clamp-1">{p.name}</span>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Wind-Driven Turbo Ventilators (3 cols) */}
      <div className="col-span-3 space-y-3 border-l border-slate-100 pl-4">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-emerald-100">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm">
            <Wind className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-[#0e382c] uppercase tracking-wider">Natural Turbo Vents</h4>
            <span className="text-[10px] font-bold text-emerald-600 block">
              100% Zero Electricity
            </span>
          </div>
        </div>
        <ul className="space-y-1">
          {windDriven.slice(0, 6).map((p) => (
            <li key={p.id}>
              <Link
                href={`/${p.slug}`}
                onClick={onItemClick}
                className="group flex items-center justify-between py-1 px-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/80 transition-all"
              >
                <span className="line-clamp-1">{p.name}</span>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/products"
              onClick={onItemClick}
              className="text-[11px] font-bold text-emerald-700 hover:underline px-2 pt-1 inline-flex items-center gap-1"
            >
              <span>+ View all 13 Natural Models</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 3: Exhaust & HVLS Series (3 cols) */}
      <div className="col-span-3 space-y-3 border-l border-slate-100 pl-4">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-emerald-100">
          <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shadow-sm">
            <Fan className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-[#0e382c] uppercase tracking-wider">Exhaust & HVLS</h4>
            <span className="text-[10px] font-bold text-teal-700 block">
              High-CFM Power Flow
            </span>
          </div>
        </div>
        <ul className="space-y-1">
          {hvlsFans.map((p) => (
            <li key={p.id}>
              <Link
                href={`/${p.slug}`}
                onClick={onItemClick}
                className="group flex items-center justify-between py-1.5 px-2 rounded-xl text-xs font-bold text-emerald-950 bg-emerald-50/70 hover:bg-emerald-100 transition-all"
              >
                <span className="line-clamp-1">{p.name}</span>
                <ArrowRight className="w-3 h-3 text-emerald-700 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </li>
          ))}
          {exhaustFans.map((p) => (
            <li key={p.id}>
              <Link
                href={`/${p.slug}`}
                onClick={onItemClick}
                className="group flex items-center justify-between py-1.5 px-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/80 transition-all"
              >
                <span className="line-clamp-1">{p.name}</span>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </li>
          ))}
          <li className="pt-2 border-t border-slate-100">
            <Link
              href="/calculator"
              onClick={onItemClick}
              className="flex items-center gap-2 py-1.5 px-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-600" />
              <span>CFM Sizing Calculator</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 4: Featured SIMPOVENT® Showcase Card (3 cols) */}
      <div className="col-span-3 bg-gradient-to-br from-[#0e382c] to-[#155e4b] p-4 rounded-2xl text-white flex flex-col justify-between shadow-lg">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              <Sparkles className="w-2.5 h-2.5" /> High Demand
            </span>
            <span className="text-[10px] text-emerald-200 font-bold">SIMPOVENT®</span>
          </div>

          <div className="rounded-xl overflow-hidden shadow-inner border border-white/10">
            <WatermarkedImage
              src="/images/products/motoized-roof-1.jpg"
              alt="SIMPOVENT Motorized Industrial Roof Ventilator"
              aspectRatio="aspect-[16/10]"
              watermarkText="SIMPOVENT® Hybrid"
              watermarkPosition="bottom-right"
            />
          </div>

          <div>
            <h5 className="font-bold text-xs text-white leading-tight">
              SIMPOVENT® Motorized Roof Ventilator
            </h5>
            <p className="text-[11px] text-emerald-100/80 mt-1 line-clamp-2 leading-relaxed">
              Dual hybrid design: wind-driven suction + motorized electric boost for heavy factory smoke.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 space-y-2">
          <Link
            href="/motorised-roof-ventilator"
            onClick={onItemClick}
            className="w-full py-2 px-3 rounded-xl bg-white hover:bg-emerald-50 text-slate-900 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <span>View Motorized Specs</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
          </Link>
          <a
            href="https://wa.me/917262860283?text=Hello%20Shreeji%20Sales%20Corporation,%20I%20want%20to%20enquire%20about%20SIMPOVENT%20Motorized%20Roof%20Ventilators"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1.5 text-[11px] font-bold text-emerald-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
          >
            <PhoneCall className="w-3 h-3" /> Quick WhatsApp Quote
          </a>
        </div>
      </div>
    </div>
  );
};
