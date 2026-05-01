import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentLastUpdated = new Date("2026-04-30T00:00:00.000Z");

  return [
    {
      url: "https://www.cenotemaravilla.online/",
      lastModified: contentLastUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.cenotemaravilla.online/es/",
      lastModified: contentLastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.cenotemaravilla.online/habitaciones",
      lastModified: contentLastUpdated,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.cenotemaravilla.online/es/habitaciones",
      lastModified: contentLastUpdated,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.cenotemaravilla.online/reservar",
      lastModified: contentLastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.cenotemaravilla.online/cenotes-puerto-morelos",
      lastModified: contentLastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.cenotemaravilla.online/es/cenotes-puerto-morelos",
      lastModified: contentLastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.cenotemaravilla.online/tour-cenote-caballos",
      lastModified: contentLastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.cenotemaravilla.online/es/tour-cenote-caballos",
      lastModified: contentLastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
