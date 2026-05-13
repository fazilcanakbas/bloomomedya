"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<{name: string, text: string} | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
        return;
      }
      fetchSubmissions();
    };
    checkAuth();
  }, [router]);

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from("form_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) {
      setSubmissions(data);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-lg font-medium text-gray-500 animate-pulse">Yükleniyor...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-8" style={{ fontFamily: "var(--font-syne)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-black">Talepler & Mesajlar</h1>
            <p className="mt-2 text-sm text-gray-500">Web sitesi üzerinden gönderilen tüm formlar.</p>
          </div>
          <button 
            onClick={handleLogout} 
            className="rounded-full bg-white border border-gray-200 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-50"
          >
            Çıkış Yap
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-[#E8F6FA] text-gray-900 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-semibold">Tarih</th>
                  <th className="px-6 py-4 font-semibold">Tip</th>
                  <th className="px-6 py-4 font-semibold">Ad Soyad</th>
                  <th className="px-6 py-4 font-semibold">İletişim</th>
                  <th className="px-6 py-4 font-semibold">Konu / Alan</th>
                  <th className="px-6 py-4 font-semibold">Mesaj / Not</th>
                </tr>
              </thead>
              <tbody>
                {submissions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      Henüz hiç form talebi gelmemiş.
                    </td>
                  </tr>
                ) : (
                  submissions.map((sub) => (
                    <tr key={sub.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-5 whitespace-nowrap text-gray-500">
                        {new Date(sub.created_at).toLocaleString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute:'2-digit' })}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${sub.type === 'contact' ? 'bg-[#0899BE]/10 text-[#0899BE]' : 'bg-green-100 text-green-700'}`}>
                          {sub.type === 'contact' ? 'İletişim Formu' : 'Sizi Arayalım'}
                        </span>
                      </td>
                      <td className="px-6 py-5 font-semibold text-gray-900">
                        {sub.name}
                        {sub.company && <div className="text-xs font-normal text-gray-400 mt-0.5">{sub.company}</div>}
                      </td>
                      <td className="px-6 py-5">
                        <div className="font-medium">{sub.phone}</div>
                        {sub.email && <div className="text-xs text-gray-400 mt-0.5">{sub.email}</div>}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        {sub.subject || sub.info_area || '-'}
                      </td>
                      <td className="px-6 py-5">
                        <div className="max-w-xs">
                          <p className="truncate text-gray-900">{sub.message || sub.note || '-'}</p>
                          {(sub.message || sub.note) && (sub.message || sub.note).length > 40 && (
                            <button
                              onClick={() => setSelectedMessage({ name: sub.name, text: sub.message || sub.note })}
                              className="mt-1 text-xs font-semibold text-[#0899BE] hover:underline"
                            >
                              Devamını Oku
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mesaj Okuma Modalı */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">{selectedMessage.name} - Mesaj Detayı</h3>
              <button
                onClick={() => setSelectedMessage(null)}
                className="flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">
              {selectedMessage.text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
