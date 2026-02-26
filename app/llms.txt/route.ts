import { site } from "@/lib/site";

export function GET() {
  const content = [
    `Site: ${site.name}`,
    `Company: ${site.company}`,
    `Domain: ${site.domain}`,
    `Canonical: ${site.url}/`,
    "",
    "Description: Premium FSSAI-approved puffed rice (muri) manufacturer based in Galsi, Purba Bardhaman, West Bengal, India, supplying bulk orders across India and the USA since 2009.",
    "",
    "Key facts:",
    "- Product: machine-made, pure, stone-free puffed rice (muri)",
    "- Location: Galsi Chowmatha, Galsi, Purba Bardhaman, West Bengal, India, 713406",
    "- Delivery: bulk orders across India and to the USA",
    "- Certifications: FSSAI-compliant production with strict hygiene standards",
    "",
    "Contact:",
    `- Email: ${site.email}`,
    `- Phone: ${site.phones.map((p) => p.display).join(", ")}`,
    `- Address: ${site.address.line1}, ${site.address.line2}, ${site.address.cityState} - ${site.address.pincode}`,
    "",
    `Sitemap: ${site.url}/sitemap.xml`,
  ].join("\n");

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

