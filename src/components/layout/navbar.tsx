"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";
import { useState } from "react";
import Logo from "./logo";
import {ChevronDown} from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Hamburger state
  const [isOpen, setIsOpen] = useState(false);
  // Dropdown menu state untuk mobile
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="fixed left-0 top-0 w-full h-20 border-b border-gray-200 bg-white z-50">
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-[10px] px-6 md:px-10 lg:px-[120px] py-[18px]">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Logo />
          </Link>

          {/* Menu Navigation (Sesuai Kriteria Figma: gap 24px / gap-6) */}
          <ul className="hidden md:flex items-center gap-6">
            {PRIMARY_NAV_LINKS.map((link) => (
              <li key={link.href} className="relative group gap-1">
                <Link
                  href={link.href}
                  className={`relative flex items-center h-8 gap-1
                            text-base font-medium leading-6 tracking-normal whitespace-nowrap
                            transition-colors
                            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full
                            after:bg-blue-600 after:origin-center after:scale-x-0
                            after:transition-transform after:duration-300
                    ${
                      isActive(link.href)
                        ? "text-blue-600 after:scale-x-100"
                        : "text-gray-600 hover:text-blue-600 hover:after:scale-x-100"
                    }`}
                >
                  {link.label}

                  {/* Panah */}
                  {link.children && (
                    <span className="transition-transform duration-300 group-hover:rotate-180">
                      <ChevronDown />
                    </span>
                  )}
                </Link>

                {/* Dropdown Desktop */}
                {link.children && (
                  <div className="invisible absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-xl border bg-white shadow-xl opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 z-50">
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
                          <p className="text-sm text-gray-600">
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
        </div>

        {/* Button & Hamburger */}
        <div className="flex items-center gap-3">
          {/* Tombol hamburger hanya di HP */}
          <button
            className="md:hidden text-2xl text-black w-6 h-6 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Login & Demo hanya di Desktop */}
          <div className="hidden md:flex items-center gap-3 text-black">
            <Link
              href="/login"
              className="px-4 py-2 hover:text-blue-600 font-medium transition"
            >
              Login
            </Link>

            <button className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700 font-medium transition">
              Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Responsif (Mobile Drawer) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay Blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col z-10 transition-transform duration-300">
            {/* Header Mobile Drawer */}
            <div className="flex items-center justify-between h-16 px-6 border-b">
              <Link
                href="/"
                className="text-2xl font-bold text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                <Logo />
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-gray-500 hover:text-blue-600 transition"
              >
                ✕
              </button>
            </div>

            {/* Menu List Mobile */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {PRIMARY_NAV_LINKS.map((link) => (
                <div key={link.href} className="border-b">
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === link.href ? null : link.href)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-100 transition"
                      >
                        <span className="font-medium text-gray-700">
                          {link.label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {openMenu === link.href ? "▲" : "▼"}
                        </span>
                      </button>

                      {openMenu === link.href && (
                        <div className="bg-gray-50 rounded-lg mb-2">
                          {link.children.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block pl-10 pr-4 py-3 text-blue-600 hover:bg-blue-50 transition"
                            >
                              <h3 className="font-medium">{item.label}</h3>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition ${
                        isActive(link.href)
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Footer Mobile Drawer */}
            <div className="border-t p-6 space-y-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-full border py-3 text-center font-medium hover:bg-gray-100 transition"
              >
                <button>Login</button>
              </Link>

              <button className="w-full rounded-full py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Coba Gratis
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
