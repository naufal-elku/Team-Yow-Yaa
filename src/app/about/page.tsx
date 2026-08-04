import CardBanner from "@/components/common/cardBanner"
import Logo from "@/components/layout/logo"
import Rectangle from "@/picture/Rectangle.png"
import Image from "next/image"
import { LogoWhite, Quote } from "@/components/icon/about"
import About2 from "./about2"

export default function AboutPage () {
    return (
        <div>
            <CardBanner>
                <div className="mx-auto w-full max-w-[792px] h-[120px] flex flex-col items-center gap-4 text-center">
                <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-font-primary">
                    Tentang Kami
                </h2>
                <p className="text-[20px] leading-7.5 text-center text-font-secondary">
                    Dengan mengutamakan kualitas, inovasi, dan kepercayaan, kami terus berkembang untuk menghadirkan solusi yang memberikan pengalaman terbaik
                </p>
                </div>
            </CardBanner>
            <section className="mx-auto w-full max-w-[1392px] px-6 py-24">
                {/* atas */}
                <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 items-start">
                    <div className="max-w-[400px]">
                        <div>
                           <Quote />

                       <div className="mt-6 space-y-8 max-w-[380px]">
                        <p className="text-[18px] leading-6.5 font-normal text-font-secondary ">
                            Tingginya tuntutan akan efisiensi dan fleksibilitas
                            kerja di tengah laju digitalisasi menjadi pemicu utama kami dalam menghadirkan solusi manajemen tenaga kerja yang adaptif.
                        </p>
                        <p className="text-[18px] leading-6.5 font-normal text-font-secondary ">
                            Kami meyakini bahwa sistem presensi bukan hanya sekedar alat untuk mencatat kehadiran, melainkan instrumen krusial yang mampu menciptakan nilai
                            tambah, transparansi, serta akurasi yang mendalam
                            bagi pertumbuhan bisnis.
                        </p>
                        </div>
                         </div>
                    
                    <Image
  src={Rectangle}
  alt="Tentang Kami"
  width={450}
  height={200}
  className="rounded-2xl object-cover mt-8"
/>
                </div>
                {/* Kanan */}
    <div className="w-full max-w-[786px] rounded-2xl bg-about p-[60px] flex flex-col gap-10">
      <div className="flex justify-end">
       <LogoWhite />
      </div>

      <div className="max-w-full space-y-8 text-[18px] leading-[26px] font-normal text-background">
        <p>
            Presensi hadir sebagai platform dan ekosistem cerdas yang dirancang
            untuk mengelola tenaga kerja secara menyeluruh. Kami menyediakan
            otomatisasi pelacakan kehadiran real-time, pemantauan produktivitas,
            dan penyederhanaan rekapitulasi data untuk membantu para pengusaha
            serta pemimpin HR mengoptimalkan operasional harian mereka.
        </p>

        <p>
            Melalui integrasi sistem yang andal, Presensi menjadi mitra terpercaya
            bagi berbagai sektor industri mulai dari ritel, manufaktur, outsourcing,
            layanan kesehatan, lembaga edukasi, hingga layanan profesional dalam
            memangkas proses birokrasi operasional yang kompleks.
        </p>

        <p>
            Kami berkomitmen penuh dalam menyediakan teknologi yang mudah
            digunakan gunakan  membantu bisnis bergerak lebih efektif dan
            membawa perubahan yang bermakna.
        </p>
      </div>
      </div>
    </div>
            </section>
<About2/>
        </div>
    )
}