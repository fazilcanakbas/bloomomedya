import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Bloomo",
  description: "Bloomo ile iletişime geçin",
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
