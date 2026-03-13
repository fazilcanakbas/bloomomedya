"use client";

export default function ScrollToButton({ targetId, label }: { targetId: string; label: string }) {
  return (
    <button
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
      className="mt-10 flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 10-4 4-4-4" />
      </svg>
      {label}
    </button>
  );
}
