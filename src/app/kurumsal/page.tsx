"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function KurumsalPage() {
  return (
    // ARKAPLANI KOYU YAPTIK (bg-[#111]) VE YAZILARI BEYAZA ÇEKTİK
    <main className="bg-[#111] min-h-screen text-white pt-40 pb-20">
      <div className="container mx-auto px-6">
        
        {/* BAŞLIK ALANI */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-20 border-l-4 border-primary pl-8"
        >
          <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Biz Kimiz?</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-white">
            Topraktan Gelen Güç, <br/>
            <span className="text-gray-500 italic">Geleceğin Mimarisi.</span>
          </h1>
        </motion.div>

        {/* İÇERİK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* SOL: Metinler (Artık Koyu Tema uyumlu) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-10 text-lg text-gray-400 leading-relaxed font-light"
          >
            <div>
              <strong className="text-white font-serif text-2xl block mb-3">2005: Başlangıç</strong>
              <p>2005 yılında hafriyat ve altyapı çalışmalarıyla başlayan serüvenimiz, Ankara'nın en zorlu projelerinde edindiğimiz tecrübeyle şekillendi.</p>
            </div>

            <div>
              <strong className="text-white font-serif text-2xl block mb-3">2020: Dönüşüm</strong>
              <p>İnşaat sektörüne adım atarak <span className="text-white border-b border-primary">İncek ve Gölbaşı</span> bölgesinde lüks konut projelerine imza attık. Sadece bina değil, yaşam alanları inşa ettik.</p>
            </div>

            <div className="bg-white/5 p-10 rounded-sm border border-white/10">
              <p className="italic text-gray-300 font-serif text-xl leading-relaxed">
                "Yatırım Koç olarak misyonumuz; köklerimizden aldığımız güçle, müşterilerimize en doğru ve en karlı yatırım fırsatlarını sunmaktır."
              </p>
            </div>

            <div>
              <strong className="text-white font-serif text-2xl block mb-3">Bugün</strong>
              <p>Tulumtaş Köyü'ndeki tarım ve hayvancılık faaliyetlerimizden aldığımız doğallığı, modern mimariyle birleştiriyoruz. Gayrimenkul danışmanlığında şeffaflık ve güvenin adresi olmaya devam ediyoruz.</p>
            </div>
          </motion.div>

          {/* SAĞ: Görsel */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4 }}
             className="lg:col-span-5 sticky top-32"
          >
            <div className="relative h-[600px] w-full border-8 border-white/5 shadow-2xl">
              <Image 
                src="/v3.jpg" // Senin indirdiğin plaza resmi
                alt="Yatırım Koç Genel Merkez"
                fill
              />
              {/* Resim üzerindeki etiket */}
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 shadow-xl">
                 <p className="text-white font-bold tracking-widest text-center">
                    <span className="block text-3xl font-serif">20+</span>
                    <span className="text-xs">YILLIK TECRÜBE</span>
                 </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}