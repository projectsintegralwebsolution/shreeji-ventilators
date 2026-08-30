import React from 'react';
import { notFound } from 'next/navigation';
import { productsData, ProductItem } from '@/data/productsData';
import { ProductDetailHero } from '@/components/product/ProductDetailHero';
import { ProductSpecs } from '@/components/product/ProductSpecs';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { CFMCalculator } from '@/components/home/CFMCalculator';
import { FAQAccordion } from '@/components/home/FAQAccordion';
import { JsonLd } from '@/components/common/JsonLd';
import { getProductSchema, getBreadcrumbSchema, constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { CheckCircle2, ShieldCheck, Factory, Sparkles, MapPin } from 'lucide-react';
import { QuoteButton } from '@/components/common/QuoteButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = productsData.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return constructMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.focusKeywords,
    canonicalUrl: `/${product.slug}`
  });
}

export default async function KeywordProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = productsData.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product.name, url: `/${product.slug}` }
  ];

  return (
    <div className="w-full">
      {/* Schema.org Product and Breadcrumbs */}
      <JsonLd
        data={[
          getProductSchema({
            name: product.name,
            description: product.metaDescription,
            image: product.image,
            sku: `SHREEJI-${product.id.toUpperCase()}`,
            category: product.categoryLabel,
            url: `/${product.slug}`
          }),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />

      {/* Hero Header */}
      <ProductDetailHero product={product} />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Main Description & Specs */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Section */}
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
                DETAILED PRODUCT OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                About the Shreeji {product.name}
              </h2>
              {product.fullDescription.map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technical Specs Table */}
            <ProductSpecs product={product} />

            {/* Working Theory & Efficiency */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block">
                OPERATING PRINCIPLE
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                How this {product.name} Operates
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {product.workingTheory}
              </p>

              <div className="pt-2 border-t border-slate-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">
                  Efficiency & Return on Investment (ROI):
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {product.efficiencyHighlights.map((eff, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{eff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Suitable Applications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Recommended Installation Areas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <Factory className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick RFQ Box */}
            <div className="bg-gradient-to-br from-[#0e382c] to-[#155e4b] text-white p-6 rounded-3xl shadow-xl space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Instant Factory Pricing
              </div>
              <h4 className="text-xl font-bold text-white">
                Request Quote for {product.name}
              </h4>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                Connect directly with our manufacturing team in Vasai, Maharashtra. Ready stock dispatch available across India.
              </p>

              <QuoteButton
                productName={product.name}
                className="w-full py-3 text-xs sm:text-sm"
                variant="primary"
              >
                Send Quotation Request
              </QuoteButton>

              <div className="pt-3 border-t border-emerald-800/60 text-xs space-y-1.5 text-emerald-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ISO 9001:2015 Certified Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Serving Mumbai, Pune, Gujarat, Pan-India</span>
                </div>
              </div>
            </div>

            {/* Related Products Widget */}
            <RelatedProducts currentProduct={product} />
          </div>
        </div>
      </div>

      {/* Embedded CFM Sizing Calculator */}
      <CFMCalculator />

      {/* Product FAQs */}
      <FAQAccordion
        customFaqs={product.faqs}
        title={`Frequently Asked Questions – ${product.name}`}
      />
    </div>
  );
}
