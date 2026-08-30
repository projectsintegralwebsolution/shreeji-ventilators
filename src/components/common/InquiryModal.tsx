"use client";

import React, { useState } from 'react';
import { X, Send, Phone, Mail, Building, CheckCircle2, Sparkles, Wind, MessageCircle } from 'lucide-react';
import { productsData } from '@/data/productsData';
import { companyData } from '@/data/companyData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    product: defaultProduct || 'Simpovent 24" Turbo Ventilator',
    shedLength: '',
    shedWidth: '',
    shedHeight: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notificationInfo, setNotificationInfo] = useState<any>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const shedDimensions = (formData.shedLength && formData.shedWidth)
      ? `${formData.shedLength} ft L x ${formData.shedWidth} ft W x ${formData.shedHeight || '20'} ft H`
      : '';

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          product: formData.product,
          shedDimensions: shedDimensions,
          message: formData.message
        })
      });
      const data = await res.json();
      if (data.success) {
        setNotificationInfo(data.recipients);
      }
    } catch (err) {
      console.log('Inquiry dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const openWhatsAppDirect = () => {
    const shedDimensions = (formData.shedLength && formData.shedWidth)
      ? `${formData.shedLength} ft L x ${formData.shedWidth} ft W x ${formData.shedHeight || '20'} ft H`
      : '';

    const whatsappMsg = `*New Quotation Request - Shreeji Ventilator*` +
      `\n*Customer Name:* ${formData.name}` +
      `\n*Mobile Number:* ${formData.phone}` +
      `\n*Email:* ${formData.email || 'N/A'}` +
      `\n*City/Location:* ${formData.city}` +
      `\n*Product Model:* ${formData.product}` +
      (shedDimensions ? `\n*Shed Dimensions:* ${shedDimensions}` : '') +
      (formData.message ? `\n*Requirements:* ${formData.message}` : '');

    window.open(`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-scaleUp max-h-[90vh] overflow-y-auto text-slate-900">
        <div className="bg-[#0e382c] text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Factory Direct Pricing
            </span>
            <h3 className="text-xl font-bold mt-0.5">Request Official Quotation</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close inquiry modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-slate-900">Inquiry Dispatched Successfully!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your quotation request has been processed and 3-way notification dispatched:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>1. Customer Email:</strong> {formData.email || formData.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>2. Client Email:</strong> info@shreejiwind.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>3. Admin/Developer:</strong> princekumarjha80@gmail.com</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={openWhatsAppDirect}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Senior Engineer on WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ramesh@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pune / Ahmedabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Select Ventilator Model
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 font-medium"
                >
                  {productsData.map((p) => (
                    <option key={p.id} value={p.name} className="text-slate-900">{p.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Shed Dimensions (Optional for CFM Calculation)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Length (ft)"
                    value={formData.shedLength}
                    onChange={(e) => setFormData({ ...formData, shedLength: e.target.value })}
                    className="px-2.5 py-2 rounded-lg border border-slate-300 text-xs bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Width (ft)"
                    value={formData.shedWidth}
                    onChange={(e) => setFormData({ ...formData, shedWidth: e.target.value })}
                    className="px-2.5 py-2 rounded-lg border border-slate-300 text-xs bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Height (ft)"
                    value={formData.shedHeight}
                    onChange={(e) => setFormData({ ...formData, shedHeight: e.target.value })}
                    className="px-2.5 py-2 rounded-lg border border-slate-300 text-xs bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Requirements / Remarks
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need 12 units of 24 inch ventilator with matching Tata Bluescope base plates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Dispatching 3-Way Notification...' : 'Submit & Get Official Quotation'}</span>
              </button>

              <p className="text-[10px] text-center text-slate-500">
                🔒 3-Way Nodemailer Notification: info@shreejiwind.com • your email • princekumarjha80@gmail.com
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
