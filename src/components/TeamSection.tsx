"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

// 9 Kişilik Kadro
const team = [
  { id: 1, name: "Kazım KOÇ", role: "Broker", phone: "0532 279 60 20", mail: "kazim@yatirimkoc.com", img: "/erkek.jpg" },
  { id: 2, name: "Nuran OCAKÇIOĞLU", role: "Broker Manager", phone: "0506 908 07 47", mail: "nuran@yatirimkoc.com", img: "/kadin.jpg" },
  { id: 3, name: "Feyzullah YAVUZ", role: "Danışman", phone: "0532 586 31 51", mail: "feyzullah@yatirimkoc.com", img: "/erkek.jpg" },
  { id: 4, name: "Ümit YÜCEL", role: "Danışman", phone: "0530 416 56 95", mail: "umit@yatirimkoc.com", img: "/kadin.jpg" },
  { id: 5, name: "Seyhan ARMAĞAN", role: "Danışman", phone: "0533 280 11 72", mail: "seyhan@yatirimkoc.com", img: "/kadin.jpg" },
  { id: 6, name: "Tuncay KILIÇ", role: "Danışman", phone: "0533 614 12 51", mail: "tuncay@yatirimkoc.com", img: "/erkek.jpg" },
  { id: 7, name: "Selin KAYA", role: "Danışman", phone: "0532 000 00 00", mail: "selin@yatirimkoc.com", img: "/kadin.jpg" },
  { id: 8, name: "Murat ÖZ", role: "Danışman", phone: "0532 000 00 00", mail: "murat@yatirimkoc.com", img: "/erkek.jpg" },
  { id: 9, name: "Zeynep SU", role: "Asistan", phone: "0532 000 00 00", mail: "zeynep@yatirimkoc.com", img: "/kadin.jpg" },
];

export default function TeamSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 768) setItemsPerPage(1);
            else if (w < 1024) setItemsPerPage(2);
            else setItemsPerPage(3);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Toplam kaç sayfa olacağını hesapla
    const totalPages = Math.max(1, Math.ceil(team.length / itemsPerPage));

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Şu anki sayfada gösterilecek kişileri seç
    const visibleTeam = team.slice(
        currentIndex * itemsPerPage,
        Math.min(team.length, (currentIndex + 1) * itemsPerPage)
    );

  return (
    <section className="py-24 bg-[#111] overflow-hidden" id="ekip">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
           <h2 className="text-4xl font-serif font-bold text-white">Ekibimizle Tanışın</h2>
           <p className="text-gray-400 mt-4 text-sm">Alanında uzman profesyonel kadromuz.</p>
        </div>
        
        {/* SLIDER ALANI */}
        <div className="relative max-w-6xl mx-auto">
            
            {/* SOL OK */}
            <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/10 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
                <ChevronLeft size={24} />
            </button>

            {/* SAĞ OK */}
            <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/10 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
                <ChevronRight size={24} />
            </button>

            {/* KARTLAR (GRID) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                    {visibleTeam.map((member) => (
                        <motion.div 
                            key={member.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-[#1a1a1a] p-8 shadow-lg border border-white/5 rounded-sm group hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Fotoğraf */}
                            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-primary transition-colors">
                                <Image src={member.img} alt={member.name} fill className="object-cover" />
                            </div>
                            
                            {/* Bilgiler */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-xs text-primary uppercase font-bold tracking-widest mb-6">{member.role}</p>
                                
                                {/* İletişim İkonları (Artık Tıklanabilir) */}
                                <div className="flex justify-center gap-6 border-t border-white/10 pt-6">
                                    <a href={`tel:${member.phone}`} className="text-gray-400 hover:text-white hover:bg-primary p-2 rounded-full transition-all" title="Ara">
                                        <Phone size={20} />
                                    </a>
                                    <a href={`mailto:${member.mail}`} className="text-gray-400 hover:text-white hover:bg-primary p-2 rounded-full transition-all" title="Mail At">
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* SAYFA GÖSTERGESİ (Noktalar) */}
            <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <div 
                        key={i} 
                        onClick={() => setCurrentIndex(i)}
                        className={`h-1 transition-all duration-300 cursor-pointer rounded-full ${currentIndex === i ? "w-8 bg-primary" : "w-2 bg-gray-600 hover:bg-gray-400"}`}
                    ></div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}