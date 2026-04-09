import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollToButton from "@/components/ScrollToButton";
import { services } from "./services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Bloomo",
  description:
    "Bloomo'nun sunduğu dijital pazarlama, reklam, tasarım ve web hizmetlerini keşfedin.",
};

const processSteps = [
  {
    title: "Keşif ve Analiz",
    text: "Marka, hedef kitle, rakip ve mevcut veri setlerini okuyarak net bir başlangıç çerçevesi kuruyoruz.",
  },
  {
    title: "Strateji ve Plan",
    text: "Hangi kanalda neyi, hangi hedef metrikle yapacağımızı net bir yol haritasına bağlıyoruz.",
  },
  {
    title: "Üretim ve Yayın",
    text: "Kreatif, medya, içerik ve teknik tarafı koordineli şekilde hayata geçiriyoruz.",
  },
  {
    title: "Optimizasyon",
    text: "Raporlardan öğrenip kampanya ve içerik performansını düzenli olarak iyileştiriyoruz.",
  },
];

export default function HizmetlerimizPage() {
  return (
    <main className="bg-white">
      <section className="bg-white pb-14 pt-24 sm:pb-16 sm:pt-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-16">
          <div className="relative overflow-hidden rounded-[50px] bg-black px-8 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-12">
            <Image
              src="/hizmetler-bg.png"
              alt=""
              fill
              className="pointer-events-none absolute inset-0 object-cover opacity-45"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(8,153,190,0.24)_0%,transparent_42%),radial-gradient(circle_at_80%_70%,rgba(8,153,190,0.18)_0%,transparent_40%),linear-gradient(165deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.74)_100%)]" />

            <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-left">
                <h1
                  className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Büyümeyi hızlandıran
                  <br />
                  dijital hizmet sistemi.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                  Markanız için reklam, içerik, teknoloji ve tasarım katmanlarını
                  tek stratejide birleştiriyoruz. Hedefe odaklı kurguladığımız bu
                  yapı sayesinde ekipleriniz daha hızlı, daha ölçülebilir ve daha
                  sürdürülebilir sonuçlar üretir.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/roket.png"
                  alt="Roket"
                  width={420}
                  height={420}
                  className="h-auto w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[330px]"
                  priority
                />
              </div>
            </div>

            <div className="relative z-10 mt-5 flex justify-center">
              <ScrollToButton targetId="tum-hizmetler" label="Hizmetleri keşfet" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="tum-hizmetler"
        className="w-full scroll-mt-20 py-20 lg:py-28"
        style={{
          background:
            "linear-gradient(to bottom, #E8F6FA 0%, #EFF8FA 44%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#0899BE]">
              Hizmet Alanları
            </p>
            <h2
              className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Modüler ama entegre
              <br />
              bir çalışma modeli
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
              Hangi kanala ihtiyacınız varsa oradan başlar, tüm hizmetleri ortak
              hedeflere bağlarız. Böylece yapılan iş parçalı değil, birlikte sonuç
              üretir.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-5">
                  <h3
                    className="text-2xl font-medium leading-tight text-black"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {service.title}
                  </h3>
                  <Image
                    src={service.iconImage}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="h-16 w-16 shrink-0 object-contain"
                  />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-xs font-semibold text-gray-600">
                    Uygun Olduğu Durum
                  </p>
                  <p className="mt-1 text-sm text-gray-800">{service.fit}</p>
                </div>

                <ul className="mt-6 grid gap-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg
                        width="16"
                        height="16"
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

                <Link
                  href={`/hizmetlerimiz/${service.slug}`}
                  className="mt-7 inline-flex flex-col text-sm font-semibold text-[#066d86]"
                >
                  <span className="inline-flex items-center gap-2">
                    Detayı İncele
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
                  </span>
                  <span className="mt-1 h-[2px] w-full bg-[#066d86]" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="relative overflow-hidden rounded-[36px] bg-[#0b0f14] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#0899BE]/25 blur-[90px]" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#3d72ff]/20 blur-[120px]" />

            <div className="relative z-10">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold tracking-[0.16em] text-[#8fd4e6]">
                  Çalışma Modeli
                </p>
                <h2
                  className="mt-4 text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Her hizmet aynı operasyon
                  <br />
                  omurgasında ilerler
                </h2>
              </div>

              <div className="mt-12 grid gap-4 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-2xl border border-white/15 bg-white/[0.03] p-6"
                  >
                    <p className="text-xs font-semibold tracking-[0.14em] text-white/40">
                      Adım 0{index + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full py-20 lg:py-28"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #E8F6FA 56%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0899BE] opacity-20 blur-[100px]" />

            <div className="pointer-events-none absolute -right-[80px] -top-[80px] z-0 w-[280px]">
              <Image
                src="/hero-7.png"
                alt=""
                width={280}
                height={280}
                className="object-contain"
              />
            </div>

            <div className="pointer-events-none absolute -left-[80px] -bottom-[80px] z-0 w-[280px]">
              <Image
                src="/hero-8.png"
                alt=""
                width={280}
                height={280}
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <h2
                className="text-3xl font-medium text-white sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Hizmet kombinasyonunu
                <br />
                markanıza göre netleştirelim.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
                Fiyatlandırma sayfasında ihtiyacınıza uygun modülleri seçin;
                ekibimiz size hedefe göre optimize edilmiş bir plan sunsun.
              </p>
              <Link
                href="/fiyatlandirma"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0899BE] px-8 py-4 text-sm font-semibold tracking-wider text-white transition-all hover:bg-[#077a9a]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Özel Paket Oluştur
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
