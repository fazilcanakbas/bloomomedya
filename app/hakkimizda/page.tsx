import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | Bloomo",
  description: "Bloomo dijital ajans olarak kim olduğumuzu ve ekibimizi tanıyın",
};

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
];

const team = [
  {
    name: "Fazıl Can Akbaş",
    role: "CTO",
    image: "/fazilcan.jpg",
  },
  {
    name: "Elif Demir",
    role: "Kreatif Direktör",
    image: "/digi-robot.png",
  },
  {
    name: "Can Özkan",
    role: "Full-Stack Geliştirici",
    image: "/digi-robot.png",
  },
  {
    name: "Selin Kara",
    role: "UI/UX Tasarımcı",
    image: "/digi-robot.png",
  },
];

export default function HakkimizdaPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative overflow-hidden bg-black">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28 xl:px-32">
          <div className="relative z-10 max-w-2xl">
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#0899BE" }}
            >
              Hakkımızda
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Dijitalde büyümeniz için buradayız.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Bloomo, markaların dijital dünyada fark yaratmasını sağlayan bir
              büyüme ajansıdır. Strateji, tasarım ve teknoloji üçgeninde
              projelerinizi hayata geçiriyoruz.
            </p>
          </div>

          {/* Sağ: Blur + Robot */}
          <div className="pointer-events-none absolute bottom-0 -right-16 top-0 hidden w-[45%] items-end justify-center lg:flex">
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0899BE] opacity-40 blur-[80px]" />
            <img
              src="/hakkimizda.png"
              alt="Robot"
              className="relative z-10 h-full w-auto scale-150 origin-bottom object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Biz Kimiz */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 xl:px-32">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#0899BE" }}
              >
                Biz Kimiz
              </p>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Dijital d&uuml;nyada iz b&#305;rakan markalar yarat&#305;yoruz.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600">
                Bloomo, 2024 y&#305;l&#305;nda kurulan bir dijital b&uuml;y&uuml;me ajans&#305;d&#305;r.
                Web tasar&#305;m, mobil uygulama geli&#351;tirme, marka kimli&#287;i ve dijital
                pazarlama alanlar&#305;nda &ccedil;al&#305;&#351;&#305;yoruz. Sadece g&ouml;rsel de&#287;il, sonu&ccedil;
                odakl&#305; projeler &uuml;retiyoruz.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Markan&#305;z&#305;n dijitaldeki varl&#305;&#287;&#305;n&#305; stratejik bir bak&#305;&#351; a&ccedil;&#305;s&#305;yla
                ele al&#305;yor, tasar&#305;m ve teknoloji g&uuml;c&uuml;yle somut sonu&ccedil;lara
                d&ouml;n&uuml;&#351;t&uuml;r&uuml;yoruz.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-3xl font-bold text-gray-900" style={{ color: "#0899BE" }}>
                  50+
                </p>
                <p className="mt-1 text-sm text-gray-600">Tamamlanan Proje</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-3xl font-bold text-gray-900" style={{ color: "#0899BE" }}>
                  30+
                </p>
                <p className="mt-1 text-sm text-gray-600">Mutlu M&uuml;&#351;teri</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-3xl font-bold text-gray-900" style={{ color: "#0899BE" }}>
                  5+
                </p>
                <p className="mt-1 text-sm text-gray-600">Kendi Markam&#305;z</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-3xl font-bold text-gray-900" style={{ color: "#0899BE" }}>
                  7/24
                </p>
                <p className="mt-1 text-sm text-gray-600">Destek</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ne Yapıyoruz */}
      <div className="bg-black">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 xl:px-32">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#0899BE" }}
          >
            Ne Yap&#305;yoruz
          </p>
          <h2 className="mb-8 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Markalar&#305; dijitalde b&uuml;y&uuml;ten hizmetler sunuyoruz.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Web Tasarım & Geliştirme", desc: "Hızlı, modern ve dönüşüm odaklı web siteleri tasarlıyor ve geliştiriyoruz." },
              { title: "Mobil Uygulama", desc: "iOS ve Android için kullanıcı dostu, performanslı mobil uygulamalar üretiyoruz." },
              { title: "Marka Kimliği", desc: "Logo, kurumsal kimlik ve görsel dil oluşturarak markanızı konumlandırıyoruz." },
              { title: "Dijital Pazarlama", desc: "SEO, sosyal medya yönetimi ve reklam stratejileriyle büyümenizi hızlandırıyoruz." },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#0899BE]/30"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Değerler */}
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 xl:px-32">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Yaklaşımımız
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
            Her projede aynı üç ilkeyi takip ediyoruz.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#0899BE" }}
              >
                {value.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ekip */}
      <div className="bg-gray-50">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 xl:px-32">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Ekibimiz
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
              Farklı disiplinlerden gelen, ortak hedefle çalışan bir ekip.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-[#0899BE] bg-white p-4 pb-6 transition-shadow hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram */}
      <div className="bg-black py-10 sm:py-14">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Bloomo Instagram i&#231;erikleri</p>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Bizi takip edin
              </h2>
            </div>
            <a
              href="https://instagram.com/bloomo_medya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:brightness-90"
              style={{ backgroundColor: "#0899BE" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @bloomo_medya
            </a>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex gap-4 px-4 sm:px-6 xl:px-32"
            style={{
              animation: "scrollLeft 40s linear infinite",
              width: "max-content",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, idx) => (
              <div key={idx} className="shrink-0">
                <img
                  src={`/insta${i}.jpg`}
                  alt={`Instagram ${i}`}
                  className="h-96 w-72 rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* CTA */}
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 xl:px-32">
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

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0899BE] opacity-30 blur-[80px]" />

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
              Birlikte çalışalım.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
              Projenizi konuşmak için bir adım atın, gerisini birlikte halledelim.
            </p>
            <Link
              href="/iletisim"
              className="mt-8 inline-block rounded-full px-8 py-3.5 text-base font-semibold text-black transition-all hover:brightness-90"
              style={{ backgroundColor: "#0899BE" }}
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
