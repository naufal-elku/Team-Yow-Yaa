import React from "react";

export default function buttonDemo() {
  return (
    <section className="bg-foreground px-5 px-12 lg:px-30 lg:py-24">
      <div className=" flex flex-col gap-10">
        <div className="flex flex-col gap-4 mx-auto text-center lg:max-w-198">
          <h4 className="text-font-primary text-[32px] font-semibold md:text-[36px] leading-10 lg:leading-11 lg:tracking-[-0.02em]">
            Siap Tingkatkan Efisiensi Absensi di Perusahaan Anda?
          </h4>
          <p className="text-font-secondary text-[18px] font-normal md:text-[20px] leading-[26px] lg:leading-7.5">
            Jadwalkan demo dan konsultasi gratis bersama tim Presensi.co.id
          </p>
        </div>
        <a
          href="#"
          className="hover:bg-hover bg-primary text-background mx-auto w-fit rounded-lg px-5 py-3 text-[16px] font-semibold transition-all duration-300 leading-6"
        >
          Jadwalkan Demo Sekarang
        </a>
      </div>
    </section>
  );
}
