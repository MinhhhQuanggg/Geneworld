"use client";

import React from "react";
import { Building2, CheckCircle, ArrowRight, Sparkles, Dna, Shield, ShoppingBag } from "lucide-react";

interface StatsIntroProps {
  onNavigate: (tab: string) => void;
  onOpenB2B: () => void;
  onOpenShop: () => void;
}

export const StatsIntro: React.FC<StatsIntroProps> = ({
  onNavigate,
  onOpenB2B,
  onOpenShop,
}) => {
  return (
    <section className="py-20 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Bạn đến với Geneworld để làm gì?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Chúng tôi thiết kế hai lối tiếp cận chuyên biệt để phục vụ chính xác mục đích tìm hiểu của từng nhóm khách hàng và đối tác.
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: B2B Journey */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#003825] via-gw-deep to-[#004d33] text-white p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-lg">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-300">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold block">
                    DÀNH CHO DOANH NGHIỆP & Y TẾ · JOURNEY A
                  </span>
                  <span className="text-xs text-emerald-100/80">
                    Bệnh viện · OEM/ODM · Phân phối
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-heading text-white">
                Hợp tác cùng Geneworld
              </h3>

              <p className="text-sm sm:text-base text-emerald-50/90 leading-relaxed mb-6 max-w-xl">
                Tìm hiểu năng lực nghiên cứu, công nghệ, sản xuất và các lĩnh vực hợp tác dành cho đối tác doanh nghiệp. Kết nối trực tiếp với đội ngũ R&D và chuyên môn của Geneworld.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/15">
                {[
                  "Chuyển giao kít PRP & Dung dịch y tế",
                  "Nghiên cứu & gia công OEM/ODM độc quyền",
                  "Nhà máy GMP & phòng kiểm nghiệm vô trùng",
                  "Chính sách đại lý & phân phối khu vực",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-emerald-100 font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenB2B}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gw-deep bg-white hover:bg-emerald-50 transition-all shadow-md group focus:outline-none"
              >
                <span>Khám phá cơ hội hợp tác</span>
                <ArrowRight className="w-4 h-4 text-gw-deep group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate("manufacturing")}
                className="text-xs sm:text-sm font-medium text-emerald-200 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                Tìm hiểu năng lực nhà máy →
              </button>
            </div>
          </div>

          {/* Card 2: B2C / Product Journey */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 border border-emerald-900/10 p-8 sm:p-10 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-60 h-60 bg-emerald-200/25 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gw-deep/10 border border-gw-teal/20 flex items-center justify-center text-gw-deep">
                  <Sparkles className="w-5 h-5 text-gw-deep" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gw-teal font-semibold block">
                    DÀNH CHO NGƯỜI TIÊU DÙNG · JOURNEY B
                  </span>
                  <span className="text-xs text-slate-500">
                    Khám phá sản phẩm & Khoa học làn da
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-heading text-slate-900">
                Khám phá sản phẩm
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Tìm hiểu các sản phẩm, thành phần và công nghệ ứng dụng trước khi lựa chọn nơi mua hàng. Trải nghiệm khoa học sinh học chân thực phục hồi vẻ đẹp tự nhiên.
              </p>

              <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-200/80 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Dna className="w-3.5 h-3.5 text-gw-teal shrink-0" />
                  <span>Dòng phục hồi tế bào gốc & Bio-Placenta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-gw-teal shrink-0" />
                  <span>Vi tảo Spirulina chống oxy hóa nông trại Gen-Green</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gw-teal shrink-0" />
                  <span>Dược mỹ phẩm hữu cơ dịu nhẹ cho mọi loại da</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onNavigate("products")}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all shadow-sm focus:outline-none"
              >
                <span>Khám phá danh mục sản phẩm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenShop}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gw-deep bg-white border border-emerald-900/15 hover:bg-emerald-50/70 transition-all focus:outline-none"
              >
                <ShoppingBag className="w-4 h-4 text-gw-teal" />
                <span>Mua sản phẩm ↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
