import { useEffect, useState } from "react";

export default function MoodMusic() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/0918b0d8-cc7d-407b-bc93-0016a3de76b3")
      .then((res) => res.json())
      .then((data) => setMoods(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <div className="px-6 md:px-16 py-10 text-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Browse by Mood</h2>
        <p className="text-sm text-gray-300">
          Find the perfect playlist for any moment
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {moods.map((mood, index) => (
          <div
            key={index}
            className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 transform hover:scale-105"
            style={{
              backgroundImage: `url(${mood.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300" />
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-lg font-bold text-white drop-shadow">
                {mood.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
