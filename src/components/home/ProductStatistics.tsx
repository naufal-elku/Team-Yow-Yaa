import React from 'react'
import Statics from "@/picture/productStatics.png"

export default function ProductStatistics() {
  return (
    <section className='w-full px-[20px] md:px-[120px] py-[80px]'>
        <div className='flex flex-wrap gap-[33px] justify-center items-center'>
            <h4 className='text-font-secondary text-[24px] md:text-[32px] font-semibold w-full md:max-w-[714px]'>Lebih dari <span className='text-font-primary'>8 Tahun Presensi</span> Mendampingi <span className='text-primary'>Puluhan Ribu Perusahaan</span> di Indonesia <span className='text-font-primary'>Menyederhanakan Pengelolaan Kehadiran Karyawan</span> 
            </h4>

            <div>
                <img src={Statics.src} alt="" className='w-auto h-[110px] md:h-[120px]'/>
            </div>
        </div>
    </section>
  )
}
