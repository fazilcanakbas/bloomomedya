"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "#" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const serviceLinks = [
  { label: "Google Ads", href: "/hizmetlerimiz/dijital-reklam" },
  { label: "Meta Ads", href: "/hizmetlerimiz/dijital-reklam" },
  { label: "SEO Danışmanlığı", href: "/hizmetlerimiz/seo-ve-organik-buyume" },
  { label: "Web Analitik", href: "/hizmetlerimiz/web-tasarim-ve-gelistirme" },
  { label: "Sosyal Medya Yönetimi", href: "/hizmetlerimiz/sosyal-medya-yonetimi" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/bloomo.medya/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/905452487221",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#0A0A0A] text-white overflow-clip">
      {/* CTA Banner */}
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
        {/* Abstract decoration — left side, half off-screen, behind text */}
        <div className="pointer-events-none absolute -right-[240px] top-[-40px] z-0 w-[550px] lg:-right-[240px] lg:top-[-60px]">
          <Image
            src="/footer.png"
            alt=""
            width={550}
            height={550}
            className="object-contain"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          {/* Left — Text */}
          <div className="max-w-2xl">
            <h2
              className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Strateji, veri ve yaratıcılığı bir araya getirerek
              <br />
              markanızı dijitalde büyütüyoruz.
            </h2>
          </div>

          {/* Right — Buttons stacked */}
          <div className="flex flex-col gap-4 shrink-0 lg:min-w-[280px]">
            <Link
              href="/iletisim"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all hover:bg-white/90"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="text-[#0899BE] text-lg">+</span>
              <span className="flex-1">Hemen Tanışalım</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+905452487221"
              className="flex items-center gap-4 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white/40"
              
            >
              <span className="text-[#0899BE] text-lg">+</span>
              <span className="flex-1">0 (545) 248 72 21</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />
      </div>

      {/* Main Footer */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="/">
              <Image
                src="/bloomo-logo.png"
                alt="Bloomo"
                width={140}
                height={36}
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Dijital dünyada markanızı büyütmek için yanınızdayız. Stratejik
              çözümlerle işinizi bir adım öteye taşıyoruz.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-[#0899BE] hover:text-white hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menü */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-white/50"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Menü
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="lg:col-span-2">
            <h3
              className="text-xs font-semibold tracking-widest text-white/50"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              HİZMETLER
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h3
              className="text-xs font-semibold uppercase tracking-widest text-white/50"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              İLETİŞİM
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Antalya, Türkiye
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +90 (545) 248 72 21
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@bloomomedya.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Bloomo. Tüm hakları saklıdır.
          </p>
          {/* <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              Kullanım Koşulları
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
