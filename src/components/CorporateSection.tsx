"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // <-- Bu satır vardı ama aşağıda kullanılmamıştı, şimdi kullanıyoruz.

export default function CorporateSection() {
  return (
    <section className="py-24 bg-cream overflow-hidden" id="kurumsal">
      <div className="container mx-auto px-6">
        
        {/* BÖLÜM: HİKAYEMİZ */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-10">
          {/* Görsel Tarafı */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative h-[300px] md:h-[500px]"
          >
            {/* Büyük Resim (v3.jpg - Plaza resmi) */}
            <div className="absolute inset-0 bg-gray-200 w-[95%] h-full overflow-hidden shadow-xl">
               <Image 
                 src="/v3.jpg" 
                 alt="Yatırım Koç Ofis" 
                 fill 
                 className="object-cover"
               />
            </div>
            {/* Dekoratif Kutu */}
            <div className="absolute -bottom-6 right-0 w-[40%] bg-primary p-6 text-white flex flex-col justify-center shadow-2xl z-10">
                <span className="text-4xl font-serif font-bold block mb-1">20+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Yıllık Tecrübe</span>
            </div>
          </motion.div>

          {/* Yazı Tarafı */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 pl-0 md:pl-10"
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Hakkımızda</span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark font-bold mb-6 leading-tight">
              Ankara'nın Temellerinden <br/> <span className="italic text-gray-500">Geleceğin Mimarisine.</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              2005 yılında hafriyat ve altyapı çalışmalarıyla başlayan yolculuğumuz, bugün Ankara'nın en prestijli gayrimenkul projelerine danışmanlık yapan dev bir yapıya dönüştü.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              Yatırım Koç olarak sadece mülk satmıyoruz; Tulumtaş Köyü'ndeki köklerimizden aldığımız güçle, toprağın değerini biliyor ve müşterilerimize en doğru yatırımı sunuyoruz.
            </p>
            
            {/* İŞTE BURADA LINK KULLANIYORUZ - ARTIK HATA VERMEZ */}
            <Link href="/kurumsal">
              <button className="group flex items-center gap-2 border-b border-dark pb-1 text-dark uppercase text-xs tracking-[0.2em] font-bold hover:text-primary hover:border-primary transition-all">
                Hikayemizin Devamı
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}