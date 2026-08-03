import React from 'react'
import CardBanner from '../common/cardBanner'
import Baground from '@/picture/backround.png'
import { RocketIcon } from '../icon/rocet'

export default function hero() {
  return (
   <CardBanner>
        <div className='flex flex-col gap-[24px]'>
            <p className='mx-auto flex gap-[8px] border-1 border-solid py-[4px] px-[14px] text-[12px] md:text-[14px] font-medium rounded-[16px] text-primary border-border-blue-primary bg-bg-blue-secondary/30'><RocketIcon className='my-[4px]'/> Langganan 12 bulan dan dapatkan diskon 15%</p>
            <h4 className='font-bold text-[40px] md:text-[60px] text-font-primary'>Kelola <span className='text-grad bg-gradient-to-b from-gradient-primary to-gradient-secondary bg-clip-text text-transparent'>Absensi</span> Tanpa Ribet</h4>
            <p className='font-normal text-[20px] max-w-[310px] md:max-w-[754px] text-font-secondary mx-auto'>Presensi merupakan aplikasi absensi karyawan berbasis Aplikasi. Dapatkan laporan absensi karyawan dengan mudah, menggunakan presensi.co.id</p>
            <div className='mt-[48px] mb-[64px] flex flex-col md:flex-row gap-[12px] mx-auto'> 
                <button className='font-semibold text-[16px] py-[12px] px-[20px] rounded-[8px] bg-primary text-background hover:bg-background hover:border-1 hover:border-border-btn hover:text-font-secondary transition-all duration-300'>Coba Sekarang</button>
                <button className='font-semibold text-[16px] py-[12px] px-[20px] rounded-[8px] bg-background border-1 border-border-btn text-font-secondary hover:bg-primary hover:text-background transition-all duration-300'>Jadwalkan Demo</button>
            </div>
        </div>
        <div className='relative max-w-[310px] md:max-w-[1264px] mx-auto overflow-hidden'>
          <img src={Baground.src} alt="" className='w-full h-auto block'/>
          <div className='absolute bg-gradient-to-t from-background to-transparent bottom-0 inset-x-0 h-3 md:h-15 pointer-events-none'></div>
        </div>
    </CardBanner>
  )
}
