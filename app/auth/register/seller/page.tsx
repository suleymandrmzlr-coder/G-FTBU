"use client";

import { useState } from "react";

export default function SellerRegisterPage() {
  const [companyName, setCompanyName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const categoryOptions = [
    "Kozmetik",
    "Teknoloji",
    "Anne & Bebek",
    "Ev & Yaşam",
    "Gıda & Atıştırmalık",
    "Pet",
    "Vitamin & Takviye",
  ];

  function toggleCategory(cat: string) {
    if (categories.includes(cat)) {
      setCategories(categories.filter((c) => c !== cat));
    } else {
      setCategories([...categories, cat]);
    }
  }

  const handleRegister = async () => {
    setLoading(true);

    // ŞİMDİLİK SADECE TEST LOGU — sonra Supabase'e bağlayacağız
    console.log("Yeni satıcı kaydı:", {
      companyName,
      brandName,
      taxNumber,
      address,
      website,
      email,
      password,
      categories,
      status: "pending_verification",
    });

    alert("Satıcı kayıt formu (test modunda) başarıyla çalıştı!");

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Satıcı / Firma Kaydı
        </h1>
        <p className="text-sm text-slate-300 mb-6 text-center">
          Firma bilgilerin doğrulandıktan sonra lansmanlarını yayına alacağız.
        </p>

        {/* Firma Bilgileri */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <label className="block">
            <span>Firma Ünvanı</span>
            <input
              type="text"
              className="w-full p-2 rounded bg-slate-700 mt-1"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>

          <label className="block">
            <span>Marka Adı</span>
            <input
              type="text"
              className="w-full p-2 rounded bg-slate-700 mt-1"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </label>

          <label className="block">
            <span>Vergi Numarası</span>
            <input
              type="text"
              className="w-full p-2 rounded bg-slate-700 mt-1"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
            />
          </label>

          <label className="block">
            <span>Web Sitesi (opsiyonel)</span>
            <input
              type="text"
              className="w-full p-2 rounded bg-slate-700 mt-1"
              placeholder="https://"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
        </div>

        <label className="block mb-4">
          <span>İşletme Adresi</span>
          <textarea
            className="w-full p-2 rounded bg-slate-700 mt-1 min-h-[80px]"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        {/* Kategoriler */}
        <div className="mb-4">
          <span>Ürün Kategorileri</span>
          <div className="grid md:grid-cols-3 gap-2 mt-2">
            {categoryOptions.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => toggleCategory(cat)}
                className={`p-2 rounded text-xs border ${
                  categories.includes(cat)
                    ? "bg-emerald-600 border-emerald-400"
                    : "bg-slate-700 border-slate-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <hr className="my-4 border-slate-700" />

        {/* Giriş Bilgileri */}
        <h2 className="text-lg font-semibold mb-3">Hesap Bilgileri</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <label className="block">
            <span>Yetkili E-posta</span>
            <input
              type="email"
              className="w-full p-2 rounded bg-slate-700 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block">
            <span>Şifre</span>
            <input
              type="password"
              className="w-full p-2 rounded bg-slate-700 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 p-3 rounded-lg mt-2 transition"
        >
          {loading ? "Kaydediliyor..." : "Kaydı Gönder"}
        </button>

        <p className="text-xs text-slate-400 mt-3 text-center">
          Başvurunuz ekibimiz tarafından incelendikten sonra hesabınız
          aktifleştirilecektir.
        </p>
      </div>
    </div>
  );
}
