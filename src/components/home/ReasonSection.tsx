import React from "react";
import Feature1 from "@/picture/Featured icon (1).png";
import Feature2 from "@/picture/Featured icon (2).png";
import Feature3 from "@/picture/Featured icon (3).png";
import Feature4 from "@/picture/Featured icon (4).png";
import Feature5 from "@/picture/Featured icon (5).png";
import Feature6 from "@/picture/Featured icon (6).png";

export default function ourStrengths() {
  return (
    <section className="mx-auto flex flex-col gap-10 px-5 pt-12 md:gap-16 md:pt-24">
      <div className="mx-auto flex flex-col gap-4 text-center">
        <h4 className="text-font-primary text-[32px] font-semibold md:text-[36px]">
          Mengapa Presensi Lebih Baik?
        </h4>
        <p className="text-font-secondary mx-auto max-w-xs text-[18px] font-normal md:text-[20px]">
          Solusi absensi modern yang hemat waktu, efisien, dan siap mendukung
          produktivitas tim Anda.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-6">
        <div className="bg-background flex w-full flex-col gap-6 rounded-xl p-4 text-center transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:max-w-[384px]">
          <img
            src={Feature1.src}
            alt=""
            className="mx-auto h-auto max-w-12"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-font-primary text-[20px] font-medium">
              Teknologi berbasis GPS
            </p>
            <p className="text-font-secondary text-[16px] font-normal">
              GPS (Global Positioning System) memungkinkan perusahaan Anda untuk
              mencatat banyak titik kehadiran setiap karyawan.
            </p>
          </div>
        </div>
        <div className="bg-background flex w-full flex-col gap-6 rounded-xl p-4 text-center transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:max-w-[384px]">
          <img
            src={Feature2.src}
            alt=""
            className="mx-auto h-auto max-w-12"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-font-primary text-[20px] font-medium">
              Fleksibel
            </p>
            <p className="text-font-secondary text-[16px] font-normal">
              Anda punya kebijakan absen yang berbeda-beda untuk setiap divisi?
              Presensi dapat mengatur berdasarkan grup dan pengaturan dengan
              mudah.
            </p>
          </div>
        </div>
        <div className="bg-background flex w-full flex-col gap-6 rounded-xl p-4 text-center transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:max-w-[384px]">
          <img
            src={Feature3.src}
            alt=""
            className="mx-auto h-auto max-w-12"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-font-primary text-[20px] font-medium">
              Meminimalisir Kecurangan
            </p>
            <p className="text-font-secondary text-[16px] font-normal">
              Semua data absensi karyawan akan tersimpan secara digital dan
              terenkripsi secara otomatis di sistem cloud kami, sehingga
              meminimalisir kecurangan dan manipulasi data.
            </p>
          </div>
        </div>
        <div className="bg-background flex w-full flex-col gap-6 rounded-xl p-4 text-center transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:max-w-[384px]">
          <img
            src={Feature4.src}
            alt=""
            className="mx-auto h-auto max-w-12"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-font-primary text-[20px] font-medium">
              Fleksibel Untuk Karyawan Seles
            </p>
            <p className="text-font-secondary text-[16px] font-normal">
              Presensi memungkinkan untuk mencatat dan memantau banyak titik
              kunjungan kehadiran bagi karyawan lapangan/sales, sesuai dengan
              lokasi yang telah ditentukan sebelumnya.
            </p>
          </div>
        </div>
        <div className="bg-background flex w-full flex-col gap-6 rounded-xl p-4 text-center transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:max-w-[384px]">
          <img
            src={Feature5.src}
            alt=""
            className="mx-auto h-auto max-w-12"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-font-primary text-[20px] font-medium">
              Lebih Praktis
            </p>
            <p className="text-font-secondary text-[16px] font-normal">
              Karyawan tidak perlu lagi mengantri/menggunakan mesin absensi
              konvensional, karyawan dapat melakukan absensi langsung melalui
              smartphone mereka masing-masing
            </p>
          </div>
        </div>
        <div className="bg-background flex w-full flex-col gap-6 rounded-xl p-4 text-center transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg md:max-w-[384px]">
          <img
            src={Feature6.src}
            alt=""
            className="mx-auto h-auto max-w-12"
          />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-font-primary text-[20px] font-medium">
              Rekap Absensi Yang Baik
            </p>
            <p className="text-font-secondary text-[16px] font-normal">
              Presensi secara otomatis mencatat dan menyimpan riwayat absensi
              karyawan secara lengkap dan real-time seperti Hadir, Terlambat,
              Izin, Cuti, dan Tidak Hadir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
