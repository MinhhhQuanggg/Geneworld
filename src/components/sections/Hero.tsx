"use client";

import React from "react";
import { ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";
import { HeroBioCanvas } from "./HeroBioCanvas";

interface HeroProps {
  onNavigate: (tab: string) => void;
  onOpenB2B: () => void;
  onOpenShop: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenB2B, onOpenShop }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F5F2] via-[#F5F8F6] to-white border-b border-emerald-950/5">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5 font-heading">
              Công nghệ sinh học{" "}
              <span className="block text-gw-deep">
                — từ nghiên cứu đến ứng dụng.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Geneworld kết nối nền tảng khoa học, nghiên cứu và năng lực sản xuất để phát triển các sản phẩm và giải pháp ứng dụng trong những lĩnh vực hoạt động của doanh nghiệp.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => onNavigate("about")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gw-deep/30 shrink-0"
              >
                <span>Khám phá Geneworld</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate("products")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gw-deep bg-white/90 hover:bg-white border border-emerald-900/15 glass-pill transition-all shadow-2xs hover:shadow-sm focus:outline-none shrink-0"
              >
                <Sparkles className="w-4 h-4 text-gw-teal" />
                <span>Khám phá sản phẩm</span>
              </button>

              <button
                onClick={onOpenB2B}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-gw-teal hover:text-gw-deep hover:underline transition-colors shrink-0"
              >
                <span>Hợp tác cùng Geneworld</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick stats bottom row */}
            <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-gw-deep font-heading tabular-nums">
                  2009
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Năm thành lập
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-gw-deep font-heading tabular-nums">
                  06
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Công nghệ nền tảng
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-gw-deep font-heading">
                  R&D + GMP
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Chuỗi sinh học khép kín
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Canvas Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl glass-panel p-2 sm:p-4 border border-white/80 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 shadow-inner overflow-hidden">
                <HeroBioCanvas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
