/**
 * Central config for site contact info, social links, domain, and metadata.
 * Edit this file to update links, emails, phones, and domain across the site.
 */

export const site = {
  /** Site name used in metadata, OG, footer, etc. */
  name: "Sonar Bangla Muri",

  /** Primary domain (no protocol). Used for metadataBase, canonical URLs, etc. */
  domain: "banglamuri.in",

  /** Full site URL */
  get url() {
    return `https://${this.domain}`;
  },

  /** Company / legal name */
  company: "Krishna Sagar Pvt. Ltd.",

  /** Primary contact email (used in Contact section, mailto links) */
  email: "contact@banglamuri.in",

  /** Secondary / alternate email (e.g. Gmail for social/footer) */
  emailAlt: "sonarbangla.galsi@gmail.com",

  /** Phone numbers (display + tel link). Use without country code for display. */
  phones: [
    { display: "9332957266", tel: "9332957266", whatsapp: "919332957266" },
    { display: "9832211901", tel: "9832211901" },
  ],

  /** Factory / office address lines */
  address: {
    line1: "Galsi Chowmatha, Galsi, Purba Bardhaman",
    line2: "Beside NH 19",
    cityState: "West Bengal, India",
    pincode: "713406",
  },

  /** Google Maps embed URL for the current factory */
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.259115985112!2d87.68204601428873!3d23.342625210149475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f82d426bf55f4b%3A0x2a035a141b20dcd6!2sSonar%20Bangla%20Muri%20Mill!5e0!3m2!1sen!2sin!4v1591424720319!5m2!1sen!2sin",

  /** New factory opening soon (set to null to hide from site) */
  upcomingFactory: {
    address: {
      line1: "Ura, Galsi, Purba Bardhaman",
      cityState: "West Bengal, India, 713406",
    },
  },

  /** Social / external links (footer, contact, etc.). WhatsApp href is derived from first phone. */
  get social() {
    const whatsappNumber = this.phones[0]?.whatsapp ?? "919332957266";
    return [
      {
        name: "Facebook",
        href: "https://www.facebook.com/sonarbanglamuri/",
        image: "/img/facebook.webp",
      },
      {
        name: "WhatsApp",
        href: `https://wa.me/${whatsappNumber}`,
        image: "/img/whatsapp.webp",
      },
      {
        name: "Gmail",
        href: `mailto:${this.emailAlt}`,
        image: "/img/gmail.webp",
      },
    ];
  },

  /** Developer / credits (footer) */
  credits: {
    name: "Arindam Hazra",
    url: "https://www.linkedin.com/in/iAmArindamHazra",
  },
};

export type SiteConfig = typeof site;
