import React from 'react'
import Phone from "@/picture/phone.png"

export default function CTA2Section() {
  return (
    <section className='px-[24px] py-[40px] lg:py-[80px] flex gap-[64px]'>
        <div className='bg-foreground px-[32px] lg:px-[96px] pt-[40px] lg:py-[96px] flex flex-col gap-[32px] lg:gap-[40px] rounded-[16px] w-full md:relative'>
            <div className='w-[286px] lg:w-[714px] flex flex-col gap-[16px]'>
                <h4 className='w-full font-semibold text-[32px] lg:text-[36px] text-font-primary'>Solusi Absensi Lengkap & Fleksibel untuk Perusahaan Anda</h4>
                <p className='lg:w-full font-normal w-[286px] text-[16px] lg:text-[20px] text-font-secondary'>Presensi.co.id membantu Anda mengatur jadwal kerja, mencatat kehadiran, dan mengelola data karyawan lebih efisien kapanpun dan dimanapun.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-[12px] mb-[40px]'> 
                <button className='font-semibold text-[16px] py-[12px] px-[20px] rounded-[8px] bg-primary text-background hover:bg-background hover:border-1 hover:border-border-btn hover:text-font-secondary transition-all duration-300'>Coba Sekarang</button>
                <button className='font-semibold text-[16px] py-[12px] px-[20px] rounded-[8px] bg-background border-1 border-border-btn text-font-secondary hover:bg-primary hover:text-background transition-all duration-300'>Jadwalkan Demo</button>
            </div>

            <img src={Phone.src} alt="" className='w-[393px] lg:w-[520px] h-auto lg:h-[492px] md:absolute bottom-0 mx-auto md:right-0'/>
        </div>
    </section>
  )
}
