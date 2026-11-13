"use client";

import React from "react";
import { Building2, ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";

interface CtaBannerProps {
  onNavigate: (tab: string) => void;
  onOpenB2B: () => void;
  onOpenShop: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onNavigate,
  onOpenB2B,
  onOpenShop,
}) => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-gw-teal font-semibold block mb-2">
            CHUYỂN ĐỔI HÀNH TRÌNH · SECTION 10
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Bắt đầu hành trình cùng Geneworld.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Lựa chọn kênh kết nối tương ứng với mục tiêu của bạn để nhận được sự đồng hành nhanh chóng và chuyên nghiệp nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card B2B */}
          <div className="rounded-3xl bg-gradient-to-br from-[#003825] via-gw-deep to-[#004d33] text-white p-8 sm:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 mb-6 border border-white/20">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold block mb-2">
                DÀNH CHO BỆNH VIỆN, ĐỐI TÁC OEM/ODM & PHÂN PHỐI
              </span>
              <h3 className="text-2xl font-bold text-white font-heading mb-3">
                Bạn đang tìm kiếm đối tác công nghệ, nghiên cứu hoặc sản xuất?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-8">
                Đội ngũ chuyên môn của Geneworld sẵn sàng trao đổi các phương án hợp tác thử nghiệm, chuyển giao kít y tế và gia công sản xuất quy chuẩn.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <button
                onClick={onOpenB2B}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gw-deep bg-white hover:bg-emerald-50 transition-all shadow-md group"
              >
                <span>Hợp tác cùng Geneworld</span>
                <ArrowRight className="w-4 h-4 text-gw-deep group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card B2C */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-slate-50 border border-emerald-900/15 p-8 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-gw-deep/10 flex items-center justify-center text-gw-deep mb-6 border border-gw-teal/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-gw-teal font-semibold block mb-2">
                DÀNH CHO NGƯỜI TIÊU DÙNG & CHĂM SÓC CÁ NHÂN
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading mb-3">
                Bạn muốn tìm hiểu và lựa chọn sản phẩm Geneworld?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                Khám phá chi tiết công nghệ, thành phần và chỉ định của từng dòng mỹ phẩm sinh học và chuyển sang kênh mua sắm chính hãng an tâm.
              </p>
            </div>

            <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onNavigate("products")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all shadow-sm"
              >
                <span>Khám phá sản phẩm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenShop}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gw-deep bg-white border border-emerald-900/15 hover:bg-emerald-50 transition-all"
              >
                <span>Mua sản phẩm</span>
                <ArrowUpRight className="w-4 h-4 text-gw-teal" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
