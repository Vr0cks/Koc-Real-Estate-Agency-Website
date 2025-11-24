"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "GAYRİMENKUL",
    desc: "Lüks konut ve ticari mülk danışmanlığı.",
    image: "/v3.jpg", // Sendeki Plaza resmi
    link: "/portfoy"
  },
  {
    id: 2,
    title: "İNŞAAT",
    desc: "Geleceğin yaşam alanlarını inşa ediyoruz.",
    image: "/insaat.jpg", // YENİ İNDİRDİĞİN RESİM
    link: "/insaat"
  },
  {
    id: 3,
    title: "HAFRİYAT",
    desc: "Güçlü altyapı, sağlam temeller.",
    image: "/hafriyat.jpg", // YENİ İNDİRDİĞİN RESİM
    link: "/hafriyat"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Koç Grubu</span>
            <h2 className="text-4xl font-serif font-bold text-white">Faaliyet Alanlarımız</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.id} href={service.link} className="group block">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative h-[260px] sm:h-80 md:h-[400px] overflow-hidden border border-white/10 rounded-sm"
              >
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wider">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase">
                    İncele <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}