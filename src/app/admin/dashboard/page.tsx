"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Users, Settings, Plus, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { BlogPost, Lead } from '@/lib/db';

export default function AdminDashboardOverview() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [bRes, lRes] = await Promise.all([
          fetch('/api/admin/blogs'),
          fetch('/api/admin/leads')
        ]);
        const bData = await bRes.json();
        const lData = await lRes.json();
        if (bData.success) setBlogs(bData.blogs || []);
        if (lData.success) setLeads(lData.leads || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Admin Dashboard</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time management of blog posts, quotation leads, and website configurations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Write New Article</span>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Total Leads Received</span>
            <Users className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-3xl font-black text-slate-900 block">{leads.length}</span>
          <span className="text-[11px] text-emerald-700 font-semibold">Incoming customer inquiries</span>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Published Blog Guides</span>
            <BookOpen className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-3xl font-black text-slate-900 block">{blogs.filter(b => b.isPublished).length}</span>
          <span className="text-[11px] text-emerald-700 font-semibold">Indexed on Google sitemap</span>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Target Product Keywords</span>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-3xl font-black text-slate-900 block">21</span>
          <span className="text-[11px] text-emerald-700 font-semibold">100% active SSG landing pages</span>
        </div>
      </div>

      {/* Recent Leads & Recent Blogs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Inquiries */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="font-bold text-sm text-slate-900">Recent Customer Quotation Requests</h2>
            <Link href="/admin/leads" className="text-xs font-bold text-emerald-700 hover:underline">
              View All &rarr;
            </Link>
          </div>

          {leads.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center">No leads recorded yet. Submissions through website forms will appear here.</p>
          ) : (
            <div className="space-y-3">
              {leads.slice(0, 5).map((lead) => (
                <div key={lead.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{lead.name}</span>
                    <span className="text-slate-500 text-[11px]">{lead.phone} • {lead.city || 'India'}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {lead.product || 'Turbo Ventilator'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="font-bold text-sm text-slate-900">Articles & Technical Guides</h2>
            <Link href="/admin/blog" className="text-xs font-bold text-emerald-700 hover:underline">
              Manage All &rarr;
            </Link>
          </div>

          <div className="space-y-3">
            {blogs.slice(0, 5).map((blog) => (
              <div key={blog.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div className="max-w-xs">
                  <span className="font-bold text-slate-900 line-clamp-1 block">{blog.title}</span>
                  <span className="text-slate-500 text-[10px]">{blog.category} • {blog.publishedAt}</span>
                </div>
                <Link
                  href={`/admin/blog/edit/${blog.id}`}
                  className="px-3 py-1 rounded-lg bg-white border border-slate-200 font-bold text-[11px] text-slate-700 hover:bg-slate-100"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
