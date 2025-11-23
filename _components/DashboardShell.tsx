"use client";

import React from "react";
import Link from "next/link";

export default function DashboardShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-red-600 flex items-center justify-center font-black text-slate-950">
              G
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                Giftbu
              </span>
              <span className="text-[10px] text-slate-400">
                Lansman & gerçek deneyim platformu
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-xs text-slate-300">
            <Link href="/buyer/dashboard" className="hover:text-white">
              Buyer
            </Link>
            <Link href="/influencer/dashboard" className="hover:text-white">
              Influencer
            </Link>
            <Link href="/seller/dashboard" className="hover:text-white">
              Seller
            </Link>
          </nav>
          <button className="text-xs px-3 py-1.5 rounded-full border border-slate-700 text-slate-300 hover:border-red-500 hover:text-red-300 transition">
            Çıkış yap
          </button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </main>
    </div>
  );
}
