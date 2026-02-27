import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const products = [
  {
    name: "Laghu",
    image: "/img/laghu.webp",
    tagline: "Everyday standard puffed rice for families",
    grade: "Standard",
    packSizes: "1kg · 500g · 250g",
    points: [
      "Completely machine made & stone free",
      "Fresh, pure and consistently well puffed",
      "Light, crispy texture with long grains",
      "Ideal for daily snacks and home recipes",
    ],
  },
  {
    name: "Lalat",
    image: "/img/lalat.webp",
    tagline: "Extra-long, premium puffed rice for special mixes",
    grade: "Premium",
    packSizes: "1kg · 500g · 250g",
    points: [
      "Completely machine made & stone free",
      "Fresh, pure and extra well puffed",
      "Longer grains for a richer mouthfeel",
      "Perfect for Jhalmuri, Bhelpuri & export",
    ],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-12 sm:py-24 bg-gradient-to-br from-primary/30 via-background-muted to-primary/20 overflow-x-hidden"
      aria-labelledby="products-heading"
    >
      <div className="w-[90%] md:w-[90%] max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="products-heading"
            className="font-display text-accent text-3xl md:text-4xl m-0 font-semibold tracking-tight"
          >
            Our product range
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-100/80">
            Choose the right puffed rice grade for your business or home use.
            Both variants are FSSAI compliant, pure and carefully processed for
            consistent quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 justify-items-center">
          {products.map((product) => (
            <article
              key={product.name}
              className="group relative max-w-sm "
              aria-label={product.name}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.18)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(167,139,250,0.3)_0,_transparent_55%)] opacity-60 group-hover:opacity-100 blur-xl transition duration-500"
                aria-hidden
              />
              <div className="relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_18px_45px_rgba(15,10,30,0.95),0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(15,10,30,1),0_0_0_1px_rgba(255,255,255,0.08)]">
                <header className="px-6 pt-5 pb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-white font-semibold text-xl md:text-2xl tracking-wide m-0">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm text-gray-100/80">
                      {product.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-accent/80 bg-accent/20 px-3 py-1 text-[11px] md:text-xs font-semibold whitespace-nowrap uppercase tracking-widest text-accent">
                    {product.grade}
                  </span>
                </header>

                <div className="relative w-full aspect-[4/3] overflow-hidden border-y border-white/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="px-6 pt-5 pb-4 flex-1 flex flex-col">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-3">
                    Key benefits
                  </p>
                  <ul className="list-none p-0 m-0 space-y-2.5 text-sm md:text-base text-gray-100">
                    {product.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span
                          className="mt-[3px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent/25 text-accent shadow-neon-sm"
                          aria-hidden
                        >
                          <CheckCircleIcon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center justify-between text-xs md:text-sm text-gray-100/80">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="font-medium tracking-wide">
                        Pack sizes:
                      </span>
                    </span>
                    <span className="font-semibold">{product.packSizes}</span>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-1">
                  <Link
                    href="#contact"
                    className="btn-neon block w-full text-center py-3 text-sm md:text-base tracking-wide"
                  >
                    Enquire / Place order
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full pointer-events-none -z-0"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full block"
        >
          <path
            fill="#0f0a1e"
            fillOpacity={1}
            d="M0,96L60,117.3C120,139,240,181,360,202.7C480,224,600,224,720,229.3C840,235,960,245,1080,240C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none -z-0"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 250"
          className="w-full block"
        >
          <path
            fill="#1a1029"
            fillOpacity={1}
            d="M0,0L34.3,48C68.6,96,137,192,206,218.7C274.3,245,343,203,411,176C480,149,549,139,617,160C685.7,181,754,235,823,218.7C891.4,203,960,117,1029,106.7C1097.1,96,1166,160,1234,181.3C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
