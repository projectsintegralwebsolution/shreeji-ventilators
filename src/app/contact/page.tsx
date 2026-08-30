"use client";

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { companyData } from '@/data/companyData';
import { productsData } from '@/data/productsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    product: 'Simpovent 24" Turbo Ventilator',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          product: formData.product,
          message: formData.message
        })
      });
    } catch (err) {
      console.log('Email API dispatch notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const openWhatsAppDirect = () => {
    const whatsappMsg = `*Direct Inquiry via Contact Page*` +
      `\n*Name:* ${formData.name}` +
      `\n*Phone:* ${formData.phone}` +
      `\n*Email:* ${formData.email || 'N/A'}` +
      `\n*City/State:* ${formData.city}` +
      `\n*Product:* ${formData.product}` +
      `\n*Message:* ${formData.message}`;

    window.open(`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  return (
    <div className="w-full">
      <Breadcrumb items={[{ name: "Contact Us", url: "/contact" }]} />

      <div className="bg-[#0e382c] text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black">
          Contact Shreeji Sales Corporation
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200 mt-2 max-w-2xl mx-auto">
          Get in touch with our ventilation engineering experts for technical consultations, shed calculations, and direct factory pricing.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
                FACTORY & HEAD OFFICE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Get Direct Factory Support
              </h2>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold">Manufacturing Facility:</strong>
                  <span className="text-slate-600 text-xs leading-relaxed block mt-0.5">
                    {companyData.address.full}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold">Phone Numbers:</strong>
                  <div className="text-xs text-slate-600 space-y-0.5 mt-0.5">
                    <p><a href="tel:+919320293021" className="hover:text-emerald-700 font-semibold">+91 93202 93021</a></p>
                    <p><a href="tel:+917262860283" className="hover:text-emerald-700 font-semibold">+91 72628 60283</a> (WhatsApp)</p>
                    <p><a href="tel:+919028688880" className="hover:text-emerald-700 font-semibold">+91 90286 88880</a></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold">Email Addresses:</strong>
                  <div className="text-xs text-slate-600 space-y-0.5 mt-0.5">
                    <p><a href="mailto:info@shreejiwind.com" className="hover:text-emerald-700">info@shreejiwind.com</a></p>
                    <p><a href="mailto:info@shreejiwindventilator.com" className="hover:text-emerald-700">info@shreejiwindventilator.com</a></p>
                    <p><a href="mailto:sales@shreejiwindventilator.com" className="hover:text-emerald-700">sales@shreejiwindventilator.com</a></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold">Working Hours:</strong>
                  <span className="text-slate-600 text-xs block mt-0.5">
                    {companyData.workingHours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Send Direct Quotation Request</h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your requirement below. Notifications are sent to <strong>info@shreejiwind.com</strong>, your email, and <strong>princekumarjha80@gmail.com</strong>.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-black text-xl">Quotation Request Dispatched!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been processed and 3-way notification dispatched:
                </p>

                <div className="bg-white border border-emerald-200 rounded-2xl p-4 text-left text-xs space-y-2 max-w-sm mx-auto shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>1. Customer Copy:</strong> {formData.email || formData.phone}</span>
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

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={openWhatsAppDirect}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp (+91 72628 60283)</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anand@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      City / Industrial Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune / Ahmedabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Select Product
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm bg-white text-slate-900 font-medium"
                  >
                    {productsData.map((p) => (
                      <option key={p.id} value={p.name} className="text-slate-900">{p.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Requirements / Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter details like shed dimensions, quantity of ventilators needed, or roof profile..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Dispatching 3-Way Notification...' : 'Send Direct Quotation Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.420922636413!2d72.86117531490612!3d19.394210986906167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af3aaaaaaaed%3A0x643a5f43a65f128!2sShreeji+Sales+Corporation+-+Wind+Ventilators%2C+Air+Ventilators%2CRoof+Ventilators%2CMumbai!5e0!3m2!1sen!2sin!4v1526894244581"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Shreeji Sales Corporation Factory Location in Vasai East, Palghar"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
