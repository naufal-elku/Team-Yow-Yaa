import { Metadata } from "next";
import { Lock, Database, User, CloudUpload, ScanFace } from "lucide-react";
import CardBanner from "@/components/common/cardBanner";


export const metadata: Metadata = {
    title: "Kebijakan & Privasi | Presensi",
    description: "Komitmen Kami Untuk Menjaga Privasi Anda",
};

export default function PrivacyPage() {
    return (
        <div className="flex flex-col w-full items-center justify-between mx-auto max-w-348 bg-background">
            <CardBanner>
                <div className="flex flex-col items-center justify-center w-full max-w-198 mx-auto gap-4 text-center">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-snug text-font-primary">
                        Komitmen Kami Untuk Menjaga Privasi Anda
                    </h1>
                    <p className="text-[20px] leading-7.5 font-normal text-font-secondary  text-center">
                        Di Presensi, kami sangat berkomitmen untuk menjaga serta melindungi setiap <br />keamanan data seluruh pelanggan kami
                    </p>
                </div>
            </CardBanner>


            <section className="flex flex-col w-full max-w-6xl mx-auto px-6 gap-20 pt-10 pb-14">
                <div className="flex flex-col items-start w-full gap-4 text-justify">
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 bg-secondary rounded-[20px] shrink-0">
                                <Lock className="w-6 h-6 text-primary" />
                            </div>

                            <h2 className="text-[24px] font-medium text-font-primary leading-8">
                                Enkripsi
                            </h2>
                        </div>

                        <p className="text-base font-normal text-justify text-font-secondary leading-relaxed pl-12">
                            Setiap data sensitif ditransmisikan menggunakan sistem keamanan enkripsi level 256 bit, salah satu dari standar enkripsi yang paling aman. Keseluruhan dari data anda akan terenkripsi dan disimpan kedalam server data dan station kami. Presensi juga telah mendapatkan verifikasi dari GeoTrust dengan cipher suite AES-256. Akan tetapi, sama seperti sistem lainnya, keamanan adalah tanggung jawab dari user atau pelanggan dan provider. Disarankan untuk menggunakan password yang kuat dan kompleks serta jangan beritahukan siapapun kecuali orang yang anda percayai.
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 bg-secondary rounded-[20px] shrink-0">
                                <Database className="w-6 h-6 text-primary" />
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
                                <CloudUpload className="w-6 h-6 text-primary" />
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
                                <User className="w-6 h-6 text-primary" />
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
                                <ScanFace className="w-6 h-6 text-primary" />
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

            <div className="text-center bg-gray-200 rounded-2xl p-7 max-w-7xl mx-auto my-15">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Butuh Informasi Lebih Lanjut?</h3>

                <p className="text-sm text-gray-600 mb-6 max-w-lg mx-auto leading-relaxed">Apabila Anda memiliki pertanyaan lebih lanjut terkait kebijakan privasi kami, silakan hubungi
                    kami. Tim kami siap memberikan penjelasan secara jelas dan responsif.
                </p>

                <button className="bg-blue-600 hover:bg-blue-400 text-white font-medium px-5 py-2.5 rounded-2xl">
                    Hubungi CS
                    <span></span>
                </button>
            </div>
        </div>
    )
}