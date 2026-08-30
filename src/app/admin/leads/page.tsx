"use client";

import React, { useEffect, useState } from 'react';
import { Users, Phone, Mail, MapPin, Download, CheckCircle2, Clock } from 'lucide-react';
import { Lead } from '@/lib/db';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/admin/leads');
      const data = await res.json();
      if (data.success) setLeads(data.leads || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, status: Lead['status']) => {
    try {
      await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
    } catch (err) {
      alert('Failed to update lead status');
    }
  };

  const exportCSV = () => {
    const headers = ['Date', 'Name', 'Phone', 'Email', 'City', 'Product', 'Shed Dimensions', 'Message', 'Status'];
    const rows = leads.map(l => [
      l.createdAt,
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.email || ''}"`,
      `"${l.city || ''}"`,
      `"${l.product || ''}"`,
      `"${l.shedDimensions || ''}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
      l.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `shreeji_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Quotation Inquiries & Leads</h1>
          <p className="text-xs text-slate-500">Real-time customer inquiries from website forms and modals.</p>
        </div>

        {leads.length > 0 && (
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Export to CSV</span>
          </button>
        )}
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {leads.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-xs">
            No customer inquiries yet. New submissions will automatically appear here.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <th className="p-4 font-bold uppercase">Customer</th>
                  <th className="p-4 font-bold uppercase">Contact Info</th>
                  <th className="p-4 font-bold uppercase">Product & Dimensions</th>
                  <th className="p-4 font-bold uppercase">Status</th>
                  <th className="p-4 font-bold uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4">
                      <strong className="text-slate-900 font-bold block">{lead.name}</strong>
                      <span className="text-slate-400 text-[11px]">{new Date(lead.createdAt).toLocaleDateString()}</span>
                    </td>
                    <td className="p-4 space-y-0.5">
                      <a href={`tel:${lead.phone}`} className="font-bold text-emerald-700 block">{lead.phone}</a>
                      {lead.email && <span className="text-slate-500 block">{lead.email}</span>}
                      {lead.city && <span className="text-slate-600 text-[11px] block">📍 {lead.city}</span>}
                    </td>
                    <td className="p-4">
                      <span className="font-semibold text-slate-800 block">{lead.product || 'Turbo Ventilator'}</span>
                      {lead.shedDimensions && <span className="text-slate-500 text-[11px] block">{lead.shedDimensions}</span>}
                      {lead.message && <p className="text-slate-600 text-[11px] mt-1 italic max-w-xs">{lead.message}</p>}
                    </td>
                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                        className="px-2.5 py-1 rounded-lg border border-slate-300 font-bold text-[10px] bg-slate-50"
                      >
                        <option value="new">🔴 New Lead</option>
                        <option value="contacted">🟡 Contacted</option>
                        <option value="quoted">🔵 Quoted</option>
                        <option value="closed">🟢 Closed / Order Won</option>
                      </select>
                    </td>
                    <td className="p-4">
                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20contacting%20Shreeji%20Sales%20Corporation%20regarding%20${encodeURIComponent(lead.product || 'Ventilators')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700 transition-colors inline-block"
                      >
                        Chat WhatsApp
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
