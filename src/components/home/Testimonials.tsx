"use client";

import React, { useState } from "react";
import { Testi } from "@/data/Testimonials";
import {ArrowRight, ArrowLeft} from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === Testi.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Testi.length - 1 : prev - 1));
  };

  const current = Testi[currentIndex];
  const first = currentIndex === 0;
  const last = currentIndex === Testi.length -1;

  return (
    <section className="mx-auto flex w-full flex-col gap-10 px-5 py-12 lg:px-30 lg:py-24 lg:gap-10">
      <h4 className="text-center text-[32px] font-semibold text-font-primary leading-10 lg:leading-11 lg:tracking-[-0.02em] lg:text-[36px]">
        Apa Kata Mereka
      </h4>

      <div className="relative mx-auto w-full max-w-300 gap-10">
        <div className="flex flex-col gap-8 justify-between rounded-2xl shadow-sm lg:shadow-lg border-gray-200 bg-white p-6">
          <div className="flex flex-col gap-4">

            {/* logo */}
            <div className="flex items-center">
              {current.logoCompany ? (
                <img
                  src={current.logoCompany}
                  alt={current.companyName}
                  className="h-auto w-[180px] object-contain"
                />
              ) : (
                <span className="text-[20px] font-semibold text-font-primary font-montserrat">
                  {current.companyName}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4">
            {/* petik */}
                <img src="/Icon/symbols.png"
                alt=""
                className="w-[32px] h-[32px]" 
                />

            {/* isi */}
            <p className="text-[16px] leading-[1.5em] text-font-secondary lg:text-[16px]">
              {current.quote}
            </p>
            </div>
          </div>

          {/* profile */}
          <div className="flex items-center gap-3">
            <img
              src={current.avatarProfile || "/AvatarProfile/default.png"}
              alt={current.title}
              className="h-12 w-12 rounded-full object-cover"
            />

            <div className="flex flex-col">
              <span className="font-semibold text-font-primary leading-[26px] text-[18px] font-montserrat">
                {current.title}
              </span>
              <span className="font-normal leading-5 text-font-secondary text-[14px] font-montserrat">
                {current.role}
              </span>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className={`flex bg-second-foreground p-[8px] rounded-[8px] items-center justify-center ${
                first 
                ? "text-font-secondary"
                : "text-font-primary"
            }`}
          >
            <ArrowLeft className="h-6 w-6 font-bold"/>
          </button>

          <div className="flex items-center gap-2">
            {Testi.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 inline-block rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-2.5 bg-[#2563EB]"
                    : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className={`flex bg-second-foreground p-2 rounded-[8px] items-center justify-center ${
                last 
                ? "text-font-secondary"
                : "text-font-primary"
            }`}
          >
            <ArrowRight className="h-6 w-6 font-bold"/>
          </button>
        </div>
      </div>
    </section>
  );
}