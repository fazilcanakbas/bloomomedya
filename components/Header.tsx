"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "#", hasDropdown: true },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "#" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 xl:px-32">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/bloomo.png"
            alt="Bloomo"
            width={160}
            height={40}
            priority
    
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex items-center gap-1 text-base font-medium text-gray-700 transition-colors hover:text-black"
            >
              {link.label}
              {link.hasDropdown && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mt-0.5 transition-transform group-hover:rotate-180"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="#"
          className="hidden rounded-full px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:brightness-90 lg:block"
          style={{ backgroundColor: "#0899BE" }}
        >
          Ücretsiz Teklif Alın
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="flex size-10 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="mt-2 rounded-full px-6 py-3 text-center text-base font-semibold text-black transition-colors hover:brightness-90"
              style={{ backgroundColor: "#0899BE" }}
              onClick={() => setMobileOpen(false)}
            >
              Ücretsiz Teklif Alın
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
