import Link from "next/link";

const cities = [
  "Galsi",
  "Bardhaman",
  "Durgapur",
  "Kolkata",
  "Bangalore",
  "Panagarh",
  "Jharkhand",
  "Bally",
  "Gangpur",
];

export default function Cities() {
  return (
    <section className="w-[90%] max-w-6xl mx-auto py-12 sm:py-24">
      <h2 className="font-display text-center text-accent text-3xl md:text-4xl m-0 font-semibold">
        We deliver across India & USA
      </h2>
      <p className="text-center text-gray-300 mt-3 m-0">
        Bulk delivery to these cities and more—we also ship to the USA
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {cities.map((city) => (
          <span
            key={city}
            className="px-5 py-2.5 rounded-xl glass text-gray-200 text-lg font-semibold border border-accent/30"
          >
            {city}
          </span>
        ))}
        <span className="px-5 py-2.5 rounded-xl glass text-gray-200 text-lg font-semibold border border-accent/30">
          USA
        </span>
      </div>
      <div className="text-center mt-12">
        <p className="m-0 mb-6 text-gray-300">Bulk orders & new dealerships</p>
        <Link href="#contact" className="btn-neon inline-block">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
