"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Phone, Mail, MapPin, Sparkles, Wind, FileText, Calendar, BookOpen } from 'lucide-react';
import { companyData } from '@/data/companyData';
import { productsData } from '@/data/productsData';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [productsOpen, setProductsOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex" suppressHydrationWarning>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto" suppressHydrationWarning>
        {/* Drawer Header with Logo */}
        <div className="bg-white p-4 border-b border-slate-200 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="block">
            <img
              src="/images/logo.png"
              alt="Simpovent Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close mobile menu"
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 cursor-pointer"
            suppressHydrationWarning
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-5 space-y-1 flex-1">
          <Link
            href="/"
            onClick={onClose}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
          >
            About Us
          </Link>

          {/* Products Accordion */}
          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 cursor-pointer"
              suppressHydrationWarning
            >
              <span>Products (All 21 Models)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            {productsOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 max-h-60 overflow-y-auto border border-slate-100">
                {productsData.map((p) => (
                  <Link
                    key={p.id}
                    href={`/${p.slug}`}
                    onClick={onClose}
                    className="block py-1.5 px-2 text-xs font-medium text-slate-600 hover:text-emerald-700 hover:bg-emerald-100/50 rounded-md"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/calculator"
            onClick={onClose}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
          >
            CFM Calculator
          </Link>

          <Link
            href="/events"
            onClick={onClose}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
          >
            Events & Exhibitions
          </Link>

          <Link
            href="/blog"
            onClick={onClose}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
          >
            Blog & Articles
          </Link>

          <Link
            href="/applications"
            onClick={onClose}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
          >
            Applications
          </Link>

          <Link
            href="/certificate"
            onClick={onClose}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
          >
            ISO & Certificates
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
          >
            Contact Us
          </Link>
        </div>

        {/* Contact info footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 text-xs space-y-3">
          <div className="flex items-center gap-2 text-slate-700">
            <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <a href="tel:+919320293021" className="font-semibold hover:text-emerald-700">+91 93202 93021</a>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <a href="mailto:info@shreejiwindventilator.com" className="hover:text-emerald-700">info@shreejiwindventilator.com</a>
          </div>
          <div className="flex items-start gap-2 text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span>Takdir Ind. Estate, Vasai East, Palghar, Maharashtra - 401208</span>
          </div>

          <a
            href="https://wa.me/917262860283"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 text-xs shadow-md transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" /> Direct WhatsApp Quote
          </a>
        </div>
      </div>
    </div>
  );
};
