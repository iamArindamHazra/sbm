import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-alt overflow-x-hidden">
      <h2 className="font-display text-center text-accent text-3xl md:text-4xl m-0 font-semibold">
        Who we are?
      </h2>
      <div className="w-[80%] max-w-6xl mx-auto mt-12">
        <div className="glass-dark p-8 md:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-shrink-0 w-64 h-60 md:w-80 md:h-60 relative rounded-2xl overflow-hidden border border-white/10 shadow-neon-sm order-2 lg:order-1">
              <Image
                src="/img/packet.webp"
                alt="Sonar Bangla Muri packet"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 lg:pl-8 text-gray-200">
              <p className="text-justify m-0">
                Sonar Bangla Muri, under Krishna Sagar Pvt. Ltd., is among the
                leading puffed rice manufacturers in India since October 2009.
                We make our products in West Bengal with care and deliver across
                India and to the USA—trusted by distributors and bulk buyers.
              </p>
              <h3 className="mt-4 mb-2 text-lg font-semibold text-accent">
                We maintain hygiene
              </h3>
              <p className="text-justify m-0">
                Our factory has over 20 trained employees. We follow strict
                hygiene: gloves, masks, and head caps are mandatory. Our
                processes are FSSAI compliant so you get safe, consistent
                quality every time.
              </p>
              <h3 className="mt-4 mb-2 text-lg font-semibold text-accent">
                Care for the environment
              </h3>
              <p className="text-justify m-0">
                We use pallet-based fuel in our production, which causes
                negligible air pollution compared to conventional fuels. Quality
                muri and a cleaner planet go hand in hand at Sonar Bangla Muri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
