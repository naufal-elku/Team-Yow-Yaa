"use client";

import { useState } from "react";
import { Jurney } from "@/data/timeline";
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Timeline() {
  const [current, setCurrent] = useState(0);

  // Pagination untuk tampilan Laptop (3 item per halaman)
  const itemsPerPage = 3;
  const maxDesktopIndex = Math.max(0, Jurney.length - itemsPerPage);

  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrent((prev) => Math.min(prev + 1, Jurney.length - 1));
  };

  const handleDesktopNext = () => {
    setCurrent((prev) => Math.min(prev + 1, maxDesktopIndex));
  };

  const visibleDesktopItems = Jurney.slice(current, current + itemsPerPage);

  return (
    <section className="relative w-full mx-auto py-12 lg:py-16 px-4 sm:px-6 bg-timeline font-montserrat overflow-hidden">
      <div className="mx-auto max-w-[1440px] lg:px-[120px]">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-font-primary">
          Catatan Perjalanan Kami
        </h2>

        {/* Tampilan Laptop (lg) */}
        <div className="relative mt-20 hidden lg:block">
          <div className="relative h-12 w-full">
            <div className="absolute left-6 right-6 top-1/2 z-0 h-[2px] -translate-y-1/2 bg-primary" />
            
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-timeline text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="grid h-full grid-cols-3 gap-[60px] px-16">
              {visibleDesktopItems.map((item) => (
                <div key={item.time} className="flex items-center justify-center">
                  <div className="relative z-10">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14" cy="14" r="13" stroke="#057CE4" strokeWidth="2" fill="white" />
                      <circle cx="14" cy="14" r="7" fill="#057CE4" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleDesktopNext}
              disabled={current >= maxDesktopIndex}
              className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-timeline text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-[60px] px-16 mt-6">
            {visibleDesktopItems.map((item) => (
              <div key={item.time} className="flex flex-col items-center text-center">
                <h3 className="text-[36px] font-bold leading-[46px] text-primary">
                  {item.time}
                </h3>
                <p className="mt-4 text-[18px] leading-7 text-font-primary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tampilan Mobile (lg:hidden) */}
        <div className="mt-10 lg:hidden flex flex-col items-center w-full max-w-sm mx-auto">
          {/* Timeline Navigation Bar */}
          <div className="relative flex items-center justify-between w-full px-4 h-12">
            {/* Garis Horizontal di Belakang */}
            <div className="absolute left-8 right-8 top-1/2 z-0 h-[2px] -translate-y-1/2 bg-primary" />

            {/* Tombol Kiri */}
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-white text-primary disabled:opacity-40 transition-opacity shrink-0"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Indikator Titik Tengah */}
            <div className="relative z-10 bg-white rounded-full shrink-0">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="13" stroke="#057CE4" strokeWidth="2" fill="white" />
                <circle cx="14" cy="14" r="7" fill="#057CE4" />
              </svg>
            </div>

            {/* Tombol Kanan */}
            <button
              onClick={handleNext}
              disabled={current === Jurney.length - 1}
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-white text-primary disabled:opacity-40 transition-opacity shrink-0"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Konten Teks Mobile */}
          {Jurney[current] && (
            <div className="mt-8 text-center px-4 w-full">
              <h3 className="text-3xl font-bold text-primary leading-tight">
                {Jurney[current].time}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-font-primary max-w-xs mx-auto">
                {Jurney[current].description}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}