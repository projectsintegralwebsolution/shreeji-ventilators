import React from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { IndustryApplications } from '@/components/home/IndustryApplications';
import { CFMCalculator } from '@/components/home/CFMCalculator';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: "Industrial Applications - Wind Driven Ventilation Solutions",
  description: "Discover how Shreeji Simpovent Turbo Ventilators solve heat, smoke, and humidity problems in foundries, boiler sheds, chemical plants, and logistics warehouses.",
  canonicalUrl: "/applications",
  keywords: [
    "Boiler Room Ventilation",
    "Foundry Smoke Exhaust",
    "Chemical Plant Wind Ventilator",
    "Warehouse Heat Reduction"
  ]
});

export default function ApplicationsPage() {
  return (
    <div className="w-full">
      <Breadcrumb items={[{ name: "Applications", url: "/applications" }]} />
      <div className="bg-[#0e382c] text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black">
          Industrial Ventilation Applications
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200 mt-2 max-w-2xl mx-auto">
          Tailored natural and motorized air exhaustion systems for factories, warehouses, and manufacturing plants.
        </p>
      </div>
      <IndustryApplications />
      <CFMCalculator />
    </div>
  );
}
