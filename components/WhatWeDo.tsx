const services = [
  {
    title: "Daha İyi\nHedef Kitle",
    description:
      "Doğru insanlara ulaşmanızı sağlıyoruz, sadece daha fazla insana değil.",
    detail:
      "Derin segmentasyon ve akıllı hedefleme ile gerçekten önemli olan kitlelere özel yolculuklar tasarlıyoruz.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Daha İyi\nAnalitik",
    description:
      "Trafikten dönüşüme kadar — gerçekten önemli olanı takip ediyoruz.",
    detail:
      "Ham veriyi eyleme dönüştürülebilir içgörülere ve daha akıllı kararlara çeviren özelleştirilmiş analitik sistemleri kuruyoruz.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Daha İyi\nSonuçlar",
    description:
      "Tıklamalar fatura ödemez, dönüşümler öder.",
    detail:
      "Medyanızı, verinizi ve hedeflerinizi hizalayarak kâr hanesini hareket ettiren ölçülebilir etki yaratıyoruz.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-4v8" />
        <path d="M8 12h4" />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-10 -mt-px">
      {/* Wavy line separator */}
      <div className="w-full  p-8">
<svg
  viewBox="0 0 1440 80"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-full"
  preserveAspectRatio="none"
>
  <path
    d="
      M0 50
      L900 50
      C940 50 940 20 980 20
      L1080 20
      C1120 20 1120 50 1160 50
      L1440 50
    "
    stroke="#d1d5db"
    strokeWidth="1"
    fill="none"
  />
</svg>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-32">
        {/* Top section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="lg:max-w-xl">
            <p className="text-sm font-bold uppercase text-black">
              Ne Yapıyoruz?
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl">
              Günümüzün pazarlama
              <br />
              sorunlarını yarının
              <br />
              araçlarıyla çözüyoruz
            </h2>
          </div>

          {/* Right */}
          <div className="lg:max-w-md lg:pt-8">
            <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
              İçgörüyü etkiye dönüştürüyor ve sonuç odaklı, veri destekli
              pazarlama stratejileri ile işletmenizi büyütüyoruz.
            </p>
            <a
              href="/hakkimizda"
              className="mt-6 inline-flex flex-col text-sm font-bold uppercase tracking-wider text-black"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span>Hakkımızda</span>
              <span className="mt-1 h-[2px] w-full bg-black" />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-4xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <h3 className="whitespace-pre-line text-xl font-medium text-black sm:text-2xl">
                  {service.title}
                </h3>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#E8F6FA]">
                  {service.icon}
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {service.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
