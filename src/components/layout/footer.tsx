import Link from "next/link";
import Logo from "@/components/layout/logo";
import { NAV_LINKS } from "@/data/navigation";
import { AppStoreBadges } from "./appstorebadges";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      {/* Top */}
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <Logo />

            <p className="mt-6 text-[16px] leading-7 text-gray-600 max-w-[260px]">
              Kelola absensi karyawan tanpa ribet dengan Presensi.co.id
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              Kontak
            </h3>

            <div className="space-y-4 text-gray-600">

              <div className="flex items-start gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-gray-500 shrink-0 mt-0.5"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                <p>+62 882005006000</p>
              </div>

              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-gray-500 shrink-0 mt-0.5"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                <p>presensi.co.id@gmail.com</p>
              </div>

              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-gray-500 shrink-0 mt-0.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>

                <p>
                  Jl. Khudori No.20b, RW.01,
                  Gadingan, Wates, Kec. Wates,
                  Kabupaten Kulon Progo,
                  Daerah Istimewa Yogyakarta
                  55651
                </p>
              </div>

            </div>
          </div>

          {/* Akses Cepat */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              Akses Cepat
            </h3>

            <ul className="space-y-4 text-gray-600">

              <li>
                <Link href="/features">
                  Fitur Aplikasi
                </Link>
              </li>

              <li>
                <Link href="/dashboard">
                  Fitur CMS/Dashboard
                </Link>
              </li>

              <li>
                <Link href="/pricing">
                  Harga
                </Link>
              </li>

              <li>
                <Link href="/blog">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/faq">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Kontak Kami
                </Link>
              </li>

              <li>
                <Link href="/privacy">
                  Kebijakan & Privasi
                </Link>
              </li>

            </ul>
          </div>

          {/* Store */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              Tersedia di
            </h3>

            <div className="space-y-3">

              <AppStoreBadges 
        playStoreUrl="https://play.google.com/store/apps/details?id=com.yourbrand"
        appStoreUrl="https://apps.apple.com/app/id123456789"
      />

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t bg-gray-50">
        <div className="mx-auto max-w-[1200px] h-20 px-6 lg:px-0 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-sm">
            © 2026. All rights reserved. Copyright Presensi.co.id
          </p>

          <div className="flex items-center gap-6 text-gray-400 text-2xl">
            <Link href="#">📷</Link>
            <Link href="#">👍</Link>
            <Link href="#">▶️</Link>
            <Link href="#">🎵</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}