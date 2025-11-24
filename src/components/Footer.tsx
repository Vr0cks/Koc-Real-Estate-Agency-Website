"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Marka */}
          <div>
            <div className="text-2xl font-serif font-bold text-white tracking-widest mb-6">
              YATIRIM <span className="text-primary">KOÇ</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Ankara'nın en prestijli gayrimenkul portföyü ile hayallerinizdeki yaşama ve yatırıma yön veriyoruz.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wider">İLETİŞİM</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>Ahlatlıbel, İncek Şht. Savcı Mehmet Selim Kiraz Blv No:80, Çankaya/Ankara</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                <Phone className="text-primary shrink-0" size={18} />
                <span>0532 279 60 20</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                <Mail className="text-primary shrink-0" size={18} />
                <span>info@yatirimkoc.com.tr</span>
              </li>
            </ul>
          </div>

          {/* Hızlı Menü (Linkler Çalışıyor) */}
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wider">KURUMSAL</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                {/* Gerçek Linkler */}
                <li><Link href="/kurumsal" className="hover:text-primary flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Hakkımızda</Link></li>
                <li><Link href="/#ekip" className="hover:text-primary flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Ekibimiz</Link></li>
                <li><Link href="/insaat" className="hover:text-primary flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>İnşaat</Link></li>
                <li><Link href="/hafriyat" className="hover:text-primary flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Hafriyat</Link></li>
                {/* Dümenden Linkler (Sayfa var ama boş) */}
                <li><Link href="/bilgi" className="hover:text-primary flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>Kariyer</Link></li>
            </ul>
          </div>

          {/* Bülten */}
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wider">BÜLTEN</h4>
            <p className="text-gray-400 text-sm mb-4">Fırsatlardan haberdar olun.</p>
            <div className="relative">
              <input type="email" placeholder="E-posta adresiniz" className="w-full bg-white/5 border border-white/10 py-3 px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary p-1.5 rounded hover:bg-white hover:text-primary transition-colors"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Yatırım Koç Gayrimenkul A.Ş.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/bilgi" className="hover:text-white">Gizlilik Politikası</Link>
            <Link href="/bilgi" className="hover:text-white">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}