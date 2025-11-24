"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, Banknote } from "lucide-react";

export default function AdvancedSearch() {
  const [activeTab, setActiveTab] = useState("satilik");

  return (
    <section className="relative z-40 -mt-10 px-6">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-5xl mx-auto border border-gray-100">
          
          {/* Tablar */}
          <div className="flex gap-8 mb-6 border-b border-gray-100 pb-4">
            <button 
              onClick={() => setActiveTab("satilik")}
              className={`text-sm font-bold tracking-widest uppercase pb-2 transition-all ${activeTab === "satilik" ? "text-primary border-b-2 border-primary" : "text-gray-400 hover:text-dark"}`}
            >
              Satılık
            </button>
            <button 
              onClick={() => setActiveTab("kiralik")}
              className={`text-sm font-bold tracking-widest uppercase pb-2 transition-all ${activeTab === "kiralik" ? "text-primary border-b-2 border-primary" : "text-gray-400 hover:text-dark"}`}
            >
              Kiralık
            </button>
          </div>

          {/* Arama Grid'i - DÜZELTİLDİ: 'block' silindi, sadece 'flex' kaldı */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            <div className="relative group">
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                <MapPin size={12} /> Lokasyon
              </label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-dark font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer hover:bg-gray-100 transition-colors">
                <option>Tüm Ankara</option>
                <option>İncek</option>
                <option>Çayyolu</option>
                <option>Oran</option>
                <option>Beysukent</option>
              </select>
            </div>

            <div className="relative group">
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                <Home size={12} /> Emlak Tipi
              </label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-dark font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer hover:bg-gray-100 transition-colors">
                <option>Konut</option>
                <option>Villa</option>
                <option>Rezidans</option>
                <option>Arsa</option>
                <option>Ticari</option>
              </select>
            </div>

            <div className="relative group">
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                <Banknote size={12} /> Bütçe (Max)
              </label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-dark font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer hover:bg-gray-100 transition-colors">
                <option>Limit Yok</option>
                <option>10.000.000 ₺</option>
                <option>25.000.000 ₺</option>
                <option>50.000.000 ₺ +</option>
              </select>
            </div>

            <button className="h-full w-full bg-dark text-white font-bold uppercase tracking-widest text-xs py-4 md:py-0 mt-4 md:mt-0 hover:bg-primary transition-colors duration-300 rounded shadow-lg flex items-center justify-center gap-2">
              <Search size={16} />
              Sonuçları Gör
            </button>

          </div>
        </div>
      </motion.div>
    </section>
  );
}