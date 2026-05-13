"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4" style={{ fontFamily: "var(--font-syne)" }}>
      <form onSubmit={handleLogin} className="w-full max-w-md rounded-[30px] bg-white p-10 shadow-2xl border border-gray-100">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-black">Admin Girişi</h2>
          <p className="mt-2 text-sm text-gray-500">Lütfen bilgilerinizi giriniz.</p>
        </div>
        
        {error && <div className="mb-6 rounded-xl bg-red-50 p-3 text-center text-sm text-red-600">{error}</div>}
        
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">E-posta</label>
          <input
            type="email"
            placeholder="admin@bloomomedya.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3.5 text-sm outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
            required
          />
        </div>

        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-gray-700">Şifre</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3.5 text-sm outline-none transition-all focus:border-[#0899BE] focus:ring-2 focus:ring-[#0899BE]/20"
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full rounded-full bg-black py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-gray-800 disabled:opacity-70"
        >
          {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}
