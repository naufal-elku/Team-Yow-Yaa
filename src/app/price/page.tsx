import React from 'react'
import CardBanner from "@/components/common/cardBanner";
import Free from "@/picture/free.png";
import minus from "@/picture/minus.png";
import check from "@/picture/check.png";
import basic from "@/picture/basic.png";
import { PricingCard } from '@/components/common/PricingCard';
import { PRICING_PLANS } from '@/data/pricing';
import CTA2Section from "@/components/home/CTA2Section";


export default function PricePage() {
  return (
    <div className="">
      <CardBanner>
        <div className="flex flex-col items-center justify-center w-full max-w-198 mx-auto gap-4 text-center">
          <h1 className="text-[36px] font-semibold tracking-tight leading-snug text-font-primary">
            Penawaran Terbaik Kami Untuk Anda
          </h1>
          <p className="text-[20px] leading-7.5 font-normal text-font-secondary  text-center">
            Kami menyediakan paket harga yang dirancang untuk berbagai skala kebutuhan bisnis Anda.
          </p>
        </div>
      </CardBanner>

      <section className="w-full flex justify-center pt-10 pb-24 px-4 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-300 px-4">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
     <CTA2Section/> 
    </div>
  )
}
