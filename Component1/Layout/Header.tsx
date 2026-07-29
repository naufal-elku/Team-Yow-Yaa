"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV_LINKS } from "../Lib/nav";

export default function Header() {
    const pathname = usePathname();

const isActive = (href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname.startsWith(href);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Presensi
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-1">
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
          <h3 className="font-semibold">
            {item.label}
          </h3>

          {"description" in item && (
            <p className="text-sm text-gray-500">
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
        <div className="flex items-center gap-3 text-black">

          <Link href="/login">
            Login
          </Link>

          <button className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700">
            Demo
          </button>

        </div>

      </nav>
    </header>
  );
}