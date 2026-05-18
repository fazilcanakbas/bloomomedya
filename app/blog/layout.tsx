import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Bloomo",
  description: "İçgörüler, stratejiler ve dijital trendler.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
