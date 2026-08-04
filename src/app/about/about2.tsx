export default function About2 () {
    return (
        
            <section className="mx-auto max-w-[1392px] px-6 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-20 items-start">

    {/* Kiri */}
    <div className="space-y-14">

      {/* Visi */}
      <div>
        <div className="w-6 h-1 rounded-full bg-primary mb-4"></div>

        <h2 className="text-[32px] font-semibold leading-[40px] text-font-primary mb-4">
          Visi
        </h2>

        <p className="text-[18px] leading-[26px] text-font-secondary">
          Menjadi ekosistem teknologi manajemen tenaga kerja paling adaptif dan
          tepercaya yang menggerakkan transformasi digital...
        </p>
      </div>

      {/* Misi */}
      <div>
        <div className="w-6 h-1 rounded-full bg-primary mb-4"></div>

        <h2 className="text-[32px] font-semibold leading-[40px] text-font-primary mb-6">
          Misi
        </h2>

        <div className="space-y-8 text-[18px] leading-[26px] text-font-secondary">
          <p>
            Menghadirkan otomatisasi yang akurat...
          </p>

          <p>
            Mengoptimalkan produktivitas dan efisiensi...
          </p>

          <p>
            Menyediakan teknologi yang inklusif...
          </p>
        </div>
      </div>

    </div>

    {/* Kanan */}
    {/* <div>
      <Image
        src={VisionImage}
        alt="Visi Misi"
        width={450}
        height={600}
        className="rounded-2xl object-cover"
      />
    </div> */}

  </div>
</section>
    )
}