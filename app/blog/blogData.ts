export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string;
};

export const categories = [
  "Tümü",
  "Dijital Pazarlama",
  "SEO",
  "Sosyal Medya",
  "Google Ads",
  "Web Tasarım",
  "Marka Stratejisi",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "2025-dijital-pazarlama-trendleri",
    title: "2025'te Dijital Pazarlama: Öne Çıkan 7 Trend",
    excerpt:
      "Yapay zeka destekli kampanyalardan kişiselleştirilmiş deneyimlere kadar, 2025 yılında dijital pazarlamanın geleceğini şekillendirecek trendleri inceliyoruz.",
    coverImage: "/blog-cover-1.png",
    category: "Dijital Pazarlama",
    author: "Sinan Tekin",
    authorRole: "CEO / Kurucu",
    authorImage: "/bloomo-2.png",
    date: "2025-03-15",
    readTime: "8 dk",
    featured: true,
    content: `
## Dijital Pazarlamanın Yeni Yüzü

2025 yılı dijital pazarlama dünyasında köklü değişimlerin yaşandığı bir dönem. Yapay zeka, otomasyon ve veri analitiği artık lüks değil, zorunluluk haline geldi. Peki bu trendler markanızı nasıl etkileyecek?

### 1. Yapay Zeka Destekli İçerik Üretimi

Yapay zeka araçları artık sadece metin yazmakla kalmıyor; görsel üretim, video düzenleme ve hatta strateji önerisi sunabiliyor. Ancak insan dokunuşu her zamankinden daha değerli.

> Yapay zeka bir araçtır, strateji değildir. Doğru kullanıldığında verimliliği katlar; yanlış kullanıldığında markanızı generic bir ses tonuna hapseder.

### 2. Kişiselleştirilmiş Müşteri Deneyimi

Kullanıcılar artık genel mesajlara tepki vermiyor. Her temas noktasında kişiselleştirilmiş deneyim sunmak, dönüşüm oranlarını %40'a kadar artırabiliyor.

### 3. Video İçerik Hakimiyeti

Kısa format videolar (Reels, Shorts, TikTok) organik erişimde en güçlü format olmaya devam ediyor. 2025'te video içerik bütçeleri global ortamda %30 artış gösterdi.

### 4. Zero-Click Arama Optimizasyonu

Google'ın zengin snippet'ları ve AI Overview özelliği ile kullanıcılar artık tıklamadan bilgiye ulaşıyor. SEO stratejinizi bu gerçeğe göre revize etmeniz gerekiyor.

### 5. First-Party Data Stratejileri

Üçüncü taraf çerezlerin devre dışı kalmasıyla, kendi verilerinizi toplama ve anlamlandırma yeteneği kritik önem kazandı.

### 6. Performans ve Marka Reklamcılığının Birleşmesi

Artık sadece tıklama optimizasyonu yetmiyor. Marka bilinirliği ve performans metrikleri tek bir strateji çatısı altında ele alınıyor.

### 7. Sesli Arama ve Konuşma AI

Sesli asistanlar ve chatbotlar müşteri yolculuğunun ayrılmaz bir parçası haline geldi. İçerik stratejinizi sesli aramaya uygun hale getirmek artık bir seçenek değil.

## Sonuç

Bu trendlere uyum sağlamak, sadece teknolojiye yatırım yapmak değil; organizasyonel bir dönüşüm gerektirir. Bloomo olarak, her müşterimize bu dönüşümü veri odaklı ve sonuç garantili şekilde yönetiyoruz.
    `,
  },
  {
    slug: "seo-stratejisi-nasil-olusturulur",
    title: "Etkili Bir SEO Stratejisi Nasıl Oluşturulur?",
    excerpt:
      "Anahtar kelime araştırmasından teknik SEO'ya, içerik planlamasından link building'e kadar kapsamlı bir SEO stratejisi rehberi.",
    coverImage: "/blog-cover-2.png",
    category: "SEO",
    author: "Sinan Tekin",
    authorRole: "CEO / Kurucu",
    authorImage: "/bloomo-2.png",
    date: "2025-02-28",
    readTime: "12 dk",
    content: `
## SEO Neden Bu Kadar Önemli?

Organik arama trafiği, dijital pazarlamanın en sürdürülebilir ve maliyet-etkin kanalıdır. Doğru bir SEO stratejisi ile markanız, potansiyel müşterilerinizin tam aradığı anda karşılarına çıkar.

### Anahtar Kelime Araştırması

Her başarılı SEO stratejisinin temeli sağlam bir anahtar kelime araştırmasıdır. Kullanıcıların gerçekten ne aradığını anlamak, doğru içerikleri üretmenin ilk adımıdır.

- **Arama hacmi**: Kelimenin aylık aranma sayısı
- **Zorluk skoru**: Rekabet düzeyi
- **Arama niyeti**: Bilgi amaçlı mı, satın alma amaçlı mı?

### Teknik SEO

Sitenizin teknik altyapısı, arama motorlarının içeriklerinizi düzgün taraması ve indexlemesi için kritik öneme sahiptir.

- Core Web Vitals optimizasyonu
- Mobil uyumluluk
- Site hızı iyileştirmesi
- Yapılandırılmış veri (Schema markup)
- XML sitemap ve robots.txt düzenlemesi

### İçerik Stratejisi

"Content is king" sözü hâlâ geçerli. Ancak artık kalitesiz içerik üretmek, hiç üretmemekten daha zararlı.

### Link Building

Güvenilir ve otoriter sitelerden alınan backlink'ler, arama motoru sıralamasını doğrudan etkiler. Ancak kalite, niceliğin her zaman önündedir.

## Sonuç

SEO bir maraton, sprint değil. Sabırlı, tutarlı ve veri odaklı bir yaklaşım ile organik görünürlüğünüzü sürdürülebilir şekilde artırabilirsiniz.
    `,
  },
  {
    slug: "sosyal-medya-icerik-stratejisi",
    title: "Sosyal Medyada İçerik Stratejisi: Nereden Başlamalı?",
    excerpt:
      "İçerik takvimi oluşturmaktan etkileşim analizine, platform seçiminden format çeşitlendirmeye kadar etkili bir sosyal medya stratejisi.",
    coverImage: "/blog-cover-3.png",
    category: "Sosyal Medya",
    author: "Sinan Tekin",
    authorRole: "CEO / Kurucu",
    authorImage: "/bloomo-2.png",
    date: "2025-02-10",
    readTime: "7 dk",
    content: `
## Sosyal Medya Neden Strateji Gerektirir?

Rastgele paylaşım yapmak artık yeterli değil. Sosyal medyada başarı, tutarlı bir strateji ve veri odaklı optimizasyon gerektirir.

### Platform Seçimi

Her marka her platformda olmak zorunda değil. Hedef kitlenizin nerede olduğunu bilmek, bütçenizi verimli kullanmanın ilk adımıdır.

- **Instagram**: Görsel ağırlıklı markalar, B2C
- **LinkedIn**: B2B, profesyonel hizmetler
- **TikTok**: Genç kitle, viral potansiyel
- **YouTube**: Uzun form içerik, eğitim

### İçerik Takvimi

Planlı içerik üretimi, tutarlılığın temelidir. Haftalık veya aylık içerik takvimleri oluşturmak, ekip koordinasyonunu kolaylaştırır.

### Etkileşim Analizi

Hangi içerikler çalışıyor, hangileri çalışmıyor? Düzenli analiz olmadan strateji geliştirmek mümkün değil.

## Sonuç

Sosyal medya yönetimi, sadece paylaşım yapmak değil; marka sesini inşa etmek, topluluk oluşturmak ve ölçülebilir sonuçlar üretmektir.
    `,
  },
  {
    slug: "google-ads-roas-optimizasyonu",
    title: "Google Ads'te ROAS'ınızı 3 Kat Artırmanın Yolları",
    excerpt:
      "Reklam harcamalarınızdan maksimum geri dönüş almak için uygulayabileceğiniz kanıtlanmış Google Ads optimizasyon teknikleri.",
    coverImage: "/blog-cover-4.png",
    category: "Google Ads",
    author: "Sinan Tekin",
    authorRole: "CEO / Kurucu",
    authorImage: "/bloomo-2.png",
    date: "2025-01-20",
    readTime: "10 dk",
    content: `
## ROAS Nedir ve Neden Önemlidir?

Return on Ad Spend (ROAS), her 1 TL reklam harcamasından ne kadar gelir elde ettiğinizi gösteren kritik bir metriktir.

### Hedefleme Optimizasyonu

Doğru kitleye ulaşmak, bütçenizi verimli kullanmanın temelidir. Demografik, coğrafi ve davranışsal hedefleme verilerini sürekli analiz edin.

### Açılış Sayfası Uyumu

Reklamınızla açılış sayfanız arasındaki mesaj tutarlılığı, kalite puanınızı doğrudan etkiler. Yüksek kalite puanı = Düşük tıklama maliyeti.

### Dönüşüm Takibi

Doğru dönüşüm takibi olmadan optimizasyon yapmak imkansızdır. Google Analytics 4, Google Tag Manager ve sunucu tarafı takip kurulumlarını mutlaka tamamlayın.

### Akıllı Teklif Stratejileri

Google'ın makine öğrenimi tabanlı teklif stratejileri (ROAS hedefli, dönüşüm maksimize) doğru verilerle beslendiğinde güçlü sonuçlar verir.

## Sonuç

Google Ads'te başarı, sürekli test, ölçüm ve optimizasyon döngüsüne bağlıdır. Tek bir "doğru kurulum" yoktur; süreç sürekli bir iyileştirme yolculuğudur.
    `,
  },
  {
    slug: "web-sitesi-donusum-orani-artirma",
    title: "Web Sitenizin Dönüşüm Oranını Artırmanın 5 Yolu",
    excerpt:
      "Kullanıcı deneyimi, sayfa hızı, CTA optimizasyonu ve A/B testleri ile web sitenizin dönüşüm performansını iyileştirin.",
    coverImage: "/blog-cover-5.png",
    category: "Web Tasarım",
    author: "Sinan Tekin",
    authorRole: "CEO / Kurucu",
    authorImage: "/bloomo-2.png",
    date: "2025-01-05",
    readTime: "6 dk",
    content: `
## Dönüşüm Oranı Neden Önemli?

Trafiği artırmak kadar, gelen trafiği müşteriye dönüştürmek de en az o kadar önemlidir. Dönüşüm oranı optimizasyonu (CRO), mevcut trafikten daha fazla değer elde etmenin yoludur.

### 1. Sayfa Hızı Optimizasyonu

Her 1 saniyelik gecikme, dönüşüm oranını ortalama %7 düşürür. Core Web Vitals metriklerinizi düzenli takip edin.

### 2. Net ve Güçlü CTA'lar

Kullanıcıları harekete geçirecek net, görünür ve ikna edici çağrı oluşturma butonları tasarlayın.

### 3. Sosyal Kanıt

Müşteri yorumları, vaka çalışmaları ve güven rozetleri, kullanıcıların karar verme sürecini hızlandırır.

### 4. Mobil Deneyim

Türkiye'de web trafiğinin %70'inden fazlası mobil cihazlardan geliyor. Mobil deneyiminiz masaüstü kadar iyi olmalı.

### 5. A/B Testleri

Varsayımlarla değil, verilerle hareket edin. Başlıklar, görseller, form uzunlukları ve renkler üzerinde sürekli A/B testleri yapın.

## Sonuç

CRO sistematik bir süreçtir. Küçük iyileştirmeler, zaman içinde büyük farklar yaratır.
    `,
  },
  {
    slug: "marka-kimligi-dijital-donemde",
    title: "Dijital Dönemde Marka Kimliği Oluşturmak",
    excerpt:
      "Logo tasarımından marka ses tonuna, dijital varlıktan müşteri deneyimine kadar güçlü bir marka kimliği oluşturma rehberi.",
    coverImage: "/blog-cover-1.png",
    category: "Marka Stratejisi",
    author: "Sinan Tekin",
    authorRole: "CEO / Kurucu",
    authorImage: "/bloomo-2.png",
    date: "2024-12-18",
    readTime: "9 dk",
    content: `
## Marka Kimliği Nedir?

Marka kimliği, bir markanın kendisini nasıl sunduğunu ve tüketiciler tarafından nasıl algılandığını belirleyen tüm görsel, sözel ve duygusal unsurların bütünüdür.

### Görsel Kimlik

- **Logo**: Markanızın en tanınabilir sembolü
- **Renk paleti**: Duyguları ve değerleri temsil eden renkler
- **Tipografi**: Marka kişiliğini yansıtan yazı tipleri
- **Görsel dil**: Fotoğraf stili, illüstrasyon yaklaşımı

### Marka Ses Tonu

Dijital iletişimde tutarlı bir ses tonu, marka güvenilirliğinin temelidir. Sosyal medya paylaşımlarından müşteri hizmetlerine kadar her temas noktasında aynı ses tonuyla konuşmak önemlidir.

### Dijital Varlık

Web siteniz, sosyal medya profilleriniz ve dijital reklamlarınız — hepsi marka kimliğinizin parçasıdır. Tutarlılık anahtardır.

## Sonuç

Güçlü bir marka kimliği, müşteri sadakati ve pazar farkındalığı oluşturmanın en etkili yoludur. Dijital dünyada bu kimlik, her piksel ve her kelimede kendini göstermelidir.
    `,
  },
];
