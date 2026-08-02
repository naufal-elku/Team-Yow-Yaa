import React from 'react'

export default function buttonDemo() {
  return (
    <section className="w-full mt-[64px] md:mt-[96px]">
        <div className='flex flex-col gap-[40px] py-[48px] md:py-[96px] px-[20px] md:px-[120px] bg-foreground text-center'>
            <div className='flex flex-col gap-[16px] md:max-w-[792px] mx-auto'>
                <h4 className='text-[32px] md:text-[36px] text-font-primary font-semibold'>Siap Tingkatkan Efisiensi Absensi di Perusahaan Anda?</h4>
                <p className='text-[18px] md:text-[20px] font-normal text-font-secondary'>Jadwalkan demo dan konsultasi gratis bersama tim Presensi.co.id</p>
            </div>
            <a href="#" className='hover:bg-hover transition-all duration-300 bg-primary text-[16px] font-semibold px-[20px] py-[12px] rounded-[8px] w-fit mx-auto text-background'>Jadwalkan Demo Sekarang</a>
        </div>
    </section>
  )
}
