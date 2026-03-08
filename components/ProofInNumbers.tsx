const stats = [
  {
    value: "4.2x",
    description:
      "Bir moda e-ticaret markası için gelir artışı — ölçeklendirilmiş performans pazarlaması ve tam dönüşüm hunisi takibiyle.",
  },
  {
    value: "+212%",
    description:
      "Teknik SEO revizyonu, içerik ölçeklendirmesi ve analitik destekli içerik planlamasıyla organik görünürlükte artış.",
  },
  {
    value: "3.6x",
    description:
      "Gerçek zamanlı bütçe dağılımı ve çok platformlu atıf modellemesiyle ROAS iyileştirmesi.",
  },
];

export default function ProofInNumbers() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-32">
        <div className="rounded-3xl bg-[#F3F4F6] p-8 sm:p-12 lg:p-16">
          {/* Title */}
          <h2
            className="text-2xl font-medium text-black sm:text-3xl lg:text-4xl"
          >
            Rakamlar Kendini Gösterir
          </h2>

          {/* Content grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-4">
            {/* Stat cards */}
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center text-center">
                {/* Outer circle */}
                <div className="flex size-44 items-center justify-center rounded-full border border-gray-200">
                  {/* Inner circle */}
                  <div className="flex size-36 flex-col items-center justify-center rounded-full border-2 border-[#0899BE]/20">
                    <span className="text-3xl font-medium text-black sm:text-4xl">
                      {stat.value}
                    </span>
                    {/* Arrow up inside inner circle */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0899BE"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                  </div>
                </div>
                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}

            {/* CTA card */}
            <div className="flex flex-col items-center justify-center rounded-3xl bg-[#0899BE]/20 p-8 text-center">
              <h3
                className="text-2xl font-medium leading-tight text-black sm:text-3xl"
              >
                Hedeflerinizi
                <br />
                sonuca dönüştürelim.
              </h3>
              <a
                href="/iletisim"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-gray-800"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Bize Ulaşın
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
