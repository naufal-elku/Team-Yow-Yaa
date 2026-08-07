"use client";

import { useState } from "react";
import { faq } from "@/data/faq";
import CardBanner from "@/components/common/cardBanner";
import FaqCs from "../../components/common/ContentFAQ";

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full">
      <CardBanner className="lg:pb-[96px]">
        <div className="mx-auto w-full max-w-[792px] text-center">
          <h2 className="text-font-primary mx-auto text-[32px] leading-10 font-semibold lg:text-[36px] lg:leading-11 lg:tracking-[-0.02em]">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-font-secondary mx-auto mt-4 px-5 text-[18px] leading-[26px] font-normal lg:text-[20px] lg:leading-7.5">
            Temukan jawaban atas pertanyaan umum seputar fitur, cara kerja,
            hingga informasi biaya penggunaan Presensi
          </p>
        </div>
      </CardBanner>

      <div className="flex w-full flex-col gap-[64px] px-[20px] py-[48px] lg:gap-20 lg:px-[120px] lg:pt-[40px] lg:pb-[56px]">
        <div className="mx-auto flex w-full max-w-[792px] flex-col gap-8">
        {faq.map((faq, index) => (
          <div
            key={faq.id}
            className={`w-full rounded-xl p-5 transition-all duration-400 ${
              activeIndex
                ? "bg-white shadow-[0_8px_4px_-8px_rgba(0,0,0,0.2)]"
                : "bg-white shadow-[0_8px_4px_-8px_rgba(0,0,0,0.2)]"
            }`}
          >
            <button
              onClick={() => handleToggle(index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
            >
              <span className="text-font-primary flex-1 text-[18px] leading-7 font-semibold transition-colors md:text-[18px]">
                {faq.question}
              </span>

              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-200 ${
                  activeIndex
                    ? "border-primary text-primary border-2 shadow-sm"
                    : "border-primary text-primary border-2 shadow-sm"
                }`}
              >
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="text-font-secondary animate-fadeIn mt-3 w-full border-t border-gray-200/60 pt-3 text-[16px] leading-6 font-normal">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        </div>

         <FaqCs />
      </div>
    </section>
  );
}