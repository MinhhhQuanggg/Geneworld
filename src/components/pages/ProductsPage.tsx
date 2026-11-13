"use client";

import React, { useState } from "react";
import { Search, Sparkles, Eye, ArrowUpRight } from "lucide-react";
import { PRODUCTS, ProductItem } from "@/data/geneworldData";

interface ProductsPageProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenShop: (productName?: string) => void;
  onOpenB2B: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onOpenShop,
  onOpenB2B,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Tất cả danh mục" },
    { id: "recovery", label: "Phục hồi & Tái tạo" },
    { id: "spirulina", label: "Công nghệ Tảo Spirulina" },
    { id: "organic", label: "Dược mỹ phẩm Organic" },
    { id: "skincare", label: "Chăm sóc màng sinh học" },
    { id: "clinical", label: "Y tế & Bệnh viện (PRP)" },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.categorySlug === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.keyTechnology.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#F5F8F6]">
      {/* Page Header */}
      <div className="bg-white py-14 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading mb-4">
              Khám phá toàn bộ giải pháp ứng dụng sinh học.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Các sản phẩm được nghiên cứu và kiểm nghiệm theo tiêu chuẩn y khoa, phục vụ nhu cầu chăm sóc da chuyên sâu của người tiêu dùng và trang bị cho cơ sở chuyên môn.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter bar and search input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-gw-deep text-white font-semibold shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên sản phẩm, công nghệ..."
              className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-gw-teal/40 transition-all"
            />
          </div>
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-sm text-slate-500">
              Không tìm thấy sản phẩm phù hợp với bộ lọc hiện tại.
            </p>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-gw-teal uppercase tracking-wider font-semibold">
                      {prod.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {prod.volumeOrSpec}
                    </span>
                  </div>

                  <div className="w-full h-44 rounded-2xl bg-gradient-to-tr from-slate-100 via-emerald-50/50 to-slate-100 border border-slate-200/60 flex items-center justify-center mb-5 relative overflow-hidden group-hover:scale-[1.01] transition-transform">
                    <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-gw-deep shadow-xs">
                      <Sparkles className="w-7 h-7 text-gw-deep" />
                    </div>
                    {prod.badge && (
                      <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white/90 border border-slate-200 text-gw-deep shadow-2xs">
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => onSelectProduct(prod)}
                    className="text-lg font-bold text-slate-900 font-heading mb-1.5 hover:text-gw-deep cursor-pointer transition-colors"
                  >
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gw-teal font-medium mb-3">
                    {prod.subTitle}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-gw-deep transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Chi tiết</span>
                  </button>

                  {prod.target === "b2b" ? (
                    <button
                      onClick={onOpenB2B}
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gw-deep hover:bg-gw-teal shadow-xs transition-all"
                    >
                      <span>Tư vấn B2B</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onOpenShop(prod.name)}
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gw-deep hover:bg-gw-teal shadow-xs transition-all"
                    >
                      <span>Mua sản phẩm</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
