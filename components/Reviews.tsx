import Image from "next/image";

const reviews = [
  {
    avatar: "/img/avatar1.jpg",
    name: "Retailer, Kolkata",
    text: "We take muri from them since five years. Quality is good, no stone in muri. Customers are coming again and again. Delivery also good. When we call they are giving proper reply.",
  },
  {
    avatar: "/img/avatar2.jpg",
    name: "Distributor, Bardhaman",
    text: "Best muri in our area. We are supplying to many cities. Sonar Bangla muri is always good—fresh packet, good packing. FSSAI also there. We are trusting this name for wholesale.",
  },
  {
    avatar: "/img/avatar1.jpg",
    name: "Local buyer, Durgapur",
    text: "When we go Galsi we are buying from factory—packet and loose both. Muri is crisp, no bad smell. Family is liking very much for jhalmuri and morning. Trip is worth.",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-background">
      <h2 className="font-display text-center text-accent text-3xl md:text-4xl m-0 font-semibold">
        Customer reviews
      </h2>
      <div className="w-[80%] max-w-6xl mx-auto mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={`${r.name}-${r.text.slice(0, 24)}`}
              className="glass-dark rounded-2xl p-6 flex flex-col items-center text-center border border-accent/20"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-accent/40">
                <Image
                  src={r.avatar}
                  alt={r.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <p className="m-0 text-left text-gray-200">
                <span className="font-semibold block mb-2 text-accent">
                  {r.name}
                </span>
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
