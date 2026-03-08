"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const references: {
  name: string;
  logo: string | null;
  media: string;
  type: "video" | "image";
  description: string;
}[] = [
  {
    name: "Daima Tur",
    logo: "/daimatur-logo.png",
    media: "/daimatur.mp4",
    type: "video",
    description:
      "Tur şirketi için dijital pazarlama stratejisi ve sosyal medya içerik üretimi ile marka bilinirliği artırıldı.",
  },
  {
    name: "eFour Satranç Akademi",
    logo: "/efour-logo.png",
    media: "/efour.mp4",
    type: "video",
    description:
      "Satranç kurs platformu için video içerik prodüksiyonu ve dijital reklam kampanyalarıyla öğrenci kazanımı sağlandı.",
  },
  {
    name: "Sinyal Sürücü Kursu",
    logo: "/sinyal-logo.png",
    media: "/sinyal.mp4",
    type: "video",
    description:
      "Sürücü kursu için performans odaklı reklam stratejisi ve sosyal medya yönetimi ile kayıt oranları artırıldı.",
  },
  {
    name: "Çallı Sürücü Kursu",
    logo: "/calli-logo.png",
    media: "/calli.mp4",
    type: "video",
    description:
      "Sürücü kursu markası için dijital dönüşüm, Google Ads ve sosyal medya kampanyalarıyla yerel görünürlük sağlandı.",
  },
  {
    name: "Lully Kids",
    logo: "/lullykids-logo.png",
    media: "/lullykids.jpg",
    type: "image",
    description:
      "Çocuk giyim markası için kreatif içerik üretimi ve Meta Ads kampanyalarıyla satış dönüşümleri optimize edildi.",
  },
  {
    name: "Havacılar A.Ş.",
    logo: "/havacilar-logo.png",
    media: "/havacilar.mp4",
    type: "video",
    description:
      "Havacılık şirketi için kurumsal dijital strateji ve video içerik prodüksiyonuyla marka iletişimi güçlendirildi.",
  },
];

export default function References() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateWidth = () => {
      setScrollWidth(track.scrollWidth - track.clientWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || scrollWidth === 0) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      // How far we've scrolled into the section (0 = top of section at top of viewport)
      const scrolled = -rect.top;
      // Total scrollable distance within the section (minus one viewport for the sticky)
      const maxScroll = sectionHeight - viewportHeight;
      const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      track.scrollLeft = progress * scrollWidth;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollWidth]);

  // Section height = viewport + horizontal scroll distance to allow full scroll-through
  const sectionHeight = `calc(100vh + ${scrollWidth}px + 500px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white"
      style={{ height: sectionHeight }}
    >
      {/* Header — normal flow, scrolls away */}
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-20 sm:px-6 lg:pt-28 xl:px-32">
        <p className="text-sm font-semibold text-black">REFERANSLARIMIZ</p>
        <h2
          className="mt-4 max-w-2xl text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Birlikte Büyüdüğümüz
          <br />
          Markalar
        </h2>
      </div>

      {/* Sticky cards — lock after header scrolls past */}
      <div className="sticky top-0 flex h-screen items-center pb-16">
        <div
          ref={trackRef}
          className="flex w-full gap-6 overflow-hidden pl-4 sm:pl-6 xl:pl-[max(1.5rem,calc((100vw-1440px)/2+8rem))]"
        >
          {references.map((ref) => (
            <div
              key={ref.name}
              className="relative h-[600px] w-[440px] flex-none overflow-hidden rounded-3xl group"
            >
              {/* Background media */}
              {ref.type === "video" ? (
                <video
                  src={ref.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={ref.media}
                  alt={ref.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Logo top-left */}
              {ref.logo && (
                <div className="absolute left-6 top-6 z-10">
                  <Image
                    src={ref.logo}
                    alt={`${ref.name} logo`}
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              )}

              {/* Text bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {ref.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {ref.description}
                </p>
              </div>
            </div>
          ))}
          {/* Right padding spacer */}
          <div className="w-80 flex-none" />
        </div>
      </div>
    </section>
  );
}
