"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { ECOSYSTEM_ITEMS, EcosystemItem } from "@/data/geneworldData";

interface EcosystemProps {
  onOpenB2B: () => void;
}

export const Ecosystem: React.FC<EcosystemProps> = ({ onOpenB2B }) => {
  const [selectedEco, setSelectedEco] = useState<EcosystemItem>(ECOSYSTEM_ITEMS[0]);

  return (
    <section className="py-24 bg-[#F5F8F6] border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Một hệ sinh thái, nhiều năng lực kết nối.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Khám phá các thành phần trong hệ sinh thái Geneworld, từ nghiên cứu và phòng thí nghiệm đến sản xuất, phát triển nguyên liệu và các hoạt động hỗ trợ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid: Ecosystem Nodes */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-900/10 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gw-deep text-white flex items-center justify-center font-heading font-bold shadow-sm">
                  GW
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gw-teal uppercase tracking-wider font-semibold block">
                    TRỌNG TÂM HỆ THỐNG
                  </span>
                  <span className="text-lg font-bold text-slate-900 font-heading">
                    GENEWORLD BIOTECH ECOSYSTEM
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400">
                8 Thành phần cốt lõi
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ECOSYSTEM_ITEMS.map((item) => {
                const active = selectedEco.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedEco(item)}
                    className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between group ${
                      active
                        ? "bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-gw-teal shadow-xs"
                        : "bg-slate-50/70 hover:bg-white border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gw-teal font-semibold">
                          {item.role}
                        </span>
                        {active && (
                          <span className="w-2 h-2 rounded-full bg-gw-deep" />
                        )}
                      </div>
                      <h4
                        className={`text-sm font-bold font-heading mb-1.5 transition-colors ${
                          active
                            ? "text-gw-deep"
                            : "text-slate-800 group-hover:text-gw-deep"
                        }`}
                      >
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-400">
                        {item.metricLabel}:
                      </span>
                      <span className="font-semibold text-gw-deep">
                        {item.metricValue}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Sticky Card: Node Detail */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-900/10 shadow-md sticky top-24">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <span className="text-[11px] font-mono text-gw-teal uppercase tracking-wider font-semibold">
                CHI TIẾT VẬN HÀNH · {selectedEco.role}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-[11px] font-mono font-medium text-gw-deep">
                Active Node
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3">
              {selectedEco.name}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
              {selectedEco.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                Năng lực & Điểm nổi bật
              </h4>
              <div className="space-y-2.5">
                {selectedEco.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                  >
                    <Check className="w-4 h-4 text-gw-teal shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100 mb-6">
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono block mb-1">
                {selectedEco.metricLabel}
              </span>
              <span className="text-2xl font-bold text-gw-deep font-heading">
                {selectedEco.metricValue}
              </span>
            </div>

            <button
              onClick={onOpenB2B}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all shadow-sm"
            >
              <span>Kết nối hợp tác với mắt xích này</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
