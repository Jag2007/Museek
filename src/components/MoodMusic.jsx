import React, { useEffect, useState } from "react";

export default function MoodMusic() {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/f3ad07a2-adbb-4a25-ac2a-83b6982b8a82"
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
      <div className="text-white px-6 py-24 text-center text-xl animate-pulse flex items-center justify-center gap-2">
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
    <section className="px-6 md:px-16 py-10 text-white min-h-screen">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Browse by Mood</h2>
        <p className="text-sm text-gray-300">
          Find the perfect playlist for every mood or moment
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {moods.map((mood) => (
          <div
            key={mood.id}
            className="group rounded-2xl  p-5transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 border border-[#727272] hover:border-purple-500/50 relative overflow-hidden"
            style={{
              backgroundImage: `url(${
                mood.img || "https://via.placeholder.com/400x300?text=No+Image"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300" />
            <div className="relative z-10 mt-20">
              <h3 className="text-lg font-bold text-white drop-shadow-sm group-hover:text-purple-300 transition-colors pl-5">
                {mood.title}
              </h3>
              <p className="text-sm text-gray-300 pl-5 ">Feel the vibe 🎶</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
