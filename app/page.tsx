"use client";

const dummyCampaigns = [
  {
    id: "1",
    tag: "Anneler için lansman",
    title: "Doğal Bebek Bakım Seti",
    desc: "Sadece annelere özel, 100 deneyim hakkı.",
    stock: 72,
    image:
      "https://images.pexels.com/photos/4492041/pexels-photo-4492041.jpeg?auto=compress&cs=tinysrgb&w=800",
    segments: ["Anne", "Bebek", "Bakım"],
  },
  {
    id: "2",
    tag: "Sporcular için",
    title: "Protein Bar Lansmanı",
    desc: "Antrenman sonrası için yeni nesil protein bar.",
    stock: 34,
    image:
      "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800",
    segments: ["Sporcu", "Fitness"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-cyan-400 flex items-center justify-center text-slate-950 font-black">
              G
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-lg">Giftbu</span>
              <span className="text-xs text-slate-400">
                Ürün lansman ve gerçek deneyim platformu
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <button className="px-3 py-1.5 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition">
              Satıcı Paneli
            </button>
            <button className="px-4 py-1.5 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition">
              Giriş Yap
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-1 lg:grid-cols-[260px,1.3fr,320px] gap-6">
          
          {/* Sol: filtre & menü */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
                Profiline Göre
              </p>
              <p className="text-sm text-slate-200">
                <span className="font-semibold text-cyan-300">Hoş geldin, Süleyman</span> – şu an{" "}
                <span className="font-medium">“Gelişmiş Kullanıcı”</span> segmentindesin.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
                  Kategoriler
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Anne & Bebek", "Kozmetik", "Teknoloji", "Ev & Yaşam", "Pet", "Gıda & Spor"].map((cat) => (
                    <button
                      key={cat}
                      className="px-3 py-1.5 rounded-full bg-slate-800 text-xs hover:bg-cyan-400/10 hover:text-cyan-300 border border-transparent hover:border-cyan-400 transition"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
                  Pazar Yerleri
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Amazon", "Trendyol", "Hepsiburada", "N11"].map((m) => (
                    <button
                      key={m}
                      className="px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-cyan-500/40 bg-cyan-500/5 p-3 text-xs text-slate-300">
                <p className="font-semibold text-cyan-300 mb-1">Reklam Alanı</p>
                <p>Yeni ürün lansmanını buraya sabitle. Hedefli kullanıcıya tek tıkla ulaş.</p>
              </div>
            </div>
          </aside>

          {/* Orta: kampanya feed */}
          <section className="space-y-4">
            
            {/* Hero Alan */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-cyan-400/10 p-6">
              <div className="max-w-md space-y-3">
                <p className="text-xs uppercase tracking-wide text-cyan-300 font-semibold">Yeni Nesil Lansman</p>
                <h1 className="text-2xl md:text-3xl font-semibold">
                  Ürünlerini <span className="text-cyan-300">gerçek anneler, sporcular</span> ve gerçek kullanıcılarla buluştur.
                </h1>
                <p className="text-sm text-slate-300">
                  Cashback sadece araçtır. Asıl amaç doğru kişiye ulaşan ürün, kaliteli yorum ve organik yayılım.
                </p>
              </div>
            </div>

            {/* Kartlar */}
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-200">Senin İçin Önerilen Lansmanlar</h2>

              <div className="grid gap-4 md:grid-cols-2">
                {dummyCampaigns.map((c) => (
                  <article
                    key={c.id}
                    className="group rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden hover:border-cyan-400/70 transition-all hover:-translate-y-[2px]"
                  >
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      
                      {/* Üst bilgi */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/40">
                          {c.tag}
                        </span>
                        <span className="text-slate-400">
                          Stok: <span className="font-semibold text-slate-100">{c.stock}</span>
                        </span>
                      </div>

                      <h3 className="text-sm font-semibold">{c.title}</h3>
                      <p className="text-xs text-slate-300">{c.desc}</p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {c.segments.map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded-full bg-slate-800 text-[11px] text-slate-300">
                            {s}
                          </span>
                        ))}
                      </div>

                     
                      <div className="pt-2 flex items-center gap-2">
                        <button className="flex-1 px-3 py-1.5 rounded-full bg-cyan-400 text-slate-950 text-xs font-semibold hover:bg-cyan-300 transition">
                          Deneyimlemek istiyorum
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-[11px] border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition">
                          Detay
                        </button>
                      </div>

                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Sağ: SSS */}
          <aside className="space-y-4">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Sık Sorulanlar</p>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="font-semibold text-slate-100">Giftbu nedir?</p>
                  <p className="text-slate-300">
                    Giftbu, tüketicilerin ürünleri deneyimleyip gerçek yorumlar oluşturduğu yeni nesil lansman platformudur.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Ürünler ücretsiz mi?</p>
                  <p className="text-slate-300">
                    Ürünü kendi hesabından alırsın; yorum ve onay sürecinden sonra ücret iadesi yapılır.
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>

    </div>
  );
}
