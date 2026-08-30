import React from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy - Shreeji Sales Corporation",
  description: "Privacy Policy and data protection terms for Shreeji Sales Corporation website visitors and customers.",
  canonicalUrl: "/privacy-policy",
  noIndex: true
});

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <Breadcrumb items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 mb-4">Privacy Policy</h1>
        <p>Last updated: January 2025</p>

        <h2 className="text-xl font-bold text-slate-900 mt-6">1. Information Collection</h2>
        <p>
          Shreeji Sales Corporation collects personal information (such as name, phone number, email address, and industrial building specifications) provided voluntarily by users submitting quotation requests or inquiries.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6">2. Use of Information</h2>
        <p>
          Information collected is strictly used to prepare technical sizing calculations, quotations, provide after-sales assistance, and fulfill orders. We do not sell or lease customer contact details to third parties.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6">3. Security</h2>
        <p>
          We implement standard security measures to protect inquiry data transmitted via our website forms and direct communication channels.
        </p>
      </div>
    </div>
  );
}
