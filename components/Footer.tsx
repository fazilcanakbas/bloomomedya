import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "#" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const serviceLinks = [
  { label: "Google Ads", href: "#" },
  { label: "Meta Ads", href: "#" },
  { label: "SEO Danışmanlığı", href: "#" },
  { label: "Web Analitik", href: "#" },
  { label: "Sosyal Medya Yönetimi", href: "#" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
      </svg>
    ),
  },
];

export default function Footer() {
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
          <div className="flex gap-6">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
