import React from "react";
import CardBanner from "../common/cardBanner";
import Baground from "@/picture/backround.png";
import { RocketIcon } from "../icon/rocet";

export default function hero() {
  return (
    <CardBanner className="flex flex-col gap-6 lg:gap-[64px]">
      <div className="flex flex-col gap-10 lg:gap-[48px]">
        <div className="flex flex-col gap-6">
        <p className="text-primary border-border-blue-primary bg-bg-blue-secondary/30 mx-auto flex gap-2 rounded-2xl border border-solid px-3.5 py-1 text-[12px] font-medium md:text-[14px] lg:leading-5 leading-[18px] tracking-[0.01em] lg:tracking-0 w-fit items-center whitespace-nowrap">
          <RocketIcon className="shrink-0" /> Langganan 12 bulan dan dapatkan diskon
          15%
        </p>
        <h4 className="text-font-primary text-[40px] font-bold md:text-[60px] lg:leading-18 lg:tracking-[-0.02em] leading-[56px]">
          Kelola{" "}
          <span className="text-grad from-gradient-primary to-gradient-secondary bg-linear-to-b bg-clip-text text-transparent">
            Absensi
          </span>{" "}
          Tanpa Ribet
        </h4>
        <p className="text-font-secondary mx-auto max-w-77.5 text-[20px] font-normal leading-[28px] lg:leading-7.5 md:max-w-188.5">
          Presensi merupakan aplikasi absensi karyawan berbasis Aplikasi.
          Dapatkan laporan absensi karyawan dengan mudah, menggunakan
          presensi.co.id
        </p>
        </div>
        <div className="mx-auto flex flex-col gap-3 md:flex-row">
          <button className="bg-primary text-background hover:bg-background hover:border-border-btn hover:text-font-secondary rounded-lg px-5 py-3 text-[16px] font-semibold transition-all duration-300 hover:border leading-6">
            Coba Sekarang
          </button>
          <button className="bg-background border-border-btn text-font-secondary hover:bg-primary hover:text-background rounded-lg border px-5 py-3 text-[16px] font-semibold transition-all duration-300 leading-6">
            Jadwalkan Demo
          </button>
        </div>
      </div>
      <div className="relative mx-auto max-w-77.5 overflow-hidden md:max-w-316">
        <img src={Baground.src} alt="" className="block h-auto w-full" />
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-linear-to-t to-transparent md:h-15"></div>
      </div>
    </CardBanner>
  );
}
