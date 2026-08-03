import CardBanner from "@/components/common/cardBanner";
import { AdressIcon, MailIcon,  CallIcon} from "@/components/icon/mail";

export default function ContactPage() {
  return (
    <div>
      <CardBanner>
        <div className="mx-auto w-full max-w-[792px] h-[120px] flex flex-col items-center gap-4 text-center">
          <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-font-primary">
            Hubungi Kami
          </h2>
          <p className="text-[20px] leading[30px] text-center text-font-secondary">
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
              <a href="" className="text-base leading-6 mb-4 underline font-normal">
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
              <a href="" className="text-base leading-6 underline font-normal">
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
              <a href="" className="text-base leading-6 underline font-normal">
                Jl. Khudori No.20b, RW.01, Gadingan, Wates, Kec. Wates, Kab.
                Kulon Progo, Daerah Istimewa Yogyakarta 55651
              </a>
            </div>
            </div>
          </div>

          <div className="rounded-2xl bg-bg-tabel p-6">
          <h3 className="mb-6 block font-medium  font-semiboldtext-font-primary text-xl leading-[30px] mb-5">Kirim pesan kepada kami</h3>
          <form action="">
            <div>
                <label className="text-[14px] leading-5 font-medium flex flex-col text-font-secondary">
                    Subjek
                </label>
            <input type="text" placeholder="Subjek..." />
            </div>
            <div>
                <label className="text-[14px] leading-5 font-medium flex flex-col text-font-secondary">
                    Nama
                </label>
            <input type="text" placeholder="Nama..." />
             </div>
             <div>
                <label className="text-[14px] leading-5 font-medium flex flex-col text-font-secondary">
                    No. Telepon
                </label>
            <input type="text" placeholder="No. Telepon.." />
            </div>
            <textarea rows={6} placeholder="Pesan..."></textarea>
            <button>
                Kirim Pesan
            </button>
          </form>
        </div>
        </div>

        
      </section>
    </div>
  );
}
