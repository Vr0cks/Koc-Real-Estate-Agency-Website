"use client";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link"; // <-- Link'i import ettik

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#111] text-white" id="iletisim">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* --- SOL TARAF: FORM --- */}
          <div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">İletişim</span>
            <h2 className="font-serif text-4xl font-bold mb-8">Bize Ulaşın</h2>

            <form className="space-y-8">
              <div>
                <input 
                    type="text" 
                    placeholder="Adınız Soyadınız" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input 
                    type="tel" 
                    placeholder="Telefon Numaranız" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea 
                    rows={3} 
                    placeholder="Mesajınız" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              {/* BUTON: Gri/Beyaz Zemin, Siyah Yazı (Okunabilir ve Şık) */}
              <button className="bg-gray-200 text-black border border-gray-400 hover:bg-white hover:border-white transition-all duration-300 px-12 py-4 font-black tracking-[0.2em] text-xs uppercase mt-4 shadow-lg">
                GÖNDER
              </button>
            </form>
          </div>

          {/* --- SAĞ TARAF: TOPLANTI KARTI + HARİTA --- */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* 1. VIP TOPLANTI KARTI (TIKLANABİLİR LINK YAPILDI) */}
            <Link href="/randevu" className="block group">
                <div className="bg-[#1a1a1a] border-l-4 border-primary p-8 flex items-center justify-between hover:bg-[#222] transition-colors shadow-2xl">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Calendar className="text-primary" size={20} />
                            <h4 className="font-bold text-lg tracking-wide text-white">Toplantı Planlayın</h4>
                        </div>
                        <p className="text-gray-400 text-sm font-light max-w-xs">
                            Size özel yatırım danışmanlığı için ofisimizde veya online görüşme randevusu oluşturun.
                        </p>
                    </div>
                    {/* Ok İkonu */}
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        →
                    </div>
                </div>
            </Link>
          {/* HARİTA KISMI */}
          <div className="h-[300px] md:h-[500px] w-full border border-white/10 shadow-2xl relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24512.00095692969!2d32.742075!3d39.829415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d340c0154414b1%3A0x8473e2c595ae425b!2sAhlatl%C4%B1bel%2C%20Incek%20%C5%9Eht.%20Savc%C4%B1%20Mehmet%20Selim%20Kiraz%20Blv%20No%3A80%2C%2006805%20%C3%87ankaya%2FAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sus!4v1763852941780!5m2!1str!2sus"
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-0"
              >
              </iframe>
                 {/* Harita Üzeri Bilgi Kutusu */}
                <div className="absolute bottom-4 left-4 bg-white text-black p-4 shadow-lg max-w-xs hidden md:block">
                    <div className="flex items-start gap-2">
                        <MapPin className="text-primary mt-1 shrink-0" size={16} />
                        <div>
                            <p className="font-bold text-xs uppercase tracking-wider mb-1">Merkez Ofis</p>
                            <p className="text-xs text-gray-600 leading-snug">
                                Ahlatlıbel, İncek Şht. Savcı Mehmet Selim Kiraz Blv No:80
                            </p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}