import React from "react";
import Statics from "@/picture/productStatics.png";

export default function ProductStatistics() {
  return (
    <section className="w-full px-5 py-[48px] lg:py-[96px] md:px-30">
      <div className="flex flex-wrap items-center justify-center gap-8.25">
        <h4 className="text-font-secondary w-full text-[24px] font-semibold md:max-w-178.5 md:text-[32px] leading-[32px] leading-10 font-montserrat">
          Lebih dari{""} <span className="text-font-primary">8 Tahun Presensi</span>{" "}
          Mendampingi{" "}
          <span className="text-primary">Puluhan Ribu Perusahaan
          </span>{" "}
          di Indonesia{" "}
          <span className="text-font-primary">
            Menyederhanakan Pengelolaan Kehadiran Karyawan
          </span>
        </h4>

        <div>
          <img src={Statics.src} alt="" className="h-27.5 w-auto md:h-30" />
        </div>
      </div>
    </section>
  );
}
