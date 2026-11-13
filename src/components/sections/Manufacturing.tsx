"use client";

import React from "react";
import { Factory, ArrowRight, Microscope, Leaf } from "lucide-react";

interface ManufacturingProps {
  onOpenB2B: () => void;
}

export const Manufacturing: React.FC<ManufacturingProps> = ({ onOpenB2B }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Nghiên cứu và sản xuất trong cùng một hệ sinh thái.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Tìm hiểu môi trường nghiên cứu, phòng thí nghiệm, nhà máy và các hoạt động phát triển sản phẩm được giới thiệu trong hồ sơ Geneworld.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Large Card */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#003825] via-gw-deep to-[#002e1f] text-white p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-300">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider font-semibold block">
                    CƠ SỞ VẬN HÀNH SẢN XUẤT
                  </span>
                  <span className="text-xs text-emerald-100/80">
                    Khu Công Nghệ Cao TP.HCM
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-4">
                Dây chuyền sản xuất khép kín & Kiểm soát vô trùng
              </h3>

              <p className="text-sm text-emerald-50/90 leading-relaxed mb-6">
                Quy trình sản xuất của Geneworld được vận hành trong môi trường phòng sạch kiểm soát áp suất, trang bị hệ thống lọc khí HEPA và công nghệ chiết rót định lượng khép kín, đáp ứng tiêu chuẩn nghiêm ngặt cho dược mỹ phẩm và thiết bị sinh học y tế.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-xs">
                <div>
                  <span className="font-mono text-emerald-300 text-[11px] block mb-0.5">
                    MÔI TRƯỜNG PHÒNG SẠCH:
                  </span>
                  <span className="text-emerald-100">
                    Áp suất dương, màng lọc bụi mịn vi sinh
                  </span>
                </div>
                <div>
                  <span className="font-mono text-emerald-300 text-[11px] block mb-0.5">
                    QUY TRÌNH QA / QC:
                  </span>
                  <span className="text-emerald-100">
                    Kiểm định mẫu lưu & chỉ tiêu lý hóa
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-emerald-200">
                Tiêu chuẩn vận hành ISO / GMP
              </span>
              <button
                onClick={onOpenB2B}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gw-deep bg-white hover:bg-emerald-50 transition-all shadow-sm"
              >
                <span>Tìm hiểu năng lực Geneworld</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 2 Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Lab Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-gw-deep flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-gw-deep" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gw-teal uppercase tracking-wider font-semibold block">
                    NGHIÊN CỨU & KIỂM NGHIỆM
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    Phòng thí nghiệm sinh học
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Trang bị hệ thống đo quang phổ, tủ cấy vi sinh an toàn sinh học và thiết bị sắc ký phân tích hoạt chất giúp đội ngũ nghiên cứu liên tục kiểm chứng độ ổn định và an toàn của từng lô sản phẩm.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-3 border-t border-slate-100">
                <span>Chỉ tiêu vi sinh</span>
                <span>·</span>
                <span>Thử nghiệm kích ứng</span>
                <span>·</span>
                <span>Độ tinh sạch</span>
              </div>
            </div>

            {/* Farm Card */}
            <div className="bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/60 rounded-3xl p-6 sm:p-7 border border-emerald-900/10 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gw-deep text-white flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gw-teal uppercase tracking-wider font-semibold block">
                    VÙNG NGUYÊN LIỆU SINH THÁI
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    Nông trại hữu cơ Gen-Green
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Vùng nguyên liệu chủ động với các bể photobioreactor nuôi trồng vi tảo Spirulina tươi và vườn thảo dược cúc La Mã, tràm trà... bảo đảm nguồn cung ứng tinh khiết, không tồn dư hóa chất bảo vệ thực vật.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-gw-teal font-medium pt-3 border-t border-slate-200/60">
                <span>Canh tác vi sinh khép kín</span>
                <span>·</span>
                <span>Thu hoạch & chế biến lạnh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
