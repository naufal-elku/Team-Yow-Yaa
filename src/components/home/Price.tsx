"use client";

import React, { useState } from "react";
import { PricingCard } from "@/components/common/PricingCard";
import { PRICING_PLANS } from "@/data/pricing";
import { MoveUp, MoveDown } from "lucide-react";

export default function PricePage() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedPlans = [...PRICING_PLANS].sort((a, b) => {
    return sortOrder === "asc"
      ? a.numericPrice - b.numericPrice
      : b.numericPrice - a.numericPrice;
  });

  return (
    <section className="w-full max-w-360 mx-auto flex flex-col items-center py-24 px-4 md:px-8 xl:px-30 gap-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full max-w-300 gap-4">
        <div className="flex flex-col max-w-[794px] gap-2 text-left">
          <h1 className="text-[36px] font-semibold text-font-primary leading-11 tracking-[-0.02em]">
            Penawaran Terbaik Kami untuk Anda
          </h1>
          <p className="text-[20px] font-normal text-font-secondary leading-7.5">
            Pilih paket sesuai dengan kebutuhan Perusahaan Anda
          </p>
        </div>

        <button
          onClick={handleSortToggle}
          className="flex items-center justify-center gap-2 rounded-xl border border-border-btn bg-timeline px-4 py-2.5 shrink-0 cursor-pointer"
        >
          <span className="text-[18px] font-medium leading-6 text-font-secondary">
            Harga
          </span>
          <div className="flex items-center">
            <MoveUp
              className={`h-4 w-4 transition-colors ${
                sortOrder === "desc" ? "text-black" : "text-gray-300"
              }`}
            />
            <MoveDown
              className={`h-4 w-4 transition-colors ${
                sortOrder === "asc" ? "text-black" : "text-gray-300"
              }`}
            />
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}