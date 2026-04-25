import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollToButton from "@/components/ScrollToButton";

export const metadata: Metadata = {
  title: "Hakkımızda | Bloomo",
  description:
    "Bloomo dijital ajans olarak kim olduğumuzu ve ekibimizi tanıyın",
};

const values = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0899BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Strateji Odaklı",
    description:
      "Her projeye veri ve analiz ile başlıyoruz. Göze güzel görünmekle kalmayıp, gerçek sonuç üreten çözümler tasarlıyoruz.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0899BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Dijital Öncelikli",
    description:
      "Web, mobil, sosyal medya — her platformda tutarlı ve etkili bir marka deneyimi sunuyoruz.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0899BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Takım Ruhu",
    description:
      "Müşterilerimizi iş ortağımız olarak görüyoruz. Şeffaf iletişim ve sürekli iş birliği ile çalışıyoruz.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0899BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Sonuç Odaklı",
    description:
      "Sadece güzel tasarım değil, ölçülebilir iş sonuçları üretiyoruz. Her adım veriye dayanır.",
  },
];

const team = [
  {
    name: "Sinan Tekin",
    role: "CEO / Kurucu",
    image: "/bloomo-2.png",
  },
  {
    name: "Fazıl Can Akbaş",
    role: "Full Stack Developer",
    image: "/bloomo-2.png",
  },
  {
    name: "Gürkan Yavuz",
    role: "Sosyal Medya Uzmanı",
    image: "/bloomo-2.png",
  },
];

export default function HakkimizdaPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-16">
          <div className="relative overflow-hidden rounded-[50px] bg-black px-8 py-20 sm:px-14 sm:py-24 lg:py-28">
            {/* Background image */}
            <Image
              src="/hakkimizda-hero.png"
              alt=""
              fill
              className="pointer-events-none absolute inset-0 object-cover"
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h1
                className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Dijitalde büyümeniz için
                <br />
                stratejik çözümler üretiyoruz.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                Bloomo, markaların dijital dünyada fark yaratmasını sağlayan
                bir dijital pazarlama ajansıdır. Strateji, veri ve yaratıcılığı bir araya
                getirerek projelerinizi hayata geçiriyoruz.
              </p>
              <ScrollToButton targetId="biz-kimiz" label="Bloomo'yu keşfedin" />
            </div>
          </div>
        </div>
      </section>

      {/* Biz Kimiz + Stats */}
      <section id="biz-kimiz" className="w-full py-20 lg:py-28 scroll-mt-20" style={{ background: "linear-gradient(to bottom, #E8F6FA 0%, #E8F6FA 60%, #ffffff 100%)" }}>
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-black">BİZ KİMİZ</p>
              <h2
                className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Dijital dünyada iz bırakan
                <br />
                markalar yaratıyoruz.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Bloomo, 2024 yılında kurulan bir dijital pazarlama ajansıdır.
                Dijital pazarlama, sosyal medya yönetimi, video prodüksiyon ve
                reklam stratejileri alanlarında çalışıyoruz. Sadece görsel
                değil, sonuç odaklı projeler üretiyoruz.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Markanızın dijitaldeki varlığını stratejik bir bakış açısıyla
                ele alıyor, veri ve yaratıcılık gücüyle somut sonuçlara
                dönüştürüyoruz.
              </p>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <Image
                src="/bizkimiz.png"
                alt="Biz Kimiz"
                width={500}
                height={500}
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yaklaşımımız */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="text-center">
            <p className="text-sm font-semibold text-black">YAKLAŞIMIMIZ</p>
            <h2
              className="mx-auto mt-4 max-w-2xl text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Her Projede Aynı
              <br />
              İlkeleri Takip Ediyoruz
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col rounded-2xl bg-[#F3F4F6] p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-white">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-black">
                  {value.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekip */}
      <section className="w-full py-20 lg:py-28" style={{ background: "linear-gradient(to bottom, #ffffff 0%, #E8F6FA 50%, #ffffff 100%)" }}>
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="text-center">
            <p className="text-sm font-semibold text-black">EKİBİMİZ</p>
            <h2
              className="mx-auto mt-4 max-w-2xl text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Farklı Disiplinlerden,
              <br />
              Ortak Hedefle
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden bg-[#F3F4F6]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold text-black"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0899BE] opacity-20 blur-[100px]" />

            {/* Abstract decoration — top right */}
            <div className="pointer-events-none absolute -right-[80px] -top-[80px] z-0 w-[280px]">
              <Image
                src="/hero-7.png"
                alt=""
                width={280}
                height={280}
                className="object-contain"
              />
            </div>

            {/* Abstract decoration — bottom left */}
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
                Birlikte çalışalım.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
                Projenizi konuşmak için bir adım atın, gerisini birlikte
                halledelim.
              </p>
              <Link
                href="/iletisim"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0899BE] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#077a9a]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                BİZİMLE İLETİŞİME GEÇİN
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
