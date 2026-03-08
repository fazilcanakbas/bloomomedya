"use client";
import { useState } from "react";
import SiziArayalimModal from "./SiziArayalimModal";
import { Calendar } from "lucide-react";

const contactInfo = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adres",
    value: "İstanbul, Türkiye",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Telefon",
    value: "+90 (212) 000 00 00",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
    label: "E-posta",
    value: "info@bloomo.com.tr",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
      </svg>
    ),
  },
];

export default function IletisimPage() {
  const [showCallModal, setShowCallModal] = useState(false);
  const handleOpenCallModal = () => setShowCallModal(true);
  const handleCloseCallModal = () => setShowCallModal(false);
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24 xl:px-32">
        {/* Başlık */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Başlayalım
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Markanızı dijitalde bir adım öne taşımak için buradayız. Hedeflerinizi
            birlikte konuşalım, size özel çözümler üretelim.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Sol Taraf - İletişim Bilgileri */}
          <div className="relative overflow-hidden rounded-2xl bg-black p-10 text-white lg:col-span-2">
            {/* Dekoratif blur */}
            <div
              className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#C0FF10] opacity-20 blur-3xl"
            />

            <h2 className="text-2xl font-bold">İletişim Bilgileri</h2>
            <p className="mt-3 text-sm text-gray-400">
              Aşağıdaki kanallardan bize ulaşabilirsiniz.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C0FF10]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="mt-1 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sosyal Medya */}
            <div className="mt-12">
              <p className="text-sm text-gray-400">Sosyal Medya</p>
              <div className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-[#C0FF10] hover:text-black"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Form */}
          <div className="lg:col-span-3">
            <form className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Ad Soyad */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Adınız Soyadınız"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ornek@email.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]"
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+90 (5XX) XXX XX XX"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]"
                  />
                </div>

                {/* Konu */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Konu seçiniz
                    </option>
                    <option value="web-tasarim">Web Tasarım</option>
                    <option value="dijital-pazarlama">
                      Dijital Pazarlama
                    </option>
                    <option value="seo">SEO Danışmanlığı</option>
                    <option value="sosyal-medya">Sosyal Medya Yönetimi</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
              </div>

              {/* Mesaj */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]"
                />
              </div>

              {/* Gönder */}
              <button
                type="submit"
                className="mt-8 w-full rounded-xl py-4 text-base font-semibold text-black transition-all hover:brightness-90 sm:w-auto sm:px-12"
                style={{ backgroundColor: "#C0FF10" }}
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 sm:px-6 sm:pb-24 xl:px-32">
        <div className="relative overflow-hidden bg-black px-8 py-16 sm:px-16 sm:py-20">
          {/* Sol alt köşe çizgileri */}
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80">
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute inset-5 rounded-full border border-white/20" />
            <div className="absolute inset-10 rounded-full border border-white/20" />
            <div className="absolute inset-15 rounded-full border border-white/15" />
          </div>

          {/* Sağ üst köşe çizgileri */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80">
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute inset-5 rounded-full border border-white/20" />
            <div className="absolute inset-10 rounded-full border border-white/20" />
            <div className="absolute inset-15 rounded-full border border-white/15" />
          </div>

          {/* Sağ taraf yeşil-sarı blur */}
          <div className="pointer-events-none absolute right-[10%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#C0FF10] opacity-50 blur-[60px]" />
          <div className="pointer-events-none absolute right-[13%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#e8ff70] opacity-35 blur-[40px]" />

          {/* Robot resmi - blur üstünde, alt kenar sıfır */}
          <img
            src="/digi-robot.png"
            alt=""
            className="pointer-events-none absolute bottom-0 -right-[12%] z-10 hidden h-auto object-contain sm:block sm:w-[38rem] lg:w-[48rem]"
          />

          {/* Star 1 - sağ üst */}
          <img
            src="/star-1.svg"
            alt=""
            className="pointer-events-none absolute right-[30%] top-8 w-8 opacity-80 sm:w-10"
          />

          {/* Star 2 - orta alt */}
          <img
            src="/star-2.svg"
            alt=""
            className="pointer-events-none absolute bottom-10 left-[45%] w-6 opacity-80 sm:w-8"
          />

          <div className="relative z-10 max-w-lg">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Dijitalde yanınızdayız.
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Her adımda, her pikselde, her stratejide — tam kadro arkanızdayız.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="tel:+902120000000"
                className="bizi-arayin-btn inline-flex items-center gap-3 bg-white px-7 py-3.5 text-base font-semibold text-black relative overflow-hidden"
              >
                <span>Bizi Arayın</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
              <button
                type="button"
                className="sizi-arayalim-btn inline-flex items-center gap-3 bg-[#C0FF10] px-7 py-3.5 text-base font-semibold text-black  transition-all hover:brightness-90"
                onClick={handleOpenCallModal}
              >
                <span>Sizi Arayalım</span>
                <Calendar className="w-5 h-5" />
              </button>
            </div>
            <SiziArayalimModal open={showCallModal} onClose={handleCloseCallModal} />
          </div>
        </div>
      </div>
    </section>
  );
}
