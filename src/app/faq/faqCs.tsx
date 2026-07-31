import React from 'react'
import ArrowUpRight from "@/components/common/iconUpRight"
import CardCs from '@/components/common/cardCs'

export default function faqCs() {
  return (
    <CardCs className='max-w-[792px] flex flex-col gap-[8px]'>
      <h4 className='font-medium text-[20px] text-font-primary leading-[30px]'>Masih ada Pertanyaan yang Belum Terjawab?</h4>
      <p className='font-normal text-[18px] text-font-secondary leading-[28px] mb-[32px]'>Tim kami siap membantu, mulai dari hal teknis hingga solusi yang sesuai untuk bisnis anda.</p>
      <button className='mx-auto flex gap-[8px] bg-primary px-[18px] py-[10px] text-background font-semibold text-[16px] leading-[24px] rounded-[8px] hover:bg-hover transition-all duration-200'>Hubungi CS<ArrowUpRight /></button>
    </CardCs>
  )
}
