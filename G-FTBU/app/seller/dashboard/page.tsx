"use client";

export default function SellerDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-10">Satıcı Paneli</h1>

      <header className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Hoş geldiniz, Satıcı!</h2>
        <p className="text-slate-300">Burası ürünlerinizi ve kampanyalarınızı yöneteceğiniz paneldir.</p>
      </header>

      {/* Ürün Yönetimi */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Ürün Yönetimi</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Yeni Ürün Ekle */}
          <a
            href="/seller/products/add"
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500 hover:bg-slate-700 transition"
          >
            <h3 className="text-lg font-bold mb-2">Yeni Ürün Ekle</h3>
            <p className="text-slate-400 text-sm">
              Yeni ürün ekleyin, görseller yükleyin ve detayları düzenleyin.
            </p>
          </a>

          {/* Ürün listesi */}
          <a
            href="/seller/products"
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500 hover:bg-slate-700 transition"
          >
            <h3 className="text-lg font-bold mb-2">Ürünlerim</h3>
            <p className="text-slate-400 text-sm">
              Eklediğiniz tüm ürünleri görüntüleyin ve düzenleyin.
            </p>
          </a>

          {/* Stok Yönetimi */}
          <a
            href="/seller/stocks"
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500 hover:bg-slate-700 transition"
          >
            <h3 className="text-lg font-bold mb-2">Stok Yönetimi</h3>
            <p className="text-slate-400 text-sm">Stok takibi yapın ve güncellemeler yapın.</p>
          </a>
        </div>
      </section>

      {/* Kampanya Yönetimi */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Kampanya Yönetimi</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="/seller/campaigns/create"
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-green-500 hover:bg-slate-700 transition"
          >
            <h3 className="text-lg font-bold mb-2">Kampanya Oluştur</h3>
            <p className="text-slate-400 text-sm">Yeni lansman başlatın ve kullanıcılarla paylaşın.</p>
          </a>

          <a
            href="/seller/campaigns"
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-green-500 hover:bg-slate-700 transition"
          >
            <h3 className="text-lg font-bold mb-2">Kampanyalarım</h3>
            <p className="text-slate-400 text-sm">Tüm aktif ve pasif kampanyaları görüntüleyin.</p>
          </a>

          <a
            href="/seller/reports"
            className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-green-500 hover:bg-slate-700 transition"
          >
            <h3 className="text-lg font-bold mb-2">Raporlar</h3>
            <p className="text-slate-400 text-sm">Satış, kampanya ve performans raporları.</p>
          </a>
        </div>
      </section>

      {/* Çıkış */}
      <button className="bg-red-600 px-8 py-3 rounded-xl hover:bg-red-700 transition">
        Çıkış Yap
      </button>
    </div>
  );
}
