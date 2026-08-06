import { ReasonType } from "@/types/ReasonType";

import Feature1 from "@/picture/Featured icon (1).png";
import Feature2 from "@/picture/Featured icon (2).png";
import Feature3 from "@/picture/Featured icon (3).png";
import Feature4 from "@/picture/Featured icon (4).png";
import Feature5 from "@/picture/Featured icon (5).png";
import Feature6 from "@/picture/Featured icon (6).png";

export const Reason: ReasonType [] = [
    {
        id: 1,
        Icon: Feature1.src,
        Title: "Teknologi berbasis GPS",
        Text: "GPS (Global Positioning System) memungkinkan perusahaan Anda untuk mencatat banyak titik kehadiran setiap karyawan."
    },
    {
        id: 2,
        Icon: Feature2.src,
        Title: "Fleksibel",
        Text: "Anda punya kebijakan absen yang berbeda-beda untuk setiap divisi? Presensi dapat mengatur berdasarkan grup dan pengaturan dengan mudah."
    },
    {
        id: 3,
        Icon: Feature3.src,
        Title: "Meminimalisir Kecurangan",
        Text: "Semua data absensi karyawan akan tersimpan secara digital dan terenkripsi secara otomatis di sistem cloud kami, sehingga meminimalisir kecurangan dan manipulasi data."
    },
    {
        id: 4,
        Icon: Feature4.src,
        Title: "Fleksibel Untuk Karyawan Seles",
        Text: "Presensi memungkinkan untuk mencatat dan memantau banyak titik kunjungan kehadiran bagi karyawan lapangan/sales, sesuai dengan lokasi yang telah ditentukan sebelumnya."
    },
    {
        id: 5,
        Icon: Feature5.src,
        Title: "Lebih Praktis",
        Text: "Karyawan tidak perlu lagi mengantri/menggunakan mesin absensi konvensional, karyawan dapat melakukan absensi langsung melalui smartphone mereka masing-masing"
    },
    {
        id: 6,
        Icon: Feature6.src,
        Title: "Rekap Absensi Yang Baik",
        Text: "Presensi secara otomatis mencatat dan menyimpan riwayat absensi karyawan secara lengkap dan real-time seperti Hadir, Terlambat, Izin, Cuti, dan Tidak Hadir"
    },
];