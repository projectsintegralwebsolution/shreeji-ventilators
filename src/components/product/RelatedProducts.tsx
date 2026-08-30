import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wind } from 'lucide-react';
import { productsData, ProductItem } from '@/data/productsData';

interface RelatedProductsProps {
  currentProduct: ProductItem;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProduct }) => {
  const related = productsData
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  return (
    <div className="space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-200">
      <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
        Explore Related Industrial Ventilators
      </h4>
      <div className="space-y-3">
        {related.map((p) => (
          <Link
            key={p.id}
            href={`/${p.slug}`}
            className="group block p-3 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {p.name}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">
              {p.categoryLabel} • {p.specs.throatDia}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
