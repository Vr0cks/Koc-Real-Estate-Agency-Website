"use client";
import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "ANASAYFA", href: "/" },
  { 
    id: 2, 
    name: "PORTFÖY", 
    href: "/#vitrin", 
    subItems: [
        { name: "Tüm İlanlar", href: "/portfoy" },
        { name: "Konut", href: "/portfoy" },
        { name: "Ticari", href: "/portfoy" }
    ] 
  },
  { 
    id: 3, 
    name: "KURUMSAL", 
    href: "/kurumsal", 
    subItems: [
        { name: "Hakkımızda", href: "/kurumsal" },
        { name: "İnşaat Projeleri", href: "/insaat" },
        { name: "Hafriyat İşleri", href: "/hafriyat" },
        { name: "Ekibimiz", href: "/#ekip" }
    ] 
  },
  { id: 4, name: "İLETİŞİM", href: "#iletisim" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenSub, setMobileOpenSub] = useState<number | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-[#111]/95 backdrop-blur-md border-white/5 py-4 shadow-xl" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="group relative z-50">
           <div className="text-2xl font-serif font-bold text-white tracking-widest hover:opacity-80 transition-opacity">
              YATIRIM <span className="text-primary">KOÇ</span>
           </div>
        </Link>

        {/* MENÜ */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              className="relative group h-full py-2"
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link 
                href={link.href} 
                className="flex items-center gap-1 text-xs font-bold tracking-[0.15em] text-white/90 hover:text-primary transition-colors duration-300 uppercase"
              >
                {link.name}
                {link.subItems && <ChevronDown size={12} className={`transition-transform duration-300 ${hoveredLink === link.id ? "rotate-180 text-primary" : ""}`} />}
              </Link>
              
              {/* Dropdown */}
              <AnimatePresence>
                {link.subItems && hoveredLink === link.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-[#1a1a1a] border border-white/10 shadow-2xl rounded-sm"
                  >
                    <ul className="py-2">
                      {link.subItems.map((sub, idx) => (
                        <li key={idx}>
                          <Link href={sub.href} className="block px-6 py-3 text-xs text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 tracking-widest uppercase">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* SAĞ TARAF & BUTON */}
        <div className="flex items-center gap-6">
          <Link href="#iletisim" className="hidden md:block">
            {/* DÜZELTME BURADA: Hover rengi artık #8a0922 (Koyu Bordo). Beyaz patlaması yok. */}
            <button className="bg-primary text-white px-8 py-3 text-[10px] font-black tracking-[0.25em] border border-primary hover:bg-[#8a0922] hover:border-[#8a0922] transition-all duration-300 shadow-lg">
                RANDEVU AL
            </button>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Kapat" : "Menüyü aç"}
              className="text-white hover:text-primary transition-colors flex items-center"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL MENÜ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden"
          >
            <div className="w-full bg-[#0b0b0b] border-t border-white/5 shadow-2xl">
              <div className="container mx-auto px-6 py-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.id} className="">
                      {link.subItems ? (
                        <div>
                          <button
                            onClick={() => setMobileOpenSub(mobileOpenSub === link.id ? null : link.id)}
                            className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-bold tracking-widest text-white/90 uppercase"
                          >
                            <span>{link.name}</span>
                            <ChevronDown size={16} className={`transition-transform ${mobileOpenSub === link.id ? "rotate-180 text-primary" : ""}`} />
                          </button>

                          <AnimatePresence>
                            {mobileOpenSub === link.id && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                className="overflow-hidden"
                              >
                                {link.subItems.map((sub, i) => (
                                  <li key={i}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-primary transition-all duration-200 tracking-widest uppercase"
                                    >
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-3 text-sm font-bold tracking-widest text-white/90 hover:text-primary uppercase"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link href="#iletisim" className="block">
                    <button onClick={() => setMobileOpen(false)} className="w-full bg-primary text-white px-6 py-3 text-sm font-black tracking-[0.25em] border border-primary hover:bg-[#8a0922] hover:border-[#8a0922] transition-all duration-300">
                      RANDEVU AL
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}