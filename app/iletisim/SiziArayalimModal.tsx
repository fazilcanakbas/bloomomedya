"use client";
import { useState } from "react";

interface SiziArayalimModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SiziArayalimModal({ open, onClose }: SiziArayalimModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [infoArea, setInfoArea] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setInfoArea("");
    setNote("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="relative bg-black px-8 py-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(8,153,190,0.3)_0%,transparent_60%)]" />
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h3
                className="text-xl font-semibold text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Sizi Arayalım
              </h3>
              <p className="mt-1 text-sm text-white/50">
                Bilgilerinizi bırakın, sizi arayalım.
              </p>
            </div>
            <button
              onClick={handleClose}
              aria-label="Kapat"
              className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-[#E8F6FA]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0899BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p
                className="mt-4 text-xl font-semibold text-black"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Talebiniz alındı!
              </p>
              <p className="mt-2 text-sm text-gray-500">
                En kısa sürede sizinle iletişime geçeceğiz.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800"
              >
                Kapat
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="call-name" className="mb-2 block text-sm font-medium text-gray-700">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="call-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="call-phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="call-phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                    placeholder="Telefon Numaranız"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="call-email" className="mb-2 block text-sm font-medium text-gray-700">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="call-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                    placeholder="E-posta adresiniz (isteğe bağlı)"
                  />
                </div>
                <div>
                  <label htmlFor="call-company" className="mb-2 block text-sm font-medium text-gray-700">
                    Şirket / Firma Adı
                  </label>
                  <input
                    type="text"
                    id="call-company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                    placeholder="Şirket veya firma adınız"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="call-area" className="mb-2 block text-sm font-medium text-gray-700">
                  Bilgi Almak İstediğiniz Alan
                </label>
                <select
                  id="call-area"
                  value={infoArea}
                  onChange={(e) => setInfoArea(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                >
                  <option value="" disabled>Alan seçiniz</option>
                  <option value="web-tasarim">Web Tasarım</option>
                  <option value="dijital-pazarlama">Dijital Pazarlama</option>
                  <option value="seo">SEO Danışmanlığı</option>
                  <option value="sosyal-medya">Sosyal Medya Yönetimi</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="yazilim">Yazılım Geliştirme</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="call-note" className="mb-2 block text-sm font-medium text-gray-700">
                  Not
                </label>
                <textarea
                  id="call-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
                  placeholder="Eklemek istediğiniz not (isteğe bağlı)"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-gray-800"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Arama Talebi Gönder
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
          )}
        </div>
      </div>
    </div>
  );
}
