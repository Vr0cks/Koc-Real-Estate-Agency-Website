"use client";
import { motion } from "framer-motion";
import { MapPin, Video, Calendar } from "lucide-react";

export default function RandevuPage() {
  return (
    <main className="bg-[#111] min-h-screen text-white pt-40 pb-20">
      <div className="container mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Toplantı Planlayın</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nasıl Görüşmek İstersiniz?</h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                Yatırım hedeflerinizi konuşmak için sizi ofisimizde ağırlamaktan veya online görüşmekten memnuniyet duyarız.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* SEÇENEK 1: OFİS */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#1a1a1a] p-10 border border-white/5 hover:border-primary transition-colors cursor-pointer group rounded-sm flex flex-col items-center"
            >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <MapPin size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ofis Ziyareti</h3>
                <p className="text-sm text-gray-500 mb-8">
                    İncek'teki genel merkezimizde kahve eşliğinde yüz yüze görüşme.
                </p>
                <button className="w-full py-4 border border-white/20 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                    Zaman Seç
                </button>
            </motion.div>

            {/* SEÇENEK 2: ONLINE */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#1a1a1a] p-10 border border-white/5 hover:border-primary transition-colors cursor-pointer group rounded-sm flex flex-col items-center"
            >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <Video size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Online Görüşme</h3>
                <p className="text-sm text-gray-500 mb-8">
                    Zoom veya Google Meet üzerinden görüntülü danışmanlık.
                </p>
                <button className="w-full py-4 border border-white/20 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                    Zaman Seç
                </button>
            </motion.div>

        </div>

        <div className="mt-16 p-6 bg-primary/10 border border-primary/30 inline-flex items-center gap-3 rounded-lg">
            <Calendar className="text-primary" size={20} />
            <p className="text-primary text-sm font-medium">
                Bu özellik şu an demo modundadır. Yakında aktif olacaktır.
            </p>
        </div>

      </div>
    </main>
  );
}