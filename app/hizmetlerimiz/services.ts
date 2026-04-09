export type Service = {
  slug: string;
  title: string;
  description: string;
  fit: string;
  features: string[];
  iconImage: string;
  detailIntro: string;
  detailParagraphs: string[];
};

export const services: Service[] = [
  {
    slug: "dijital-reklam",
    title: "Dijital Reklam",
    description:
      "Google Ads, Meta Ads ve programatik platformlarda doğru hedef kitleye ulaşan kampanyaları kuruyor, optimize ediyoruz.",
    fit: "Hızlı görünürlük ve lead hedefleyen markalar için",
    features: [
      "Google Search ve Display reklamları",
      "Meta Ads (Facebook ve Instagram)",
      "Bütçe ve teklif optimizasyonu",
      "Dönüşüm odaklı raporlama",
    ],
    iconImage: "/reklam.png",
    detailIntro:
      "Reklam yatırımını sadece harcama değil, ölçülebilir büyüme motoru olarak ele alıyoruz.",
    detailParagraphs: [
      "Hedef kitlenizi ve satın alma davranışını analiz ederek kampanya mimarisini kuruyoruz. Arama, keşif ve yeniden pazarlama katmanlarını birlikte planlayıp bütçeyi doğru yerlere yönlendiriyoruz.",
      "Yayın sonrası süreçte sadece tıklama maliyetini değil, gerçek dönüşüm kalitesini takip ediyoruz. Kreatif, hedefleme ve teklif stratejisini düzenli testlerle iyileştirerek sürdürülebilir performans sağlıyoruz.",
    ],
  },
  {
    slug: "seo-ve-organik-buyume",
    title: "SEO ve Organik Büyüme",
    description:
      "Teknik SEO, içerik stratejisi ve bilgi mimarisi ile arama motorlarında sürdürülebilir görünürlük sağlıyoruz.",
    fit: "Reklam bütçesini uzun vadede desteklemek isteyen ekipler için",
    features: [
      "Teknik SEO denetimi",
      "Anahtar kelime kümeleri",
      "İçerik optimizasyon planı",
      "Backlink ve otorite geliştirme",
    ],
    iconImage: "/seo.png",
    detailIntro:
      "Organik görünürlüğü anlık sıçrama yerine istikrarlı büyüme modeliyle inşa ediyoruz.",
    detailParagraphs: [
      "Site yapısını, içerik hiyerarşisini ve teknik performansı birlikte ele alıyoruz. Böylece hem arama motorlarının içeriğinizi daha iyi anlamasını hem kullanıcıların daha rahat gezinmesini sağlıyoruz.",
      "İçerik tarafında niyet bazlı kümelerle çalışıyor, her sayfayı doğru arama amacına göre optimize ediyoruz. Düzenli analiz ve güncelleme ile sıralama kazanımlarını kalıcı hale getiriyoruz.",
    ],
  },
  {
    slug: "sosyal-medya-yonetimi",
    title: "Sosyal Medya Yönetimi",
    description:
      "Marka tonunuza uygun içerik, topluluk yönetimi ve kreatif üretim süreçlerini tek çatı altında yürütüyoruz.",
    fit: "Sürekli ve tutarlı bir sosyal medya varlığı isteyen markalar için",
    features: [
      "İçerik stratejisi ve takvimi",
      "Görsel ve kısa video üretimi",
      "Topluluk ve DM yönetimi",
      "Aylık performans değerlendirmesi",
    ],
    iconImage: "/sosyalmedya.png",
    detailIntro:
      "Sosyal medyayı sadece paylaşım alanı değil, marka algısı ve satışa giden ilişki kanalı olarak kurguluyoruz.",
    detailParagraphs: [
      "Markanızın dili, hedef kitlesi ve rekabet ortamına göre aylık içerik planı oluşturuyoruz. Üretilen içerikleri kanal bazlı formatlarla destekleyip tutarlı bir görünüm sağlıyoruz.",
      "Topluluk yönetimi tarafında yorum ve mesaj süreçlerini yapılandırıyor, geri bildirimlerden yeni içerik fırsatları çıkarıyoruz. Böylece etkileşim ve güven birlikte büyüyor.",
    ],
  },
  {
    slug: "web-tasarim-ve-gelistirme",
    title: "Web Tasarım ve Geliştirme",
    description:
      "Hızlı, mobil uyumlu ve dönüşüm odaklı web deneyimleri tasarlayıp geliştiriyoruz.",
    fit: "Ziyaretçiyi müşteriye çeviren web altyapısı hedefleyenler için",
    features: [
      "UI/UX ve bilgi mimarisi",
      "Responsive geliştirme",
      "CMS ve entegrasyon altyapısı",
      "Core Web Vitals optimizasyonu",
    ],
    iconImage: "/web.png",
    detailIntro:
      "Web sitenizi sadece vitrin değil, iş hedeflerine çalışan bir dönüşüm sistemi olarak ele alıyoruz.",
    detailParagraphs: [
      "Kullanıcı yolculuğunu baştan sona tasarlayıp bilgi mimarisini sadeleştiriyoruz. Tasarım kararlarını estetik kadar kullanılabilirlik ve hız kriterleriyle de destekliyoruz.",
      "Geliştirme aşamasında performans, erişilebilirlik ve sürdürülebilir içerik yönetimine odaklanıyoruz. Sonuç olarak ekiplerinizin kolay yönettiği, kullanıcıların hızlı deneyimlediği bir yapı kuruyoruz.",
    ],
  },
  {
    slug: "video-produksiyon",
    title: "Video Prodüksiyon",
    description:
      "Marka hikayenizi kısa ve etkili formatlarda anlatan tanıtım, reklam ve sosyal medya videoları üretiyoruz.",
    fit: "Kreatif içeriği ölçeklemek isteyen markalar için",
    features: [
      "Konsept ve senaryo",
      "Çekim planı ve prodüksiyon",
      "Post prodüksiyon",
      "Reels ve Shorts formatlama",
    ],
    iconImage: "/reklam-2.png",
    detailIntro:
      "Video içerik üretimini kampanya hedefleriyle eşleyerek daha güçlü anlatım ve daha yüksek etkileşim sağlıyoruz.",
    detailParagraphs: [
      "Ön prodüksiyon aşamasında hikaye yapısını, mesaj tonunu ve sahne akışını netleştiriyoruz. Böylece çekim günü verimli ilerliyor ve içerik hedefe uygun oluyor.",
      "Kurgu ve teslim sürecinde platforma özel versiyonlar üretiyoruz. Aynı üretimden birden fazla format çıkararak içeriğin kullanım ömrünü uzatıyoruz.",
    ],
  },
  {
    slug: "marka-kimligi",
    title: "Marka Kimliği",
    description:
      "Markanızın karakterini görsel ve sözel olarak netleştiriyor; tüm temas noktalarında tutarlılık sağlıyoruz.",
    fit: "Yenilenen veya sıfırdan inşa edilen markalar için",
    features: [
      "Logo sistemi",
      "Kurumsal kimlik seti",
      "Marka dili ve tonlama",
      "Kullanım rehberi",
    ],
    iconImage: "/markakimligi.png",
    detailIntro:
      "Marka kimliğini logodan ibaret görmüyor; tüm temas noktalarında hissedilen bütünlüklü bir sistem kuruyoruz.",
    detailParagraphs: [
      "Görsel dil, tipografi, renk ve kompozisyon kararlarını markanızın konumlandırmasına göre şekillendiriyoruz. Böylece markanız farklı kanallarda aynı karakterle görünür hale geliyor.",
      "Sözel tarafta mesaj çerçevesi ve tonlama ilkelerini tanımlayıp ekiplerinizin aynı dilde iletişim kurmasını sağlıyoruz. Rehber dokümantasyonla uygulamayı sürdürülebilir kılıyoruz.",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
