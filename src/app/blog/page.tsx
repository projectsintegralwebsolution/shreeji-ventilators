import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { db } from '@/lib/db';
import { constructMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { BookOpen, Calendar, Clock, User, ArrowRight, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { WatermarkedImage } from '@/components/common/WatermarkedImage';
import { QuoteButton } from '@/components/common/QuoteButton';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = constructMetadata({
  title: "Industrial Ventilation Blog & Technical Guides | Shreeji Simpovent",
  description: "Read expert engineering articles, CFM calculation guides, factory shed temperature reduction case studies, and roof ventilator sizing insights.",
  canonicalUrl: "/blog",
  keywords: [
    "Industrial Ventilation Blog",
    "Turbo Ventilator Guides",
    "CFM Sizing Articles",
    "Factory Roof Heat Reduction",
    "PEB Shed Ventilation"
  ]
});

export default function BlogDirectoryPage() {
  const blogs = db.getBlogs(true);
  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <div className="w-full">
      <Breadcrumb items={[{ name: "Blog & Technical Guides", url: "/blog" }]} />

      {/* Hero Banner */}
      <div className="bg-[#0e382c] text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Engineering Knowledge Hub
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Industrial Ventilation Insights & Guides
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200/90 max-w-xl mx-auto leading-relaxed">
            Practical HVAC sizing, CFM formulas, monsoon leak protection, and factory heat management articles written by our manufacturing engineers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Blog Card */}
        {featuredBlog && (
          <div className="mb-14 bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-center hover:border-emerald-500 transition-all">
            <div className="lg:col-span-6 h-full min-h-[260px] relative">
              <WatermarkedImage
                src={featuredBlog.featuredImage || '/images/products/exhaust-installation-1.jpg'}
                alt={featuredBlog.title}
                aspectRatio="aspect-[16/10]"
                watermarkText="Shreeji Simpovent™ Blog"
                watermarkPosition="bottom-right"
              />
            </div>
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider text-[10px]">
                  {featuredBlog.category}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  {featuredBlog.readTime}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  {featuredBlog.publishedAt}
                </span>
              </div>

              <Link href={`/blog/${featuredBlog.slug}`} className="block group">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                  {featuredBlog.title}
                </h2>
              </Link>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                {featuredBlog.excerpt}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    {featuredBlog.author ? featuredBlog.author[0] : 'S'}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{featuredBlog.author}</span>
                    <span className="text-[10px] text-slate-500">{featuredBlog.authorRole}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0e382c] hover:bg-[#155e4b] text-white text-xs font-bold transition-colors shadow-md"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative">
                  <WatermarkedImage
                    src={blog.featuredImage || '/images/products/powerless-ventilator.jpg'}
                    alt={blog.title}
                    aspectRatio="aspect-[16/10]"
                    watermarkText="Shreeji Simpovent™"
                    watermarkPosition="bottom-right"
                  />
                  <span className="absolute top-3 left-3 z-20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-800 border border-slate-200 shadow-sm">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      {blog.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      {blog.publishedAt}
                    </span>
                  </div>

                  <Link href={`/blog/${blog.slug}`} className="block group">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">By {blog.author}</span>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Lead Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0e382c] to-[#155e4b] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              CUSTOM SIZING & CONSULTATION
            </span>
            <h3 className="text-xl md:text-2xl font-black">
              Need Help Calculating Ventilator Counts for Your Factory?
            </h3>
            <p className="text-xs md:text-sm text-emerald-100/90 max-w-xl">
              Our sales engineering team provides free shed volume and CFM calculations tailored to your exact industrial processes.
            </p>
          </div>

          <div className="shrink-0">
            <QuoteButton productName="Engineering Sizing Consultation" className="px-6 py-3 text-sm shadow-xl" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
