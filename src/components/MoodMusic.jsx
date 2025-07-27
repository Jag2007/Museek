import React, { useEffect, useState } from "react";

export default function MoodMusic() {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/a1f73634-1271-4af4-939c-bded34204440"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched moods data:", data);
        setMoods(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoods();
  }, []);

  if (loading) {
    return (
      <div className="text-white px-6 py-12 text-center text-xl animate-pulse flex items-center justify-center gap-2">
        <span className="text-2xl">🎵</span> Loading moods...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-400 px-6 py-24 text-center text-xl flex items-center justify-center gap-2">
        <span className="text-2xl">❌</span> Error: {error}
      </div>
    );
  }

  return (
    <section className="px-6 md:px-8 py-7 text-white mb-10">
      <div className="mb-2">
        <h2 className="text-3xl sm:text-3xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 ml-5">
          🎤 Browse by Mood
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl ml-5">
          Find the perfect playlist for every mood or moment
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 2xl:grid-cols-4 gap-4 ml-5">
        {moods.map((mood) => (
          <div
            key={mood.id}
            className="group rounded-xl h-60 p-5 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 border border-[#727272] hover:border-blue-300 relative overflow-hidden"
            style={{
              backgroundImage: `url(${
                mood.img || "https://via.placeholder.com/400x300?text=No+Image"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-300 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="absolute bottom-5 left-5 z-10">
              <h3 className="text-lg font-bold text-white drop-shadow-sm group-hover:text-blue-300 transition-colors">
                {mood.title}
              </h3>
              <p className="text-sm text-gray-300">Feel the vibe 🎶</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
