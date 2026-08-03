import React from "react";
import { Metadata } from "next";
import CardBanner from "@/components/common/cardBanner";
import ArrowUpRight from "@/components/common/iconUpRight";
import Icon1 from "@/picture/majesticons_lock-line.png";
import Icon2 from "@/picture/majesticons_lock-line (2).png";
import Icon3 from "@/picture/majesticons_lock-line (3).png";
import Icon4 from "@/picture/majesticons_lock-line (4).png";
import Icon5 from "@/picture/majesticons_lock-line (5).png";


export const metadata: Metadata = {
    title: "Kebijakan & Privasi | Presensi",
    description: "Komitmen Kami Untuk Menjaga Privasi Anda",
};

export default function PrivacyPage() {
    return (
        <div className="flex flex-col w-full items-center justify-between mx-auto max-w-348 bg-background">
            <CardBanner>
                <div className="flex flex-col items-center justify-center w-full max-w-198 mx-auto gap-4 text-center">
                    <h1 className="text-[36px] font-semibold tracking-tight leading-snug text-font-primary">
                        Komitmen Kami Untuk Menjaga Privasi Anda
                    </h1>
                    <p className="text-[20px] leading-7.5 font-normal text-font-secondary  text-center">
                        Di Presensi, kami sangat berkomitmen untuk menjaga serta melindungi setiap <br />keamanan data seluruh pelanggan kami
                    </p>
                </div>
            </CardBanner>


            <section className="flex flex-col w-full max-w-5xl mx-auto px-6 gap-20 pt-10 pb-14">
                <div className="flex flex-col items-start w-full gap-4 text-justify space-y-7">
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 bg-secondary rounded-[20px] shrink-0">
                                <img src={Icon1.src} alt="" className="w-[24px] h-auto"/>
                            </div>

                            <h2 className="text-[24px] font-medium text-font-primary leading-8">
                                Enkripsi
                            </h2>
                        </div>

                        <p className="text-base font-normal text-justify text-font-secondary leading-relaxed pl-12 ">
                            Setiap data sensitif ditransmisikan menggunakan sistem keamanan enkripsi level 256 bit, salah satu dari standar enkripsi yang paling aman. Keseluruhan dari data anda akan terenkripsi dan disimpan kedalam server data dan station kami. Presensi juga telah mendapatkan verifikasi dari GeoTrust dengan cipher suite AES-256. Akan tetapi, sama seperti sistem lainnya, keamanan adalah tanggung jawab dari user atau pelanggan dan provider. Disarankan untuk menggunakan password yang kuat dan kompleks serta jangan beritahukan siapapun kecuali orang yang anda percayai.
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 bg-secondary rounded-[20px] shrink-0">
                                 <img src={Icon2.src} alt="" className="w-[24px] h-auto"/>
                            </div>

                            <h2 className="text-[24px] font-medium text-font-primary leading-8">
                                Data Center
                            </h2>
                        </div>

                        <p className="text-base font-normal text-justify text-font-secondary leading-relaxed pl-12">
                            Presensi juga menggunakan hosting dari Amazon Web Service yang diperuntukan memberikan prosedur keamanan terbaik dan juga
                            penyesuaian yang baik pada standar teliti dan juga regulasi.                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 bg-secondary rounded-[20px] shrink-0">
                                 <img src={Icon3.src} alt="" className="w-[24px] h-auto"/>
                            </div>

                            <h2 className="text-[24px] font-medium text-font-primary leading-8">
                                Back-up dan Review
                            </h2>
                        </div>

                        <p className="text-base font-normal text-justify text-font-secondary leading-relaxed pl-12">
                            Station data kami di back-up secara rutin, jadi anda tidak perlu khawatir dengan kehilangan data. Kami juga melakukan tinjauan
                            pada server, station data, dan pada aplikasi kami secara berkala dengan harapan setiap kejanggalan yang kami temukan dapat
                            teratasi dengan cepat.                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 bg-secondary rounded-[20px] shrink-0">
                                 <img src={Icon4.src} alt="" className="w-[24px] h-auto"/>
                            </div>

                            <h2 className="text-[24px] font-medium text-font-primary leading-8">
                                Informasi Akun
                            </h2>
                        </div>

                        <p className="text-base font-normal text-justify text-font-secondary leading-relaxed pl-12">
                            Seluruh data sensitif anda termasuk skrip penagihan anda juga telah kami enkripsi dan amankan dengan standar keamanan terbaiki
                            Kami dari presensi dan seluruh anggota tim kami tidak bisa mengakses informasi yang telah anda upload atau masukkan. Kami
                            memiliki prosedur internal yang sangat aman yang akan mencegah karyawan dan administrator lain dari akun anda. Presensi juga
                            mendokumentasikan serta melakukan inspeksi pada sejarah akun anda secara berkala untuk memastikan keamanan yang terbaik.
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 bg-secondary rounded-[20px] shrink-0">
                                 <img src={Icon5.src} alt="" className="w-[24px] h-auto"/>
                            </div>

                            <h2 className="text-[24px] font-medium text-font-primary leading-8">
                                Koleksi Data Wajah
                            </h2>
                        </div>

                        <p className="text-base font-normal text-justify text-font-secondary leading-relaxed pl-12">
                            Kami menyatakan bahwa data wajah yang kami kumpulkan sementara hanya digunakan sebagai verifikasi wajah dan identifikasi
                            visual ketika pengguna memutuskan untuk absen masuk dan pulang, dan retensi data wajah hanya bertahan 3 Bulan di database
                            kami karena diperlukan untuk pengecekan lebih lanjut oleh bagian HR dari masing-masing klien kami untuk memutuskan apakah
                            "pengguna" atau dalam hal ini "karyawan" benar-benar absen masuk atau pulang dengan melihat foto mereka yang telah mereka
                            ambil sebelumnya. Kami hanya mengungkapkan informasi data wajah yang kami kumpulkan sementara ke departemen manajemen
                            pengguna klien kami untuk pemeriksaan yang telah kami sebutkan sebelumnya.                        </p>
                    </div>

                </div>
            </section>
            <div className="w-full space-y-4 px-6 mt-[60px] max-w-[1200px] py-[40px] mx-auto my-[40px] bg-foreground rounded-[16px] text-center items-center">
                <h4 className="font-medium text-[20px] text-font-primary leading-[30px] ">Butuh Informasi Lebih Lanjut?</h4>

                <p className="text-sm  max-w-[792px] mb-6 text-center mx-auto leading-relaxed font-normal text-[18px] text-font-secondary">Apabila Anda memiliki pertanyaan lebih lanjut terkait kebijakan privasi kami, silakan hubungi 
                    kami. Tim kami siap memberikan penjelasan secara jelas dan responsif.
                </p>

                <button className="mx-auto flex gap-[8px] bg-primary px-[18px] py-[10px] text-background font-semibold text-[16px] leading-[24px] rounded-[8px]  hover:bg-hover transition-all duration-200">
                    Hubungi CS <ArrowUpRight/>
                    <span></span>
                </button>
            </div>

        </div>
    )
}