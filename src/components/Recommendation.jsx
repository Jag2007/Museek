import AntiheroImg from "../Images/Antihero.jpg";
import BlindlightsImg from "../Images/Blindlights.jpeg";
import HappierImg from "../Images/Happier.jpeg";
import Way2sexyImg from "../Images/Way2sexy.jpg";

export default function Recommendation() {
  const items = [
    {
      title: "Anti-Hero",
      artist: "Taylor Swift",
      img: AntiheroImg,
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      img: BlindlightsImg,
    },
    {
      title: "Happier Than Ever",
      artist: "Billie Eilish",
      img: HappierImg,
    },
    { title: "Way 2 Sexy", artist: "Drake", img: Way2sexyImg },
  ];

  return (
    <div className="px-6 md:px-16 py-10  text-white">
      <h2 className="text-2xl font-bold mb-1">Recommended For You</h2>
      <p className="text-gray-400 mb-6">Based on your recent listening</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={index} className="cursor-pointer group">
            <div
              className="h-48 w-50 rounded-2xl overflow-hidden shadow-lg bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="mt-3">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-xs">{item.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
