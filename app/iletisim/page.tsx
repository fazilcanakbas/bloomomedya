"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiziArayalimModal from "./SiziArayalimModal";

const contactInfo = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0899BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adres",
    value: "Antalya, Türkiye",
    href: "#",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0899BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Telefon",
    value: "+90 (545) 248 72 21",
    href: "tel:+905452487221",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0899BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
    label: "E-posta",
    value: "info@bloomomedya.com",
    href: "mailto:info@bloomomedya.com",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0899BE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Çalışma Saatleri",
    value: "Pazartesi – Cuma, 09:00 – 18:00",
    href: "#",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/bloomo_medya/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/905452487221",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

export default function IletisimPage() {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-white pb-14 pt-24 sm:pb-16 sm:pt-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-16">
          <div className="relative overflow-hidden rounded-[50px] bg-black px-8 py-16 sm:px-14 sm:py-20 lg:py-24">
            {/* Background image */}
            <Image
              src="/teklif.png"
              alt=""
              fill
              className="pointer-events-none absolute inset-0 object-cover opacity-30"
            />
            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(8,153,190,0.25)_0%,transparent_50%),radial-gradient(circle_at_75%_65%,rgba(8,153,190,0.15)_0%,transparent_40%),linear-gradient(170deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.8)_100%)]" />

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/5" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/5" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full border border-white/5" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <p
                className="text-sm font-semibold tracking-[0.2em] text-[#0899BE]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                İLETİŞİM
              </p>
              <h1
                className="mt-4 text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Projenizi konuşalım,
                <br />
                birlikte başlayalım.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                Markanızı dijitalde bir adım öne taşımak için buradayız.
                Hedeflerinizi birlikte konuşalım, size özel çözümler üretelim.
              </p>

              {/* Quick action buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="tel:+905452487221"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Bizi Arayın
                </a>
                <button
                  type="button"
                  onClick={() => setShowCallModal(true)}
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Sizi Arayalım
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Grid */}
      <section
        className="w-full py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #E8F6FA 0%, #EFF8FA 44%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            {/* Left — Contact Info Cards */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold text-black">BİZE ULAŞIN</p>
              <h2
                className="mt-4 text-2xl font-medium leading-tight text-black sm:text-3xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                İletişim Bilgilerimiz
              </h2>

              <div className="mt-8 flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-lg"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F6FA] transition-colors group-hover:bg-[#0899BE]/20">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-black">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Sosyal Medya
                </p>
                <div className="mt-3 flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all hover:border-[#0899BE] hover:bg-[#0899BE] hover:text-white hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
                <h3
                  className="text-xl font-semibold text-black sm:text-2xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Mesaj Gönderin
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Formu doldurun, en kısa sürede size dönüş yapalım.
                </p>

                <form className="mt-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Ad Soyad */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Adınız Soyadınız"
                        className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="ornek@email.com"
                        className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                      />
                    </div>

                    {/* Telefon */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        placeholder="+90 (5XX) XXX XX XX"
                        className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                      />
                    </div>

                    {/* Konu */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Konu
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Konu seçiniz
                        </option>
                        <option value="web-tasarim">Web Tasarım</option>
                        <option value="dijital-pazarlama">Dijital Pazarlama</option>
                        <option value="seo">SEO Danışmanlığı</option>
                        <option value="sosyal-medya">Sosyal Medya Yönetimi</option>
                        <option value="google-ads">Google Ads</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                  </div>

                  {/* Mesaj */}
                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Projeniz hakkında kısa bilgi verin..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-gray-800"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Mesaj Gönder
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
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="text-center">
            <p className="text-sm font-semibold text-black">KONUMUMUZ</p>
            <h2
              className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Bizi Ziyaret Edin
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[30px] border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204800.93928459335!2d30.516!3d36.897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69a3e4c2d19a!2sAntalya!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Bloomo Konum"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="w-full py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #E8F6FA 50%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold text-black">SSS</p>
              <h2
                className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Sıkça Sorulan
                <br />
                Sorular
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-gray-600">
                Merak ettiğiniz konularda size yardımcı olabiliriz. Burada
                cevabını bulamadıysanız, bize doğrudan yazın.
              </p>
              <Link
                href="mailto:info@bloomomedya.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-gray-800"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                E-posta Gönderin
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

            {/* Right — FAQ Items */}
            <div className="flex flex-col gap-4">
              <FAQItem
                question="Projeler genellikle ne kadar sürer?"
                answer="Proje kapsamına bağlı olarak 2-8 hafta arasında değişir. Dijital reklam kampanyaları hızla başlarken, web geliştirme ve kapsamlı marka stratejileri daha uzun sürebilir. Her proje için net bir zaman çizelgesi paylaşıyoruz."
              />
              <FAQItem
                question="Minimum bütçe gereksinimi var mı?"
                answer="Her işletmenin ihtiyacı farklıdır. Net bir minimum bütçe belirlemek yerine, hedeflerinize ve beklentilerinize göre size en uygun paketi oluşturuyoruz. Fiyatlandırma sayfamızdan detaylara ulaşabilirsiniz."
              />
              <FAQItem
                question="Hangi sektörlere hizmet veriyorsunuz?"
                answer="E-ticaret, eğitim, sağlık, turizm, gayrimenkul ve daha birçok sektörde deneyime sahibiz. Sektör fark etmeksizin, dijital büyüme hedefleyen her markaya stratejik çözümler sunuyoruz."
              />
              <FAQItem
                question="Raporlama ve takip nasıl yapılıyor?"
                answer="Her müşterimize özel dashboard erişimi sağlıyoruz. Haftalık veya aylık detaylı raporlar, düzenli toplantılar ve gerçek zamanlı performans takibi ile süreçleri şeffaf bir şekilde yönetiyoruz."
              />
              <FAQItem
                question="Anlaşma süresi ne kadar?"
                answer="Esnek çalışma modellerimiz mevcut. Proje bazlı, aylık retainer veya uzun vadeli ortaklık modellerinden ihtiyacınıza uygun olanı birlikte belirleyebiliriz."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0899BE] opacity-20 blur-[100px]" />

            {/* Abstract decoration */}
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
                Hemen başlayalım.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
                Projenizi konuşmak için bir adım atın, gerisini birlikte
                halledelim.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+905452487221"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0899BE] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#077a9a]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  BİZİ ARAYIN
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
                <button
                  type="button"
                  onClick={() => setShowCallModal(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-white/10"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  SİZİ ARAYALIM
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
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <SiziArayalimModal
        open={showCallModal}
        onClose={() => setShowCallModal(false)}
      />
    </main>
  );
}

/* --- FAQ Accordion Item --- */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all ${
        open
          ? "border-[#0899BE]/30 bg-white shadow-md"
          : "border-gray-200 bg-white hover:shadow-sm"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span
          className="text-base font-semibold text-black"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {question}
        </span>
        <div
          className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all ${
            open ? "bg-[#0899BE] text-white rotate-180" : "bg-gray-100 text-gray-500"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-sm leading-relaxed text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
}
