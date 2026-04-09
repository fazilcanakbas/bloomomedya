import type { Metadata } from "next";
import Link from "next/link";
import References from "@/components/References";

const logoRows = Array.from({ length: 3 }, () => [
  "Logo 1",
  "Logo 2",
  "Logo 3",
  "Logo 4",
  "Logo 5",
]);

export const metadata: Metadata = {
  title: "Referanslar | Bloomo",
  description: "Bloomo'nun birlikte çalıştığı markalar ve öne çıkan referans işleri.",
};

export default function ReferanslarPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto w-full max-w-[1440px] px-4 pb-8 pt-28 sm:px-6 sm:pb-12 sm:pt-32 xl:px-32">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0899BE]">
          Referanslar
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
      </section>

      <References showHeader={false} />

      <section className="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-6 sm:py-24 xl:px-32">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0899BE]">
          Marka Ağı
        </p>
        <h2
          className="mt-5 max-w-3xl text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Farklı sektörlerden markalarla aynı hedefte buluşuyoruz.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/65">
          Her marka için ihtiyaca özel bir yapı kuruyor, içerik ve performansı
          aynı eksende bir araya getiriyoruz.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {logoRows.map((row, rowIndex) => (
            <div
              key={`logo-row-${rowIndex}`}
              className="flex flex-wrap justify-center gap-8 sm:gap-12"
            >
              {row.map((label) => (
                <span
                  key={`${rowIndex}-${label}`}
                  className="text-lg font-semibold uppercase tracking-widest text-black/30 sm:text-xl"
                >
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-4 pb-24 sm:px-6 sm:pb-28 xl:px-32">
        <div className="relative overflow-hidden rounded-[36px] border border-black/10 bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_45%,#f5f8ff_100%)] px-8 py-12 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0899BE]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="relative z-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0899BE]">
                SEO Odaklı Büyüme
              </p>
              <h2
                className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Organik görünürlüğü ve kaliteli trafiği birlikte büyütmek için
                markanıza özel SEO stratejisi kuralım.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black/65">
                Teknik SEO, içerik mimarisi ve dönüşüm odaklı sayfa kurgusunu
                tek bir planla ilerletelim.
              </p>
            </div>

            <Link
              href="/iletisim"
              className="relative z-10 inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0899BE]"
            >
              SEO Stratejisi Al
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
