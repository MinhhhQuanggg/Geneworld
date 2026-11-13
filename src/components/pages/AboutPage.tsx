"use client";

import React from "react";
import { Microscope, Factory, Leaf } from "lucide-react";
import { MILESTONES } from "@/data/geneworldData";

interface AboutPageProps {
  onOpenB2B: () => void;
  onOpenShop: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenB2B,
  onOpenShop,
}) => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#F0F5F2] to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-heading mb-6">
              Nền tảng công nghệ sinh học — từ nghiên cứu đến ứng dụng.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Geneworld là doanh nghiệp khoa học công nghệ được thành lập vào năm 2009, định hướng phát triển chuỗi giá trị khép kín từ nghiên cứu cơ bản trong phòng thí nghiệm, sản xuất chuẩn mực đến các giải pháp chăm sóc phục hồi tế bào chuyên sâu.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-gw-deep flex items-center justify-center mb-6">
              <Microscope className="w-6 h-6 text-gw-deep" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
              Nghiên cứu khoa học thực chứng
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tập trung khai thác hoạt tính sinh học từ tế bào gốc, vi tảo Spirulina, hệ vi sinh vật microbiome và các dẫn xuất thảo dược tự nhiên.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-gw-deep flex items-center justify-center mb-6">
              <Factory className="w-6 h-6 text-gw-deep" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
              Chế tạo & Đóng gói vô trùng
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hệ thống phòng sạch vô trùng kiểm soát áp suất và dây chuyền tự động hóa đáp ứng tiêu chuẩn nghiêm ngặt cho dược mỹ phẩm và thiết bị y tế.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-gw-deep flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6 text-gw-deep" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
              Nông trại sinh thái Gen-Green
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tự chủ vùng nguyên liệu hữu cơ khép kín, kiểm soát từ nguồn nước ngầm, ánh sáng quang phổ đến công nghệ chiết xuất nhiệt độ thấp.
            </p>
          </div>
        </div>

        {/* Milestones timeline */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-gw-teal font-semibold block mb-2">
              TIẾN TRÌNH PHÁT TRIỂN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Các cột mốc định hình Geneworld
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MILESTONES.map((item) => (
              <div
                key={item.year}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs"
              >
                <span className="text-2xl font-bold text-gw-deep font-heading tabular-nums block mb-2">
                  {item.year}
                </span>
                <h4 className="text-base font-bold text-slate-900 font-heading mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#003825] via-gw-deep to-[#004d33] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold block mb-2">
              CAM KẾT CHUYÊN MÔN
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
              Đồng hành cùng sự phát triển của y học tái tạo và thẩm mỹ chuyên khoa
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Mọi sản phẩm của Geneworld đều được nghiên cứu với tinh thần tôn trọng sinh học tự nhiên của làn da và đáp ứng các tiêu chuẩn pháp lý hiện hành.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenB2B}
              className="py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold text-gw-deep bg-white hover:bg-emerald-50 transition-all shadow-sm text-center"
            >
              Hợp tác B2B
            </button>
            <button
              onClick={onOpenShop}
              className="py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center"
            >
              Xem sản phẩm ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
