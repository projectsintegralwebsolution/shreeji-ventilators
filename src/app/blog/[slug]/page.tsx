import React from 'react';
import { notFound } from 'next/navigation';
import { db, BlogPost } from '@/lib/db';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { JsonLd } from '@/components/common/JsonLd';
import { constructMetadata, getBreadcrumbSchema } from '@/lib/seo';
import type { Metadata } from 'next';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Sparkles, ShieldCheck, Factory } from 'lucide-react';
import Link from 'next/link';
import { WatermarkedImage } from '@/components/common/WatermarkedImage';
import { QuoteButton } from '@/components/common/QuoteButton';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = db.getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return { title: 'Article Not Found' };
  }

  return constructMetadata({
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.focusKeywords,
    canonicalUrl: `/blog/${blog.slug}`
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const blog = db.getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = db.getBlogs(true);
  const relatedBlogs = allBlogs.filter(b => b.id !== blog.id).slice(0, 3);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: blog.title, url: `/blog/${blog.slug}` }
  ];

  // Schema.org BlogPosting / Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.metaDescription || blog.excerpt,
    "image": `https://shreejiwindventilator.com${blog.featuredImage || '/images/products/exhaust-installation-1.jpg'}`,
    "author": {
      "@type": "Person",
      "name": blog.author,
      "jobTitle": blog.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shreeji Sales Corporation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shreejiwindventilator.com/images/logo.png"
      }
    },
    "datePublished": blog.publishedAt,
    "dateModified": blog.updatedAt || blog.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://shreejiwindventilator.com/blog/${blog.slug}`
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={[articleSchema, getBreadcrumbSchema(breadcrumbs)]} />
      <Breadcrumb items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-8">
        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider text-xs border border-emerald-100">
              {blog.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            {blog.title}
          </h1>

          {/* Author and Date Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0e382c] text-white flex items-center justify-center font-bold text-sm">
                {blog.author ? blog.author[0] : 'S'}
              </div>
              <div>
                <span className="font-bold text-slate-900 block">{blog.author}</span>
                <span className="text-slate-500">{blog.authorRole} • Shreeji Sales Corporation</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-emerald-600" />
                {blog.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-emerald-600" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <WatermarkedImage
            src={blog.featuredImage || '/images/products/exhaust-installation-1.jpg'}
            alt={blog.title}
            aspectRatio="aspect-[16/9]"
            watermarkText="Shreeji Simpovent™ • Engineering Guide"
            watermarkPosition="bottom-right"
            priority={true}
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6 pt-4">
          <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }} />
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="pt-6 border-t border-slate-200 flex items-center flex-wrap gap-2 text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-emerald-600" /> Tags:
            </span>
            {blog.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Direct Quote Banner */}
        <div className="bg-gradient-to-br from-[#0e382c] to-[#155e4b] p-8 rounded-3xl text-white shadow-xl space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
            FACTORY DIRECT VENTILATION SOLUTIONS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold">
            Ready to implement natural wind ventilation in your plant?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
            Get precision Hindalco 8011 Aluminium wind turbo ventilators with matching FRP base plates directly from our Vasai factory.
          </p>
          <div className="pt-2">
            <QuoteButton productName={`Inquiry from Blog: ${blog.title}`} className="px-6 py-3 text-sm shadow-xl" variant="primary" />
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="pt-10 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Related Engineering Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedBlogs.map((rBlog) => (
                <Link
                  key={rBlog.id}
                  href={`/blog/${rBlog.slug}`}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white hover:shadow-md transition-all group block space-y-2"
                >
                  <span className="text-[10px] font-bold uppercase text-emerald-700 block">
                    {rBlog.category}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {rBlog.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 block">
                    {rBlog.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="pt-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800">
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>
        </div>
      </article>
    </div>
  );
}
