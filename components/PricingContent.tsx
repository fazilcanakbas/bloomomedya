"use client";

import { useState } from "react";
import Image from "next/image";

const coreService = {
  title: "Sosyal Medya Yönetimi",
  description:
    "Markanızın sosyal medya hesaplarının profesyonel yönetimi. İçerik üretimi, paylaşım takvimi ve topluluk yönetimi dahil.",
  features: [
    "İçerik stratejisi ve takvimi",
    "Görsel & video içerik üretimi",
    "Topluluk yönetimi",
    "Aylık performans raporu",
    "Instagram, Facebook, TikTok",
  ],
};

const extraServices = [
  {
    title: "Google Ads",
    description:
      "Google arama ve display ağında reklam yönetimi. Hedef kitle analizi ve optimizasyon dahil.",
    features: ["Arama ağı reklamları", "Display reklamları", "Remarketing", "Dönüşüm takibi"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Meta Ads",
    description:
      "Facebook ve Instagram reklam kampanyalarının oluşturulması ve yönetimi.",
    features: ["Facebook Ads", "Instagram Ads", "A/B testleri", "Hedef kitle analizi"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "SEO Danışmanlığı",
    description:
      "Arama motoru optimizasyonu ile organik trafiğinizi artırın. Teknik SEO ve içerik stratejisi.",
    features: ["Teknik SEO", "İçerik optimizasyonu", "Backlink stratejisi", "Anahtar kelime analizi"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Web Tasarım & Geliştirme",
    description:
      "Modern, hızlı ve mobil uyumlu web siteleri. UI/UX tasarım ve frontend geliştirme.",
    features: ["UI/UX tasarım", "Responsive geliştirme", "CMS entegrasyonu", "Performans optimizasyonu"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Video Prodüksiyon",
    description:
      "Markanız için profesyonel video içerik üretimi. Reels, tanıtım filmi ve reklam videoları.",
    features: ["Reels & Shorts", "Tanıtım filmi", "Reklam videoları", "Motion graphics"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
  {
    title: "Web Analitik",
    description:
      "Google Analytics kurulumu, veri analizi ve dönüşüm takibi. Veriye dayalı kararlar alın.",
    features: ["GA4 kurulumu", "Veri analizi", "Dönüşüm takibi", "Aylık raporlama"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Marka Kimliği",
    description:
      "Logo, kurumsal kimlik ve marka rehberi tasarımı. Dijitalde tutarlı bir marka deneyimi.",
    features: ["Logo tasarımı", "Kurumsal kimlik", "Marka rehberi", "Görsel dil oluşturma"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "E-posta Pazarlama",
    description:
      "Newsletter ve e-posta kampanyaları. Otomatik akışlar ve segmentasyon stratejileri.",
    features: ["Newsletter tasarımı", "Otomasyon akışları", "Segmentasyon", "A/B testleri"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "İçerik Pazarlama",
    description:
      "Blog yazıları, infografikler ve dijital içerik stratejisi ile markanızı büyütün.",
    features: ["Blog içerikleri", "İnfografikler", "İçerik stratejisi", "SEO uyumlu yazılar"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
];

export default function PricingContent() {
  const [selected, setSelected] = useState<string[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (title: string) => {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormOpen(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 2000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      {/* Top-right decorative image */}
      <Image
        src="/21.png"
        alt=""
        width={460}
        height={460}
        className="pointer-events-none absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-56 sm:w-64 md:w-72 lg:w-80 xl:w-[480px] z-0"
      />

      {/* Hero blur gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] overflow-hidden">
        {/* Center teal/blue glow */}
        <div
          className="absolute left-1/2 top-[10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(8, 153, 190, 0.8) 0%, rgba(8, 153, 190, 0.4) 40%, rgba(8, 153, 190, 0.1) 70%, transparent 100%)" }}
        />
        {/* Left purple glow */}
        <div
          className="absolute left-[15%] top-[5%] h-[400px] w-[400px] rounded-full opacity-40 blur-[100px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.5) 0%, transparent 70%)" }}
        />
        {/* Right indigo glow */}
        <div
          className="absolute right-[15%] top-[15%] h-[350px] w-[350px] rounded-full opacity-35 blur-[100px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.5) 0%, transparent 70%)" }}
        />
        {/* Bottom fade to black */}
        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32 text-center">
          <h1
            className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Projenizdeki ihtiyaçlarınızı seçin,
            <br />
            <span className="text-white/60">
              markanıza özel seçimler ile hemen teklif alın.
            </span>
          </h1>
        </div>
      </section>

      {/* Services Box */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="rounded-2xl border border-[#0899BE] bg-white/[0.03] shadow-[0_0_40px_-10px_rgba(8,153,190,0.15)]">
            {/* Logo */}
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <Image
                src="/bloomo-logo.png"
                alt="Bloomo"
                width={140}
                height={36}
              />
            </div>

            {/* Core Service */}
            <div className="px-8 py-8 sm:px-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3
                          className="text-xl font-semibold text-white sm:text-2xl"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                    {coreService.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {coreService.description}
                  </p>
                </div>
                <span className="rounded-full bg-[#0899BE]/20 px-4 py-1.5 text-xs font-semibold text-[#0899BE] shrink-0">
                  Temel Hizmet
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {coreService.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Selected extra services */}
            {selected.map((s) => {
              const service = extraServices.find((e) => e.title === s);
              if (!service) return null;
              return (
                <div key={s}>
                  <div className="mx-8 sm:mx-10 h-px bg-white/10" />
                  <div className="px-8 py-8 sm:px-10">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3
                          className="text-xl font-semibold text-white sm:text-2xl"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {service.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                          {service.description}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleService(s)}
                        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-white/80"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider text */}
      <section className="pb-8">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <p className="text-center text-base text-white">
            Bloomo üzerine ihtiyacınıza alan modülleri ve servisleri ekleyin.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setFormOpen(true)}
              className="inline-flex items-center gap-3 rounded-full border border-[#0899BE] bg-white px-10 py-4 text-base font-semibold text-[#0899BE] transition-all hover:bg-white/90"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Hemen Teklif Alın
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Extra Services Title */}
      <section className="pb-6 pt-8">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <h2
            className="text-2xl font-medium text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Ekstra Hizmetler
          </h2>
          <p className="mt-2 text-sm text-white/40">
            İhtiyacınıza göre ekstra hizmetleri seçin ve teklif alın.
          </p>
        </div>
      </section>

      {/* Extra Services Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extraServices.map((service) => {
              const isSelected = selected.includes(service.title);
              return (
                <div
                  key={service.title}
                  className={`flex flex-col rounded-2xl border p-6 transition-all ${
                    isSelected
                      ? "border-[#0899BE]"
                      : "border-white/40"
                  }`}
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-white/50">
                    {service.icon}
                  </div>
                  <h3
                    className="mt-4 text-base font-semibold text-white"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                  <button
                    onClick={() => toggleService(service.title)}
                    className={`mt-5 self-start rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                      isSelected
                        ? "bg-[#0899BE] text-white hover:bg-[#077a9a]"
                        : "bg-white text-[#0899BE] hover:bg-white/90"
                    }`}
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {isSelected ? "Tekliften Çıkar" : "Teklife Ekle"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          {selected.length > 0 && (
            <div className="mt-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <Image
                src="/bloomo-logo.png"
                alt="Bloomo"
                width={120}
                height={32}
              />
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0899BE] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#077a9a]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Teklif Alın
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Form Slide-in Panel */}
      {formOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm"
            onClick={() => setFormOpen(false)}
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 z-[1001] flex h-full w-full max-w-lg flex-col bg-[#111] shadow-2xl animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">
              <h2
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Teklif Formu
              </h2>
              <button
                onClick={() => setFormOpen(false)}
                className="flex size-10 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Selected services */}
            <div className="border-b border-white/10 px-8 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                Seçilen Hizmetler
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#0899BE]/20 px-3 py-1 text-xs font-medium text-[#0899BE]">
                  {coreService.title}
                </span>
                {selected.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-[#0899BE]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3
                    className="mt-6 text-xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Talebiniz Alındı!
                  </h3>
                  <p className="mt-2 text-sm text-white/50">
                    En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/60">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#0899BE] placeholder:text-white/20"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/60">
                      E-posta
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#0899BE] placeholder:text-white/20"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/60">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#0899BE] placeholder:text-white/20"
                      placeholder="0 (5XX) XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/60">
                      Firma Adı
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#0899BE] placeholder:text-white/20"
                      placeholder="Firma adınız"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/60">
                      Mesajınız
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#0899BE] placeholder:text-white/20"
                      placeholder="Projeniz hakkında kısaca bilgi verin..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-[#0899BE] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#077a9a]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Teklif Talebini Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
