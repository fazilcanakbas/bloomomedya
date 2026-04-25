import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const allSlugs = [
  "dijital-reklam",
  "seo-ve-organik-buyume",
  "sosyal-medya-yonetimi",
  "web-tasarim-ve-gelistirme",
  "video-produksiyon",
  "marka-kimligi",
];

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Hizmet Bulunamadı | Bloomo",
    };
  }

  return {
    title: `${service.title} | Bloomo`,
    description: service.description,
  };
}

export default async function HizmetDetayPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="bg-white pb-14 pt-24 sm:pb-16 sm:pt-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-16">
          <div className="relative overflow-hidden rounded-[44px] bg-black px-8 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-16">
            <Image
              src="/hakkimizda-hero.png"
              alt=""
              fill
              className="pointer-events-none absolute inset-0 object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(8,153,190,0.24)_0%,transparent_42%),radial-gradient(circle_at_80%_70%,rgba(8,153,190,0.18)_0%,transparent_40%),linear-gradient(165deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.74)_100%)]" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="text-left">
                <Link
                  href="/hizmetlerimiz"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
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
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Hizmetlere Dön
                </Link>

                <h1
                  className="mt-5 text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {service.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {service.detailIntro}
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <Image
                  src={service.iconImage}
                  alt={service.title}
                  width={220}
                  height={220}
                  className="h-auto w-full max-w-[220px] object-contain sm:max-w-[260px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yaklaşımımız */}
      <section className="w-full bg-white py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:max-w-xl">
              <p
                className="text-sm font-bold tracking-wider text-black"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                YAKLAŞIMIMIZ
              </p>
              <h2
                className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {service.title}
                <br />
                süreçlerini nasıl
                <br />
                kuruyoruz
              </h2>
            </div>
            <div className="lg:max-w-md lg:pt-8">
              <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
                {service.description}
              </p>
              <Link
                href="/hakkimizda"
                className="mt-6 inline-flex flex-col text-sm font-bold tracking-wider text-black"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span>HAKKIMIZDA</span>
                <span className="mt-1 h-[2px] w-full bg-black" />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {service.detailParagraphs.map((paragraph, index) => (
              <div
                key={paragraph}
                className="rounded-4xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-2xl font-medium text-[#0899BE]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#E8F6FA]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0899BE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {index === 0 ? (
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </>
                      ) : (
                        <>
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                          <path d="M22 4L12 14.01l-3-3" />
                        </>
                      )}
                    </svg>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neler Yapıyoruz */}
      <section
        className="w-full py-20 lg:py-28"
        style={{ background: "linear-gradient(to bottom, #E8F6FA 0%, #E8F6FA 60%, #ffffff 100%)" }}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                className="text-sm font-semibold tracking-wider text-black"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                NELER YAPIYORUZ
              </p>
              <h2
                className="mt-4 max-w-2xl text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Hizmetin
                <br />
                Kapsamı
              </h2>
            </div>
            <div className="lg:max-w-md">
              <div className="rounded-2xl border border-[#0899BE]/20 bg-white p-6">
                <p className="text-xs font-semibold tracking-wider text-[#0899BE]">
                  KİMLER İÇİN UYGUN?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {service.fit}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col rounded-2xl bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-[#E8F6FA]">
                  <span
                    className="text-lg font-medium text-[#0899BE]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="w-full bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:max-w-xl">
              <p
                className="text-sm font-bold tracking-wider text-black"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                SÜREÇ
              </p>
              <h2
                className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Birlikte çalışma
                <br />
                şeklimiz
              </h2>
            </div>
            <div className="lg:max-w-md lg:pt-8">
              <p className="text-base leading-relaxed text-gray-600">
                İlk toplantıdan teslime kadar sürecin her adımını şeffaf
                şekilde planlıyor, takvimi ve sorumlulukları birlikte
                netleştiriyoruz.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <span
                  className="text-5xl font-medium text-[#0899BE]/30"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teslimler & SSS */}
      <section className="w-full bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Teslim edilenler */}
            <div className="rounded-3xl bg-[#F3F4F6] p-8 sm:p-10">
              <p
                className="text-sm font-bold tracking-wider text-black"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                TESLİM EDİLENLER
              </p>
              <h3
                className="mt-4 text-2xl font-medium leading-tight text-black sm:text-3xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Proje sonunda
                <br />
                elinizde ne olacak?
              </h3>
              <ul className="mt-8 grid gap-4">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed text-gray-700"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#E8F6FA]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0899BE"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SSS */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
              <p
                className="text-sm font-bold tracking-wider text-black"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                SIKÇA SORULANLAR
              </p>
              <h3
                className="mt-4 text-2xl font-medium leading-tight text-black sm:text-3xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Aklınıza ilk gelenler
              </h3>
              <div className="mt-8 grid gap-5">
                {service.faq.map((item) => (
                  <div
                    key={item.question}
                    className="border-b border-gray-200 pb-5 last:border-b-0 last:pb-0"
                  >
                    <h4 className="flex items-start gap-3 text-base font-semibold text-black">
                      <span
                        className="text-[#0899BE]"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        Q.
                      </span>
                      {item.question}
                    </h4>
                    <p className="mt-3 pl-7 text-sm leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-32">
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
                  {service.title}
                  <br />
                  ihtiyacınızı birlikte
                  <br />
                  netleştirelim.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                  Kapsamı, zaman planını ve beklenen etkiyi kısa bir
                  görüşmede konuşalım. Size özel bir yol haritası hazırlayalım.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
                <Link
                  href="/fiyatlandirma"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0899BE] px-6 py-3 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#077a9a]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  TEKLİF AL
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
                  DİĞER HİZMETLER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
