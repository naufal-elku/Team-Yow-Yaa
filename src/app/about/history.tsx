import { Building2, User } from 'lucide-react';

export default function History() {
  return (
    <section className="font-montserrat">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-[120px]">
        {/* Kiri: Teks Utama */}
        <div className="max-w-[714px]">
          <h2 className="text-[32px] font-semibold leading-10 text-history">
            Lebih dari <span className="text-font-primary">8 Tahun Presensi</span> Mendampingi{' '}
            <span className="font-bold text-primary">Puluhan Ribu Perusahaan</span>{' '}
            di Indonesia <span className="text-font-primary">Menyederhanakan Pengelolaan Kehadiran Karyawan</span>
          </h2>
        </div>

        {/* Kanan: Statistik (Flex-row tanpa scroll) */}
        <div className="flex w-full flex-row items-center justify-between gap-3 sm:justify-start sm:gap-8 lg:w-auto lg:gap-12">
          {/* Stat 1: Perusahaan */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Building2 className="h-8 w-8 shrink-0 text-font-secondary sm:h-12 sm:w-12" />
            <div>
              <p className="mb-2 text-[11px] font-medium uppercase leading-tight text-font-secondary sm:mb-4 sm:text-[14px] lg:mb-[24px]">
                DIPERCAYA OLEH
              </p>
              <h3 className="text-[24px] font-bold leading-none text-primary sm:text-[36px] sm:leading-[46px]">
                10K+
              </h3>
              <p className="mt-1 text-[13px] font-normal leading-tight text-font-secondary sm:mt-2 sm:text-[16px]">
                Perusahaan
              </p>
            </div>
          </div>

          {/* Vertical Divider (Responsif tinggi & ketebalan) */}
          <div className="h-[90px] w-[2px] shrink-0 bg-gray-200 sm:h-[142px]" />

          {/* Stat 2: Pengguna */}
          <div className="flex items-center gap-3 sm:gap-6">
            <User className="h-8 w-8 shrink-0 text-font-secondary sm:h-12 sm:w-12" />
            <div>
              <p className="mb-2 text-[11px] font-medium uppercase leading-tight text-font-secondary sm:mb-4 sm:text-[14px] lg:mb-[24px]">
                DIGUNAKAN OLEH
              </p>
              <h3 className="text-[24px] font-bold leading-none text-primary sm:text-[36px] sm:leading-[46px]">
                100K+
              </h3>
              <p className="mt-1 text-[13px] font-normal leading-tight text-font-secondary sm:mt-2 sm:text-[16px]">
                Pengguna
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}