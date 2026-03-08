import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
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
  title: "Bloomo",
  description: "Bloomo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${syne.variable} antialiased`}>
        {/* <HeaderTop /> */}
        {/* <Header /> */}
        <HeaderNew />
        {children}
        <Footer />
      </body>
    </html>
  );
}
