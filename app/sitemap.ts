import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://www.cenotemaravilla.online/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.cenotemaravilla.online/es/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.cenotemaravilla.online/habitaciones",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.cenotemaravilla.online/cenotes-puerto-morelos",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.cenotemaravilla.online/es/cenotes-puerto-morelos",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.cenotemaravilla.online/tour-cenote-caballos",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.cenotemaravilla.online/es/tour-cenote-caballos",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
