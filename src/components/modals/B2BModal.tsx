"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle,
  Building2,
  AlertCircle,
  ShieldCheck,
  Send,
} from "lucide-react";
import { B2B_INQUIRY_TYPES } from "@/data/geneworldData";

interface B2BModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInquiryType?: string;
}

export const B2BModal: React.FC<B2BModalProps> = ({
  isOpen,
  onClose,
  initialInquiryType = "oem-odm",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    organizationName: "",
    role: "",
    email: "",
    phone: "",
    inquiryType: initialInquiryType,
    message: "",
    consentAgreed: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");

  useEffect(() => {
    if (initialInquiryType) {
      setFormData((prev) => ({ ...prev, inquiryType: initialInquiryType }));
    }
  }, [initialInquiryType]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên";
    }
    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Vui lòng nhập tên doanh nghiệp / tổ chức";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập địa chỉ email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+\s\-()]{8,16}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng mô tả sơ bộ nhu cầu hợp tác";
    }
    if (!formData.consentAgreed) {
      newErrors.consentAgreed =
        "Bạn cần đồng ý với chính sách xử lý thông tin để gửi yêu cầu";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setReferenceCode(`GW-B2B-${Math.floor(1e5 + Math.random() * 9e5)}`);
        setIsSuccess(true);
      }, 700);
    }
  };

  const handleResetAndClose = () => {
    setFormData({
      fullName: "",
      organizationName: "",
      role: "",
      email: "",
      phone: "",
      inquiryType: "oem-odm",
      message: "",
      consentAgreed: true,
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  const getInquiryLabel = (type: string) => {
    switch (type) {
      case "medical":
        return "Tư vấn sản phẩm / giải pháp y tế";
      case "oem-odm":
        return "OEM / ODM và phát triển sản phẩm";
      case "distribution":
        return "Hợp tác phân phối";
      case "manufacturing":
        return "Tìm hiểu năng lực sản xuất";
      default:
        return "Nhu cầu khác";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="b2b-form-title"
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-gw-deep mx-auto flex items-center justify-center mb-4">
              <CheckCircle className="w-9 h-9 text-gw-deep" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Yêu cầu đã được tiếp nhận thành công
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
              Cảm ơn quý đối tác{" "}
              <strong className="text-slate-900">
                {formData.organizationName}
              </strong>
              . Ban chuyên môn và bộ phận phụ trách đối tác của Geneworld sẽ xem xét thông tin và liên hệ trong thời gian sớm nhất.
            </p>

            <div className="inline-block p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 mb-6 max-w-md">
              <div className="font-semibold text-slate-800 mb-1">
                Mã tham chiếu hồ sơ:
              </div>
              <div className="font-mono text-gw-deep font-semibold">
                {referenceCode}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Loại nhu cầu: {getInquiryLabel(formData.inquiryType)}
              </div>
            </div>

            <div>
              <button
                onClick={handleResetAndClose}
                className="py-2.5 px-6 rounded-xl text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all shadow-sm"
              >
                Hoàn tất & Đóng
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gw-deep/10 text-gw-deep flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-gw-deep" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-gw-teal font-semibold">
                  Hợp tác B2B & Chuyên môn
                </span>
                <h2
                  id="b2b-form-title"
                  className="text-xl font-bold text-slate-900"
                >
                  Gửi yêu cầu hợp tác cùng Geneworld
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Geneworld chào đón các cơ hội hợp tác cùng bệnh viện, cơ sở y tế, viện nghiên cứu, đối tác OEM/ODM và hệ thống phân phối chuyên nghiệp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Loại hình hợp tác quan tâm *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {B2B_INQUIRY_TYPES.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        formData.inquiryType === type.id
                          ? "border-gw-teal bg-emerald-50/60 font-semibold text-gw-deep shadow-2xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type.id}
                        checked={formData.inquiryType === type.id}
                        onChange={() =>
                          setFormData({ ...formData, inquiryType: type.id })
                        }
                        className="text-gw-deep focus:ring-gw-teal"
                      />
                      <span>{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Nguyễn Văn A"
                    className={`w-full px-3.5 py-2 rounded-lg text-sm border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gw-teal/40 transition-all ${
                      errors.fullName
                        ? "border-rose-400 bg-rose-50/30"
                        : "border-slate-200"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tên doanh nghiệp / Đơn vị y tế *
                  </label>
                  <input
                    type="text"
                    value={formData.organizationName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        organizationName: e.target.value,
                      })
                    }
                    placeholder="Bệnh viện / Công ty..."
                    className={`w-full px-3.5 py-2 rounded-lg text-sm border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gw-teal/40 transition-all ${
                      errors.organizationName
                        ? "border-rose-400 bg-rose-50/30"
                        : "border-slate-200"
                    }`}
                  />
                  {errors.organizationName && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />{" "}
                      {errors.organizationName}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Chức vụ / Bộ phận
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    placeholder="Giám đốc / Bác sĩ..."
                    className="w-full px-3.5 py-2 rounded-lg text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gw-teal/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email công tác *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@domain.com"
                    className={`w-full px-3.5 py-2 rounded-lg text-sm border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gw-teal/40 transition-all ${
                      errors.email
                        ? "border-rose-400 bg-rose-50/30"
                        : "border-slate-200"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="0912 345 678"
                    className={`w-full px-3.5 py-2 rounded-lg text-sm border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gw-teal/40 transition-all ${
                      errors.phone
                        ? "border-rose-400 bg-rose-50/30"
                        : "border-slate-200"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nội dung chi tiết yêu cầu *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Mô tả cụ thể định hướng hợp tác, quy mô hoặc dòng sản phẩm bạn đang quan tâm..."
                  className={`w-full px-3.5 py-2 rounded-lg text-sm border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gw-teal/40 transition-all ${
                    errors.message
                      ? "border-rose-400 bg-rose-50/30"
                      : "border-slate-200"
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              <div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consentAgreed}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consentAgreed: e.target.checked,
                      })
                    }
                    className="mt-0.5 rounded text-gw-deep focus:ring-gw-teal"
                  />
                  <span className="text-xs text-slate-600 leading-normal">
                    Tôi đồng ý cho Geneworld tiếp nhận và xử lý các thông tin liên hệ trên để phục vụ công tác tư vấn và trao đổi chuyên môn giữa hai bên.
                  </span>
                </label>
                {errors.consentAgreed && (
                  <span className="text-[11px] text-rose-500 mt-1 block">
                    {errors.consentAgreed}
                  </span>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-gw-teal" />
                  <span>Bảo mật thông tin doanh nghiệp</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="py-2.5 px-4 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gw-deep hover:bg-gw-teal disabled:opacity-60 transition-all shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Đang gửi thông tin...</span>
                    ) : (
                      <>
                        <span>Gửi thông tin hợp tác</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
