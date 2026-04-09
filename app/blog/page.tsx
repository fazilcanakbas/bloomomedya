"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, categories } from "./blogData";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const featured = blogPosts.find((p) => p.featured);
  const filtered =
    activeCategory === "Tümü"
      ? blogPosts.filter((p) => !p.featured)
      : blogPosts.filter(
          (p) => p.category === activeCategory && !p.featured
        );

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-white pb-14 pt-24 sm:pb-16 sm:pt-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-16">
          <div className="relative overflow-hidden rounded-[50px] bg-black px-8 py-16 sm:px-14 sm:py-20 lg:py-24">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(8,153,190,0.25)_0%,transparent_45%),radial-gradient(circle_at_80%_70%,rgba(8,153,190,0.15)_0%,transparent_40%)]" />

            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/5" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/5" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full border border-white/5" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <p
                className="text-sm font-semibold tracking-[0.2em] text-[#0899BE]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                BLOG
              </p>
              <h1
                className="mt-4 text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                İçgörüler, stratejiler
                <br />
                ve dijital trendler.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                Dijital pazarlama dünyasındaki en güncel gelişmeleri, strateji
                ipuçlarını ve başarı hikayelerini keşfedin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && activeCategory === "Tümü" && (
        <section className="w-full pb-8 pt-4">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-[30px] border border-gray-200 bg-white transition-shadow hover:shadow-xl lg:grid-cols-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[#F3F4F6] sm:h-80 lg:h-full lg:min-h-[420px]">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Featured badge */}
                <div className="absolute left-6 top-6 z-10 rounded-full bg-[#0899BE] px-4 py-1.5 text-xs font-semibold tracking-wider text-white">
                  ÖNE ÇIKAN
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#E8F6FA] px-3 py-1 text-xs font-semibold text-[#0899BE]">
                    {featured.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {formatDate(featured.date)}
                  </span>
                </div>

                <h2
                  className="mt-5 text-2xl font-medium leading-tight text-black sm:text-3xl lg:text-4xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {featured.title}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {featured.excerpt}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={featured.authorImage}
                    alt={featured.author}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-black">
                      {featured.author}
                    </p>
                    <p className="text-xs text-gray-500">{featured.readTime} okuma</p>
                  </div>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0899BE] transition-all group-hover:gap-3">
                  <span>Devamını Oku</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filters + Posts Grid */}
      <section
        className="w-full py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #E8F6FA 40%, #E8F6FA 60%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-lg"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-gray-200 bg-white transition-all hover:shadow-xl"
              >
                {/* Cover image */}
                <div className="relative h-52 overflow-hidden bg-[#F3F4F6]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime} okuma</span>
                  </div>

                  <h3
                    className="mt-3 text-lg font-semibold leading-snug text-black transition-colors group-hover:text-[#0899BE]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                    {post.excerpt.length > 120
                      ? post.excerpt.slice(0, 120) + "..."
                      : post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        {post.author}
                      </p>
                      <p className="text-[11px] text-gray-400">{post.authorRole}</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0899BE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-auto transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 flex flex-col items-center justify-center rounded-3xl bg-white/60 py-20 text-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <p className="mt-4 text-lg font-medium text-gray-400">
                Bu kategoride henüz yazı yok.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0899BE] opacity-20 blur-[100px]" />

            {/* Abstract decoration — top right */}
            <div className="pointer-events-none absolute -right-[80px] -top-[80px] z-0 w-[280px]">
              <Image
                src="/hero-7.png"
                alt=""
                width={280}
                height={280}
                className="object-contain"
              />
            </div>

            {/* Abstract decoration — bottom left */}
            <div className="pointer-events-none absolute -left-[80px] -bottom-[80px] z-0 w-[280px]">
              <Image
                src="/hero-8.png"
                alt=""
                width={280}
                height={280}
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <h2
                className="text-3xl font-medium text-white sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Güncel kalın.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
                Dijital pazarlama dünyasındaki en son gelişmeleri, ipuçlarını ve
                stratejileri kaçırmamak için bizi takip edin.
              </p>
              <Link
                href="/iletisim"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0899BE] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#077a9a]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                BİZİMLE İLETİŞİME GEÇİN
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
