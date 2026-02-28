import Link from "next/link";
import Image from "next/image";
import FlippingLogo from "./FlippingLogo";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative  flex flex-col justify-center items-center text-center pt-24 md:pt-28"
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
          className="object-cover scale-100"
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
      <div className="relative z-10 w-full max-w-6xl mx-auto pb-28 sm:pb-16 px-6 py-6">
        {/* Glass content card for focus and readability */}
        <div className="rounded-3xl border border-white/12 bg-white/5 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)] px-6 py-4 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
          <div className="grid gap-10 lg:gap-14 md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] items-center text-left">
            {/* Left: Brand + sales copy */}
            <div>
              {/* Big logo strip */}
              <div
                className="hidden sm:inline-flex items-center gap-4 rounded-full bg-black/40 px-4 py-2 ring-1 ring-white/15 animate-[fade-in-up_0.7s_ease-out_both]"
                style={{ animationDelay: "0.08s" }}
              >
                <div className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.26em] text-white/80">
                  Trusted quality · FSSAI approved
                </div>
              </div>

              {/* Main sales headline */}
              <h1 className="mt-7 font-display text-[2.6rem] leading-[1.05] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.9rem] font-bold text-white tracking-tight drop-shadow-[0_0_40px_rgba(167,139,250,0.55)]">
                <span
                  className="block animate-[fade-in-up_0.7s_ease-out_both]"
                  style={{ animationDelay: "0.2s" }}
                >
                  For your family
                  <span className="ml-2 bg-gradient-to-r from-neon-glow to-accent bg-clip-text text-transparent">
                    and your customers
                  </span>
                </span>
                Sonar Bangla
                <span
                  className="mt-2 bg-gradient-to-r ml-2 from-accent via-amber-300 to-amber-100 bg-clip-text text-transparent animate-[fade-in-up_0.7s_ease-out_both]"
                  style={{ animationDelay: "0.28s" }}
                >
                  Muri
                </span>
              </h1>

              <p
                className="mt-6 text-base sm:text-lg md:text-xl text-white/90 font-medium tracking-wide max-w-xl animate-[fade-in-up_0.7s_ease-out_both]"
                style={{ animationDelay: "0.4s" }}
              >
                Make every evening snack, jhal muri or chaat feel lighter with
                clean, stone-free muri that people enjoy at home and keep coming
                back to in your shop for{" "}
                <span className="font-semibold">Sonar Bangla</span>.
              </p>
              <p
                className="mt-3 text-xs sm:text-sm md:text-base text-white/75 max-w-xl animate-[fade-in-up_0.7s_ease-out_both]"
                style={{ animationDelay: "0.48s" }}
              >
                Whether you&apos;re buying for your family, a kirana, a
                supermarket or distribution, Sonar Bangla gives you dependable
                puffed rice with consistent quality, hygienic processing and
                export-ready documentation.
              </p>

              {/* CTAs */}
              <div
                className="mt-8 flex flex-wrap items-center gap-4 animate-[fade-in-up_0.7s_ease-out_both]"
                style={{ animationDelay: "0.58s" }}
              >
                <Link
                  href="#contact"
                  className="btn-neon inline-flex items-center justify-center min-w-[13rem] px-6 py-3.5 text-center text-sm sm:text-base"
                >
                  Talk to our team
                </Link>
                <Link
                  href="#products"
                  className="btn-neon-outline inline-flex items-center justify-center min-w-[13rem] px-6 py-3.5 text-center text-sm sm:text-base"
                >
                  View products
                </Link>
                <p className="w-full text-[0.7rem] sm:text-xs text-white/70">
                  We supply in bulk and to businesses. For home use, ask your
                  local shop for Sonar Bangla Muri.
                </p>
              </div>

              {/* Quick reassurance strip */}
              <div
                className="mt-7 grid grid-cols-3 max-w-md gap-4 text-[0.7rem] sm:text-xs text-white/80 animate-[fade-in-up_0.7s_ease-out_both]"
                style={{ animationDelay: "0.68s" }}
              >
                <div className="border-l border-white/25 pl-3">
                  <div className="text-sm sm:text-base font-semibold text-white">
                    15+ years
                  </div>
                  <div className="mt-0.5 text-white/65">
                    trusted by B2B buyers
                  </div>
                </div>
                <div className="border-l border-white/25 pl-3">
                  <div className="text-sm sm:text-base font-semibold text-white">
                    Stone-free
                  </div>
                  <div className="mt-0.5 text-white/65">
                    carefully cleaned puffed rice
                  </div>
                </div>
                <div className="border-l border-white/25 pl-3">
                  <div className="text-sm sm:text-base font-semibold text-white">
                    Export ready
                  </div>
                  <div className="mt-0.5 text-white/65">
                    FSSAI & supporting documents
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Brand pack focus (own brand, not private label) */}
            <div
              className="relative animate-[fade-in-up_0.7s_ease-out_both]"
              style={{ animationDelay: "0.72s" }}
            >
              {/* Glow accents */}
              <div className="pointer-events-none absolute -top-10 -right-6 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-neon-glow/35 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-gradient-to-br from-black/70 via-violet-900/70 to-black/85 p-5 sm:p-6 md:p-7 shadow-[0_22px_60px_rgba(0,0,0,0.85)]">
                {/* Corner badge */}
                <div className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-3xs sm:text-2xs font-semibold uppercase tracking-[0.18em] z-10 text-emerald-50 shadow-lg shadow-emerald-500/60">
                  Quick selling product
                </div>

                <div className="flex flex-col gap-7">
                  {/* Big pack mock focused on Sonar Bangla */}
                  <div className="relative mx-auto mt-1 aspect-[4/3] w-48 sm:w-56 md:w-64 lg:w-72">
                    <div className="absolute inset-4 rounded-[1.9rem] bg-gradient-to-br from-white/25 via-white/5 to-white/0 blur-xl" />
                    <div className="relative h-full w-full rounded-[1.9rem] border border-white/25 bg-gradient-to-br from-amber-100 via-amber-50 to-slate-100 shadow-[0_40px_80px_rgba(15,23,42,0.7)] flex flex-col items-center justify-center overflow-hidden">
                      <div className="mb-3">
                        <FlippingLogo />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900/80">
                        Puffed Rice
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-white/85">
                      Why shops choose us
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-white/80">
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>
                          Customers recognise and ask for the Sonar Bangla
                          brand.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>
                          Reliable, batch-consistent quality that cuts down
                          complaints.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>
                          Smooth to work with for wholesale, modern trade and
                          export.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-1 grid grid-cols-2 gap-3 text-[0.7rem] sm:text-xs text-white/80">
                    <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                      <div className="text-2xs uppercase tracking-[0.16em] text-white/60">
                        Available packs
                      </div>
                      <div className="mt-1 text-xs font-semibold text-white">
                        250g · 500g · 1kg
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                      <div className="text-2xs uppercase tracking-[0.16em] text-white/60">
                        Ideal buyer
                      </div>
                      <div className="mt-1 text-xs font-semibold text-white">
                        Distributors, wholesalers, grocery shops
                      </div>
                    </div>
                  </div>
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
