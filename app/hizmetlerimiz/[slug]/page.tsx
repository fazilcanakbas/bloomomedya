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

      <section
        className="w-full pb-20 lg:pb-28"
        style={{ background: "linear-gradient(to bottom, #E8F6FA 0%, #ffffff 100%)" }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-16">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[32px] border border-[#dfe8ee] bg-white p-8 sm:p-10">
              <h2
                className="text-3xl font-medium leading-tight text-black sm:text-4xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {service.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-700">
                {service.description}
              </p>
              <div className="mt-8 grid gap-5">
                {service.detailParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <aside className="grid gap-6">
              <section className="rounded-[32px] border border-[#dfe8ee] bg-white p-8">
                <p className="text-sm font-semibold text-[#0899BE]">
                  Kimler için uygun?
                </p>
                <p className="mt-3 text-base leading-relaxed text-gray-700">
                  {service.fit}
                </p>
              </section>

              <section className="rounded-[32px] border border-[#dfe8ee] bg-white p-8">
                <h3
                  className="text-2xl font-medium text-black"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Neler Yapıyoruz
                </h3>
                <ul className="mt-5 grid gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-gray-700"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0899BE"
                        strokeWidth="2"
                        className="mt-0.5 shrink-0"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[32px] bg-black p-8 text-white">
                <h3
                  className="text-2xl font-medium"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Bu hizmet için teklif alın
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  İhtiyacınıza uygun kapsamı birlikte netleştirelim.
                </p>
                <Link
                  href="/fiyatlandirma"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0899BE] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#077a9a]"
                >
                  Teklif Al
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
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
