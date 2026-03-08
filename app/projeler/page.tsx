import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projelerimiz | Bloomo",
  description: "Bloomo olarak hayata geçirdiğimiz projeler",
};

export default function ProjelerPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24 xl:px-32">
        {/* Başlık */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Projelerimiz
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Ajans olarak hayata geçirdiğimiz markalar ve ürünler.
          </p>
        </div>

        {/* Projeler */}
        <div className="flex flex-col gap-10">
          {/* Hepantalya */}
          <div
            className="relative overflow-hidden p-8 sm:p-12 lg:p-16"
            style={{
              background: "linear-gradient(135deg, #000000 0%, #EE3135 50%, #ffffff 100%)",
            }}
          >
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
              {/* Sol - İçerik */}
              <div>
                <img
                  src="/hepantalya-logo.png"
                  alt="Hepantalya"
                  className="mb-6 h-8 w-auto sm:h-10"
                />
                <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                  Antalya&apos;nın yerel işletmelerini ve hizmetlerini tek bir
                  platformda buluşturan mobil uygulama. Restoran, otel, aktivite
                  ve daha fazlası parmaklarınızın ucunda.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white">
                    Mobil Uygulama
                  </span>
                  <span className="rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white">
                    UI/UX Tasarım
                  </span>
                  <span className="rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white">
                    Marka Kimliği
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://apps.apple.com/tr/app/hep-antalya/id6747068829?l=tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hepantalya.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.61-.92zm.705-.344l11.17 6.448-2.537 2.527L4.315 1.47zm0 20.06l8.633-8.975 2.537 2.527-11.17 6.448zM20.49 10.95l-3.273 1.89-2.79-2.84 2.79-2.84 3.273 1.89a1.11 1.11 0 010 1.9z" />
                    </svg>
                    Google Play
                  </a>
                </div>
              </div>

              {/* Sağ - Görsel */}
              <div className="relative flex items-center justify-center overflow-visible">
                <img
                  src="/hepantalya-3.png"
                  alt="Hepantalya Mockup"
                  className="-mr-20 w-auto scale-125 object-contain sm:max-h-80"
                />
              </div>
            </div>
          </div>
          {/* Notouchness */}
          <div
            className="relative overflow-hidden p-8 sm:p-12 lg:p-16"
            style={{
              background: "linear-gradient(135deg, #000000 0%, #004d63 50%, #008AAE 100%)",
            }}
          >
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
              {/* Sol - İçerik */}
              <div>
                <img
                  src="/notouchness.png"
                  alt="Notouchness"
                  className="mb-6 h-8 w-auto sm:h-10"
                />
                <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                  NFC ve QR kod teknolojisi ile geleneksel kartvizitleri dijital
                  dünyaya taşıyan bir platform. Profesyonel iletişimi yeniden
                  tanımlıyor.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    NFC Teknolojisi
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Web Uygulama
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Marka Kimliği
                  </span>
                </div>
                <a
                  href="https://notouchness.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Siteyi Ziyaret Et
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
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>

              {/* Sağ - Kart Görseli */}
              <div className="relative flex items-center justify-end">
                <div className="absolute h-48 w-48  " />
                <img
                  src="/notouchness-kart.svg"
                  alt="Notouchness Kart"
                  className="relative z-10 w-full max-w-xs rotate-6  sm:max-w-sm"
                />
              </div>
            </div>
          </div>
          {/* İlk Albüm */}
          <div
            className="relative overflow-hidden p-8 sm:p-12 lg:p-16"
            style={{
              background: "linear-gradient(135deg, #FFF6FB 0%, #551D40 50%, #000000 100%)",
            }}
          >
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
              {/* Sol - İçerik */}
              <div>
                <img
                  src="/ilkalbum-logo.png"
                  alt="İlk Albüm"
                  className="mb-6 h-8 w-auto sm:h-10"
                />
                <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                  Özel anlarınızı sanatsal bir dokunuşla ölümsüzleştiriyoruz.
                  Düğün, nişan ve yaşamın tüm güzel anları için profesyonel
                  fotoğrafçılık hizmeti.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Fotoğrafçılık
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Marka Kimliği
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Web Tasarım
                  </span>
                </div>
                <a
                  href="https://ilkalbum.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Siteyi Ziyaret Et
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
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>

              {/* Sağ - Görsel */}
              <div className="relative flex items-center justify-end">
                <img
                  src="/ilkalbum.png"
                  alt="İlk Albüm"
                  className="max-h-64 w-auto rounded-2xl object-cover shadow-2xl sm:max-h-72"
                />
              </div>
            </div>
          </div>
          {/* Piizkolog */}
          <div
            className="relative overflow-hidden p-8 sm:p-12 lg:p-16"
            style={{
              background: "linear-gradient(135deg, #40262B 0%, #40262B 30%, #FFF2DC 70%, #FDFFFD 100%)",
            }}
          >
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
              {/* Sol - İçerik */}
              <div>
                <img
                  src="/piizkolog-logo.png"
                  alt="Piizkolog"
                  className="mb-6 h-8 ml-8 w-auto sm:h-10 scale-290"
                />
                <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                  Düzenlemeyi planladığımız festival markası. Mobil uygulama,
                  organizasyonları ve tüm iş fikirleriyle 2026 yılında faal
                  olacak bir platform.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Festival
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Mobil Uygulama
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Marka Kimliği
                  </span>
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Yakında
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
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>

              {/* Sağ - Görsel */}
              <div className="relative flex items-center justify-end">
                <img
                  src="/piizkolog.png"
                  alt="Piizkolog"
                  className="max-h-64 w-auto object-contain sm:max-h-72"
                />
              </div>
            </div>
          </div>
          {/* Dijital Medya Kampüsü */}
          <div
            className="relative overflow-hidden p-8 sm:p-12 lg:p-16"
            style={{
              background: "linear-gradient(135deg, #000000 0%, #8B0000 50%, #FF0000 100%)",
            }}
          >
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
              {/* Sol - İçerik */}
              <div>
                <img
                  src="/dijitalmedyakampusu-logo.png"
                  alt="Dijital Medya Kampüsü"
                  className="mb-6 h-14 ml-5 w-auto sm:h-16 scale-190"
                />
                <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                  Dijital medya alanında eğitim ve danışmanlık hizmeti sunan
                  platform. İçerik üretimi, sosyal medya yönetimi ve dijital
                  pazarlama eğitimleriyle sektöre yön veriyor.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Eğitim Platformu
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Web Tasarım
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                    Marka Kimliği
                  </span>
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Siteyi Ziyaret Et
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
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>

              {/* Sağ - Görsel */}
              <div className="relative flex items-end justify-center overflow-visible">
                <img
                  src="/digi-robot-2.png"
                  alt="Dijital Medya Kampüsü"
                  className="-mb-12 w-auto scale-150 object-contain sm:-mb-16 sm:max-h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 sm:px-6 sm:pb-24 xl:px-32">
        <div className="relative overflow-hidden bg-black px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80">
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute inset-5 rounded-full border border-white/20" />
            <div className="absolute inset-10 rounded-full border border-white/20" />
          </div>
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80">
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute inset-5 rounded-full border border-white/20" />
            <div className="absolute inset-10 rounded-full border border-white/20" />
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C0FF10] opacity-30 blur-[80px]" />

          <img
            src="/star-1.svg"
            alt=""
            className="pointer-events-none absolute left-[15%] top-10 w-8 opacity-60"
          />
          <img
            src="/star-2.svg"
            alt=""
            className="pointer-events-none absolute bottom-10 right-[20%] w-6 opacity-60"
          />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Sıradaki proje sizinki olsun.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
              Markanızı dijitalde öne çıkaracak bir proje için konuşalım.
            </p>
            <Link
              href="/iletisim"
              className="mt-8 inline-block rounded-full px-8 py-3.5 text-base font-semibold text-black transition-all hover:brightness-90"
              style={{ backgroundColor: "#C0FF10" }}
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
