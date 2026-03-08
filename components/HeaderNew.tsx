"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "#", hasDropdown: true },
  { label: "Projelerimiz", href: "/projeler" },
  { label: "Blog", href: "#" },
  { label: "İletişim", href: "/iletisim" },
];

export default function HeaderNew() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Hide header while inside the References scroll-hijack section
      const refSection = document.getElementById("references-section");
      if (refSection) {
        const rect = refSection.getBoundingClientRect();
        const isInSection = rect.top < 0 && rect.bottom > window.innerHeight;
        setHidden(isInSection);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 xl:px-32">
        {/* Left — Full logo (fades out on scroll) */}
        <Link
          href="/"
          className={`shrink-0 flex items-center transition-all duration-500 ${
            scrolled ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          <Image
            src="/bloomo.png"
            alt="Bloomo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Center — Nav pill (shrinks into pill on scroll) */}
        <div
          className={`hidden lg:flex items-center transition-all duration-500 ${
            scrolled
              ? "gap-5 rounded-full border border-white/20 bg-black/60 px-4 py-2.5 shadow-2xl backdrop-blur-xl"
              : "gap-8"
          }`}
        >
          {/* Icon logo inside pill (only when scrolled) */}
          <Link
            href="/"
            className={`shrink-0 transition-all duration-500 ${
              scrolled
                ? "opacity-100 scale-100 w-7"
                : "opacity-0 scale-0 w-0 overflow-hidden"
            }`}
          >
            <Image
              src="/bloomo-2.png"
              alt="Bloomo"
              width={28}
              height={28}
              priority
            />
          </Link>

          <nav className="flex items-center gap-inherit" style={{ gap: "inherit" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`group flex items-center gap-1 font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-sm text-white/80 hover:text-white"
                    : "text-base text-white/80 hover:text-white"
                }`}
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

          {/* Arrow button inside pill (only when scrolled) */}
          <Link
            href="#"
            className={`flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-500 hover:bg-white/20 ${
              scrolled
                ? "size-8 opacity-100 scale-100"
                : "size-0 opacity-0 scale-0 border-0 p-0 overflow-hidden"
            }`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Right — CTA Button (fades out on scroll) */}
        <Link
          href="#"
          className={`hidden lg:flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:bg-white/10 ${
            scrolled
              ? "opacity-0 scale-90 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
          style={{ borderColor: "silver" }}
        >
          Hemen Teklif Alın
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="flex size-10 items-center justify-center text-white lg:hidden"
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
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="mt-2 rounded-full border px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
              style={{ borderColor: "silver" }}
              onClick={() => setMobileOpen(false)}
            >
              Hemen Teklif Alın
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
