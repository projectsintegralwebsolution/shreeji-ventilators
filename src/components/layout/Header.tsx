"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, ShieldCheck, ChevronDown, Menu, Sparkles } from 'lucide-react';
import { companyData } from '@/data/companyData';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { InquiryModal } from '../common/InquiryModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="w-full relative z-40" suppressHydrationWarning>
        {/* Topbar */}
        <div className="bg-[#09261e] text-white text-xs border-b border-emerald-950/80 py-2 px-4" suppressHydrationWarning>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            {/* Left info */}
            <div className="flex items-center flex-wrap gap-4 md:gap-6 text-slate-300">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Us:</span>
                <a href="tel:+919320293021" className="font-semibold text-white hover:text-emerald-400 transition-colors">
                  +91 93202 93021
                </a>
                <span className="text-slate-500">/</span>
                <a href="tel:+917262860283" className="font-semibold text-white hover:text-emerald-400 transition-colors">
                  +91 72628 60283
                </a>
              </div>

              <div className="hidden lg:flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href="mailto:info@shreejiwindventilator.com" className="hover:text-emerald-400 transition-colors">
                  info@shreejiwindventilator.com
                </a>
              </div>

              <div className="hidden xl:flex items-center gap-1.5 text-emerald-300/90 font-medium">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mon - Sat: 8:30 AM - 7:30 PM</span>
              </div>
            </div>

            {/* Right badges & Certifications */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>AN ISO 9001:2015 CERTIFIED CO.</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">|</span>
              <span className="hidden sm:inline-block text-emerald-400 font-semibold text-[11px]">
                Brand: Simpovent™ (Since 2005)
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`w-full bg-white transition-all duration-300 ${
            isScrolled ? 'sticky top-0 shadow-lg border-b border-slate-100 py-2.5' : 'relative py-3.5 border-b border-slate-100'
          }`}
          suppressHydrationWarning
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            {/* Official Simpovent Logo */}
            <Link href="/" className="flex items-center group py-0.5" aria-label="Simpovent Home">
              <img
                src="/images/logo.png"
                alt="Simpovent - Shreeji Sales Corporation"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                About Us
              </Link>

              {/* MegaMenu Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuHover(true)}
                onMouseLeave={() => setMegaMenuHover(false)}
              >
                <button
                  className="px-3 py-2 text-sm font-bold text-slate-800 hover:text-emerald-700 flex items-center gap-1 transition-colors cursor-pointer"
                  aria-expanded={megaMenuHover}
                  suppressHydrationWarning
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuHover ? 'rotate-180 text-emerald-700' : ''}`} />
                </button>

                {megaMenuHover && (
                  <div className="absolute top-full -left-20 pt-2 z-50">
                    <MegaMenu onItemClick={() => setMegaMenuHover(false)} />
                  </div>
                )}
              </div>

              <Link
                href="/calculator"
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                CFM Calculator
              </Link>

              <Link
                href="/events"
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                Events
              </Link>

              <Link
                href="/blog"
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                Blog
              </Link>

              <Link
                href="/applications"
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                Applications
              </Link>

              <Link
                href="/certificate"
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                Certificates
              </Link>

              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Right Action CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-xs md:text-sm font-bold shadow-lg shadow-emerald-900/15 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                suppressHydrationWarning
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Quotation</span>
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
                suppressHydrationWarning
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Instant Quote Modal */}
      <InquiryModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};
