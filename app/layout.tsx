import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
// import HeaderTop from "@/components/HeaderTop";
// import Header from "@/components/Header";
import HeaderNew from "@/components/HeaderNew";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bloomo Medya | Dijital Reklam, SEO & Web Tasarım Ajansı Antalya",
  description: "Antalya merkezli Bloomo Medya; Dijital Reklam, SEO, Web Tasarım, Sosyal Medya Yönetimi ve Video Prodüksiyon hizmetleri sunan veri odaklı dijital pazarlama ajansıdır.",
  metadataBase: new URL('https://bloomomedya.com'),
  keywords: ["dijital ajans antalya", "reklam ajansı antalya", "web tasarım antalya", "seo uzmanı antalya", "sosyal medya yönetimi", "google ads danışmanlığı", "dijital pazarlama"],
  openGraph: {
    title: "Bloomo Medya | Dijital Büyüme Ortağınız",
    description: "Strateji, veri ve yaratıcılığı bir araya getirerek markanızı dijitalde büyütüyoruz.",
    url: "https://bloomomedya.com",
    siteName: "Bloomo Medya",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/bloomo.png", // Sitenizin kök dizininde bir og-image.jpg olması önerilir
        width: 1200,
        height: 630,
        alt: "Bloomo Medya",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloomo Medya | Dijital Ajans",
    description: "Strateji, veri ve yaratıcılığı bir araya getirerek markanızı dijitalde büyütüyoruz.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${syne.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YZXBQECWQ9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YZXBQECWQ9');
          `}
        </Script>

        {/* <HeaderTop /> */}
        {/* <Header /> */}
        <HeaderNew />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bloomo Medya",
              "image": "https://bloomomedya.com/bloomo-logo.png",
              "@id": "https://bloomomedya.com",
              "url": "https://bloomomedya.com",
              "telephone": "+905452487221",
              "email": "info@bloomomedya.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Antalya",
                "addressCountry": "TR"
              },
              "sameAs": [
                "https://www.instagram.com/bloomo.medya/"
              ]
            })
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
