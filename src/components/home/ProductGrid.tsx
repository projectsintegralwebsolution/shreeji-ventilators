"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Wind, Zap, Fan, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { productsData, ProductItem } from '@/data/productsData';
import { QuoteButton } from '../common/QuoteButton';
import { WatermarkedImage } from '../common/WatermarkedImage';

export const ProductGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All 21 Products' },
    { key: 'wind-driven', label: 'Wind-Driven Ventilators' },
    { key: 'motorized-hybrid', label: 'Motorized Hybrid Series' },
    { key: 'industrial-exhaust', label: 'Heavy Duty Exhaust Fans' }
  ];

  const filteredProducts = activeTab === 'all'
    ? productsData
    : productsData.filter(p => p.category === activeTab);

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4" suppressHydrationWarning>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
              COMPLETE PRODUCT LINEUP
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Industrial Ventilation Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore our full range of wind-driven, hybrid motorized, and heavy-duty powered exhaust systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === cat.key
                    ? 'bg-[#0e382c] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200/80'
                }`}
                suppressHydrationWarning
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Prominent Product Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              suppressHydrationWarning
            >
              <div>
                {/* Product Photo with Watermark */}
                <Link href={`/${product.slug}`} className="block overflow-hidden relative">
                  <WatermarkedImage
                    src={product.image}
                    alt={product.name}
                    aspectRatio="aspect-[16/10]"
                    watermarkText="Simpovent™"
                    watermarkPosition="bottom-right"
                  />
                </Link>

                <div className="p-6">
                  {/* Category Badge & Power Type */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {product.categoryLabel}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      {product.specs.powerConsumption}
                    </span>
                  </div>

                  {/* Product Title */}
                  <Link href={`/${product.slug}`} className="group/title block">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover/title:text-emerald-700 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Quick Specs List */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Throat Diameter:</span>
                      <span className="font-semibold text-slate-800">{product.specs.throatDia}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Material (MOC):</span>
                      <span className="font-semibold text-slate-800">{product.specs.bladeMoc || 'Hindalco Aluminium'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Airflow Rating:</span>
                      <span className="font-semibold text-emerald-700">{product.specs.airflowCfm}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/${product.slug}`}
                  className="text-xs font-bold text-slate-800 hover:text-emerald-700 flex items-center gap-1 transition-colors group/link"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>

                <QuoteButton
                  productName={product.name}
                  className="px-3.5 py-1.5 text-xs"
                  variant="primary"
                >
                  Enquire Now
                </QuoteButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
