import React from 'react';
import Link from 'next/link';
import { Wind, Zap, Fan, ArrowRight, ShieldCheck, Download, Sparkles, PhoneCall } from 'lucide-react';
import { productsData } from '@/data/productsData';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface MegaMenuProps {
  onItemClick?: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onItemClick }) => {
  const motorized = productsData.filter(p => p.category === 'motorized-hybrid');
  const exhaustAndHvls = productsData.filter(p => p.category === 'industrial-exhaust' || p.category === 'hvls-fans');
  const windDriven = productsData.filter(p => p.category === 'wind-driven');

  return (
    <div className="w-[960px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-12 gap-6 animate-fadeIn text-slate-800 backdrop-blur-xl">
      {/* Column 1: Motorized Hybrid Series (Priority 1 - 4 cols) */}
      <div className="col-span-4 space-y-3">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-emerald-100">
          <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-sm">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-[#0e382c]">Motorized & Hybrid</h4>
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
              Priority 1 • Powered Suction
            </span>
          </div>
        </div>
        <ul className="space-y-1">
          {motorized.map((p) => (
            <li key={p.id}>
              <Link
                href={`/${p.slug}`}
                onClick={onItemClick}
                className="group flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80 transition-all"
              >
                <span className="line-clamp-1">{p.name}</span>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Exhaust, HVLS & Wind-Driven (4 cols) */}
      <div className="col-span-4 space-y-3 border-l border-slate-100 pl-4">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-emerald-100">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shadow-sm">
            <Wind className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-[#0e382c]">HVLS, Exhaust & Wind</h4>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
              High CFM & Zero-Power Series
            </span>
          </div>
        </div>
        <ul className="space-y-1">
          {exhaustAndHvls.map((p) => (
            <li key={p.id}>
              <Link
                href={`/${p.slug}`}
                onClick={onItemClick}
                className="group flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50/60 hover:bg-emerald-100/80 transition-all"
              >
                <span className="line-clamp-1">{p.name}</span>
                <ArrowRight className="w-3 h-3 text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </li>
          ))}
          {windDriven.slice(0, 4).map((p) => (
            <li key={p.id}>
              <Link
                href={`/${p.slug}`}
                onClick={onItemClick}
                className="group flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80 transition-all"
              >
                <span className="line-clamp-1">{p.name}</span>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Featured Product Showcase Card (4 cols) */}
      <div className="col-span-4 bg-gradient-to-br from-[#0e382c] to-[#155e4b] p-4 rounded-2xl text-white flex flex-col justify-between shadow-lg">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              <Sparkles className="w-2.5 h-2.5" /> New Release
            </span>
            <span className="text-[10px] text-emerald-200 font-bold">Simpovent® PMSM</span>
          </div>

          <div className="rounded-xl overflow-hidden shadow-inner border border-white/10">
            <WatermarkedImage
              src="/images/products/hvls-fan.jpg"
              alt="SIMPOVENT Industrial HVLS PMSM Fan"
              aspectRatio="aspect-[16/9]"
              watermarkText="Simpovent® HVLS"
              watermarkPosition="bottom-right"
            />
          </div>

          <div>
            <h5 className="font-bold text-xs text-white leading-tight">
              SIMPOVENT® Industrial HVLS PMSM Fan
            </h5>
            <p className="text-[11px] text-emerald-100/80 mt-1 line-clamp-2 leading-relaxed">
              Up to 24ft sweep, 15,500 CMM air volume, direct-drive PMSM motor. Zero oil maintenance.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 space-y-2">
          <Link
            href="/hvls-fan"
            onClick={onItemClick}
            className="w-full py-2 px-3 rounded-xl bg-white hover:bg-emerald-50 text-slate-900 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <span>View HVLS Specifications</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
          </Link>
          <a
            href="https://wa.me/917262860283?text=Hello%20Shreeji,%20I%20want%20to%20enquire%20about%20SIMPOVENT%20HVLS%20PMSM%20Fans"
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
