import SeasonCarousel from "./components/SeasonCarousel";

const seasons = [
  {
    title: "Season 1",
    era: "November 1983 • Hawkins, Indiana",
    synopsis:
      "Will Byers menghilang secara misterius, memaksa teman-temannya melakukan pencarian yang mempertemukan mereka dengan Eleven, seorang gadis dengan kekuatan telekinetik yang kabur dari laboratorium rahasia. Kota Hawkins menyadari keberadaan dunia paralel bernama Upside Down setelah makhluk Demogorgon menerobos ke dunia nyata.",
    image: "/posters/season1.jpg",
    trailer: "https://www.youtube.com/watch?v=qHRkh2wH39E"
  },
  {
    title: "Season 2",
    era: "Setahun kemudian",
    synopsis:
      "Will masih dihantui Upside Down sementara Hawkins terancam oleh Mind Flayer, entitas gelap yang menginginkan akses permanen ke dunia manusia. Eleven mempelajari masa lalunya dan menemukan \"keluarga\" baru, sementara portal Upside Down yang membesar memunculkan Demodog yang meneror kota.",
    image: "/posters/season2.jpg",
    trailer: "https://www.youtube.com/watch?v=NLIlbQQzn7o"
  },
  {
    title: "Season 3",
    era: "Musim panas Hawkins",
    synopsis:
      "Mall Starcourt menjadi pusat perlawanan baru saat ilmuwan Soviet mencoba membuka portal Upside Down. Eleven bersama gengnya harus menghentikan Mind Flayer yang kini memiliki host manusia, sementara Hopper dan Joyce menyelidiki konspirasi yang mengarah pada konflik besar di laboratorium rahasia bawah tanah.",
    image: "/posters/season3.jpg",
    trailer: "https://www.youtube.com/watch?v=y7nmoLQSGnk"
  },
  {
    title: "Season 4",
    era: "Dunia meluas",
    synopsis:
      "Hawkins diteror oleh Vecna, mantan subjek eksperimen yang kini menjadi penguasa Upside Down. Eleven berjuang memulihkan kekuatannya, sementara tim terbagi dalam misi lintas negara: Hawkins, California, dan penjara rahasia Soviet. Rahasia masa lalu Eleven terbongkar, memicu ancaman final terhadap dunia manusia.",
    image: "/posters/season4.jpg",
    trailer: "https://www.youtube.com/watch?v=mVsJXiI60a0"
  },
  {
    title: "Season 5",
    era: "Final Showdown • Segera hadir",
    synopsis:
      "Upside Down mulai melebur ke dunia nyata setelah serangan Vecna mengguncang Hawkins. Eleven, Mike, dan kawan-kawan menyatukan sekutu lama untuk pertempuran pamungkas yang akan menentukan nasib dunia manusia sekaligus menutup gerbang terakhir.",
    image: "/posters/season5.jpg",
    trailer: "https://www.youtube.com/watch?v=iKZyYdwS3Wg"
  }
];

export default function HomePage() {
  return (
    <main>
      <header>
        <h1>Stranger Things Season Recap</h1>
        <p>Sambut Season 5 di Netflix dengan rekap cepat sinopsis tiap season sebelumnya.</p>
      </header>

      <SeasonCarousel seasons={seasons} />

      <footer>
        Season 5 segera hadir — tetap waspada terhadap gerbang lain yang mungkin terbuka!
      </footer>
    </main>
  );
}
