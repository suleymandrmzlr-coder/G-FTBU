"use client";

import { useState } from "react";

type UserType = "buyer" | "influencer" | "seller";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<UserType>("buyer");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    console.log("Giriş denemesi:", {
      email,
      password,
      userType,
    });

    alert(
      `Login (test modunda) başarılı sayalım.\nKullanıcı tipi: ${userType}`
    );

    // Sonrasında:
    // if (userType === "buyer") -> /dashboard/buyer
    // if (userType === "influencer") -> /dashboard/influencer
    // if (userType === "seller") -> /dashboard/seller

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">Giriş Yap</h1>
        <p className="text-sm text-slate-300 mb-6 text-center">
          Giftbu paneline erişmek için hesabınla giriş yap.
        </p>

        <div className="mb-4">
          <span className="text-sm">Kullanıcı Tipi</span>
          <div className="flex gap-2 mt-2 text-xs">
            <button
              type="button"
              onClick={() => setUserType("buyer")}
              className={`flex-1 p-2 rounded border ${
                userType === "buyer"
                  ? "bg-blue-600 border-blue-400"
                  : "bg-slate-700 border-slate-500"
              }`}
            >
              Alıcı
            </button>
            <button
              type="button"
              onClick={() => setUserType("influencer")}
              className={`flex-1 p-2 rounded border ${
                userType === "influencer"
                  ? "bg-purple-600 border-purple-400"
                  : "bg-slate-700 border-slate-500"
              }`}
            >
              Influencer
            </button>
            <button
              type="button"
              onClick={() => setUserType("seller")}
              className={`flex-1 p-2 rounded border ${
                userType === "seller"
                  ? "bg-emerald-600 border-emerald-400"
                  : "bg-slate-700 border-slate-500"
              }`}
            >
              Satıcı
            </button>
          </div>
        </div>

        <label className="block mb-3">
          <span>E-mail</span>
          <input
            type="email"
            className="w-full p-2 rounded bg-slate-700 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span>Şifre</span>
          <input
            type="password"
            className="w-full p-2 rounded bg-slate-700 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg mt-2 transition"
        >
          {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>
      </div>
    </div>
  );
}
