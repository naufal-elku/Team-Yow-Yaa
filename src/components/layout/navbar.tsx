"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();

const isActive = (href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname.startsWith(href);
    //hamburger
    const [isOpen, setIsOpen] = useState(false);
    //hamburger menu children
    // Menyimpan menu dropdown yang sedang terbuka.
    // Nilainya berupa href menu, misalnya "/fitur".
    // Jika null berarti tidak ada menu yang terbuka.
    const [openMenu, setOpenMenu] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Presensi
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {/* hidden → HP tidak tampil.
              md:flex → mulai ukuran md tampil. */}
						{PRIMARY_NAV_LINKS.map((link) => (
							<li key={link.href} className="relative group">
								<Link
                            href={link.href}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors
                                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                                after:bg-blue-600 after:origin-center after:scale-x-0 after:transition-transform after:duration-300
                                ${
                                isActive(link.href)
                                    ? "text-blue-600 after:scale-x-100"
                                    : "text-gray-600 after:w-0 hover:text-blue-600 hover:after:scale-x-100"
                                }`}
                            >
                              
                            {link.label}
                            </Link>
                            {/* Dropdown */}
  {link.children && (
    <div
      className="
        invisible
        absolute
        top-full
        left-1/2
        -translate-x-1/2
        mt-3
        w-80
        rounded-xl
        border
        bg-white
        shadow-xl
        opacity-0
        transition-all
        duration-300
        group-hover:visible
        group-hover:opacity-100
      "
    >
      {link.children.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block p-4 hover:bg-gray-100 transition"
        >
          <h3 className="font-semibold text-blue-600">
            {item.label}
          </h3>

          {"description" in item && (
            <p className="text-sm text-black">
              {item.description}
            </p>
          )}
        </Link>
      ))}
    </div>
  )}
							</li>
						))}
					</ul>
        {/* Button */}
       <div className="flex items-center gap-3">

          {/* Tombol hamburger hanya di HP */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Login & Demo hanya di Desktop */}
          <div className="hidden md:flex items-center gap-3 text-black">
            <Link href="/login">
              Login
            </Link>

            <button className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700">
              Demo
            </button>
          </div>

</div>
      </nav>
      {/* Menu Responsif */}
      {isOpen && (
        <div className="md:hidden bg-white border-t text-gray-500">

          {PRIMARY_NAV_LINKS.map((link)=> (
            <div key={link.href} className="border-b">
              {/* untuk submenu children dukungan */}
              {link.children ? (
                <>
                 <button
                  onClick={() =>
                    setOpenMenu(openMenu === link.href ? null : link.href)
                  }
                  className="w-full flex items-center justify-between px-6 py-3 hover:bg-gray-100"
                  >
                    <span>{link.label}</span>
                    <span>{openMenu === link.href ? "▲" : "▼"}</span>
                 </button>

                 {/* Sub menu */}
                 {openMenu === link.href && (
                  <div className="bg-gray-50">
                    {link.children.map((item) => (
                      <Link
                      key={item.href}
                      href={item.href}
                      className="block px-10 py-3 border-t hover:bg-gray-100"
                      >
                    <h3 className="font-medium text-blue-600">
                      {item.label}
                    </h3>

                    {"description" in item && (
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    )}
                      </Link>
                    ))}
                  </div>
                 )}
                </>
              ) : (
                <Link href={link.href}
                  className="block px-6 py-3"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="/login"
            className="block px-6 py-3 border-b"
          >
            Login
          </Link>

          <button className="m-4 w-[calc(100%-2rem)] bg-blue-600 text-white py-2 rounded-lg">
      Demo
    </button>
        </div>
      )}
    </header>
  );
}