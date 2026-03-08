export default function HeaderTop() {
  return (
    <div className="w-full overflow-hidden bg-black">
      <div className="relative mx-auto h-[58px] w-full max-w-[1440px] px-4 py-3 sm:px-6 sm:py-[17px] xl:px-32">
        {/* Yeşil blur lekesi */}
        <div
          className="absolute top-4 h-[90px] w-full max-w-47 bg-[#0899BE] opacity-0.1 blur-lg sm:max-w-64 xl:top-6 xl:left-14 xl:max-w-90"
          style={{ borderRadius: "100%" }}
        />

        <div className="relative z-10 flex h-full items-center justify-between gap-2">
          {/* Sol taraf */}
          <h2 className="whitespace-nowrap text-[11px] text-white min-[405px]:text-xs sm:text-base">
            <span className="font-semibold">Bloomo</span> ile büyümeye
            hazır mısın?
          </h2>

          {/* Sağ taraf - Butonlar */}
          <div className="flex items-center divide-x divide-white/35">
            <a
              href="#"
              className="group flex cursor-pointer items-center gap-1 pr-1.5 sm:pr-6"
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden size-4 shrink-0 text-[#0899BE] sm:block"
              >
                <path
                  d="M13 6.67H1m8.667-5.334v2.667M4.333 1.336v2.667M4.2 14.669h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C13 13.15 13 12.59 13 11.47v-5.6c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C11.48 2.67 10.92 2.67 9.8 2.67H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C1 4.19 1 4.75 1 5.87v5.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874c.428.218.988.218 2.108.218z"
                  stroke="currentColor"
                  strokeWidth="1.38983"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="whitespace-nowrap text-center text-[11px] font-bold text-white transition-colors group-hover:text-[#0899BE] min-[405px]:text-xs sm:text-base sm:font-normal">
                Toplantı Planla
              </p>
            </a>

            <a
              href="#"
              className="group flex cursor-pointer items-center gap-1 pl-1.5 sm:pl-6"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden size-4 shrink-0 text-[#0899BE] sm:block"
              >
                <path
                  d="M9.369 4.003a3.334 3.334 0 012.633 2.633m-2.633-5.3a6 6 0 015.3 5.293M6.82 9.245A9.735 9.735 0 014.923 6.57c-.04-.083-.06-.124-.075-.177a.697.697 0 01.098-.575c.031-.044.07-.082.146-.158.233-.233.35-.35.426-.467a1.333 1.333 0 000-1.454c-.077-.117-.193-.233-.426-.467l-.13-.13c-.354-.354-.532-.53-.722-.627a1.333 1.333 0 00-1.203 0c-.19.096-.368.273-.722.628l-.105.105c-.353.353-.53.53-.665.77-.15.266-.257.68-.256.985 0 .275.054.463.161.84A12.693 12.693 0 004.7 11.365a12.692 12.692 0 005.523 3.249c.376.107.564.16.84.16.305.002.718-.106.985-.255.24-.135.416-.312.77-.665l.104-.105c.355-.354.532-.531.628-.722a1.334 1.334 0 000-1.203c-.096-.19-.273-.368-.627-.722l-.13-.13c-.233-.233-.35-.35-.467-.426a1.333 1.333 0 00-1.454 0c-.117.077-.234.193-.467.426-.076.076-.114.114-.158.146a.697.697 0 01-.575.098c-.053-.015-.094-.035-.177-.075A9.735 9.735 0 016.82 9.245z"
                  stroke="currentColor"
                  strokeWidth="1.38983"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="whitespace-nowrap text-center text-[11px] font-bold text-white transition-colors group-hover:text-[#0899BE] min-[405px]:text-xs sm:text-base sm:font-normal">
                Sizi Arayalım
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
