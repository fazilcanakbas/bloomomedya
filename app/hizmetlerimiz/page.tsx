import type { Metadata } from "next";
import Image from "next/image";
import ScrollToButton from "@/components/ScrollToButton";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Bloomo",
  description:
    "Bloomo'nun sunduğu dijital pazarlama, reklam, tasarım ve web hizmetlerini keşfedin.",
};

const services = [
  {
    title: "Dijital Reklam",
    description:
      "Google Ads, Meta Ads ve programmatik reklam platformlarında doğru hedef kitleye ulaşan kampanyalar yönetiyoruz.",
    features: [
      "Google Search & Display Ads",
      "Meta Ads (Facebook & Instagram)",
      "Bütçe optimizasyonu",
      "Dönüşüm takibi ve raporlama",
    ],
  },
  {
    title: "SEO & Organik Büyüme",
    description:
      "Teknik SEO, içerik stratejisi ve backlink yönetimi ile arama motorlarında kalıcı sıralamanızı artırıyoruz.",
    features: [
      "Teknik SEO denetimi",
      "Anahtar kelime stratejisi",
      "İçerik optimizasyonu",
      "Backlink yönetimi",
    ],
  },
  {
    title: "Sosyal Medya Yönetimi",
    description:
      "İçerik üretiminden topluluk yönetimine kadar, markanızın sosyal kanallarını profesyonelce yönetiyoruz.",
    features: [
      "İçerik stratejisi ve takvimi",
      "Görsel & video üretimi",
      "Topluluk yönetimi",
      "Aylık performans raporu",
    ],
  },
  {
    title: "Web Tasarım & Geliştirme",
    description:
      "Hızlı, mobil uyumlu ve kullanıcı deneyimi odaklı web siteleri tasarlıyor ve geliştiriyoruz.",
    features: [
      "UI/UX tasarım",
      "Responsive geliştirme",
      "CMS entegrasyonu",
      "Performans optimizasyonu",
    ],
  },
  {
    title: "Video Prodüksiyon",
    description:
      "Markalarınız için tanıtım filmleri, reklam videoları ve sosyal medya reels üretiyoruz.",
    features: [
      "Konsept ve senaryo",
      "Çekim ve prodüksiyon",
      "Post-prodüksiyon & editing",
      "Motion graphics",
    ],
  },
  {
    title: "Marka Kimliği",
    description:
      "Logo tasarımı, kurumsal kimlik ve marka rehberi ile tutarlı bir marka dili oluşturuyoruz.",
    features: [
      "Logo tasarımı",
      "Kurumsal kimlik seti",
      "Marka rehberi",
      "Türkçelendirme & adaptasyon",
    ],
  },
];

export default function HizmetlerimizPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-16">
          <div className="relative overflow-hidden rounded-[50px] bg-black px-8 py-20 sm:px-14 sm:py-24 lg:py-28">
            {/* Background image */}
            <Image
              src="/hizmetler-bg.png"
              alt=""
              fill
              className="pointer-events-none absolute inset-0 object-cover opacity-40"
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h1
                className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Dijital pazarlamanın
                <br />
                tüm yönlerini kapsıyoruz.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                Reklam yönetiminden web tasarımına, SEO'dan video prodüksiyon'a kadar
                markaların büyümesi için ihtiyaç duyduğu tüm hizmetleri sunuyoruz.
              </p>
              <ScrollToButton targetId="tum-hizmetler" label="Hizmetleri gör" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="tum-hizmetler" className="w-full py-20 lg:py-28 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600">HİZMETLERİMİZ</p>
            <h2
              className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Kapsamlı Dijital Çözümler
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
              Her hizmet, veri, stratejik düşünce ve yaratıcılıkla desteklenerek
              gerçek iş sonuçları ortaya çıkarmak için tasarlanmıştır.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-gray-200 pt-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0899BE"
                        strokeWidth="2"
                        className="mt-0.5 shrink-0"
                      >
                        <path d="M9 12l2 2 4-4" />
                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="w-full py-20 lg:py-28"
        style={{ background: "linear-gradient(to bottom, #E8F6FA 0%, #E8F6FA 60%, #ffffff 100%)" }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="rounded-3xl bg-black px-8 py-16 sm:px-14 sm:py-20 lg:py-24 text-center">
            <h2
              className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Hizmet kombinasyonunu
              <br />
              özel olarak tasarla
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              Projesi için hangilerini ihtiyaç duyduğuna emin değil misin?
              Fiyatlandırma sayfasında hizmetleri seçerek özel paket oluşturabilir
              ve hemen teklif alabilirsin.
            </p>
            <a
              href="/fiyatlandirma"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
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
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
