import React from 'react'
import CardBanner from "@/components/common/cardBanner";
import Free from "@/picture/free.png";
import minus from "@/picture/minus.png";
import check from "@/picture/check.png";
import basic from "@/picture/basic.png";
import { PricingCard } from '@/components/common/PricingCard';
import { PRICING_PLANS } from '@/data/pricing';


export default function PricePage() {
  return (
    <div className="flex flex-col w-full items-center justify-between mx-auto max-w-348 bg-background">
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

      <section className='w-full items-start flex flex-wrap mx-auto max-w-[1440px] pt-10 pb-24 md:px-[120px] gap-[10px] justify-start px-4 lg:px-[120px]'>
        <div className='grid grid-cols-3 flex flex-wrap max-w-[1200px] gap-6 justify-start'>

         {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
    </div>
  )
}
