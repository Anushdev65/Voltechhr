// components/site-loader.tsx
"use client";

export default function SiteLoader() {
  return (
    <div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-linear-to-br from-emerald-950 via-emerald-900 to-black text-white"
      aria-busy="true"
      aria-label="Loading Voltech HR"
    >
      {/* Logo / Brand */}
      <div className="mb-8 flex items-center gap-3">
        <span className="text-2xl font-semibold uppercase tracking-[0.2em]">
          Voltech HR
        </span>
      </div>

      {/* Spinner */}
      <div className="relative h-16 w-16">
        {/* Outer ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-emerald-400/20 border-t-emerald-400" />

        {/* Inner glow */}
        <div className="absolute inset-3 rounded-full bg-emerald-400/20 blur-[2px]" />
      </div>

      {/* Loading text */}
      <p className="mt-6 text-xs sm:text-sm uppercase tracking-[0.35em] text-emerald-100/80">
        Preparing experience…
      </p>

      {/* Bouncing dots */}
      <div className="mt-4 flex gap-1.5">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-300 [animation-delay:-0.2s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-300" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-300 [animation-delay:0.2s]" />
      </div>
    </div>
  );
}
