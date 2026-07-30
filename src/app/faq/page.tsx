"use client";

import { useState } from "react";
import { faq } from "@/data/faq";
import CardBanner from "@/components/common/cardBanner";

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if(activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
   <section className="w-full">
    <CardBanner>
      <div className="max-w-[792] mx-auto text-center">
      <h2 className="font-semibold text-[36px] leading-[44px] mx-auto text-font-primary">
        Pertanyaan yang Sering Ditanyakan
      </h2>
      <p className="mx-auto mt-[16px] text-[20px] font-normal text-font-secondary">Temukan jawaban atas pertanyaan umum seputar fitur, cara kerja, hingga informasi biaya penggunaan Presensi</p>
      </div>
    </CardBanner>

    <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-[10px] mt-12 px-6">
      {faq.map((faq, index) => (
        <div 
          key={faq.id}
          className={`p-5 rounded-xl transition-all duration-400 ${activeIndex
            ? "bg-blue-50/40 shadow-sm"
            : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 shadow-sm"
          }`}
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full flex items-center justify-between text-left gap-4 cursor-pointer" 
          >
            <span className={`font-semibold text-[16px] md:text-[18px] transition-colors ${
              activeIndex ? "text-primary" : "text-font-primary"
            }`}>
              {faq.question}
            </span>

            <span className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full font-bold text-sm transition-all duration-200 ${
              activeIndex
                ? "bg-primary text-white shadow-sm"
                : "border-2 border-primary text-primary bg-white"
            }`}>{activeIndex === index ? "-" : "+"}</span>
          </button>

          {activeIndex === index && (
            <div className="mt-3 pt-3 border-t border-gray-200/60 text-font-secondary text-[14px] md:text-[15px] leading-[24px] max-w-[1000px] animate-fadeIn">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
   </section>
  );
}