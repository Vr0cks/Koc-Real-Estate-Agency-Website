import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { MapPin, Maximize, Bed, Bath, ArrowLeft } from "lucide-react";
import Link from "next/link";

async function getIlan(slug: string) {
  const query = `*[_type == "ilan" && slug.current == '${slug}'][0] {
    baslik,
    fiyat,
    konum,
    metrekare,
    oda,
    detay,
    "imageUrl": resim.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

// TİP GÜNCELLEMESİ YAPILDI
export default async function IlanDetay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // AWAIT EKLENDİ
  const ilan = await getIlan(slug);

  if (!ilan) return <div className="bg-[#111] min-h-screen text-white pt-40 text-center">İlan bulunamadı...</div>;

  return (
    <main className="bg-[#111] min-h-screen text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        <Link href="/#vitrin" className="inline-flex items-center text-gray-400 hover:text-primary mb-8 text-sm tracking-widest uppercase transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Geri Dön
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
            
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                {ilan.imageUrl && (
                    <Image 
                        src={urlFor(ilan.imageUrl).url()} 
                        alt={ilan.baslik} 
                        fill 
                        className="object-cover"
                    />
                )}
                <div className="absolute top-6 right-6 bg-primary text-black font-bold px-6 py-3 text-xl shadow-lg">
                    {ilan.fiyat}
                </div>
            </div>

            <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">{ilan.baslik}</h1>
                
                <div className="flex items-center text-gray-400 mb-8 text-sm tracking-widest uppercase">
                    <MapPin className="text-primary mr-2" size={18} />
                    {ilan.konum}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10 border-y border-white/10 py-8">
                    <div className="text-center border-r border-white/10">
                        <Maximize className="mx-auto text-primary mb-2" size={24} />
                        <span className="block font-bold text-lg">{ilan.metrekare} m²</span>
                        <span className="text-xs text-gray-500 uppercase">Alan</span>
                    </div>
                    <div className="text-center border-r border-white/10">
                        <Bed className="mx-auto text-primary mb-2" size={24} />
                        <span className="block font-bold text-lg">{ilan.oda}</span>
                        <span className="text-xs text-gray-500 uppercase">Oda</span>
                    </div>
                    <div className="text-center">
                        <Bath className="mx-auto text-primary mb-2" size={24} />
                        <span className="block font-bold text-lg">2</span>
                        <span className="text-xs text-gray-500 uppercase">Banyo</span>
                    </div>
                </div>

                <div className="prose prose-invert text-gray-400 font-light leading-relaxed mb-10">
                    <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-widest border-l-4 border-primary pl-4">İlan Detayı</h3>
                    <p>{ilan.detay || "Bu ilan için detaylı açıklama girilmemiş."}</p>
                </div>

                <Link href="/randevu">
                    <button className="w-full bg-white text-black py-4 font-black tracking-[0.2em] text-xs uppercase hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
                        BU MÜLK İÇİN RANDEVU AL
                    </button>
                </Link>
            </div>

        </div>
      </div>
    </main>
  );
}