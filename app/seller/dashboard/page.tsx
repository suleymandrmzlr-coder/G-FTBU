"use client";

export default function SellerDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-10">
      <header className="mb-10 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Seller Dashboard</h1>
        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">
          Çıkış Yap
        </button>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Ürün Ekle */}
        <a
          href="/seller/products/add"
          className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:border-blue-500 cursor-pointer transition"
        >
          <h2 className="text-xl font-semibold mb-2">Ürün Ekle</h2>
          <p className="text-slate-400 text-sm">
            Yeni ürün ekleyin, görseller yükleyin ve stok bilgilerini girin.
          </p>
        </a>

        {/* Kampanya Oluştur */}
        <a
          href="/seller/campaigns/create"
          className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:border-green-500 cursor-pointer transition"
        >
          <h2 className="text-xl font-semibold mb-2">Kampanya Oluştur</h2>
          <p className="text-slate-400 text-sm">
            Ürününüz için lansman kampanyası başlatın.
          </p>
        </a>

        {/* Sipariş & Gönderim */}
        <a
          href="/seller/orders"
          className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:border-yellow-500 cursor-pointer transition"
        >
          <h2 className="text-xl font-semibold mb-2">Gönderimler</h2>
          <p className="text-slate-400 text-sm">
            Ürün teslim durumlarını ve gönderim süreçlerini yönetin.
          </p>
        </a>
      </div>
    </div>
  );
}
