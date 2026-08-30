import React from 'react';
import Link from 'next/link';
import { Wind, Home, ArrowRight, Search } from 'lucide-react';
import { productsData } from '@/data/productsData';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-slate-50">
      <div className="max-w-xl mx-auto text-center space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
          <Wind className="w-10 h-10 animate-spin-slow" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">404</h1>
        <h2 className="text-xl font-bold text-slate-800">Page Not Found</h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          The industrial ventilation page you are looking for might have been moved or updated. Explore our popular products below.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-2">
          {productsData.slice(0, 5).map((p) => (
            <Link
              key={p.id}
              href={`/${p.slug}`}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              {p.name}
            </Link>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e382c] hover:bg-[#155e4b] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
