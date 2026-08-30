import React from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ProductGrid } from '@/components/home/ProductGrid';
import { TechSpecsComparison } from '@/components/home/TechSpecsComparison';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: "All Products - Industrial Wind & Roof Ventilators",
  description: "Explore the complete range of 21 industrial wind-driven ventilators, motorized hybrid roof ventilators, and heavy-duty industrial exhaust fans by Shreeji Sales Corporation.",
  canonicalUrl: "/products",
  keywords: [
    "Industrial Ventilator Catalog",
    "Wind Ventilators List",
    "Turbo Ventilator Models",
    "Industrial Exhaust Fan Sizing"
  ]
});

export default function ProductsPage() {
  return (
    <div className="w-full">
      <Breadcrumb items={[{ name: "Products", url: "/products" }]} />
      <div className="bg-[#0e382c] text-white py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black">
          Industrial Roof Ventilator Products
        </h1>
        <p className="text-xs md:text-sm text-emerald-200 mt-2 max-w-2xl mx-auto">
          Manufactured with Hindalco Grade Aluminium, Stainless Steel SS 304, and Precision HCH Sealed Bearings.
        </p>
      </div>
      <ProductGrid />
      <TechSpecsComparison />
    </div>
  );
}
