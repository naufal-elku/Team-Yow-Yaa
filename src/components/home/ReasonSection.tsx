import React from "react";
import { ReasonCard } from "../common/ReasonCard";
import { Reason } from "@/data/ReasonData";

export default function ourStrengths() {
  return (
      <div className="mx-auto flex flex-col gap-10 pt-[48px] pb-[64px] px-[20px] lg:px-[120px] lg:py-[96px] lg:gap-16">
        <div className="mx-auto flex flex-col gap-4 text-center w-full">
          <h4 className="text-font-primary text-[32px] font-semibold md:text-[36px] leading-[40px] lg:leading-[44px] lg:tracking-[-0.02em] max-w-[300px] lg:max-w-none mx-auto">
            Mengapa Presensi Lebih Baik?
          </h4>
          <p className="text-font-secondary mx-auto w-full max-w-[792px] text-[18px] font-normal md:text-[20px] leading-[26px] lg:leading-[30px]">
            Solusi absensi modern yang hemat waktu, efisien, dan siap mendukung
            produktivitas tim Anda.
        </p>
        </div>

        <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-6">
          {Reason.map((reason) => (
            <ReasonCard key={reason.id} reason={reason} />
          ))}
        </div>
      </div>
  );
}
