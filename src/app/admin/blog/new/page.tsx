"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Sparkles } from 'lucide-react';

export default function CreateNewBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Technical Guides',
    excerpt: '',
    content: '',
    author: 'Rajesh Sharma',
    authorRole: 'Senior Ventilation Engineer',
    readTime: '5 min read',
    featuredImage: '/images/products/exhaust-installation-1.jpg',
    metaTitle: '',
    metaDescription: '',
    tags: 'Turbo Ventilator, Factory Ventilation, CFM Sizing',
    focusKeywords: 'industrial ventilator, turbo ventilator CFM, shed cooling',
    isPublished: true
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      focusKeywords: formData.focusKeywords.split(',').map(k => k.trim()).filter(Boolean)
    };

    try {
      const res = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin/blog');
      } else {
        alert(data.error || 'Failed to save blog post');
      }
    } catch (err) {
      alert('Error saving blog post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <Link href="/admin/blog" className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900">
          <ArrowLeft className="w-4 h-4" /> Back to Blog List
        </Link>
        <span className="text-xs font-bold text-emerald-700">New Article Composer</span>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
        <h1 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Create New Blog Article</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Article Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. How to Choose the Right Turbo Ventilator for High-Heat Foundries"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Category</label>
              <input
                type="text"
                placeholder="e.g. Technical Guides / Sizing"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Estimated Read Time</label>
              <input
                type="text"
                placeholder="e.g. 5 min read"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Short Excerpt / Summary *</label>
            <textarea
              rows={2}
              required
              placeholder="Brief 1-2 sentence overview of the article..."
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Article Body Content (Markdown/HTML supported) *</label>
            <textarea
              rows={12}
              required
              placeholder="Write your article content here..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full font-mono text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* SEO Metadata Inputs */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <h3 className="font-bold text-sm text-emerald-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> SEO Meta Tags & Search Ranking
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">SEO Meta Title</label>
              <input
                type="text"
                placeholder="Custom Google Search Title..."
                value={formData.metaTitle}
                onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">SEO Meta Description</label>
              <textarea
                rows={2}
                placeholder="Google search snippet description (approx 150-160 characters)..."
                value={formData.metaDescription}
                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Focus Keywords (comma separated)</label>
              <input
                type="text"
                placeholder="turbo ventilator, factory cooling, roof exhaust..."
                value={formData.focusKeywords}
                onChange={(e) => setFormData({ ...formData, focusKeywords: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Publishing Article...' : 'Publish Article to Website'}</span>
        </button>
      </form>
    </div>
  );
}
