import Image from "next/image";

const reviews = [
  {
    avatar: "/img/avatar1.webp",
    name: "Retailer",
    location: "Kolkata",
    relationship: "Partner for 5+ years",
    rating: 5,
    highlight: "Clean, stone-free muri that keeps customers coming back.",
    text: "We take muri from them since five years. Quality is good, no stone in muri. Customers are coming again and again. Delivery also good. When we call they are giving proper reply.",
  },
  {
    avatar: "/img/avatar2.webp",
    name: "Distributor",
    location: "Bardhaman",
    relationship: "Supplying multiple cities",
    rating: 5,
    highlight:
      "Fresh, well-packed muri with FSSAI that we trust for wholesale.",
    text: "Best muri in our area. We are supplying to many cities. Sonar Bangla muri is always good—fresh packet, good packing. FSSAI also there. We are trusting this name for wholesale.",
  },
  {
    avatar: "/img/avatar1.webp",
    name: "Local buyer",
    location: "Durgapur",
    relationship: "Family regular for factory purchase",
    rating: 5,
    highlight:
      "Crisp, aromatic muri our family loves for jhalmuri and breakfast.",
    text: "When we go Galsi we are buying from factory—packet and loose both. Muri is crisp, tasty and fresh. Family is liking very much for jhalmuri and morning. Trip is worth.",
  },
];

export default function Reviews() {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="w-[90%] md:w-[90%] max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-accent text-3xl md:text-4xl m-0 font-semibold">
            Customer reviews
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Stories from retailers, distributors, and families who trust Sonar
            Bangla muri every day for reliability, taste, and quality.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <article
              key={`${r.name}-${r.location}-${r.text.slice(0, 24)}`}
              className="group relative h-full rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/15 via-background/60 to-background/90 shadow-[0_24px_60px_rgba(0,0,0,0.55)] overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-amber-300 to-accent" />

              <div className="relative flex h-full flex-col p-6 pt-7">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-accent/60 shadow-[0_0_0_4px_rgba(0,0,0,0.6)]">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-accent">
                      {r.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {r.location}
                    </p>
                  </div>

                  <div className="ml-1 flex flex-col items-end gap-1">
                    <div className="flex items-center gap-0.5 text-amber-300">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={`${r.name}-${r.location}-star-${i}`}
                          className={`text-xs ${
                            i >= r.rating ? "opacity-30" : ""
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] font-medium text-muted-foreground">
                      {r.rating.toFixed(1)} / 5
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm font-semibold text-gray-100">
                  “{r.highlight}”
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {r.text}
                </p>

                <div className="mt-5 flex items-center justify-between text-[11px] text-muted-foreground/80">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="uppercase tracking-[0.18em]">
                      Verified feedback
                    </span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
