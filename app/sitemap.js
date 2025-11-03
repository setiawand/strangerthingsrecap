export default function sitemap() {
  const baseUrl = "https://strangerthingsrecap.vercel.app";
  const now = new Date();
  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0
    }
  ];
}