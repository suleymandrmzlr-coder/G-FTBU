"use client";

import { useState } from "react";

export default function BuyerRegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const interestOptions = [
    "Teknoloji",
    "Anne & Bebek",
    "Kozmetik",
    "Ev & Yaşam",
    "Spor",
    "Pet",
    "Kişisel bakım",
  ];

  function toggleInterest(item: string) {
    if (interests.includes(item)) {
      setInterests(interests.filter((i) => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  }

  const handleRegister = async () => {
    setLoading(true);

    // ŞİMDİLİK sadece test logu — sonrasında Supabase'e bağlayacağım
    console.log("Yeni alıcı kaydı:", {
      email,
      password,
      name,
      interests,
    });

    alert("Kayıt işlemi (test modunda) çalıştı!");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
        <h1 className="text-2xl font-bold mb-6 text-center">Alıcı Kaydı</h1>

        <label className="block mb-3">
          <span>Ad Soyad</span>
          <input
            type="text"
            className="w-full p-2 rounded bg-slate-700 mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span>E-mail</span>
          <input
            type="email"
            className="w-full p-2 rounded bg-slate-700 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span>Şifre</span>
          <input
            type="password"
            className="w-full p-2 rounded bg-slate-700 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="mb-4">
          <span>İlgi Alanları</span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {interestOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => toggleInterest(item)}
                className={`p-2 rounded text-sm border ${
                  interests.includes(item)
                    ? "bg-blue-600 border-blue-400"
                    : "bg-slate-700 border-slate-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded mt-4 transition"
        >
          {loading ? "Kaydediliyor..." : "Kaydı Tamamla"}
        </button>
      </div>
    </div>
  );
}
