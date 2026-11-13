"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { ARTICLES, ArticleItem } from "@/data/geneworldData";

export const Knowledge: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const mainArticle = ARTICLES[0];
  const sideArticles = ARTICLES.slice(1);

  return (
    <section className="py-24 bg-[#F5F8F6] border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Kiến thức, công nghệ và góc nhìn Geneworld.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Chia sẻ các bài viết chuyên môn, báo cáo nghiên cứu và giải thích khoa học về công nghệ sinh học tế bào và ứng dụng chăm sóc da.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Large Article */}
          <div
            onClick={() => setSelectedArticle(mainArticle)}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-900/10 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <span className="font-semibold text-gw-deep">
                  {mainArticle.category}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{mainArticle.readTime}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{mainArticle.publishYear}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3 group-hover:text-gw-deep transition-colors leading-snug">
                {mainArticle.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {mainArticle.excerpt}
              </p>
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-slate-700">
                <strong className="text-gw-deep block mb-1">
                  Điểm cốt lõi:
                </strong>
                {mainArticle.keyTakeaway}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-gw-deep">
              <span className="group-hover:text-gw-teal transition-colors">
                Đọc toàn bộ bài phân tích
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Side Articles List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                    <span className="font-semibold text-gw-teal">
                      {article.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{article.readTime}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-2 group-hover:text-gw-deep transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-gw-deep transition-colors">
                  <span>Xem bài viết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Đóng bài viết"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-semibold text-gw-deep">
                  {selectedArticle.category}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{selectedArticle.readTime}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{selectedArticle.publishYear}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4 leading-snug">
                {selectedArticle.title}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-slate-700 mb-6">
                <strong className="text-gw-deep block mb-1">
                  Kết luận ứng dụng:
                </strong>
                {selectedArticle.keyTakeaway}
              </div>

              <div className="text-right pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="py-2 px-5 rounded-xl text-xs font-semibold text-white bg-gw-deep hover:bg-gw-teal transition-all"
                >
                  Đóng bài viết
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
