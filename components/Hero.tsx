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
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 px-4">
            <Image
              src="/havacilar-logo.png"
              alt="Havacilar"
              width={140}
              height={44}
              className="h-auto w-[120px] object-contain invert sm:w-[140px]"
            />
            <Image
              src="/efour.png"
              alt="Efour"
              width={140}
              height={44}
              className="h-auto w-[110px] object-contain sm:w-[130px]"
            />
            <Image
              src="/lullykids.png"
              alt="Lullykids"
              width={140}
              height={44}
              className="h-auto w-[110px] object-contain sm:w-[130px]"
            />
            <Image
              src="/daimatour.png"
              alt="Daimatour"
              width={140}
              height={44}
              className="h-auto w-[110px] object-contain sm:w-[130px]"
            />
            <Image
              src="/peynir.png"
              alt="Peynir"
              width={140}
              height={44}
              className="h-auto w-[110px] object-contain sm:w-[130px]"
            />
          </div>
        </div>

        {/* Manset image */}
        <div className="mt-10">
          <Image
            src="/man.webp"
            alt=""
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
