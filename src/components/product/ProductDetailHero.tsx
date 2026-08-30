import React from 'react';
import { ProductItem } from '@/data/productsData';
import { Breadcrumb } from '../common/Breadcrumb';
import { ShieldCheck, Wind, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { QuoteButton } from '../common/QuoteButton';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface ProductDetailHeroProps {
  product: ProductItem;
}

export const ProductDetailHero: React.FC<ProductDetailHeroProps> = ({ product }) => {
  return (
    <div className="w-full">
      <Breadcrumb
        items={[
          { name: "Products", url: "/products" },
          { name: product.name, url: `/${product.slug}` }
        ]}
      />

      <section className="bg-gradient-to-br from-[#09261e] via-[#0e382c] to-[#155e4b] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Wind className="w-3.5 h-3.5" />
                <span>{product.categoryLabel}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                {product.h1Title}
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs">
                  <span className="text-slate-400 block text-[10px]">Throat Diameter</span>
                  <span className="font-bold text-white">{product.specs.throatDia}</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs">
                  <span className="text-slate-400 block text-[10px]">Material (MOC)</span>
                  <span className="font-bold text-emerald-300">{product.specs.bladeMoc || 'Hindalco Aluminium'}</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs">
                  <span className="text-slate-400 block text-[10px]">Airflow Volume</span>
                  <span className="font-bold text-white">{product.specs.airflowCfm}</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs">
                  <span className="text-slate-400 block text-[10px]">Power Input</span>
                  <span className="font-bold text-emerald-300">{product.specs.powerConsumption}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <QuoteButton
                  productName={product.name}
                  className="px-6 py-3 text-sm shadow-xl"
                  variant="primary"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Get Instant Quote for {product.name}</span>
                  </span>
                </QuoteButton>

                <a
                  href={`https://wa.me/917262860283?text=Hello%20Shreeji,%20I%20need%20pricing%20and%20specifications%20for%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Card Graphic with Watermarked Real Photo */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 mb-4">
                <WatermarkedImage
                  src={product.image}
                  alt={product.name}
                  aspectRatio="aspect-[4/3]"
                  watermarkText="Shreeji Simpovent™ • ISO 9001:2015"
                  watermarkPosition="bottom-right"
                  priority={true}
                />
              </div>

              <span className="text-xs font-black tracking-widest text-emerald-300 uppercase block">
                SIMPOVENT™ INDUSTRIAL
              </span>
              <h4 className="text-base font-bold text-white mt-1">{product.name}</h4>
              <p className="text-[11px] text-slate-300 mt-1">
                ISO 9001:2015 Certified • 100% Rainproof & Corrosion Resistant
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-200 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4" /> 10-Year Structural Warranty
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
