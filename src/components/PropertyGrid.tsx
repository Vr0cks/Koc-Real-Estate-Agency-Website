import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

// Veriyi çekerken 'slug'ı da istiyoruz
async function getData() {
  const query = `*[_type == "ilan"] | order(_createdAt desc)[0...4] {
    _id,
    baslik,
    fiyat,
    konum,
    "slug": slug.current,
    "mainImage": resim.asset->url
  }`;
  
  const data = await client.fetch(query);
  return data;
}

export default async function PropertyGrid() {
  const properties = await getData();

  return (
    <section className="py-24 bg-[#111]">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl text-white font-bold mb-12 text-center">Özel Portföy</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((prop: any) => (
            // BURASI DEĞİŞTİ: Link etiketi ile sarmaladık
            <Link key={prop._id} href={`/ilan/${prop.slug}`} className="group block cursor-pointer">
              <div className="relative overflow-hidden h-[300px] w-full mb-4 shadow-lg border border-white/10 rounded-sm">
                {prop.mainImage && (
                  <Image
                    src={urlFor(prop.mainImage).url()}
                    alt={prop.baslik}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute top-3 left-3 bg-white px-3 py-1 shadow-md z-10">
                   <span className="text-black font-bold text-xs">{prop.fiyat}</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-serif text-white mb-1 group-hover:text-primary transition-colors truncate">
                    {prop.baslik}
                </h3>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-wider">
                    {prop.konum}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}