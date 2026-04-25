import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
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
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-black">
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
      </div>

      {/* Platform logos — pinned to bottom */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 px-4">
          {/* Google Ads */}
          {/* <div className="opacity-80 hover:opacity-100 transition-opacity">
            <svg width="56" height="56" viewBox="0 0 512 512" fill="none">
              <path d="m202.33 53.44a80.7 80.7 0 0 0 -18.8 22.06l-161.24 278.08a81.62 81.62 0 0 0 29.58 111.22 81.62 81.62 0 0 0 111.22-29.58l138.59-239c-30.58-43.9-75.19-107.93-99.35-142.78z" fill="#febd00" />
              <circle cx="92.69" cy="394.4" r="81.38" fill="#25a84a" />
              <rect fill="#2e8add" height="484.21" rx="81.38" transform="matrix(-.866 .5 -.5 -.866 751.31 309.71)" width="162.76" x="252.78" y="13.4" />
            </svg>
          </div>

      
          <div className="opacity-80 hover:opacity-100 transition-opacity">
            <svg width="56" height="56" viewBox="0 0 287.56 191" fill="none">
              <defs>
                <linearGradient id="hero-meta-grad-1" x1="62.34" y1="101.45" x2="260.34" y2="91.45" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0064e1" />
                  <stop offset="0.4" stopColor="#0064e1" />
                  <stop offset="0.83" stopColor="#0073ee" />
                  <stop offset="1" stopColor="#0082fb" />
                </linearGradient>
                <linearGradient id="hero-meta-grad-2" x1="41.42" y1="53" x2="41.42" y2="126" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0082fb" />
                  <stop offset="1" stopColor="#0064e0" />
                </linearGradient>
              </defs>
              <path fill="#0081fb" d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z" />
              <path fill="url(#hero-meta-grad-1)" d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z" />
              <path fill="url(#hero-meta-grad-2)" d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z" />
            </svg>
          </div> */}
        </div>
      </div>
    </section>
  );
}
