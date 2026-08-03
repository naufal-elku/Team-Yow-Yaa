import React from 'react'
import CardBanner from "@/components/common/cardBanner";
import Free from "@/picture/free.png";
import minus from "@/picture/minus.png";
import check from "@/picture/check.png";

export default function PricePage() {
  return (
    <div className="flex flex-col w-full items-center justify-between mx-auto max-w-348 bg-background">
      <CardBanner>
        <div className="flex flex-col items-center justify-center w-full max-w-198 mx-auto gap-4 text-center">
          <h1 className="text-[36px] font-semibold tracking-tight leading-snug text-font-primary">
            Penawaran Terbaik Kami Untuk Anda
          </h1>
          <p className="text-[20px] leading-7.5 font-normal text-font-secondary  text-center">
            Kami menyediakan paket harga yang dirancang untuk berbagai skala kebutuhan bisnis anda.
          </p>
        </div>
      </CardBanner>

      <section className='w-full items-start flex flex-wrap mx-auto max-w-[1440px] pt-10 pb-24 md:px-[120px] gap-[10px] justify-start'>
        <div className='flex flex-wrap max-w-[1200px] gap-6 justify-start'>

          <div className='w-full flex flex-col max-w-[384px] rounded-xl bg-background border border-border-btn hover:shadow-xl transition-all duration-300 cursor-pointer'>
            <div className='flex flex-col pt-10 px-8 gap-4 '>
              <div className='flex flex-wrap gap-2 w-full items-center'>
                <img src={Free.src} alt="" className='w-9 h-9' />
                <h2 className='leading-7.5 font-semibold text-[20px] text-font-primary'>
                  FREE
                </h2>
                <div className='w-full flex items-baseline gap-1 mt-2'>
                  <h3 className='font-bold text-[36px] leading-11 tracking-[-0.02em] text-[#143B5E]'>
                    Gratis!
                  </h3>
                  <span className='text-[16px] leading-6 font-normal text-[#586166] '>
                    / 2 Bulan
                  </span>
                </div>

                <div className='flex flex-col w-full gap-3  mt-4'>
                  <button className='w-full flex items-center justify-center py-3 px-5 rounded-lg border border-primary bg-[#F6FBFF] gap-2 hover:bg-blue-100 transition-colors'>
                    <span className='font-semibold text-[16px] text-primary leading-6'>
                      Pilih Paket
                    </span>
                  </button>
                </div>

                <div className='flex flex-col w-full pt-8 pb-10 gap-6'>
                  <div className='flex flex-col w-full gap-4'>

                    <div className='flex w-full gap-3'>
                      <img src={minus.src} alt="" className='w-6 h-6'/>
                      <span className='font-normal text-[16px] leading-6 line-through text-[#B6B6B6]'>Akses Fitur Premium</span>
                    </div>

                    <div className='flex w-full gap-3'>
                      <img src={check.src} alt="" className='w-6 h-6'/>
                      <span className='font-normal text-[16px] leading-6 text-font-secondary'>Max. 50 Karyawan</span>
                    </div>

                    <div className='flex w-full gap-3'>
                      <img src={check.src} alt="" className='w-6 h-6'/>
                      <span className='font-normal text-[16px] leading-6 text-font-secondary'>Paket Gratis untuk 50 Karyawan</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
