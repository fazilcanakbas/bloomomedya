import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Bloomo",
  description: "Bloomo ile iletişime geçin",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
