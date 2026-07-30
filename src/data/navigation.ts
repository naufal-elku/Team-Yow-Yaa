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
        href: "/tutorial",
        label: "Video Tutorial",
        description: "Panduan penggunaan aplikasi.",
      },
    ],
  },
  {
    href: "/kebijakan",
    label: "Kebijakan & Privasi",
  },
];

