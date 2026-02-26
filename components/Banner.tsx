import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden pt-24 md:pt-32"
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-14 md:py-32">
        {/* Glass content card for focus and readability */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] px-8 py-12 md:px-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.5fr)] items-center text-left md:text-left">
            <div>
              {/* Badge */}
              <span
                className="inline-block rounded-full border-2 border-accent/80 bg-accent/25 px-5 py-2 text-base md:text-lg font-semibold text-white tracking-wide shadow-neon-sm animate-[fade-in-up_0.7s_ease-out_both]"
                style={{ animationDelay: "0.1s" }}
              >
                Premium puffed rice · Est. 2009
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
                className="mt-6 text-lg md:text-xl text-white/90 font-medium tracking-wide max-w-xl animate-[fade-in-up_0.7s_ease-out_both]"
                style={{ animationDelay: "0.55s" }}
              >
                FSSAI approved, stone-free puffed rice trusted by wholesalers,
                retailers across India & USA.
              </p>
              <p
                className="mt-3 text-sm md:text-base text-white/80 max-w-xl animate-[fade-in-up_0.7s_ease-out_both]"
                style={{ animationDelay: "0.6s" }}
              >
                Consistent batch quality, hygienic processing and reliable bulk
                supply for snacks, namkeen and packaged food products.
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap justify-start gap-4 animate-[fade-in-up_0.7s_ease-out_both]"
                style={{ animationDelay: "0.7s" }}
              >
                <Link
                  href="#contact"
                  className="btn-neon inline-flex items-center justify-center min-w-[12rem] py-3.5 text-center"
                >
                  Request bulk pricing
                </Link>
                <Link
                  href="#products"
                  className="btn-neon-outline inline-flex items-center justify-center min-w-[12rem] py-3.5 text-center"
                >
                  View product range
                </Link>
              </div>
            </div>

            {/* Key highlights — card grid */}
            <div
              className="animate-[fade-in-up_0.7s_ease-out_both]"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="group rounded-xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-white/[0.1]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-white ring-1 ring-white/30">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-white">
                    FSSAI approved
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                    Compliant processes and documentation for retail and export.
                  </p>
                </div>
                <div className="group rounded-xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-white/[0.1]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-white ring-1 ring-white/30">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-white">
                    Custom bag sizes
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                    Any size custom bags for private labels and brands.
                  </p>
                </div>
                <div className="group rounded-xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-white/[0.1]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-white ring-1 ring-white/30">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-white">
                    Wholesale & export
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                    Trusted by distributors, supermarkets and manufacturers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
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
