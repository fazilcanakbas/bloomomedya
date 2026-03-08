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

  // Hide header when modal is open
  if (typeof window !== "undefined" && open) {
    const header = document.querySelector("header");
    if (header) header.style.display = "none";
  } else if (typeof window !== "undefined") {
    const header = document.querySelector("header");
    if (header) header.style.display = "";
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add API call here
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-3xl relative flex flex-row gap-8">
        <div className="flex-1 flex flex-col justify-center">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            onClick={onClose}
            aria-label="Kapat"
          >
            ×
          </button>
          <h3 className="text-2xl font-bold mb-4 text-center">Sizi Arayalım</h3>
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-lg font-semibold text-green-600 mb-2">Talebiniz alındı!</p>
              <p className="text-gray-700">En kısa sürede sizinle iletişime geçeceğiz.</p>
              <button className="mt-6 px-6 py-2 rounded-xl bg-[#C0FF10] text-black font-semibold" onClick={onClose}>Kapat</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="call-name" className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad *</label>
                  <input type="text" id="call-name" name="call-name" required value={name} onChange={e => setName(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]" placeholder="Adınız Soyadınız" />
                </div>
                <div className="flex-1">
                  <label htmlFor="call-phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                  <input type="tel" id="call-phone" name="call-phone" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]" placeholder="Telefon Numaranız" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="call-email" className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                  <input type="email" id="call-email" name="call-email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]" placeholder="E-posta adresiniz (isteğe bağlı)" />
                </div>
                <div className="flex-1">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Şirket/Firma Adı</label>
                  <input type="text" id="company" name="company" value={company} onChange={e => setCompany(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]" placeholder="Şirket veya firma adınız" />
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="info-area" className="block text-sm font-medium text-gray-700 mb-2">Bilgi Almak İstediğiniz Alan</label>
                <select id="info-area" name="info-area" value={infoArea} onChange={e => setInfoArea(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]">
                  <option value="" disabled>Alan seçiniz</option>
                  <option value="web-tasarim">Web Tasarım</option>
                  <option value="dijital-pazarlama">Dijital Pazarlama</option>
                  <option value="seo">SEO Danışmanlığı</option>
                  <option value="sosyal-medya">Sosyal Medya Yönetimi</option>
                  <option value="yazilim">Yazılım Geliştirme</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div>
                <label htmlFor="call-note" className="block text-sm font-medium text-gray-700 mb-2">Not</label>
                <textarea id="call-note" name="call-note" value={note} onChange={e => setNote(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#C0FF10] focus:ring-1 focus:ring-[#C0FF10]" placeholder="Eklemek istediğiniz not (isteğe bağlı)" rows={3} />
              </div>
              <button type="submit" className="w-full rounded-xl py-3 text-base font-semibold text-black" style={{ backgroundColor: '#C0FF10' }}>Arama Talebi Gönder</button>
            </form>
          )}
        </div>
        {/* Optionally, add an image or illustration here for horizontal layout */}
      </div>
    </div>
  );
}
