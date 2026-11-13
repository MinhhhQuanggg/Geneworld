"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  X,
  Sparkles,
  Building2,
  FlaskConical,
  Compass,
} from "lucide-react";

interface FloatingAssistantProps {
  onNavigate: (tab: string) => void;
  onOpenB2B: (inquiryType?: string) => void;
  onOpenShop: () => void;
}

export const FloatingAssistant: React.FC<FloatingAssistantProps> = ({
  onNavigate,
  onOpenB2B,
  onOpenShop,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  const assistantItems = [
    {
      id: "products",
      label: "Khám phá sản phẩm Geneworld",
      icon: Sparkles,
      answer:
        "Geneworld phát triển các dòng sản phẩm ứng dụng công nghệ tế bào gốc, vi tảo Spirulina nông trại Gen-Green, lên men vi sinh và chiết xuất hữu cơ. Bạn có thể xem toàn bộ danh mục sản phẩm hoặc yêu cầu đặt mua chính hãng.",
      actionLabel: "Xem danh mục sản phẩm",
      onAction: () => {
        onNavigate("products");
        setIsOpen(false);
      },
      secondaryAction: {
        label: "Mua sản phẩm ↗",
        run: () => {
          onOpenShop();
          setIsOpen(false);
        },
      },
    },
    {
      id: "oem",
      label: "Hợp tác OEM / ODM & R&D",
      icon: Building2,
      answer:
        "Geneworld cung cấp giải pháp hợp tác trọn gói từ nghiên cứu công thức độc quyền tại R&D, kiểm nghiệm trong phòng thí nghiệm đến gia công sản xuất trên dây chuyền đạt chuẩn và hỗ trợ công bố hồ sơ.",
      actionLabel: "Mở biểu mẫu hợp tác OEM/ODM",
      onAction: () => {
        onOpenB2B("oem-odm");
        setIsOpen(false);
      },
    },
    {
      id: "technologies",
      label: "Tìm hiểu 6 công nghệ nền tảng",
      icon: FlaskConical,
      answer:
        "Sáu trụ cột công nghệ của Geneworld bao gồm: Tế bào gốc, Canh tác & Chiết xuất Organic, Lên men - Microbiome, Vi tảo Spirulina, Nano liposome và kít tách chiết PRP y khoa.",
      actionLabel: "Đến trung tâm công nghệ R&D",
      onAction: () => {
        onNavigate("technology");
        setIsOpen(false);
      },
    },
    {
      id: "factory",
      label: "Năng lực nhà máy & Phòng Lab",
      icon: Compass,
      answer:
        "Cơ sở sản xuất khép kín cùng hệ thống phòng kiểm nghiệm vi sinh và sắc ký phân tích giúp Geneworld kiểm soát 100% chất lượng từ nguyên liệu đến thành phẩm.",
      actionLabel: "Xem năng lực nhà máy & Lab",
      onAction: () => {
        onNavigate("manufacturing");
        setIsOpen(false);
      },
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full glass-panel-deep text-white shadow-xl hover:scale-105 transition-all group"
          aria-label="Mở trợ lý điều hướng GENI"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
          </div>
          <span className="text-xs font-semibold tracking-wide font-heading">
            Trợ lý GENI
          </span>
        </button>
      )}

      {isOpen && (
        <div className="w-[330px] sm:w-[370px] glass-panel bg-white/95 rounded-2xl shadow-2xl border border-emerald-900/15 p-4 sm:p-5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gw-deep text-white flex items-center justify-center text-xs font-bold font-heading">
                G
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  GENI Assistant
                </h4>
                <p className="text-[10px] text-slate-500 font-mono">
                  Điều hướng nhanh Geneworld
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setActiveQuestionId(null);
              }}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Đóng GENI"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            Xin chào! Tôi có thể hỗ trợ điều hướng nhanh theo nhu cầu của bạn:
          </p>

          <div className="space-y-1.5 mb-3">
            {assistantItems.map((item) => {
              const Icon = item.icon;
              const active = activeQuestionId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() =>
                    setActiveQuestionId(active ? null : item.id)
                  }
                  className={`w-full flex items-center gap-2.5 p-2 rounded-lg text-xs text-left transition-all ${
                    active
                      ? "bg-emerald-50 text-gw-deep font-semibold border border-emerald-200"
                      : "bg-slate-50/80 text-slate-700 hover:bg-slate-100 border border-slate-100"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-gw-teal shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          {activeQuestionId && (
            <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 mb-3 animate-in fade-in duration-150">
              {(() => {
                const item = assistantItems.find(
                  (i) => i.id === activeQuestionId
                );
                if (!item) return null;
                return (
                  <div>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      {item.answer}
                    </p>
                    <div className="flex flex-col gap-1.5">
                      <button
                        onClick={item.onAction}
                        className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-colors text-center"
                      >
                        {item.actionLabel}
                      </button>
                      {item.secondaryAction && (
                        <button
                          onClick={item.secondaryAction.run}
                          className="w-full py-1.5 px-3 rounded-lg text-xs font-medium text-gw-deep bg-white border border-emerald-200 hover:bg-emerald-50/80 transition-colors flex items-center justify-center gap-1"
                        >
                          <span>{item.secondaryAction.label}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          <div className="text-[10px] text-slate-400 text-center font-mono">
            Trợ lý thông tin điều hướng demo · GENEWORLD
          </div>
        </div>
      )}
    </div>
  );
};
