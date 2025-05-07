import LevitatingImg from "../Images/levitating.webp";
import LavenderImg from "../Images/lavender.jpeg";
import SaveTearsImg from "../Images/Blindlights.jpeg";
import NDAImg from "../Images/nda.jpeg";

const trendingSongs = [
  {
    title: "Levitating",
    artist: "Dua Lipa",
    time: "3:23",
    img: LevitatingImg,
  },
  {
    title: "Lavender Haze",
    artist: "Taylor Swift",
    time: "3:07",
    img: LavenderImg,
  },
  {
    title: "Save Your Tears",
    artist: "The Weeknd",
    time: "3:35",
    img: SaveTearsImg,
  },
  {
    title: "NDA",
    artist: "Billie Eilish",
    time: "3:18",
    img: NDAImg,
  },
];

export default function TrendingNow() {
  return (
    <div className="px-6 md:px-16 py-10 text-white bg-[#0f172a]">
      <h2 className="text-2xl font-bold mb-1">Trending Now</h2>
      <p className="text-gray-400 text-sm mb-6">What's hot right now</p>

      <div className="space-y-4">
        {trendingSongs.map((song, index) => (
          <div
            key={index}
            className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={song.img}
                alt={song.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold">{song.title}</h3>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>{song.time}</span>
              <button className="hover:text-white">♡</button>
              <button className="hover:text-white">＋</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
