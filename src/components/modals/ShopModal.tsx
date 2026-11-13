"use client";

import React from "react";
import { X, ShoppingBag, ArrowUpRight, ShieldCheck, Phone, Mail } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/geneworldData";

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  onOpenConsultation?: () => void;
}

export const ShopModal: React.FC<ShopModalProps> = ({
  isOpen,
  onClose,
  productName,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  const hasShopUrl = Boolean(
    COMPANY_CONFIG.SHOP_URL && COMPANY_CONFIG.SHOP_URL.trim().length > 0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg glass-panel bg-white/95 rounded-2xl shadow-2xl border border-emerald-900/10 p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="shop-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Đóng thông báo"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-11 h-11 rounded-xl bg-emerald-100 text-gw-deep flex items-center justify-center shrink-0">
            <ShoppingBag className="w-5 h-5 text-gw-deep" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-gw-teal font-semibold">
              Kênh phân phối chính hãng
            </span>
            <h3 id="shop-modal-title" className="text-lg font-bold text-slate-900">
              {productName ? `Mua ${productName}` : "Hệ thống bán hàng trực tuyến"}
            </h3>
          </div>
        </div>

        {hasShopUrl ? (
          <div>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Bạn đang được chuyển hướng sang website bán hàng chính thức của Geneworld để lựa chọn sản phẩm và thanh toán an toàn.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  window.open(COMPANY_CONFIG.SHOP_URL, "_blank", "noopener,noreferrer");
                  onClose();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all shadow-sm"
              >
                <span>Đến website bán lẻ</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Quay lại
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100/80 mb-5">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-gw-teal shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Cổng thương mại điện tử trực tiếp dành cho người tiêu dùng đang trong giai đoạn cấu hình hoàn thiện. Để đảm bảo mua đúng sản phẩm chính hãng do Geneworld nghiên cứu và sản xuất, quý khách vui lòng liên hệ trực tiếp với bộ phận chăm sóc khách hàng.
                </p>
              </div>
            </div>

            <div className="space-y-2.5 mb-6 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                <Phone className="w-4 h-4 text-gw-deep shrink-0" />
                <div className="flex-1">
                  <span className="text-[11px] text-slate-500 block">
                    Hotline tư vấn sản phẩm
                  </span>
                  <a
                    href={`tel:${COMPANY_CONFIG.hotline.replace(/\s+/g, "")}`}
                    className="font-semibold text-gw-deep hover:underline"
                  >
                    {COMPANY_CONFIG.hotline}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                <Mail className="w-4 h-4 text-gw-deep shrink-0" />
                <div className="flex-1">
                  <span className="text-[11px] text-slate-500 block">
                    Email hỗ trợ khách hàng
                  </span>
                  <a
                    href={`mailto:${COMPANY_CONFIG.emailContact}`}
                    className="font-semibold text-slate-800 hover:underline"
                  >
                    {COMPANY_CONFIG.emailContact}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              {onOpenConsultation && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all text-center shadow-sm"
                >
                  Gửi yêu cầu tư vấn sản phẩm
                </button>
              )}
              <button
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
