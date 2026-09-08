"use client";

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Building2, Sparkles, ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/companyData';
import { WatermarkedImage } from '@/components/common/WatermarkedImage';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    product: 'Turbo Ventilator',
    quantity: '10-50 Units',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMsg('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          product: 'Turbo Ventilator',
          quantity: '10-50 Units',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full" suppressHydrationWarning>
      <Breadcrumb items={[{ name: "Contact Us", url: "/contact" }]} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#061d16] via-[#0e382c] to-[#061d16] text-white py-16 px-4 text-center" suppressHydrationWarning>
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" /> Direct Factory & Sales Office
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Contact Shreeji Sales Corporation
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl mx-auto leading-relaxed">
            Get instant manufacturer-direct quotation, CFM sizing consultations, and FRP roof base plate matching for your facility.
          </p>
        </div>
      </section>

      {/* Main Contact Container */}
      <section className="py-16 bg-slate-50" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-4" suppressHydrationWarning>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Factory Photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
                    FACTORY & CORPORATE OFFICE
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Shreeji Sales Corporation
                  </h2>
                  <span className="text-xs font-semibold text-emerald-600 block mt-0.5">
                    Brand: Simpovent™ (Since 2005)
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Manufacturing Works & Office:</strong>
                      <span>Gala No. 10/11, Takdir Ind. Estate, Fatherwadi, Gokhivare, Vasai (East), Palghar, Maharashtra - 401208, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Direct Sales & Support:</strong>
                      <div className="space-y-0.5">
                        <a href="tel:+919320293021" className="hover:text-emerald-700 font-semibold block">+91 93202 93021</a>
                        <a href="tel:+917262860283" className="hover:text-emerald-700 font-semibold block">+91 72628 60283</a>
                        <a href="tel:+919028688880" className="hover:text-emerald-700 font-semibold block">+91 90286 88880</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Email Inquiries:</strong>
                      <a href="mailto:info@shreejiwindventilator.com" className="hover:text-emerald-700 font-semibold block">info@shreejiwindventilator.com</a>
                      <a href="mailto:info@shreejiwind.com" className="hover:text-emerald-700 font-semibold block">info@shreejiwind.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Working Hours:</strong>
                      <span>Monday to Saturday: 8:30 AM - 7:30 PM (Sunday Closed)</span>
                    </div>
                  </div>
                </div>

                {/* Real Reception Image */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <WatermarkedImage
                    src="/images/office/reception-lobby.jpg"
                    alt="Shreeji Sales Corporation Reception at Vasai"
                    aspectRatio="aspect-[16/10]"
                    watermarkText="Shreeji Reception • Vasai"
                    watermarkPosition="bottom-right"
                  />
                </div>
              </div>
            </div>

            {/* Right: Instant Quotation & Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
                  INSTANT QUOTATION REQUEST
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Request Factory Direct Price Quote
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out the form below for immediate technical sizing, pricing for 21"/24" turbo ventilators, and 3-way email confirmation.
                </p>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Thank you for your inquiry!</strong>
                    <span>Your quotation request has been received. Our sales engineer will get in touch with you shortly. A confirmation email has also been sent to your email address.</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Submission failed</strong>
                    <span>{errorMsg}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone / Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">City / Delivery State *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune, Maharashtra"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Product Requirement</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 font-semibold"
                    >
                      <option value="Turbo Ventilator">24" Turbo Ventilator (Simpovent)</option>
                      <option value="21 Inch Turbo Ventilator">21" Turbo Ventilator</option>
                      <option value="Motorized Turbo Ventilator">Motorized Hybrid Roof Ventilator</option>
                      <option value="Heavy Duty Industrial Exhaust Fan">Heavy Duty Industrial Exhaust Fan</option>
                      <option value="Matching FRP Base Plate">FRP / Polycarbonate Base Plates Only</option>
                      <option value="Complete Factory Ventilation Sizing">Complete Factory Shed Sizing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Estimated Quantity</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 font-semibold"
                    >
                      <option value="1-10 Units">1 - 10 Units (Small Shed)</option>
                      <option value="10-50 Units">10 - 50 Units (Standard Plant)</option>
                      <option value="50-100 Units">50 - 100 Units (Large Factory)</option>
                      <option value="100+ Units">100+ Units (Mega Project / PEB)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Shed Dimensions / Technical Notes (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Provide shed length, width, height or roof sheet profile (Tata Bluescope, JSW, Asbestos, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 font-semibold"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-sm shadow-xl shadow-emerald-900/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Sending Inquiry...' : 'Submit Quotation Request'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
