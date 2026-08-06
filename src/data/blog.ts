import image from "@/picture/Image.png"
import image1 from "@/picture/Image (1).png"
import image2 from "@/picture/Image (2).png"

export interface BlogPost {
    id: string;
    date: string;
    title: string;
    description: string;
    image: string;
    slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        date: "17 Juli 2025",
        title: "Sering Telat Membayar Gaji Karyawan? Ini Dia Dampak dan Cara Mengatasinya! ",
        description: "Telat membayar gaji karyawan berdampak besar bagi perusahaan. Pelajari dampak dan cara mengatasi telat membayar gaji karyawan di sini agar bisnis tetap sehat dan karyawan tetap loyal!",
        image: image.src,
        slug: "Sering-Telat-Membayar-Gaji-Karyawan"
        
    },
    {
        id: "2",
        date: "15 Juli 2025",
        title: "Cara Mengatasi Kecurangan Absensi dengan Sistem Absensi Online",
        description: "Temukan cara efektif mengatasi kecurangan absensi karyawan dengan sistem absensi yang akurat dan otomatis. Tingkatkan disiplin dan produktivitas kerja secara menyeluruh.",
        image: image1.src,
        slug: "Cara-Mengatasi-Kecurangan-Absensi-dengan-Sistem-Absensi-Online "
    },
    {
        id: "3",
        date: "13 Juli 2025",
        title: "5 Rekomendasi Aplikasi Time Tracking Terbaik 2025",
        description: "Cari rekomendasi aplikasi time tracking terbaik 2025? Temukan pilihan aplikasi yang membantu Anda mengelola waktu dengan lebih efisien dan meningkatkan produktivitas.",
        image: image2.src,
        slug: "5-rekomendasi-aplikasi-time-tracking-terbaik-2025",
    },
    {
        id: "4",
        date: "13 Juli 2025",
        title: "5 Rekomendasi Aplikasi Time Tracking Terbaik 2025",
        description: "Cari rekomendasi aplikasi time tracking terbaik 2025? Temukan pilihan aplikasi yang membantu Anda mengelola waktu dengan lebih efisien dan meningkatkan produktivitas.",
        image: image2.src,
        slug: "5-rekomendasi-aplikasi-time-tracking-terbaik-2025",
    },
    {
        id: "5",
        date: "17 Juli 2025",
        title: "Sering Telat Membayar Gaji Karyawan? Ini Dia Dampak dan Cara Mengatasinya! ",
        description: "Telat membayar gaji karyawan berdampak besar bagi perusahaan. Pelajari dampak dan cara mengatasi telat membayar gaji karyawan di sini agar bisnis tetap sehat dan karyawan tetap loyal!",
        image: image.src,
        slug: "Sering-Telat-Membayar-Gaji-Karyawan"
    },
    {
        id: "6",
        date: "13 Juli 2025",
        title: "5 Rekomendasi Aplikasi Time Tracking Terbaik 2025",
        description: "Cari rekomendasi aplikasi time tracking terbaik 2025? Temukan pilihan aplikasi yang membantu Anda mengelola waktu dengan lebih efisien dan meningkatkan produktivitas.",
        image: image2.src,
        slug: "5-rekomendasi-aplikasi-time-tracking-terbaik-2025",
    },
    
]