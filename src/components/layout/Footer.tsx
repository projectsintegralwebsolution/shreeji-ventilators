import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Wind, ShieldCheck, ArrowRight, Clock, Award, CheckCircle2 } from 'lucide-react';
import { companyData } from '@/data/companyData';
import { productsData } from '@/data/productsData';
import { citiesData } from '@/data/citiesData';

export const Footer: React.FC = () => {
  const windDriven = productsData.filter(p => p.category === 'wind-driven');
  const motorized = productsData.filter(p => p.category === 'motorized-hybrid');
  const exhaust = productsData.filter(p => p.category === 'industrial-exhaust');

  return (
    <footer className="bg-[#09261e] text-slate-300 pt-16 border-t-4 border-emerald-500" suppressHydrationWarning>
      {/* Top Banner with ISO Badge */}
      <div className="max-w-7xl mx-auto px-4 pb-12 border-b border-emerald-900/60">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
          <div className="flex items-center gap-3 bg-[#0e382c]/80 p-4 rounded-xl border border-emerald-800/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm block">ISO 9001:2015</span>
              <span className="text-xs text-emerald-300">Certified Manufacturing</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0e382c]/80 p-4 rounded-xl border border-emerald-800/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm block">10-Year Warranty</span>
              <span className="text-xs text-emerald-300">Hindalco Grade Aluminium</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0e382c]/80 p-4 rounded-xl border border-emerald-800/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm block">Zero Electricity</span>
              <span className="text-xs text-emerald-300">100% Eco-Friendly Power</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0e382c]/80 p-4 rounded-xl border border-emerald-800/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm block">100,000+ Units</span>
              <span className="text-xs text-emerald-300">Installed Across India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Silo Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1: Company Profile with Logo */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-md">
            <img
              src="/images/logo.png"
              alt="Simpovent Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <p className="text-xs text-slate-400 leading-relaxed pr-4">
            Shreeji Sales Corporation is India's leading ISO 9001:2015 certified manufacturer, supplier, and exporter of high-grade Wind Driven Turbo Ventilators, Motorized Roof Ventilators, and Heavy Duty Industrial Exhaust Fans for factory sheds, PEB buildings, and warehouses.
          </p>

          <div className="space-y-2 text-xs text-slate-300 pt-2">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{companyData.address.full}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 93202 93021 / +91 72628 60283 / +91 90286 88880</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="mailto:info@shreejiwindventilator.com" className="hover:text-emerald-400">
                info@shreejiwindventilator.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Wind-Driven Keyword Silo */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-emerald-800/60 pb-2">
            Wind Ventilators
          </h4>
          <ul className="space-y-1.5 text-xs">
            {windDriven.slice(0, 7).map((p) => (
              <li key={p.id}>
                <Link href={`/${p.slug}`} className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{p.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Turbine & Natural Silo */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-emerald-800/60 pb-2">
            Turbine & Eco Series
          </h4>
          <ul className="space-y-1.5 text-xs">
            {windDriven.slice(7).map((p) => (
              <li key={p.id}>
                <Link href={`/${p.slug}`} className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300">
                  <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{p.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Quick Links & Events */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-emerald-800/60 pb-2">
            Company & Events
          </h4>
          <ul className="space-y-1.5 text-xs">
            <li>
              <Link href="/events" className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-emerald-300 font-bold">
                <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>Events & Exhibitions</span>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300">
                <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>Technical Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300">
                <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>About Our Factory</span>
              </Link>
            </li>
            <li>
              <Link href="/certificate" className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300">
                <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>ISO Certificates</span>
              </Link>
            </li>
            <li>
              <Link href="/calculator" className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300">
                <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>CFM Sizing Calculator</span>
              </Link>
            </li>
            <li>
              <Link href="/applications" className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300">
                <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>Industrial Applications</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300">
                <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>Contact Factory</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Major Industrial Cities & Regions Served Silo (Local SEO Booster) */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-emerald-900/60 text-xs">
        <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] text-emerald-400">
          Serving Major Industrial Hubs & Manufacturing Belts Across India:
        </h5>
        <div className="flex flex-wrap gap-2 text-slate-400">
          {citiesData.map((city, idx) => (
            <span key={idx} className="inline-flex items-center">
              <span className="text-slate-300 font-medium">{city.name}</span>
              <span className="text-slate-500 text-[10px] ml-1">({city.industrialHubs.slice(0, 3).join(', ')})</span>
              {idx < citiesData.length - 1 && <span className="mx-2 text-emerald-800">•</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Factory Google Map & Copyright */}
      <div className="bg-[#051712] py-6 border-t border-emerald-950 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p>
              © {new Date().getFullYear()} <strong className="text-white">Shreeji Sales Corporation</strong>. All Rights Reserved. Brand: <strong className="text-emerald-400">Simpovent™</strong>
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              AN ISO 9001:2015 Certified Manufacturer in Vasai, Palghar, Maharashtra, India.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white">About Us</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-white">Events</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span>/</span>
            <Link href="/calculator" className="hover:text-white">CFM Calculator</Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <span>/</span>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
