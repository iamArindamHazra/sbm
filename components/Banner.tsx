import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/banner.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        {/* Layered overlays: vignette + gradient for depth and readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/50 to-background/85"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_0%,rgba(15,10,30,0.4)_100%)]"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 md:py-32">
        {/* Glass content card for focus and readability */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] px-8 py-12 md:px-14 md:py-16">
          {/* Badge */}
          <span
            className="inline-block rounded-full border-2 border-accent/80 bg-accent/25 px-5 py-2 text-base md:text-lg font-semibold text-white tracking-wide shadow-neon-sm animate-[fade-in-up_0.7s_ease-out_both]"
            style={{ animationDelay: "0.1s" }}
          >
            Premium puffed rice · Since 2009
          </span>

          {/* Main title — split for impact */}
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-[0_0_32px_rgba(167,139,250,0.35)]">
            <span
              className="block animate-[fade-in-up_0.7s_ease-out_both]"
              style={{ animationDelay: "0.25s" }}
            >
              SONAR BANGLA
            </span>
            <span
              className="block mt-1 bg-gradient-to-r from-neon-glow to-accent bg-clip-text text-transparent animate-[fade-in-up_0.7s_ease-out_both]"
              style={{ animationDelay: "0.4s" }}
            >
              MURI
            </span>
          </h1>

          <p
            className="mt-6 text-lg md:text-xl text-white/90 font-medium tracking-wide max-w-xl mx-auto animate-[fade-in-up_0.7s_ease-out_both]"
            style={{ animationDelay: "0.55s" }}
          >
            Loved across India & USA · FSSAI approved · Pure, stone-free
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-wrap justify-center gap-4 animate-[fade-in-up_0.7s_ease-out_both]"
            style={{ animationDelay: "0.7s" }}
          >
            <Link
              href="#contact"
              className="btn-neon inline-flex items-center justify-center min-w-[11rem] py-3.5 text-center"
            >
              Order Now
            </Link>
            <Link
              href="#know"
              className="btn-neon-outline inline-flex items-center justify-center min-w-[11rem] py-3.5 text-center"
            >
              Know more about puffed rice
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#know"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
      >
        <span className="text-xs font-medium tracking-widest uppercase pb-3">
          Explore
        </span>
        <svg
          className="w-6 h-6 animate-[float_2s_ease-in-out_infinite]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
