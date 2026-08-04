import CardBanner from "@/components/common/cardBanner";
import { AdressIcon, MailIcon,  CallIcon} from "@/components/icon/mail";
import CTA2Section from "@/components/home/CTA2Section";

export default function ContactPage() {
  return (
    <div>
      <CardBanner>
        <div className="mx-auto w-full max-w-[792px] h-[120px] flex flex-col items-center gap-4 text-center">
          <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-font-primary">
            Hubungi Kami
          </h2>
          <p className="text-[20px] leading-7.5 text-center text-font-secondary">
            Konsultasikan kebutuhan atau kendala Anda bersama tim kami — kami
            siap membantu.
          </p>
        </div>
      </CardBanner>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* left */}
          <div className="flex flex-col gap-12">
            <div className=" flex flex-col gap-5">
              <div>
                <MailIcon/>
              </div>
            
            <div>
              <h3 className="text-[18px] text-font-primary leading-7 font-medium">Email Kami</h3>
              <p className="text-[14px] leading-5 italic mb-[14px] text-font-secondary">Untuk pertanyaan umum, bantuan teknis,atau kerja sama.</p>
              <a href="mailto:presensi.co.id@gmail.com" className="text-base leading-6 mb-4 underline font-normal text-font-secondary">
                presensi.co.id@gmail.com</a>
            </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <CallIcon />
              </div>
           
            <div>
              <h3 className="text-[18px] text-font-primary leading-7 font-medium">Telepon/Whatsapp</h3>
              <p className="italic text-[14px] leading-5 mb-[14px] text-font-secondary">
                Tersedia setiap Senin - Sabtu, pukul 08.00-17.00 WIB.</p>
              <a href="https://wa.me/628979646346" className="text-base leading-6 underline font-normal text-font-secondary">
                +62 8979646346</a>
            </div>
             </div>
            <div className="flex flex-col gap-5">
              <div>
                <AdressIcon/>
              </div>
            
            <div>
              <h3 className="text-[18px] text-font-primary leading-7 font-medium">Alamat Kantor</h3>
              <p className="italic text-[14px] leading-5 mb-[14px] text-font-secondary">Kunjungan hanya melalui janji temu.</p>
              <a href="" className="text-base leading-6 underline font-normal text-font-secondary">
                Jl. Khudori No.20b, RW.01, Gadingan, Wates, Kec. Wates, Kab.
                Kulon Progo, Daerah Istimewa Yogyakarta 55651
              </a>
            </div>
            </div>
          </div>

          <div className="rounded-2xl bg-bg-tabel p-6">
          <h3 className="mb-6 block font-semibold text-font-primary text-xl leading-[30px] ">Kirim pesan kepada kami</h3>
          <form action="" className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1.5">
                <label htmlFor="subjek" className="text-[14px] leading-5 font-medium text-font-secondary ">
                    Subjek
                </label>
            <input type="text" placeholder="Subjek..." className="bg-background w-full h-11 py-2.5 px-3.5 rounded-lg outline-none " />
            </div>
            <div className="flex flex-col gap-y-1.5">
                <label htmlFor="nama" className="text-[14px] leading-5 font-medium  text-font-secondary">
                    Nama
                </label>
            <input type="text" placeholder="Nama..." className="bg-background w-full h-11 py-2.5 px-3.5 rounded-lg outline-none" />
             </div>
             <div className="flex flex-col gap-y-1.5">
                <label htmlFor="No.Telepon" className="text-[14px] leading-5 font-medium text-font-secondary">
                    No. Telepon
                </label>
            <input type="text" placeholder="No. Telepon.." className="bg-background w-full h-11 py-2.5 px-3.5 rounded-lg outline-none"/>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="pesan" className="text-[14px] leading-5 font-medium text-font-secondary">
                Pesan
              </label>
            <textarea rows={6} placeholder="Pesan..." className="bg-background w-full h-[160px] px-3.5 py-2.5 gap-2 rounded-lg opacity-100 resize-none outline-none flex-col focus:border-primary"></textarea>
            </div>
            <button type="submit" className="bg-primary py-2.5 px-9 rounded-lg gap-8 text-background font-medium text-base">
                Kirim Pesan
            </button>
          </form>
        </div>
        </div>
   
      </section>
      <CTA2Section/>
    </div>
  );
}
