"use client";

import React, { useState } from "react";
import { Sparkles, Eye, ArrowUpRight, ArrowRight } from "lucide-react";
import { PRODUCTS, ProductItem } from "@/data/geneworldData";

interface FeaturedProductsProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenShop: (productName?: string) => void;
  onOpenB2B: () => void;
  onViewAllProducts: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onOpenShop,
  onOpenB2B,
  onViewAllProducts,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Tất cả sản phẩm" },
    { id: "recovery", label: "Phục hồi tế bào" },
    { id: "spirulina", label: "Công nghệ Tảo Spirulina" },
    { id: "organic", label: "Dược mỹ phẩm Organic" },
    { id: "clinical", label: "Chuyên dụng y tế / PRP" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categorySlug === selectedCategory);

  const heroProduct = filteredProducts[0] || PRODUCTS[0];
  const sideProducts = filteredProducts.slice(1, 4);

  return (
    <section className="py-24 bg-[#F5F8F6] border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with category pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-heading">
              Khám phá các dòng sản phẩm của Geneworld.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Tìm hiểu các dòng sản phẩm và công nghệ ứng dụng phù hợp với nhu cầu của bạn.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/80 rounded-xl border border-slate-200/80 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-gw-deep text-white shadow-2xs font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Hero Product Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-900/10 shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-tr from-emerald-950 via-[#004d33] to-teal-900 flex items-center justify-center overflow-hidden mb-6 shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="relative z-10 flex flex-col items-center text-center p-6">
                <div className="w-20 h-20 rounded-2xl glass-panel-deep flex items-center justify-center text-white mb-3 shadow-lg border border-white/20">
                  <Sparkles className="w-10 h-10 text-emerald-300" />
                </div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-200 font-semibold mb-1">
                  TIÊU BIỂU · {heroProduct.keyTechnology}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {heroProduct.name}
                </span>
                <span className="text-xs text-emerald-100/80 mt-1 max-w-sm">
                  {heroProduct.subTitle}
                </span>
              </div>

              <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-mono text-gw-deep font-semibold shadow-sm">
                {heroProduct.badge || "Dòng phục hồi"}
              </div>
              <div className="absolute bottom-4 right-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-mono text-slate-700">
                {heroProduct.volumeOrSpec}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{heroProduct.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-gw-teal font-medium">
                  {heroProduct.keyTechnology}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {heroProduct.description}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                <span className="text-xs text-slate-400 font-mono mr-1">
                  Hoạt chất:
                </span>
                {heroProduct.ingredients.slice(0, 4).map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded-md"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onSelectProduct(heroProduct)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gw-deep hover:text-gw-teal transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Xem chi tiết hồ sơ</span>
              </button>
              <div className="flex items-center gap-2.5">
                {heroProduct.target !== "b2b" && (
                  <button
                    onClick={() => onOpenShop(heroProduct.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal shadow-sm transition-all"
                  >
                    <span>Mua sản phẩm</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
                {heroProduct.target === "b2b" && (
                  <button
                    onClick={onOpenB2B}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal shadow-sm transition-all"
                  >
                    <span>Liên hệ tư vấn chuyên môn</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Side Products Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {sideProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gw-teal font-semibold">
                      {prod.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {prod.volumeOrSpec}
                    </span>
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1 hover:text-gw-deep cursor-pointer"
                    onClick={() => onSelectProduct(prod)}
                  >
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-2">{prod.subTitle}</p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {prod.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="font-medium text-slate-600 hover:text-gw-deep transition-colors"
                  >
                    Chi tiết sản phẩm →
                  </button>
                  {prod.target === "b2b" ? (
                    <button
                      onClick={onOpenB2B}
                      className="font-semibold text-gw-deep hover:text-gw-teal"
                    >
                      Tư vấn y tế →
                    </button>
                  ) : (
                    <button
                      onClick={() => onOpenShop(prod.name)}
                      className="inline-flex items-center gap-1 font-semibold text-gw-deep hover:text-gw-teal"
                    >
                      <span>Mua sản phẩm</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gw-deep bg-white border border-emerald-900/15 hover:bg-emerald-50 transition-all shadow-xs"
          >
            <span>Xem tất cả sản phẩm ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4 text-gw-teal" />
          </button>
        </div>
      </div>
    </section>
  );
};
