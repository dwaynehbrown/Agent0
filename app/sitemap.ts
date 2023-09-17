import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: "https://agent0.dwayne.fun",
      lastModified: new Date(),
    }
  ];
}
