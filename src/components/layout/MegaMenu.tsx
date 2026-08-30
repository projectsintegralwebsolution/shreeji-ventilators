import React from 'react';
import Link from 'next/link';
import { Wind, Zap, Fan, ArrowRight, ShieldCheck, Download, Sparkles, PhoneCall } from 'lucide-react';
import { productsData } from '@/data/productsData';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface MegaMenuProps {
  onItemClick?: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onItemClick }) => {
  const windDriven = productsData.filter(p => p.category === 'wind-driven');
  const motorized = productsData.filter(p => p.category === 'motorized-hybrid');
  const exhaust = productsData.filter(p => p.category === 'industrial-exhaust');

  return (
    <div className="w-[960px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-12 gap-6 animate-fadeIn text-slate-800 backdrop-blur-xl">
      {/* Column 1: Wind-Driven Eco Series (4 cols) */}
      <div className="col-span-4 space-y-3">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-emerald-100">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shadow-sm">
            <Wind className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-[#0e382c]">Wind-Driven Series</h4>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
              100% Zero Electricity
            </span>
          </div>
        </div>
        <ul className="space-y-1">
          {windDriven.slice(0, 7).map((p) => (
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

      {/* Column 2: Turbine & Motorized Hybrid (4 cols) */}
      <div className="col-span-4 space-y-3 border-l border-slate-100 pl-4">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-emerald-100">
          <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-sm">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-[#0e382c]">Hybrid & Turbine</h4>
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
              Hindalco Aluminium & SS304
            </span>
          </div>
        </div>
        <ul className="space-y-1">
          {windDriven.slice(7, 10).map((p) => (
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
          {[...motorized, ...exhaust].slice(0, 4).map((p) => (
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
              <Sparkles className="w-2.5 h-2.5" /> Best Seller
            </span>
            <span className="text-[10px] text-emerald-200 font-bold">ISO 9001:2015</span>
          </div>

          <div className="rounded-xl overflow-hidden shadow-inner border border-white/10">
            <WatermarkedImage
              src="/images/products/powerless-ventilator.jpg"
              alt="Simpovent 24 Inch Turbo Ventilator"
              aspectRatio="aspect-[16/9]"
              watermarkText="Simpovent™ 24 Inch"
              watermarkPosition="bottom-right"
            />
          </div>

          <div>
            <h5 className="font-bold text-xs text-white leading-tight">
              Simpovent 24" Turbo Ventilator
            </h5>
            <p className="text-[11px] text-emerald-100/80 mt-1 line-clamp-2 leading-relaxed">
              42 aerodynamic Hindalco vanes with dual sealed HCH 6001 ZZ bearings. 100% maintenance-free.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 space-y-2">
          <Link
            href="/turbo-ventilator"
            onClick={onItemClick}
            className="w-full py-2 px-3 rounded-xl bg-white hover:bg-emerald-50 text-slate-900 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <span>View Technical Specs</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
          </Link>
          <a
            href="https://wa.me/917262860283?text=Hello%20Shreeji,%20I%20want%20to%20enquire%20about%2024%20inch%20Simpovent%20Turbo%20Ventilator"
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
