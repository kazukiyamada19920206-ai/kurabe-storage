import { MetadataRoute } from "next";
import pricing from "../pricing.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = pricing.map((service) => ({
    url: `https://moriyamanaomi.com/detail/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://moriyamanaomi.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...services,
  ];
}
