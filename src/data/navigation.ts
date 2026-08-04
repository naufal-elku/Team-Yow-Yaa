export interface NavChild {
  href: string;
  label: string;
  description?: string;
}

export interface NavLink {
  href: string;
  label: string;
  children?: NavChild[];
}

export const PRIMARY_NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Beranda",
  },
  {
    href: "/features",
    label: "Fitur",
  },
  {
    href: "/price",
    label: "Harga",
  },
  {
    href: "/dukungan",
    label: "Dukungan",
    children: [
      {
        href: "/blog",
        label: "Blog",
        description: "Tips dan wawasan praktis.",
      },
      {
        href: "/faq",
        label: "FAQ",
        description: "Jawaban cepat.",
      },
      {
        href: "/contact",
        label: "Hubungi Kami",
        description: "Tim kami siap membantu.",
      },
      {
        href: "/about",
        label: "Video Tutorial",
        description: "Panduan penggunaan aplikasi.",
      },
    ],
  },
  {
    href: "/privacy-policy",
    label: "Kebijakan & Privasi",
  },
];

export const NAV_LINKS = {
  login: "/login",
  demo: "/login-demo",
} as const;

export const SOSIAL_LINKS = {
  instagram: "https://instagram.com/presensi.id",
  facebook: "https://facebook.com/presensi.id",
  youtube: "https://youtube.com/presensi.id",
  tiktok: "https://tiktok.com/presensi.id",
} as const;
