import React from "react";
import ArrowUpRight from "@/components/common/iconUpRight";
import CardCs from "@/components/common/cardCs";

export default function faqCs() {
  return (
    <CardCs className="flex max-w-198 flex-col gap-2">
      <h4 className="text-font-primary text-[20px] leading-7.5 font-medium">
        Masih ada Pertanyaan yang Belum Terjawab?
      </h4>
      <p className="text-font-secondary mb-8 text-[18px] leading-7 font-normal">
        Tim kami siap membantu, mulai dari hal teknis hingga solusi yang sesuai
        untuk bisnis anda.
      </p>
      <button className="bg-primary text-background hover:bg-hover mx-auto flex gap-2 rounded-lg px-4.5 py-2.5 text-[16px] leading-6 font-semibold transition-all duration-200">
        Hubungi CS
        <ArrowUpRight />
      </button>
    </CardCs>
  );
}
