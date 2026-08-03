import React from 'react'
import Feature1 from "@/picture/Featured icon (1).png"
import Feature2 from "@/picture/Featured icon (2).png"
import Feature3 from "@/picture/Featured icon (3).png"
import Feature4 from "@/picture/Featured icon (4).png"
import Feature5 from "@/picture/Featured icon (5).png"
import Feature6 from "@/picture/Featured icon (6).png"

export default function ourStrengths() {
  return (
    <section className='mx-auto flex flex-col gap-[40px] md:gap-[64px] pt-[48px] md:pt-[96px] px-[20px]'>
        <div className='mx-auto text-center flex flex-col gap-[16px]'>
            <h4 className='font-semibold text-[32px] md:text-[36px] text-font-primary'>Mengapa Presensi Lebih Baik?</h4>
            <p className='mx-auto font-normal text-[18px] md:text-[20px] text-font-secondary max-w-[792px]'>Solusi absensi modern yang hemat waktu, efisien, dan siap mendukung produktivitas tim Anda.</p>
        </div>

        <div className='w-full max-w-[1200px] mx-auto flex flex-wrap gap-[24px] justify-center items-center'>
            <div className='w-full md:max-w-[384px] flex flex-col gap-[24px] text-center p-[16px] bg-background rounded-[12px] transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg'>
                <img src={Feature1.src} alt="" className='max-w-[48px] h-auto mx-auto'/>
                <div className='flex flex-col text-center gap-[8px]'>
                    <p className='font-medium text-[20px] text-font-primary'>Teknologi berbasis GPS</p>
                    <p className='text-[16px] font-normal text-font-secondary'>GPS (Global Positioning System) memungkinkan perusahaan Anda untuk mencatat banyak titik kehadiran setiap karyawan.</p>
                </div>
            </div>
            <div className='w-full md:max-w-[384px] flex flex-col gap-[24px] text-center p-[16px] bg-background rounded-[12px] transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg'>
                <img src={Feature2.src} alt="" className='max-w-[48px] h-auto mx-auto'/>
                <div className='flex flex-col text-center gap-[8px]'>
                    <p className='font-medium text-[20px] text-font-primary'>Fleksibel</p>
                    <p className='text-[16px] font-normal text-font-secondary'>Anda punya kebijakan absen yang berbeda-beda untuk setiap divisi? Presensi dapat mengatur berdasarkan grup dan pengaturan dengan mudah.</p>
                </div>
            </div>
            <div className='w-full md:max-w-[384px] flex flex-col gap-[24px] text-center p-[16px] bg-background rounded-[12px] transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg'>
                <img src={Feature3.src} alt="" className='max-w-[48px] h-auto mx-auto'/>
                <div className='flex flex-col text-center gap-[8px]'>
                    <p className='font-medium text-[20px] text-font-primary'>Meminimalisir Kecurangan</p>
                    <p className='text-[16px] font-normal text-font-secondary'>Semua data absensi karyawan akan tersimpan secara digital dan terenkripsi secara otomatis di sistem cloud kami, sehingga meminimalisir kecurangan dan manipulasi data.</p>
                </div>  
            </div>
            <div className='w-full md:max-w-[384px] flex flex-col gap-[24px] text-center p-[16px] bg-background rounded-[12px] transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg'>
                <img src={Feature4.src} alt="" className='max-w-[48px] h-auto mx-auto'/>
                <div className='flex flex-col text-center gap-[8px]'>
                    <p className='font-medium text-[20px] text-font-primary'>Fleksibel Untuk Karyawan Seles</p>
                    <p className='text-[16px] font-normal text-font-secondary'>Presensi memungkinkan untuk mencatat dan memantau banyak titik kunjungan kehadiran bagi karyawan lapangan/sales, sesuai dengan lokasi yang telah ditentukan sebelumnya.</p>
                </div>
            </div>
            <div className='w-full md:max-w-[384px] flex flex-col gap-[24px] text-center p-[16px] bg-background rounded-[12px] transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg'>
                <img src={Feature5.src} alt="" className='max-w-[48px] h-auto mx-auto'/>
                <div className='flex flex-col text-center gap-[8px]'>
                    <p className='font-medium text-[20px] text-font-primary'>Lebih Praktis</p>
                    <p className='text-[16px] font-normal text-font-secondary'>Karyawan tidak perlu lagi mengantri/menggunakan mesin absensi konvensional, karyawan dapat melakukan absensi langsung melalui smartphone mereka masing-masing</p>
                </div>
            </div>
            <div className='w-full md:max-w-[384px] flex flex-col gap-[24px] text-center p-[16px] bg-background rounded-[12px] transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg'>
                <img src={Feature6.src} alt="" className='max-w-[48px] h-auto mx-auto'/>
                <div className='flex flex-col text-center gap-[8px]'>
                    <p className='font-medium text-[20px] text-font-primary'>Rekap Absensi Yang Baik</p>
                    <p className='text-[16px] font-normal text-font-secondary'>Presensi secara otomatis mencatat dan menyimpan riwayat absensi karyawan secara lengkap dan real-time seperti Hadir, Terlambat, Izin, Cuti, dan Tidak Hadir</p>
                </div>
            </div>
        </div>
    </section>
  )
}
