"use client";

import React from "react";
import { Hospital, Building, Network, ArrowRight } from "lucide-react";

interface B2BPartnerProps {
  onOpenB2B: (inquiryType?: string) => void;
}

export const B2BPartner: React.FC<B2BPartnerProps> = ({ onOpenB2B }) => {
  const cards = [
    {
      id: "medical",
      letter: "A",
      title: "Bệnh viện & Cơ sở y tế",
      subtitle: "Giải pháp sinh học & Y học tái tạo",
      copy: "Tìm hiểu các danh mục và giải pháp liên quan, đồng thời kết nối với bộ phận phụ trách để được cung cấp thông tin phù hợp.",
      cta: "Yêu cầu tư vấn",
      icon: Hospital,
      highlights: [
        "Bộ kít tách chiết PRP y khoa vô trùng",
        "Dung dịch tế bào học & bảo quản sinh học",
        "Hồ sơ kỹ thuật & tài liệu kiểm định",
      ],
    },
    {
      id: "oem-odm",
      letter: "B",
      title: "OEM / ODM & Phát triển sản phẩm",
      subtitle: "Nghiên cứu công thức & Gia công trọn gói",
      copy: "Trao đổi với Geneworld về nhu cầu phát triển sản phẩm, nghiên cứu và sản xuất theo phạm vi hợp tác thực tế.",
      cta: "Gửi yêu cầu hợp tác",
      icon: Building,
      highlights: [
        "Tùy biến công thức sinh học theo yêu cầu",
        "Sản xuất trên dây chuyền đạt chuẩn",
        "Hỗ trợ kiểm nghiệm & hồ sơ công bố",
      ],
    },
    {
      id: "distribution",
      letter: "C",
      title: "Đối tác phân phối",
      subtitle: "Mở rộng mạng lưới thị trường",
      copy: "Kết nối để tìm hiểu danh mục sản phẩm và cơ hội hợp tác phân phối.",
      cta: "Đăng ký kết nối",
      icon: Network,
      highlights: [
        "Chính sách phân phối minh bạch & ổn định",
        "Hỗ trợ đào tạo chuyên môn định kỳ",
        "Tài liệu truyền thông chuẩn khoa học",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#F5F8F6] border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Tìm hướng hợp tác phù hợp với doanh nghiệp của bạn.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Chúng tôi xây dựng các phương thức kết nối linh hoạt, được thiết kế chuyên biệt cho từng mô hình hoạt động của đối tác.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-gw-deep flex items-center justify-center group-hover:bg-gw-deep group-hover:text-white transition-colors shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 font-semibold">
                      Lối vào {card.letter}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-gw-teal uppercase tracking-wider font-semibold block mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {card.copy}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    {card.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gw-teal shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenB2B(card.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all shadow-sm group-hover:shadow-md"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
