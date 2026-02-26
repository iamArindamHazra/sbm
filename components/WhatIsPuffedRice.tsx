import Image from "next/image";

export default function WhatIsPuffedRice() {
  return (
    <section id="know" className="py-24 overflow-x-hidden bg-background">
      <h2 className="font-display text-center text-accent text-3xl md:text-4xl m-0 font-semibold">
        What is puffed rice?
      </h2>
      <div className="w-[80%] max-w-6xl mx-auto mt-12">
        <div className="glass-dark p-8 md:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 lg:mr-8 lg:ml-4 text-gray-200">
              <p className="text-justify m-0">
                Puffed rice (Muri) is a light, crispy snack made by heating rice
                grains under controlled conditions. It is a staple breakfast and
                snack across the Indian subcontinent—from street vendors to home
                kitchens.
              </p>
              <h3 className="mt-4 mb-2 text-lg font-semibold text-accent">
                Nutritional value
              </h3>
              <p className="text-justify m-0">
                Muri is oil-free, low in fat, and naturally gluten-free. It is a
                good source of iron and dietary fibre, helps with digestion, and
                keeps you full without heavy calories—ideal for a healthy snack
                or light meal.
              </p>
              <h3 className="mt-4 mb-2 text-lg font-semibold text-accent">
                Did you know?
              </h3>
              <p className="text-justify m-0">
                Iconic street foods like &apos;Jhalmuri&apos; in Kolkata,
                &apos;Bhelpuri&apos; in Mumbai, and &apos;Churmuri&apos; in
                Bangalore are all made with puffed rice. Muri is loved by all
                ages and is a symbol of Bengal&apos;s food culture.
              </p>
            </div>
            <div className="flex-shrink-0 w-64 h-60 md:w-80 md:h-60 relative rounded-2xl overflow-hidden border border-white/10 shadow-neon-sm">
              <Image
                src="/img/jhalmuri.webp"
                alt="Jhalmuri"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
