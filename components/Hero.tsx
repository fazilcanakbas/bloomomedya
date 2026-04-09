import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden pt-24 sm:pt-32">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Hero content — centered vertically */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold  leading-tight text-black">
          Çözüm, işletmenizi anlamakla başlar;
          <br />
          biz oradan başlıyoruz.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-black sm:text-lg">
         İşletmenizi anlayarak ihtiyaçlarınıza uygun, yaratıcı ve stratejik dijital çözümler geliştiriyoruz.
        </p>

        {/* Brand logos */}
        <div className="relative mt-12 w-full">
          <div className="flex items-center justify-center gap-12 sm:gap-20 px-4">
            <Image
              src="/havacilar-logo.png"
              alt="Havacilar Logo"
              width={140}
              height={44}
              className="h-auto w-[120px] object-contain invert sm:w-[140px]"
            />
            <span className="text-lg font-semibold uppercase tracking-widest text-white/60 sm:text-xl">Logo 2</span>
            <span className="text-lg font-semibold uppercase tracking-widest text-white/60 sm:text-xl">Logo 3</span>
            <span className="text-lg font-semibold uppercase tracking-widest text-white/60 sm:text-xl">Logo 4</span>
            <span className="text-lg font-semibold uppercase tracking-widest text-white/60 sm:text-xl">Logo 5</span>
            <span className="text-lg font-semibold uppercase tracking-widest text-white/60 sm:text-xl">Logo 6</span>
          </div>
        </div>

        {/* Manset image */}
        <div className="mt-10">
          <Image
            src="/manset-bg.webp"
            alt="Manset"
            width={1200}
            height={600}
            className="h-auto block"
            priority
          />
        </div>
      </div>
    </section>
  );
}
