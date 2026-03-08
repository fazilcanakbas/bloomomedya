import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "#" },
  { label: "Projelerimiz", href: "/projeler" },
  { label: "Blog", href: "#" },
  { label: "İletişim", href: "/iletisim" },
];

const serviceLinks = [
  { label: "Web Tasarım", href: "#" },
  { label: "Dijital Pazarlama", href: "#" },
  { label: "SEO Danışmanlığı", href: "#" },
  { label: "Sosyal Medya Yönetimi", href: "#" },
  { label: "Marka Kimliği", href: "#" },
];

const contactDetails = [
  { label: "İstanbul, Türkiye" },
  { label: "+90 (212) 000 00 00" },
  { label: "info@bloomo.com.tr" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
        {/* Üst Kısım */}
        <div className="grid gap-12 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Açıklama */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <Image
                src="/bloomo-logo.png"
                alt="Bloomo"
                width={160}
                height={40}
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Dijital dünyada markanızı büyütmek için yanınızdayız. Stratejik
              çözümlerle işinizi bir adım öteye taşıyoruz.
            </p>
            {/* Sosyal Medya */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-colors hover:bg-[#C0FF10] hover:text-black"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menü */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">
              MENÜ
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
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">
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
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">
              İLETİŞİM
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {contactDetails.map((item) => (
                <li key={item.label} className="text-sm text-gray-400">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Alt Kısım - Copyright */}
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
