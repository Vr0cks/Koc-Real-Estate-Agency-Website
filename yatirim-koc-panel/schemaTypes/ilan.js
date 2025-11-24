import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ilan',
  title: 'İlanlar',
  type: 'document',
  fields: [
    defineField({
      name: 'baslik',
      title: 'İlan Başlığı',
      type: 'string',
    }),
    // BU YENİ: URL oluşturmak için gerekli
    defineField({
      name: 'slug',
      title: 'URL Linki (Generate butonuna bas)',
      type: 'slug',
      options: {
        source: 'baslik',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'fiyat',
      title: 'Fiyat',
      type: 'string',
    }),
    defineField({
      name: 'konum',
      title: 'Kısa Konum (Örn: İncek)',
      type: 'string',
    }),
    // YENİ ÖZELLİKLER
    defineField({
      name: 'metrekare',
      title: 'Metrekare (m2)',
      type: 'number',
    }),
    defineField({
      name: 'oda',
      title: 'Oda Sayısı (Örn: 5+1)',
      type: 'string',
    }),
    defineField({
      name: 'resim',
      title: 'Kapak Resmi',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'detay',
      title: 'Detaylı Açıklama',
      type: 'text',
    }),
  ],
})