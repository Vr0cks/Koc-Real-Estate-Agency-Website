"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:h-screen w-full overflow-hidden flex items-center justify-center bg-gray-900">
      
      {/* MEDYA KATMANI */}
      <div className="absolute inset-0 z-0">
        {/* Mobil Resim */}
        <div 
            className="absolute inset-0 bg-cover bg-center z-0 lg:hidden" 
            style={{ backgroundImage: "url('/v3.jpg')" }} // v3.jpg (plaza resmi) mobilde güzel durur
        />
        {/* PC Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/v3.jpg"
          className="hidden lg:block absolute inset-0 object-cover w-full h-full z-10"
        >
          <source src="/villa.mp4" type="video/mp4" />
        </video>
        {/* Karartma */}
        <div className="absolute inset-0 bg-black/50 z-20" />
      </div>

      {/* İÇERİK KATMANI (SADELEŞTİ) */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 text-center text-white mt-10">
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-base"
        >
            Premium Real Estate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight drop-shadow-2xl"
        >
          Ankara'nın <br /> 
          <span className="text-primary drop-shadow-md">Zirvesi</span>
        </motion.h1>
      </div>
    </section>
  );
}