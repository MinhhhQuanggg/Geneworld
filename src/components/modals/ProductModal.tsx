"use client";

import React from "react";
import { X, FlaskConical, Layers, Sparkles, Check, ArrowUpRight } from "lucide-react";
import { ProductItem } from "@/data/geneworldData";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenShop: (productName?: string) => void;
  onOpenB2B: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenShop,
  onOpenB2B,
}) => {
  if (!product) return null;

  const isB2BOnly = product.target === "b2b";
  const canBuyDirect = product.target === "b2c" || product.target === "both";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-detail-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Spec */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <span>{product.category}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-gw-teal">{product.volumeOrSpec}</span>
          {product.badge && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-gw-deep font-medium">{product.badge}</span>
            </>
          )}
        </div>

        <h2
          id="product-detail-title"
          className="text-xl sm:text-2xl font-bold text-slate-900 mb-1"
        >
          {product.name}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-gw-teal mb-4">
          {product.subTitle}
        </p>

        {/* Graphic Box */}
        <div className="relative w-full h-48 sm:h-56 rounded-xl bg-gradient-to-br from-emerald-900/10 via-slate-100 to-teal-900/5 border border-emerald-900/10 flex items-center justify-center mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#328D6F_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-gw-deep shadow-md mb-2">
              <FlaskConical className="w-8 h-8 text-gw-deep" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-gw-deep font-semibold">
              GENEWORLD R&D SPECIFICATION
            </span>
            <span className="text-[11px] text-slate-500 max-w-xs mt-0.5">
              Công nghệ ứng dụng: {product.keyTechnology}
            </span>
          </div>
          <div className="absolute bottom-3 right-3 glass-pill px-2.5 py-1 rounded text-[10px] font-mono text-gw-charcoal">
            {isB2BOnly ? "PHẠM VI: CƠ SỞ CHUYÊN MÔN" : "PHÂN PHỐI: CHÍNH HÃNG"}
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 mb-6">
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-gw-teal" />
              Mô tả & Cơ chế ứng dụng
            </h4>
            <p className="leading-relaxed text-slate-600 bg-slate-50/70 p-3 rounded-lg border border-slate-100">
              {product.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gw-teal" />
              Mục đích sử dụng theo hồ sơ công bố
            </h4>
            <p className="leading-relaxed text-slate-600">
              {product.usagePurpose}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
              Thành phần & Hoạt chất sinh học chính
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50/40 border border-emerald-100/60 text-xs"
                >
                  <Check className="w-3.5 h-3.5 text-gw-teal shrink-0" />
                  <span className="text-slate-800 font-medium">{ing}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <div className="text-[11px] text-slate-500 font-mono">
            {isB2BOnly
              ? "Yêu cầu tài liệu kiểm định y tế dành cho đối tác"
              : "Sản phẩm có sẵn tại kênh bán lẻ chính thức"}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Đóng
            </button>

            {canBuyDirect && (
              <button
                onClick={() => {
                  onClose();
                  onOpenShop(product.name);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal shadow-sm transition-all"
              >
                <span>Mua sản phẩm</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}

            {isB2BOnly && (
              <button
                onClick={() => {
                  onClose();
                  onOpenB2B();
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal shadow-sm transition-all"
              >
                <span>Tư vấn B2B y tế</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
