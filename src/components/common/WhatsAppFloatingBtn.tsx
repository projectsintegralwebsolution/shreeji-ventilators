"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyData } from '@/data/companyData';

interface WhatsAppBtnProps {
  productName?: string;
}

export const WhatsAppFloatingBtn: React.FC<WhatsAppBtnProps> = ({ productName }) => {
  const message = productName
    ? `Hello Shreeji Sales Corporation, I am interested in getting a quotation and technical specifications for ${productName}. Please share details.`
    : `Hello Shreeji Sales Corporation, I need a consultation/quotation for industrial roof wind ventilators for my factory/warehouse.`;

  const whatsappUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="hidden md:flex mr-3 bg-white text-slate-800 text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Chat on WhatsApp
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shreeji Wind Ventilator on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-glow"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
};
