"use client";

import { useState } from "react";

export default function InfluencerRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);

    console.log("Influencer kayıt verileri:", {
      name,
      email,
      password,
      instagram,
      tiktok,
      youtube,
    });

    alert("Influencer kayıt (test modunda) başarıyla çalıştı!");

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Influencer Kayıt
        </h1>

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

        <hr className="my-4 border-slate-600" />

        <h2 className="text-lg font-semibold mb-3">Sosyal Medya Bilgileri</h2>

        <label className="block mb-3">
          <span>Instagram Kullanıcı Adı</span>
          <input
            type="text"
            className="w-full p-2 rounded bg-slate-700 mt-1"
            placeholder="@example"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span>TikTok Kullanıcı Adı</span>
          <input
            type="text"
            className="w-full p-2 rounded bg-slate-700 mt-1"
            value={tiktok}
            onChange={(e) => setTiktok(e.target.value)}
          />
        </label>

        <label className="block mb-3">
          <span>YouTube Kanal Linki</span>
          <input
            type="text"
            className="w-full p-2 rounded bg-slate-700 mt-1"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </label>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded mt-4 transition"
        >
          {loading ? "Kaydediliyor..." : "Kayıt Ol"}
        </button>
      </div>
    </div>
  );
}
