"use client";

import React, { useState, useEffect } from "react";
import { Dna, ArrowUpRight, Menu as MenuIcon, X, ChevronRight } from "lucide-react";

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenB2B: () => void;
  onOpenShop: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenB2B,
  onOpenShop,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Về Geneworld", tab: "about" },
    { label: "Công nghệ & R&D", tab: "technology" },
    { label: "Năng lực nhà máy", tab: "manufacturing" },
    { label: "Sản phẩm", tab: "products" },
    { label: "Kiến thức", tab: "knowledge" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel shadow-sm py-3 border-b border-gw-teal/15 bg-white/85"
          : "bg-white/60 backdrop-blur-md py-4 border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 text-left group shrink-0 focus:outline-none"
            aria-label="Về trang chủ GENEWORLD"
          >
            <div className="w-8 h-8 rounded-lg bg-gw-deep text-white flex items-center justify-center shadow-sm group-hover:bg-gw-teal transition-colors">
              <Dna className="w-4 h-4 text-emerald-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-gw-deep font-heading">
                GENEWORLD
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono hidden sm:inline-block">
                Biotech · R&D · Manufacturing
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-gw-charcoal">
            {navLinks.map((link) => {
              const active = currentTab === link.tab;
              return (
                <button
                  key={link.tab}
                  onClick={() => {
                    onNavigate(link.tab);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-gw-deep ${
                    active ? "text-gw-deep font-semibold" : "text-slate-600"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gw-teal rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons Desktop */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenShop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gw-deep bg-emerald-50 hover:bg-emerald-100/80 rounded-lg border border-emerald-200/60 transition-colors whitespace-nowrap"
            >
              <span>Mua sản phẩm</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gw-teal" />
            </button>
            <button
              onClick={onOpenB2B}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gw-deep hover:bg-gw-teal rounded-lg shadow-sm transition-all whitespace-nowrap"
            >
              <span>Hợp tác B2B</span>
            </button>
          </div>

          {/* Mobile hamburger & quick button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenB2B}
              className="sm:hidden px-2.5 py-1 text-xs font-medium text-white bg-gw-deep rounded-md"
            >
              Hợp tác
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-gw-deep rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
            <button
              onClick={() => {
                onNavigate("home");
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left ${
                currentTab === "home"
                  ? "bg-emerald-50 text-gw-deep font-semibold"
                  : "text-slate-700"
              }`}
            >
              <span>Trang chủ</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => {
                  onNavigate(link.tab);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left ${
                  currentTab === link.tab
                    ? "bg-emerald-50 text-gw-deep font-semibold"
                    : "text-slate-700"
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShop();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-gw-deep bg-emerald-50 border border-emerald-200"
            >
              <span>Mua sản phẩm</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenB2B();
              }}
              className="flex items-center justify-center py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-gw-deep hover:bg-gw-teal shadow-sm"
            >
              Hợp tác B2B
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
