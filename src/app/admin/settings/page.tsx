"use client";

import React, { useEffect, useState } from 'react';
import { Save, CheckCircle2, ShieldCheck, Phone, Mail, MapPin, Server, Key } from 'lucide-react';
import { SiteSettings } from '@/lib/db';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/admin/settings', { cache: 'no-store' });
      const data = await res.json();
      if (data.success) setSettings(data.settings);
    }
    load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;
    setSaving(true);
    setSaved(false);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      const data = await res.json();
      if (data.success) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) {
      alert('Error updating settings');
    } finally {
      setSaving(false);
    }
  };

  if (!settings) return <div className="p-8 text-xs text-slate-500">Loading settings...</div>;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Site Settings & Mailer Config</h1>
          <p className="text-xs text-slate-500">Manage phone numbers, 3-way notification emails, and Nodemailer SMTP server.</p>
        </div>
      </div>

      {saved && (
        <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Settings and SMTP configurations saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">Company & Contact Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Company Name</label>
            <input
              type="text"
              value={settings.companyName}
              onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Brand Name</label>
            <input
              type="text"
              value={settings.brandName}
              onChange={(e) => setSettings({ ...settings, brandName: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Primary Phone</label>
            <input
              type="text"
              value={settings.primaryPhone}
              onChange={(e) => setSettings({ ...settings, primaryPhone: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Secondary Phone</label>
            <input
              type="text"
              value={settings.secondaryPhone}
              onChange={(e) => setSettings({ ...settings, secondaryPhone: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">WhatsApp Number (No +)</label>
            <input
              type="text"
              value={settings.whatsappNumber}
              onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">1. Client Alert Email (Vasai Factory)</label>
            <input
              type="email"
              value={settings.clientAlertEmail || 'info@shreejiwind.com'}
              onChange={(e) => setSettings({ ...settings, clientAlertEmail: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">3. Admin Alert Email (Promoter)</label>
            <input
              type="email"
              value={settings.adminAlertEmail || 'iwspromotion@gmail.com'}
              onChange={(e) => setSettings({ ...settings, adminAlertEmail: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Factory Address</label>
          <textarea
            rows={2}
            value={settings.factoryAddress}
            onChange={(e) => setSettings({ ...settings, factoryAddress: e.target.value })}
            className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
          />
        </div>

        {/* SMTP Configuration Section */}
        <div className="pt-6 border-t border-slate-200 space-y-4">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-emerald-600" />
            <h2 className="font-bold text-sm text-slate-900">Nodemailer SMTP Configuration (For 3-Way Emails)</h2>
          </div>
          <p className="text-xs text-slate-500">
            Configure your SMTP server to send live emails to <code>{settings.clientAlertEmail || 'info@shreejiwind.com'}</code>, the customer, and <code>{settings.adminAlertEmail || 'iwspromotion@gmail.com'}</code>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">SMTP Host</label>
              <input
                type="text"
                placeholder="e.g. smtp.gmail.com or mail.shreejiwind.com"
                value={settings.smtpHost || ''}
                onChange={(e) => setSettings({ ...settings, smtpHost: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">SMTP Port</label>
              <input
                type="number"
                placeholder="587 or 465"
                value={settings.smtpPort || 587}
                onChange={(e) => setSettings({ ...settings, smtpPort: Number(e.target.value) })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">SMTP Username / Email</label>
              <input
                type="text"
                placeholder="e.g. info@shreejiwind.com or your Gmail"
                value={settings.smtpUser || ''}
                onChange={(e) => setSettings({ ...settings, smtpUser: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">SMTP Password / App Password</label>
              <input
                type="password"
                placeholder="Enter password or 16-character Gmail App Password"
                value={settings.smtpPass || ''}
                onChange={(e) => setSettings({ ...settings, smtpPass: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Saving Configurations...' : 'Save Settings & SMTP Config'}</span>
        </button>
      </form>
    </div>
  );
}
