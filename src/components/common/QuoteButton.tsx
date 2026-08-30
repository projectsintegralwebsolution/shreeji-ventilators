"use client";

import React, { useState } from 'react';
import { InquiryModal } from './InquiryModal';
import { Sparkles } from 'lucide-react';

interface QuoteButtonProps {
  productName?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  children?: React.ReactNode;
}

export const QuoteButton: React.FC<QuoteButtonProps> = ({
  productName,
  className = '',
  variant = 'primary',
  children
}) => {
  const [open, setOpen] = useState(false);

  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg shadow-emerald-900/20 active:scale-95",
    secondary: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm active:scale-95",
    outline: "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 active:scale-95"
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        suppressHydrationWarning
      >
        {children || (
          <span className="flex items-center gap-2" suppressHydrationWarning>
            <Sparkles className="w-4 h-4" /> Get Free Quotation
          </span>
        )}
      </button>

      <InquiryModal
        isOpen={open}
        onClose={() => setOpen(false)}
        defaultProduct={productName}
      />
    </>
  );
};
