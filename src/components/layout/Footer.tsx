"use client";

import React from "react";
import { Dna, MapPin, Phone, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/geneworldData";

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenB2B: () => void;
  onOpenShop: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenB2B,
  onOpenShop,
}) => {
  return (
    <footer className="bg-[#0B1511] text-slate-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gw-deep text-white flex items-center justify-center border border-emerald-400/30">
                <Dna className="w-4 h-4 text-emerald-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                GENEWORLD
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Doanh nghiệp công nghệ sinh học thành lập từ năm 2009. Kết nối nền tảng khoa học tế bào, nghiên cứu chuyên sâu và năng lực sản xuất khép kín.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gw-teal shrink-0" />
                <span>{COMPANY_CONFIG.facilityLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gw-teal shrink-0" />
                <span>Hotline: {COMPANY_CONFIG.hotline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gw-teal shrink-0" />
                <span>Email: {COMPANY_CONFIG.emailContact}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Về Doanh Nghiệp */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono mb-4">
              Về Doanh Nghiệp
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors"
                >
                  Giới thiệu Geneworld
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("ecosystem")}
                  className="hover:text-white transition-colors"
                >
                  Hệ sinh thái liên kết
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("manufacturing")}
                  className="hover:text-white transition-colors"
                >
                  Năng lực nhà máy & Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("technology")}
                  className="hover:text-white transition-colors"
                >
                  06 Công nghệ nền tảng
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Sản Phẩm & Khoa Học */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono mb-4">
              Sản Phẩm & Khoa Học
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("products")}
                  className="hover:text-white transition-colors"
                >
                  Danh mục sản phẩm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("knowledge")}
                  className="hover:text-white transition-colors"
                >
                  Kiến thức & Nghiên cứu
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenShop}
                  className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors font-medium text-emerald-400"
                >
                  <span>Website mua hàng chính thức</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Hợp Tác Doanh Nghiệp */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono mb-4">
              Hợp Tác Doanh Nghiệp
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenB2B}
                  className="hover:text-white transition-colors text-left"
                >
                  Dành cho Bệnh viện & Y tế
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenB2B}
                  className="hover:text-white transition-colors text-left"
                >
                  Hợp tác OEM / ODM
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenB2B}
                  className="hover:text-white transition-colors text-left"
                >
                  Đăng ký mạng lưới phân phối
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} GENEWORLD. Tất cả các quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gw-teal" />
              <span>Chuẩn hóa nghiên cứu khoa học thực nghiệm</span>
            </span>
            <span>·</span>
            <span>Chính sách dữ liệu nội bộ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
