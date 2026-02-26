import { site } from "@/lib/site";
import LazyMap from "@/components/LazyMap";

export default function Contact() {
  const whatsappHref = site.social.find((s) => s.name === "WhatsApp")?.href;

  return (
    <section id="contact" className="py-20 bg-background-alt">
      <h2 className="font-display text-center text-accent text-3xl md:text-4xl m-0 font-semibold">
        Contact Us
      </h2>
      <p className="text-center mt-4 mb-12 text-gray-300 max-w-xl mx-auto">
        We take bulk orders only. For big orders, dealerships, or export (India
        & USA), get in touch—we can send samples if you want to try before
        ordering. For home use, buy directly from our factory or from nearby
        grocery shops that stock our products.
      </p>
      <div className="w-[80%] max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex-1 min-w-0 rounded-2xl overflow-hidden border border-white/10 shadow-glass">
          <LazyMap
            src={site.mapsEmbedUrl}
            title={`${site.name} location`}
            width={600}
            height={450}
            className="w-full"
          />
        </div>
        <div className="flex-1 glass-dark p-8 rounded-2xl border border-white/10">
          <h3 className="font-display font-bold text-accent uppercase mb-3 text-sm tracking-wider">
            FACTORY & OFFICE
          </h3>

          <p className="m-0 mb-6 text-gray-200 leading-relaxed">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.cityState}
            <br />
            {site.address.pincode}
          </p>
          {site.upcomingFactory && (
            <>
              <h3 className="font-display font-bold text-accent uppercase mb-3 text-sm tracking-wider">
                NEW FACTORY (OPENING SOON)
              </h3>
              <p className="m-0 mb-6 text-gray-200 leading-relaxed">
                {site.upcomingFactory.address.line1}
                <br />
                {site.upcomingFactory.address.cityState}
              </p>
            </>
          )}
          <h3 className="font-display font-bold text-accent uppercase mb-3 text-sm tracking-wider">
            CONTACT INFORMATION
          </h3>
          <p className="m-0 mb-2 text-gray-200">
            {site.phones.map((phone, i) => (
              <span key={phone.tel}>
                {i > 0 && ", "}
                <a
                  href={`tel:${phone.tel}`}
                  className="text-accent hover:text-neon transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-alt rounded"
                >
                  {phone.display}
                </a>
              </span>
            ))}
          </p>
          {site.phones[0]?.whatsapp && (
            <p className="m-0 mb-2">
              <a
                href={
                  whatsappHref ?? `https://wa.me/${site.phones[0].whatsapp}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-neon transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-alt rounded"
              >
                WhatsApp: {site.phones[0].display}
              </a>
            </p>
          )}
          <p className="m-0">
            <a
              href={`mailto:${site.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-neon transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-alt rounded"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
