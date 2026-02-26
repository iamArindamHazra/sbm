import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://banglamuri.in/",
      lastModified: new Date(),
    },
  ];
}
