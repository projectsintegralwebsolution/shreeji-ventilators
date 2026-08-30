"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, BookOpen, Users, Settings, LogOut, Wind, Globe, Shield } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('shreeji_admin_token');
      if (pathname !== '/admin' && !token) {
        router.push('/admin');
      } else {
        setAuthorized(true);
      }
    }
  }, [pathname, router]);

  // If on login page, render children directly without admin sidebar
  if (pathname === '/admin') {
    return <>{children}</>;
  }

  if (!mounted || !authorized) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white text-sm" suppressHydrationWarning>
        Loading admin console...
      </div>
    );
  }

  const navItems = [
    { name: 'Dashboard Overview', href: '/admin/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Manage Blog Articles', href: '/admin/blog', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Customer Leads & Quotes', href: '/admin/leads', icon: <Users className="w-4 h-4" /> },
    { name: 'Site Settings & Contacts', href: '/admin/settings', icon: <Settings className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row text-slate-800" suppressHydrationWarning>
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#09261e] text-white flex flex-col justify-between shrink-0 shadow-xl" suppressHydrationWarning>
        <div>
          {/* Brand */}
          <div className="p-6 border-b border-emerald-950 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
              <Wind className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <span className="font-bold text-sm block">Shreeji Admin</span>
              <span className="text-[10px] text-emerald-400">Simpovent™ Backend</span>
            </div>
          </div>

          {/* Nav List */}
          <nav className="p-4 space-y-1.5">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-emerald-950 space-y-2 text-xs">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>View Live Website</span>
          </a>
          <button
            onClick={() => {
              localStorage.removeItem('shreeji_admin_token');
              router.push('/admin');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-h-screen">
        {children}
      </main>
    </div>
  );
}
