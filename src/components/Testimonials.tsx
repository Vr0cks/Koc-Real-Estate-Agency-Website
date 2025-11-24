"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    text: "Yatırım Koç ile çalışmak hayatımın en doğru kararıydı. İncek'teki villamızı değerinde sattılar ve bize harika bir yatırım fırsatı sundular.",
    author: "Mehmet Yılmaz",
    role: "Yatırımcı"
  },
  {
    id: 2,
    text: "Profesyonellikleri ve piyasa bilgileri inanılmaz. Sadece bir emlakçı değil, gerçek birer finans danışmanı gibiler.",
    author: "Ayşe Kaya",
    role: "Doktor"
  },
  {
    id: 3,
    text: "Kurumsal yaklaşımları ve şeffaflıkları sayesinde tüm süreci güvenle tamamladık. Teşekkürler Yatırım Koç ailesi.",
    author: "Canan Demir",
    role: "Mimar"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Arkaplan Dekoru */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Referanslar</span>
          <h2 className="font-serif text-3xl md:text-4xl">Müşterilerimiz Ne Diyor?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 rounded-sm"
            >
              <div className="text-primary text-4xl font-serif mb-4">"</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                {review.text}
              </p>
              <div>
                <h4 className="font-bold text-white tracking-wide">{review.author}</h4>
                <span className="text-xs text-gray-500 uppercase tracking-widest">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}