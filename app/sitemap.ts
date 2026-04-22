import { MetadataRoute } from "next";
import pricing from "../pricing.json";
import fs from "fs";
import path from "path";

const BASE_URL = "https://moriyamanaomi.com";

function getSubdirSlugs(segment: string): string[] {
  const dir = path.join(process.cwd(), "app", segment);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((name) =>
    fs.existsSync(path.join(dir, name, "page.tsx"))
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const services = pricing.map((service) => ({
    url: `${BASE_URL}/detail/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guides = getSubdirSlugs("guide").map((slug) => ({
    url: `${BASE_URL}/guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const compares = getSubdirSlugs("compare").map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...services,
    ...guides,
    ...compares,
  ];
}
