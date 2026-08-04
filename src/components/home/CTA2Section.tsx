import React from "react";
import Phone from "@/picture/phone.png";

export default function CTA2Section() {
  return (
    <section className="flex gap-16 px-6 py-10 lg:py-20">
      <div className="bg-foreground flex w-full flex-col gap-8 rounded-2xl px-8 md:relative md:gap-4 md:py-7.5 lg:h-110 lg:gap-10 lg:px-24 lg:py-24">
        <div className="flex w-71.5 flex-col gap-4 lg:w-178.5">
          <h4 className="text-font-primary w-full pt-10 text-[32px] leading-10 font-semibold md:pt-0 md:text-[30px] lg:text-[36px] lg:leading-11">
            Solusi Absensi Lengkap & Fleksibel untuk Perusahaan Anda
          </h4>
          <p className="text-font-secondary w-71.5 text-[16px] leading-6.5 font-normal md:text-[14px] lg:w-full lg:text-[20px] lg:leading-7.5">
            Presensi.co.id membantu Anda mengatur jadwal kerja, mencatat
            kehadiran, dan mengelola data karyawan lebih efisien kapanpun dan
            dimanapun.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-2.5">
          <button className="bg-primary text-background hover:bg-background hover:border-border-btn hover:text-font-secondary rounded-lg px-5 py-3 text-[16px] font-semibold transition-all duration-300 hover:border md:px-4.5 md:py-2.5 md:text-[14px]">
            Coba Sekarang
          </button>
          <button className="bg-background border-border-btn text-font-secondary hover:bg-primary hover:text-background rounded-lg border px-5 py-3 text-[16px] font-semibold transition-all duration-300 md:px-4.5 md:py-2.5 md:text-[14px]">
            Jadwalkan Demo
          </button>
        </div>

        <img
          src={Phone.src}
          alt=""
          className="bottom-0 mx-auto h-auto w-100 md:absolute md:right-8 md:w-77.5 lg:h-[492px] lg:w-auto"
        />
      </div>
    </section>
  );
}
