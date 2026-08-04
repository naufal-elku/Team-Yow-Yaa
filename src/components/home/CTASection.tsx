import React from "react";

export default function buttonDemo() {
  return (
    <section className="mt-16 w-full md:mt-24">
      <div className="bg-foreground flex flex-col gap-10 px-5 py-12 text-center md:px-30 md:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-198">
          <h4 className="text-font-primary text-[32px] font-semibold md:text-[36px]">
            Siap Tingkatkan Efisiensi Absensi di Perusahaan Anda?
          </h4>
          <p className="text-font-secondary text-[18px] font-normal md:text-[20px]">
            Jadwalkan demo dan konsultasi gratis bersama tim Presensi.co.id
          </p>
        </div>
        <a
          href="#"
          className="hover:bg-hover bg-primary text-background mx-auto w-fit rounded-lg px-5 py-3 text-[16px] font-semibold transition-all duration-300"
        >
          Jadwalkan Demo Sekarang
        </a>
      </div>
    </section>
  );
}
