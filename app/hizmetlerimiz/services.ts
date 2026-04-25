export type ServiceFeature = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  fit: string;
  features: ServiceFeature[];
  iconImage: string;
  detailIntro: string;
  detailParagraphs: string[];
  process: ProcessStep[];
  deliverables: string[];
  faq: FaqItem[];
};

export const services: Service[] = [
  {
    slug: "dijital-reklam",
    title: "Dijital Reklam",
    description:
      "Google Ads, Meta Ads ve programatik platformlarda doğru hedef kitleye ulaşan kampanyaları kuruyor, optimize ediyoruz.",
    fit: "Hızlı görünürlük, nitelikli lead ve ölçülebilir satış büyümesi hedefleyen markalar; yeni ürün lansmanı yapan ekipler ve reklam harcamasının geri dönüşünü netleştirmek isteyen işletmeler için uygundur.",
    features: [
      {
        title: "Google Search & Display",
        description:
          "Niyet bazlı anahtar kelimeler ve görsel kampanyalarla arama ve keşif yolculuğunu birlikte kaplıyoruz.",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "Advantage+ ve ilgi alanı kırılımlarıyla doğru kitleye, doğru kreatifle ulaşan kampanyalar kuruyoruz.",
      },
      {
        title: "Bütçe ve Teklif Optimizasyonu",
        description:
          "Kampanya bütçelerini performans eğrisine göre yeniden dağıtıyor, teklif stratejilerini haftalık test ediyoruz.",
      },
      {
        title: "Dönüşüm Odaklı Raporlama",
        description:
          "Sadece tıklama değil, gerçek satış ve form değerini gösteren atıf ve ROAS raporları hazırlıyoruz.",
      },
    ],
    iconImage: "/reklam.png",
    detailIntro:
      "Reklam yatırımını sadece harcama değil, ölçülebilir büyüme motoru olarak ele alıyoruz.",
    detailParagraphs: [
      "Hedef kitlenizi ve satın alma davranışını analiz ederek kampanya mimarisini kuruyoruz. Arama, keşif ve yeniden pazarlama katmanlarını birlikte planlayıp bütçeyi doğru yerlere yönlendiriyoruz.",
      "Yayın sonrası süreçte sadece tıklama maliyetini değil, gerçek dönüşüm kalitesini takip ediyoruz. Kreatif, hedefleme ve teklif stratejisini düzenli testlerle iyileştirerek sürdürülebilir performans sağlıyoruz.",
    ],
    process: [
      {
        title: "Keşif & Hedef Belirleme",
        description:
          "Mevcut hesap, rekabet ve kitle verisini inceliyor; kampanyanın iş hedefine nasıl bağlanacağını netleştiriyoruz.",
      },
      {
        title: "Strateji & Kurulum",
        description:
          "Kampanya yapısı, kitle, kreatif brifi ve dönüşüm takibini birlikte kuruyor, yayına hazır hale getiriyoruz.",
      },
      {
        title: "Optimizasyon & Test",
        description:
          "Haftalık kreatif, hedefleme ve teklif testleriyle performansı iyileştiriyoruz.",
      },
      {
        title: "Raporlama & Ölçekleme",
        description:
          "Aylık kapsamlı raporlar ve stratejik önerilerle kazanan kampanyaları güvenle büyütüyoruz.",
      },
    ],
    deliverables: [
      "Kampanya stratejisi ve kurulumu",
      "Piksel ve dönüşüm takibi entegrasyonu",
      "Haftalık performans takibi",
      "Aylık yönetim raporu ve stratejik öneriler",
    ],
    faq: [
      {
        question: "Ne kadar sürede sonuç görürüm?",
        answer:
          "İlk verimli sonuçlar genellikle 4-6 hafta içinde görünür hale gelir. Bu süre kampanyanın öğrenme fazını tamamlaması ve optimizasyonların etkisini göstermesi için gereklidir.",
      },
      {
        question: "Minimum reklam bütçesi var mı?",
        answer:
          "Sektör ve hedefe göre değişmekle birlikte, anlamlı sonuç almak için aylık minimum bütçe önerilerimizi ilk görüşmede paylaşıyoruz.",
      },
    ],
  },
  {
    slug: "seo-ve-organik-buyume",
    title: "SEO ve Organik Büyüme",
    description:
      "Teknik SEO, içerik stratejisi ve bilgi mimarisi ile arama motorlarında sürdürülebilir görünürlük sağlıyoruz.",
    fit: "Reklam bütçesini uzun vadede desteklemek, organik trafiği ölçeklemek ve sektörde otorite kurmak isteyen markalar; içerik yatırımından gerçek dönüş bekleyen ekipler için uygundur.",
    features: [
      {
        title: "Teknik SEO Denetimi",
        description:
          "Site hızı, indeksleme, şema işaretleme ve Core Web Vitals dahil tüm teknik katmanı baştan sona inceliyoruz.",
      },
      {
        title: "Anahtar Kelime Kümeleri",
        description:
          "Niyet bazlı kümeleme ile hangi sayfanın hangi arama için rekabet edeceğini netleştiriyoruz.",
      },
      {
        title: "İçerik Optimizasyon Planı",
        description:
          "Mevcut ve yeni içerikler için yapısal güncellemeler, başlık ve meta iyileştirmeleri planlıyoruz.",
      },
      {
        title: "Backlink & Otorite",
        description:
          "Alakalı, güvenilir kaynaklardan sürdürülebilir backlink stratejisiyle alan otoritesi inşa ediyoruz.",
      },
    ],
    iconImage: "/seo.png",
    detailIntro:
      "Organik görünürlüğü anlık sıçrama yerine istikrarlı büyüme modeliyle inşa ediyoruz.",
    detailParagraphs: [
      "Site yapısını, içerik hiyerarşisini ve teknik performansı birlikte ele alıyoruz. Böylece hem arama motorlarının içeriğinizi daha iyi anlamasını hem kullanıcıların daha rahat gezinmesini sağlıyoruz.",
      "İçerik tarafında niyet bazlı kümelerle çalışıyor, her sayfayı doğru arama amacına göre optimize ediyoruz. Düzenli analiz ve güncelleme ile sıralama kazanımlarını kalıcı hale getiriyoruz.",
    ],
    process: [
      {
        title: "Denetim & Analiz",
        description:
          "Teknik, içerik ve backlink durumunu kapsamlı şekilde inceliyor, öncelikli fırsatları çıkarıyoruz.",
      },
      {
        title: "Strateji & Yol Haritası",
        description:
          "3-6-12 aylık yol haritası, içerik takvimi ve teknik iyileştirme listesi hazırlıyoruz.",
      },
      {
        title: "Uygulama",
        description:
          "Teknik düzeltmeler, içerik optimizasyonu ve bağlantı çalışmalarını eş zamanlı yürütüyoruz.",
      },
      {
        title: "Ölçüm & İyileştirme",
        description:
          "Sıralama, trafik ve dönüşüm metriklerini takip ederek stratejiyi sürekli güncelliyoruz.",
      },
    ],
    deliverables: [
      "Teknik SEO denetim raporu",
      "Anahtar kelime haritası ve içerik takvimi",
      "Aylık sıralama ve trafik raporu",
      "Backlink ve otorite takibi",
    ],
    faq: [
      {
        question: "SEO sonuçları ne zaman görünür?",
        answer:
          "İlk iyileşmeler 2-3 ay içinde başlar, anlamlı trafik artışı genellikle 4-6 ay sonra gözlemlenir. SEO uzun vadeli bir yatırımdır.",
      },
      {
        question: "Hangi sektörlerde çalışıyorsunuz?",
        answer:
          "E-ticaret, B2B hizmet, SaaS ve yerel işletmeler dahil geniş bir yelpazede deneyimimiz var. Sektörünüze özel yaklaşımı ilk görüşmede paylaşıyoruz.",
      },
    ],
  },
  {
    slug: "sosyal-medya-yonetimi",
    title: "Sosyal Medya Yönetimi",
    description:
      "Marka tonunuza uygun içerik, topluluk yönetimi ve kreatif üretim süreçlerini tek çatı altında yürütüyoruz.",
    fit: "Sürekli ve tutarlı bir sosyal medya varlığı hedefleyen markalar; içerik üretimini içeriden yürütmekte zorlanan ekipler ve topluluk ilişkilerini güçlendirmek isteyen işletmeler için uygundur.",
    features: [
      {
        title: "İçerik Stratejisi & Takvim",
        description:
          "Aylık tema, kanal dağılımı ve mesaj çerçevesiyle tutarlı bir yayın planı kuruyoruz.",
      },
      {
        title: "Görsel & Kısa Video Üretimi",
        description:
          "Reels, Shorts ve statik post formatlarında markaya özgü kreatifler üretiyoruz.",
      },
      {
        title: "Topluluk & DM Yönetimi",
        description:
          "Yorum ve mesajları marka tonuna uygun şekilde, belirlenen SLA süreleri içinde yanıtlıyoruz.",
      },
      {
        title: "Aylık Performans Değerlendirmesi",
        description:
          "Etkileşim, erişim ve topluluk büyümesini inceleyip bir sonraki ayın içerik stratejisini güncelliyoruz.",
      },
    ],
    iconImage: "/sosyalmedya.png",
    detailIntro:
      "Sosyal medyayı sadece paylaşım alanı değil, marka algısı ve satışa giden ilişki kanalı olarak kurguluyoruz.",
    detailParagraphs: [
      "Markanızın dili, hedef kitlesi ve rekabet ortamına göre aylık içerik planı oluşturuyoruz. Üretilen içerikleri kanal bazlı formatlarla destekleyip tutarlı bir görünüm sağlıyoruz.",
      "Topluluk yönetimi tarafında yorum ve mesaj süreçlerini yapılandırıyor, geri bildirimlerden yeni içerik fırsatları çıkarıyoruz. Böylece etkileşim ve güven birlikte büyüyor.",
    ],
    process: [
      {
        title: "Marka Keşfi",
        description:
          "Marka sesini, hedef kitleyi ve rekabeti inceleyerek sosyal medya karakterini netleştiriyoruz.",
      },
      {
        title: "İçerik Planı",
        description:
          "Aylık takvim, kreatif brifleri ve içerik kategorilerini birlikte planlıyoruz.",
      },
      {
        title: "Üretim & Yayın",
        description:
          "Görsel ve videoları üretip zamanlıyor, topluluğu aktif şekilde yönetiyoruz.",
      },
      {
        title: "Analiz & Gelişim",
        description:
          "Ay sonunda performansı değerlendirip bir sonraki dönemin stratejisini uyarlıyoruz.",
      },
    ],
    deliverables: [
      "Aylık içerik takvimi ve kreatif üretim",
      "Topluluk ve DM yanıt yönetimi",
      "Aylık performans raporu",
      "Kampanya dönemi ek içerik desteği",
    ],
    faq: [
      {
        question: "Kaç içerik üretiyorsunuz?",
        answer:
          "Paket ve kanal sayısına göre aylık 12-30 arası içerik üretiyoruz. İhtiyacınıza uygun kapsamı birlikte belirliyoruz.",
      },
      {
        question: "Çekim ve prodüksiyon dahil mi?",
        answer:
          "Temel görsel ve stüdyo tarzı içerik üretimi dahildir. Lokasyon çekimi ve özel prodüksiyonlar proje bazlı olarak planlanır.",
      },
    ],
  },
  {
    slug: "web-tasarim-ve-gelistirme",
    title: "Web Tasarım ve Geliştirme",
    description:
      "Hızlı, mobil uyumlu ve dönüşüm odaklı web deneyimleri tasarlayıp geliştiriyoruz.",
    fit: "Ziyaretçiyi müşteriye çeviren bir web altyapısı isteyen markalar; mevcut sitesi yavaş veya dönüşüm üretmeyen işletmeler ve yeniden markalaşma sürecindeki ekipler için uygundur.",
    features: [
      {
        title: "UI/UX & Bilgi Mimarisi",
        description:
          "Kullanıcı yolculuğunu sadeleştiren, dönüşümü kolaylaştıran arayüz ve bilgi yapısı kuruyoruz.",
      },
      {
        title: "Responsive Geliştirme",
        description:
          "Mobil öncelikli, her ekran boyutunda tutarlı ve hızlı çalışan arayüzler geliştiriyoruz.",
      },
      {
        title: "CMS & Entegrasyon",
        description:
          "Ekibinizin kolay yönetebildiği CMS altyapısı ve CRM, analitik, pazarlama araçlarıyla entegrasyon kuruyoruz.",
      },
      {
        title: "Core Web Vitals",
        description:
          "Sayfa hızı, etkileşim ve görsel kararlılık metriklerini Google standartlarına taşıyoruz.",
      },
    ],
    iconImage: "/web.png",
    detailIntro:
      "Web sitenizi sadece vitrin değil, iş hedeflerine çalışan bir dönüşüm sistemi olarak ele alıyoruz.",
    detailParagraphs: [
      "Kullanıcı yolculuğunu baştan sona tasarlayıp bilgi mimarisini sadeleştiriyoruz. Tasarım kararlarını estetik kadar kullanılabilirlik ve hız kriterleriyle de destekliyoruz.",
      "Geliştirme aşamasında performans, erişilebilirlik ve sürdürülebilir içerik yönetimine odaklanıyoruz. Sonuç olarak ekiplerinizin kolay yönettiği, kullanıcıların hızlı deneyimlediği bir yapı kuruyoruz.",
    ],
    process: [
      {
        title: "Keşif & Kapsam",
        description:
          "İş hedefleri, kullanıcı profili ve içerik ihtiyacını netleştirip kapsamı belirliyoruz.",
      },
      {
        title: "Tasarım & Prototip",
        description:
          "Bilgi mimarisi, wireframe ve yüksek sadakatli tasarımlarla birlikte nihai görünümü oluşturuyoruz.",
      },
      {
        title: "Geliştirme & Test",
        description:
          "Modern framework'lerle geliştirip performans, erişilebilirlik ve tarayıcı testlerini yürütüyoruz.",
      },
      {
        title: "Lansman & Destek",
        description:
          "Yayına alma sonrası 30 gün bakım ve ekip eğitimiyle süreci sonlandırıyoruz.",
      },
    ],
    deliverables: [
      "Tasarım ve prototip dosyaları",
      "CMS kurulumlu canlı web sitesi",
      "Performans ve SEO temel optimizasyonu",
      "Ekip eğitimi ve kullanım kılavuzu",
    ],
    faq: [
      {
        question: "Hangi teknolojilerle çalışıyorsunuz?",
        answer:
          "Next.js, React ve modern headless CMS altyapıları tercihimizdir. Proje ihtiyacına göre markanıza özel CMS çözümleri de geliştiriyoruz.",
      },
      {
        question: "Proje süresi ne kadar?",
        answer:
          "Kurumsal bir site için 1-2 hafta, e-ticaret projeleri için 2-3 hafta aralığındaki süreler tipiktir.",
      },
    ],
  },
  {
    slug: "video-produksiyon",
    title: "Video Prodüksiyon",
    description:
      "Marka hikayenizi kısa ve etkili formatlarda anlatan tanıtım, reklam ve sosyal medya videoları üretiyoruz.",
    fit: "Kreatif içerik üretimini ölçeklemek, reklam kampanyalarını güçlendirmek ve marka hikayesini video formatında anlatmak isteyen işletmeler için uygundur.",
    features: [
      {
        title: "Konsept & Senaryo",
        description:
          "Hedef, mesaj ve hikaye yapısını netleştirip sahne bazlı senaryolar hazırlıyoruz.",
      },
      {
        title: "Çekim Planı & Prodüksiyon",
        description:
          "Lokasyon, ekipman ve ekip koordinasyonunu yönetip verimli çekim günleri planlıyoruz.",
      },
      {
        title: "Post Prodüksiyon",
        description:
          "Kurgu, renk, ses tasarımı ve motion grafik dahil finali birlikte tamamlıyoruz.",
      },
      {
        title: "Reels & Shorts Formatlama",
        description:
          "Aynı üretimden dikey, kare ve yatay versiyonlar çıkararak içeriği çok kanallı kullanıma hazırlıyoruz.",
      },
    ],
    iconImage: "/reklam-3.png",
    detailIntro:
      "Video içerik üretimini kampanya hedefleriyle eşleyerek daha güçlü anlatım ve daha yüksek etkileşim sağlıyoruz.",
    detailParagraphs: [
      "Ön prodüksiyon aşamasında hikaye yapısını, mesaj tonunu ve sahne akışını netleştiriyoruz. Böylece çekim günü verimli ilerliyor ve içerik hedefe uygun oluyor.",
      "Kurgu ve teslim sürecinde platforma özel versiyonlar üretiyoruz. Aynı üretimden birden fazla format çıkararak içeriğin kullanım ömrünü uzatıyoruz.",
    ],
    process: [
      {
        title: "Brief & Konsept",
        description:
          "Hedefi ve kitleyi netleştirip konsept yönünü birlikte belirliyoruz.",
      },
      {
        title: "Senaryo & Storyboard",
        description:
          "Sahne akışı, diyaloglar ve görsel referansları hazırlıyoruz.",
      },
      {
        title: "Çekim",
        description:
          "Planlanan lokasyon ve ekiple profesyonel çekimi gerçekleştiriyoruz.",
      },
      {
        title: "Kurgu & Teslim",
        description:
          "Post prodüksiyon sonrası platforma özel versiyonları teslim ediyoruz.",
      },
    ],
    deliverables: [
      "Senaryo ve storyboard dokümanı",
      "Ham ve kurgulanmış video dosyaları",
      "Platform bazlı (Reels, Shorts, Yatay) versiyonlar",
      "Alt yazı ve transkript",
    ],
    faq: [
      {
        question: "Oyuncu ve lokasyon dahil mi?",
        answer:
          "Proje kapsamına göre değişir. İhtiyaca göre cast ve lokasyon bütçesini ilk teklif aşamasında şeffaf şekilde paylaşıyoruz.",
      },
      {
        question: "Revize süreci nasıl işliyor?",
        answer:
          "Kurgu teslimi sonrası 2 tur revize standarttır. Ek revizeler proje anlaşmasına göre yönetilir.",
      },
    ],
  },
  {
    slug: "marka-kimligi",
    title: "Marka Kimliği",
    description:
      "Markanızın karakterini görsel ve sözel olarak netleştiriyor; tüm temas noktalarında tutarlılık sağlıyoruz.",
    fit: "Yeni kurulan markalar, yeniden konumlanan işletmeler ve farklı kanallarda tutarsız görünen markalar için uygundur.",
    features: [
      {
        title: "Logo Sistemi",
        description:
          "Ana logo, alternatif ve yatay varyantlarla her kullanım alanına uygun esnek bir sistem kuruyoruz.",
      },
      {
        title: "Kurumsal Kimlik Seti",
        description:
          "Kartvizit, sunum, sosyal medya şablonları ve ofis materyallerini tek bir dilde hazırlıyoruz.",
      },
      {
        title: "Marka Dili & Tonlama",
        description:
          "Mesaj çerçevesi, ton kılavuzu ve örnek ifadelerle markanın nasıl konuşacağını netleştiriyoruz.",
      },
      {
        title: "Kullanım Rehberi",
        description:
          "Logo kullanımı, tipografi, renk ve kompozisyon kurallarını kapsamlı bir kılavuzda topluyoruz.",
      },
    ],
    iconImage: "/markakimligi-2.png",
    detailIntro:
      "Marka kimliğini logodan ibaret görmüyor; tüm temas noktalarında hissedilen bütünlüklü bir sistem kuruyoruz.",
    detailParagraphs: [
      "Görsel dil, tipografi, renk ve kompozisyon kararlarını markanızın konumlandırmasına göre şekillendiriyoruz. Böylece markanız farklı kanallarda aynı karakterle görünür hale geliyor.",
      "Sözel tarafta mesaj çerçevesi ve tonlama ilkelerini tanımlayıp ekiplerinizin aynı dilde iletişim kurmasını sağlıyoruz. Rehber dokümantasyonla uygulamayı sürdürülebilir kılıyoruz.",
    ],
    process: [
      {
        title: "Marka Keşfi",
        description:
          "Konumlandırma, rekabet ve hedef kitle atölyeleriyle markanın özünü netleştiriyoruz.",
      },
      {
        title: "Kimlik Konseptleri",
        description:
          "Birden fazla görsel ve sözel yön sunup birlikte karar veriyoruz.",
      },
      {
        title: "Uygulama & Sistem",
        description:
          "Seçilen yönü logo, renk, tipografi ve temas noktalarına uyguluyoruz.",
      },
      {
        title: "Rehber & Teslim",
        description:
          "Kullanım rehberi ve dijital-basılı şablonlarla teslim ediyoruz.",
      },
    ],
    deliverables: [
      "Logo sistemi ve varyantlar",
      "Renk, tipografi ve kompozisyon rehberi",
      "Marka dili ve tonlama kılavuzu",
      "Dijital ve basılı şablon seti",
    ],
    faq: [
      {
        question: "Mevcut logomuzu koruyabilir miyiz?",
        answer:
          "Evet, rebrand yerine marka yenileme (refresh) projeleriyle mevcut kimliği koruyarak modernize edebiliriz.",
      },
      {
        question: "Proje süresi ne kadar?",
        answer:
          "Kapsam ve keşif derinliğine göre 6-10 hafta arasında değişir. Detaylı zaman planını ilk görüşmede paylaşıyoruz.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
