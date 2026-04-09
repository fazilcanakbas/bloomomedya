import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog | Bloomo" };
  return {
    title: `${post.title} | Bloomo Blog`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="bg-white">
      {/* Hero with cover image */}
      <section className="bg-white pb-0 pt-24 sm:pt-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-16">
          <div className="relative overflow-hidden rounded-[50px] bg-black">
            {/* Cover image */}
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="pointer-events-none absolute inset-0 object-cover opacity-40"
              priority
            />
            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(8,153,190,0.2)_0%,transparent_50%)]" />

            <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center sm:px-14 sm:py-20 lg:py-28">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Link href="/" className="transition-colors hover:text-white/70">
                  Ana Sayfa
                </Link>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-white/70"
                >
                  Blog
                </Link>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span className="text-white/30">Makale</span>
              </div>

              {/* Category & meta */}
              <div className="mt-6 flex items-center gap-3">
                <span className="rounded-full bg-[#0899BE] px-4 py-1.5 text-xs font-semibold tracking-wider text-white">
                  {post.category}
                </span>
                <span className="text-sm text-white/50">
                  {formatDate(post.date)}
                </span>
                <span className="text-sm text-white/50">·</span>
                <span className="text-sm text-white/50">
                  {post.readTime} okuma
                </span>
              </div>

              {/* Title */}
              <h1
                className="mt-6 max-w-4xl text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="rounded-full object-cover ring-2 ring-white/20"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">
                    {post.author}
                  </p>
                  <p className="text-xs text-white/50">{post.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section
        className="w-full py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #E8F6FA 50%, #ffffff 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="mx-auto max-w-3xl">
            {/* Article body */}
            <article className="prose-article">
              <ArticleContent content={post.content} />
            </article>

            {/* Share & Tags */}
            <div className="mt-16 flex flex-col gap-6 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-500">
                  Kategori:
                </span>
                <span className="rounded-full bg-[#E8F6FA] px-4 py-1.5 text-xs font-semibold text-[#0899BE]">
                  {post.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-500">
                  Paylaş:
                </span>
                <a
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all hover:bg-[#0899BE] hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all hover:bg-[#0899BE] hover:text-white"
                  aria-label="X"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
                    <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Author card */}
            <div className="mt-12 flex flex-col items-center gap-6 rounded-[30px] border border-gray-200 bg-white p-8 sm:flex-row sm:items-start">
              <Image
                src={post.authorImage}
                alt={post.author}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <p
                  className="text-lg font-semibold text-black"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {post.author}
                </p>
                <p className="text-sm text-[#0899BE]">{post.authorRole}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  Bloomo Medya&apos;nın kurucusu. Dijital pazarlama stratejileri,
                  marka yönetimi ve büyüme odaklı kampanya planlaması
                  konularında uzmanlaşmıştır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-32">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-black">DİĞER YAZILAR</p>
              <h2
                className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Okumaya Devam Edin
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:shadow-sm sm:inline-flex"
            >
              Tüm Yazılar
              <svg
                width="14"
                height="14"
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

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-gray-200 bg-white transition-all hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden bg-[#F3F4F6]">
                  <Image
                    src={rp.coverImage}
                    alt={rp.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur-sm">
                    {rp.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{formatDate(rp.date)}</span>
                    <span>·</span>
                    <span>{rp.readTime} okuma</span>
                  </div>

                  <h3
                    className="mt-3 text-lg font-semibold leading-snug text-black transition-colors group-hover:text-[#0899BE]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {rp.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                    <Image
                      src={rp.authorImage}
                      alt={rp.author}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    <p className="text-xs font-semibold text-gray-800">
                      {rp.author}
                    </p>
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

          {/* Mobile "all posts" link */}
          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700"
            >
              Tüm Yazılar
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- Markdown-like content renderer --- */
function ArticleContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul
          key={`list-${elements.length}`}
          className="my-6 space-y-3 pl-0"
        >
          {currentList.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-base leading-relaxed text-gray-700"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0899BE"
                strokeWidth="2"
                className="mt-1 shrink-0"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: parseBold(item) }} />
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      flushList();
      continue;
    }

    // Heading 3
    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={`h3-${i}`}
          className="mb-4 mt-10 text-xl font-semibold text-black sm:text-2xl"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {line.replace("### ", "")}
        </h3>
      );
      continue;
    }

    // Heading 2
    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={`h2-${i}`}
          className="mb-4 mt-12 text-2xl font-semibold text-black sm:text-3xl"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {line.replace("## ", "")}
        </h2>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      flushList();
      elements.push(
        <blockquote
          key={`bq-${i}`}
          className="my-8 border-l-4 border-[#0899BE] bg-[#E8F6FA]/50 py-4 pl-6 pr-4 text-base italic leading-relaxed text-gray-700 rounded-r-2xl"
        >
          {line.replace("> ", "")}
        </blockquote>
      );
      continue;
    }

    // List item
    if (line.startsWith("- ")) {
      currentList.push(line.replace("- ", ""));
      continue;
    }

    // Paragraph
    flushList();
    elements.push(
      <p
        key={`p-${i}`}
        className="my-4 text-base leading-relaxed text-gray-700"
        dangerouslySetInnerHTML={{ __html: parseBold(line) }}
      />
    );
  }

  flushList();
  return <>{elements}</>;
}

function parseBold(text: string): string {
  return text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="font-semibold text-black">$1</strong>'
  );
}
