import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "LAGHU",
    image: "/img/laghu.jpg",
    points: [
      "Completely Machine Made",
      "Fresh, Pure & Stone free",
      "Well Puffed",
      "Healthy & Tasty",
      "1kg, 500g, 250g Packets",
      "Long Grains",
    ],
  },
  {
    name: "LALAT",
    image: "/img/lalat.jpg",
    points: [
      "Completely Machine Made",
      "Fresh, Pure & Stone free",
      "Well Puffed",
      "Healthy & More Tasty",
      "1kg, 500g, 250g Packets",
      "Longer Grains",
    ],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-20 bg-gradient-to-br from-primary/30 via-background-muted to-primary/20 overflow-x-hidden"
    >
      <div className="w-[80%] max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 justify-items-center">
          {products.map((product) => (
            <div
              key={product.name}
              className="glass-dark overflow-hidden max-w-sm w-full flex flex-col rounded-2xl border border-white/10"
            >
              <h3 className="font-display text-white font-bold text-center py-5 m-0 text-xl tracking-wide">
                {product.name}
              </h3>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex-1">
                <ul className="list-none p-0 m-0 space-y-2 text-base text-gray-100">
                  {product.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="p-5">
                <Link
                  href="#contact"
                  className="btn-neon block w-full text-center"
                >
                  Buy Now
                </Link>
              </div>
            </div>
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
