"use client";

import React, { useState } from "react";
import {
  Dna,
  Leaf,
  Sparkles,
  TestTubeDiagonal,
  Atom,
  Layers,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { CORE_TECHNOLOGIES, TechnologyItem } from "@/data/geneworldData";

interface TechnologiesProps {
  onOpenB2B: () => void;
}

export const Technologies: React.FC<TechnologiesProps> = ({ onOpenB2B }) => {
  const [selectedTech, setSelectedTech] = useState<TechnologyItem | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "stem-cell":
        return Dna;
      case "organic":
        return Leaf;
      case "microbiome":
        return Sparkles;
      case "spirulina":
        return TestTubeDiagonal;
      case "nano":
        return Atom;
      case "prp":
        return Layers;
      default:
        return Dna;
    }
  };

  const primaryTech = CORE_TECHNOLOGIES[0]; // stem-cell
  const secondaryTech = CORE_TECHNOLOGIES[3]; // spirulina
  const remainingTechs = CORE_TECHNOLOGIES.filter(
    (item) => item.id !== primaryTech.id && item.id !== secondaryTech.id
  );

  return (
    <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Công nghệ phía sau các ứng dụng.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Khám phá 06 nhóm công nghệ nền tảng được trình bày trong tài liệu chuyên môn của Geneworld, định hình toàn bộ giải pháp chăm sóc và tái tạo mô.
          </p>
        </div>

        {/* Highlighted Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Card 1: Core Stem Cell Tech */}
          <div
            onClick={() => setSelectedTech(primaryTech)}
            className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-[#003825] via-gw-deep to-[#004d33] text-white p-8 sm:p-10 shadow-lg relative overflow-hidden cursor-pointer group transition-all hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-300">
                    <Dna className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold block">
                      CÔNG NGHỆ CỐT LÕI #{primaryTech.index}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                      {primaryTech.name}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-emerald-200 hidden sm:inline-block">
                  Stem Cell Conditioned Media
                </span>
              </div>

              <p className="text-sm sm:text-base text-emerald-50/90 leading-relaxed mb-6 max-w-2xl">
                {primaryTech.shortDesc}
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                <span className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider block mb-1">
                  CƠ SỞ KHOA HỌC:
                </span>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  {primaryTech.scientificBasis}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-emerald-300/70 font-mono">
                  Hoạt chất mục tiêu:
                </span>
                {primaryTech.keyMolecules.map((molecule, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-white bg-white/10 px-2.5 py-1 rounded-md border border-white/10"
                  >
                    {molecule}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200 group-hover:text-white transition-colors">
                <span>Nhấn để xem phân tích chuyên sâu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Spirulina Tech */}
          <div
            onClick={() => setSelectedTech(secondaryTech)}
            className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 border border-emerald-900/15 p-8 shadow-md flex flex-col justify-between cursor-pointer group hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gw-deep text-white flex items-center justify-center">
                  <TestTubeDiagonal className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gw-teal font-semibold block">
                    CÔNG NGHỆ #{secondaryTech.index}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {secondaryTech.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {secondaryTech.shortDesc}
              </p>

              <div className="p-3 rounded-xl bg-emerald-100/40 border border-emerald-200/50 mb-4 text-xs text-slate-700">
                <span className="font-semibold text-gw-deep block mb-1">
                  Vùng nuôi trồng Gen-Green:
                </span>
                Hệ thống photobioreactor khép kín khai thác nguồn Phycocyanin chống oxy hóa quang sinh học tinh khiết.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-gw-deep">
              <span>Xem chi tiết công nghệ</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* 4 Cards Grid Bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {remainingTechs.map((tech) => {
            const Icon = getIcon(tech.id);
            return (
              <div
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-gw-deep flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                      <Icon className="w-5 h-5 text-gw-deep" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      #{tech.index}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-heading mb-2 group-hover:text-gw-deep transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {tech.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-gw-teal">
                  <span>Khám phá</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Detail Modal */}
        {selectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Đóng chi tiết công nghệ"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gw-deep text-white flex items-center justify-center">
                  <Dna className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gw-teal uppercase tracking-wider font-semibold">
                    CÔNG NGHỆ NỀN TẢNG #{selectedTech.index}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    {selectedTech.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 my-6">
                <div>
                  <h5 className="font-semibold text-slate-900 uppercase tracking-wider text-xs mb-1">
                    Tổng quan nghiên cứu & Cơ chế
                  </h5>
                  <p className="leading-relaxed text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {selectedTech.fullDesc}
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-900 uppercase tracking-wider text-xs mb-1">
                    Cơ sở khoa học & Phương pháp phân tách
                  </h5>
                  <p className="leading-relaxed text-slate-600">
                    {selectedTech.scientificBasis}
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-900 uppercase tracking-wider text-xs mb-2">
                    Lĩnh vực ứng dụng thực tiễn
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTech.appliedAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50/50 border border-emerald-100/60 text-xs"
                      >
                        <Check className="w-3.5 h-3.5 text-gw-teal shrink-0" />
                        <span className="text-slate-800">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedTech(null)}
                  className="py-2 px-4 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    setSelectedTech(null);
                    onOpenB2B();
                  }}
                  className="py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all shadow-sm"
                >
                  Yêu cầu tư vấn chuyển giao công nghệ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
