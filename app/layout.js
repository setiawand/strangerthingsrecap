import "./globals.css";

export const metadata = {
  title: "Stranger Things - Sinopsis Tiap Season",
  description:
    "Rekap singkat tiap season Stranger Things untuk menyambut Season 5 di Netflix."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
