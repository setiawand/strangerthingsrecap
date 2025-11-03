import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://strangerthingsrecap.vercel.app"),
  title: "Stranger Things - Sinopsis Tiap Season",
  description:
    "Rekap singkat tiap season Stranger Things untuk menyambut Season 5 di Netflix.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Stranger Things - Sinopsis Tiap Season",
    description:
      "Rekap singkat tiap season Stranger Things untuk menyambut Season 5 di Netflix.",
    url: "/",
    siteName: "Stranger Things Recap",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Stranger Things Recap"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stranger Things - Sinopsis Tiap Season",
    description:
      "Rekap singkat tiap season Stranger Things untuk menyambut Season 5 di Netflix.",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Stranger Things Recap",
              url: "https://strangerthingsrecap.vercel.app",
              inLanguage: "id-ID"
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
