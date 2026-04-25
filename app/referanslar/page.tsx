import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import References from "@/components/References";

const brandLogos = [
  { src: "/havacilar-logo.png", alt: "Havacilar", invert: true },
  { src: "/efour.png", alt: "Efour" },
  { src: "/lullykids.png", alt: "Lullykids" },
  { src: "/daimatour.png", alt: "Daimatour" },
  { src: "/peynir-2.png", alt: "Peynir" },
  { src: "/sinyal.png", alt: "Sinyal" },
  { src: "/Basel-2.png", alt: "Basel" },
  { src: "/blackmoon-2.png", alt: "Blackmoon" },
  { src: "/calli-2.png", alt: "Call" },
];

export const metadata: Metadata = {
  title: "Referanslar | Bloomo",
  description: "Bloomo'nun birlikte çalıştığı markalar ve öne çıkan referans işleri.",
};

export default function ReferanslarPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto w-full max-w-[1440px] px-4 pb-8 pt-28 sm:px-6 sm:pb-12 sm:pt-32 xl:px-32">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p
              className="text-sm font-bold tracking-wider text-[#0899BE]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              REFERANSLAR
            </p>
            <h1
              className="mt-5 max-w-4xl text-4xl font-medium leading-tight text-black sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Birlikte ürettiğimiz markaları, işleri ve sonuç odaklı süreci burada
              keşfedebilirsiniz.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
              Bu işlerde arama niyetine göre içerik planı, teknik SEO iyileştirmeleri
              ve dönüşüm odaklı sayfa optimizasyonlarıyla görünürlüğü ve lead
              kalitesini nasıl yükselttiğimizi görebilirsiniz.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/hero-12.png"
              alt=""
              width={380}
              height={380}
              className="h-auto w-full max-w-[260px] object-contain sm:max-w-[320px] lg:max-w-[380px]"
              priority
            />
          </div>
        </div>
      </section>

      <References showHeader={false} />

      <section
        className="w-full py-20 lg:py-28"
        style={{ background: "linear-gradient(to bottom, #E8F6FA 0%, #E8F6FA 60%, #ffffff 100%)" }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:max-w-xl">
              <p
                className="text-sm font-bold tracking-wider text-[#0899BE]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                MARKA AĞI
              </p>
              <h2
                className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Farklı sektörlerden
                <br />
                markalarla aynı hedefte
                <br />
                buluşuyoruz
              </h2>
            </div>
            <div className="lg:max-w-md lg:pt-8">
              <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
                Her marka için ihtiyaca özel bir yapı kuruyor; içerik, reklam
                ve performansı aynı eksende bir araya getiriyoruz.
              </p>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl bg-white py-10">
            <div className="flex w-max animate-marquee items-center gap-16 sm:gap-24">
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <Image
                  key={`${logo.src}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={44}
                  className={`h-auto w-[110px] shrink-0 object-contain sm:w-[130px] ${
                    logo.invert ? "invert" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="relative overflow-hidden rounded-3xl bg-black p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(8,153,190,0.28)_0%,transparent_45%),radial-gradient(circle_at_85%_80%,rgba(8,153,190,0.2)_0%,transparent_45%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p
                  className="text-sm font-bold tracking-wider text-white/70"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  BİR SONRAKİ ADIM
                </p>
                <h2
                  className="mt-4 text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Sıradaki başarı
                  <br />
                  hikayesi sizin
                  <br />
                  markanız olsun.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                  Markanıza özel strateji, içerik ve performans planını
                  birlikte kuralım. Kısa bir görüşmeyle yol haritasını
                  netleştirelim.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0899BE] px-6 py-3 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#077a9a]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  İLETİŞİME GEÇ
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
                <Link
                  href="/hizmetlerimiz"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  HİZMETLERİ İNCELE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
