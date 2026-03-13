import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-[linear-gradient(180deg,#e0f2fe_0%,#eef2ff_50%,#f3f0ff_100%)] overflow-hidden flex flex-col items-center pt-60">
      {/* Spline 3D — positioned at top center, half visible */}
      <div className="hero-spline">
        <iframe
          src="https://my.spline.design/chips-90DFOkXurkfIu7OMtSMXpIot/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      {/* Hero content — centered vertically */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Çözüm, işletmenizi anlamakla başlar;
          <br />
          biz oradan başlıyoruz.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl">
          İşinizi değil, sisteminizi değiştirin ve otomasyonun tadını çıkarın
        </p>

        {/* Brand logos */}
        <div className="relative mt-12 w-full">
          <div className="flex items-center justify-center gap-12 sm:gap-20 px-4">
            <span className="text-gray-400 text-lg sm:text-xl font-semibold tracking-widest uppercase">Logo 1</span>
            <span className="text-gray-400 text-lg sm:text-xl font-semibold tracking-widest uppercase">Logo 2</span>
            <span className="text-gray-400 text-lg sm:text-xl font-semibold tracking-widest uppercase">Logo 3</span>
            <span className="text-gray-400 text-lg sm:text-xl font-semibold tracking-widest uppercase">Logo 4</span>
            <span className="text-gray-400 text-lg sm:text-xl font-semibold tracking-widest uppercase">Logo 5</span>
            <span className="text-gray-400 text-lg sm:text-xl font-semibold tracking-widest uppercase">Logo 6</span>
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
