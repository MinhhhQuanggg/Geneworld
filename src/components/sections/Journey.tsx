"use client";

import React from "react";
import { Dna, ShieldCheck, Compass, ArrowRight } from "lucide-react";
import { MILESTONES } from "@/data/geneworldData";

interface JourneyProps {
  onNavigate: (tab: string) => void;
}

export const Journey: React.FC<JourneyProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-gw-teal font-semibold block mb-2">
            HÀNH TRÌNH DOANH NGHIỆP · SECTION 08
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Nền tảng được xây dựng qua nghiên cứu và phát triển.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Từ năm 2009 đến nay, Geneworld kiên định với con đường công nghệ sinh học thực chứng, kết hợp năng lực phòng thí nghiệm và quy trình sản xuất hiện đại.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 rounded-3xl p-8 border border-emerald-900/10 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-gw-deep text-white flex items-center justify-center mb-6 shadow-sm">
              <Dna className="w-6 h-6 text-emerald-300" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4">
              Khoa học vị nhân sinh — Giải pháp từ chiều sâu tế bào
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Geneworld không định vị mình là một đơn vị thương mại đơn thuần. Nền tảng của chúng tôi bắt nguồn từ đam mê giải mã cơ chế phục hồi sinh học tự nhiên của cơ thể người, chuyển hóa các phát kiến trong phòng lab thành những sản phẩm thiết thực và an toàn.
            </p>

            <div className="space-y-3.5 pt-4 border-t border-slate-200/80 mb-8 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-gw-teal shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">
                    Nghiên cứu có cơ sở:
                  </strong>
                  Mọi công thức đều được xây dựng dựa trên tài liệu sinh học tế bào và kiểm nghiệm thực tế.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-gw-teal shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">
                    Chuỗi cung ứng khép kín:
                  </strong>
                  Từ vùng nguyên liệu hữu cơ Gen-Green, phòng lab phân tích đến nhà máy chiết rót.
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate("about")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gw-deep hover:text-gw-teal transition-colors"
            >
              <span>Tìm hiểu thêm về tổ chức Geneworld</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Milestones timeline */}
          <div className="lg:col-span-7 space-y-6">
            {MILESTONES.map((item) => (
              <div
                key={item.year}
                className="relative flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-gw-teal/40 transition-all shadow-2xs hover:shadow-xs group"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <span className="font-mono text-lg sm:text-xl font-bold text-gw-deep group-hover:text-gw-teal transition-colors tabular-nums">
                    {item.year}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gw-teal mt-2" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
