import React from "react";
import { PricingCard } from '@/components/common/PricingCard';
import { PRICING_PLANS } from '@/data/pricing';
import descending from "@/picture/descending.png"

export default function PricePage() {
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

                <button className="flex items-center justify-center w-[120px] rounded-[8px] border border-[#E9E9E9] bg-[#F7F8FA] px-[20px] py-[12px] shrink-0">
                    <span className="text-[16px] font-semibold leading-[24px] text-[#535658]">Harga</span>
                    <img src={descending.src} alt="" className="w-5 h-5"/>
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-300">
                {PRICING_PLANS.map((plan) => (
                    <PricingCard key={plan.id} plan={plan} />
                ))}
            </div>

        </section>
    );
}