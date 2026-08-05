import Image from "next/image"
import About from "@/picture/about2.png"

export default function About2 () {
    return (
        
            <section className="mx-auto max-w-[1392px] px-6 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-20 items-start">

    {/* Kiri */}
    <div className="space-y-14">

      {/* Visi */}
      <div>
        <div className="w-8 h-1.5 rounded-full bg-primary mb-2"></div>

        <h2 className="text-[32px] font-semibold leading-[40px] text-font-primary mb-2">
          Visi
        </h2>

        <p className="text-[18px] leading-[26px] text-font-secondary font-normal font-montserrat mb-12">
          Menjadi ekosistem teknologi manajemen tenaga kerja paling adaptif dan
          tepercaya yang menggerakkan transformasi digital...
        </p>
      </div>

      {/* Misi */}
      <div>
        <div className="w-8 h-1.5 rounded-full bg-primary mb-2"></div>

        <h2 className="text-[32px] font-semibold leading-[40px] text-font-primary mb-2">
          Misi
        </h2>

        <div className="space-y-8 text-[18px] leading-[26px] text-font-secondary font-normal font-montserrat">
          <p>
           Menghadirkan Otomatisasi yang Akurat: Mengembangkan sistem pelacakan kehadiran real-time dan pengelolaan data yang andal untuk memberikan transparansi penuh serta akurasi mendalam bagi manajemen perusahaan.
          </p>

          <p>
           Mengoptimalkan Produktivitas dan Efisiensi: Membantu para pengusaha dan pemimpin HR menyederhanakan proses birokrasi operasional yang kompleks melalui integrasi sistem yang cerdas.
          </p>

          <p>
            Menyediakan Teknologi yang Inklusif dan Mudah Digunakan: Merancang platform yang intuitif dan mudah diakses oleh berbagai sektor industri mulai dari ritel, manufaktur, hingga layanan profesional guna mendukung fleksibilitas kerja yang tinggi.
          </p>
          <p>
            Menjadi Mitra Strategis Pertumbuhan Bisnis: Berkomitmen penuh dalam memberikan nilai tambah dan solusi yang membawa perubahan bermakna bagi efektivitas operasional harian mitra kami.
          </p>
        </div>
      </div>

    </div>

  <div>
      <Image
        src={About}
        alt="Visi Misi"
        width={450}
        height={886}
        className="rounded-2xl object-cover"
      />
    </div>

  </div>
</section>
    )
}