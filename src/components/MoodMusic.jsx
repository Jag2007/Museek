import React, { useState, useEffect } from "react";

export default function MoodMusic() {
  const [moods, setMoods] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/72a1e5f5-e98a-4a1e-89bc-76f6299e9bd2"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched moods data:", data); // Check what you get
        setMoods(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMoods();
  }, []);

  if (loading) {
    return (
      <div className="px-6 md:px-16 py-10 text-white text-center">
        Loading moods...
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 md:px-16 py-10 text-white text-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 py-10 text-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Browse by Mood</h2>
        <p className="text-sm text-gray-300">
          Find the perfect playlist for any moment
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {moods.map((mood) => (
          <div
            key={mood.id}
            className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 transform hover:scale-105 "
            style={{
              backgroundImage: `url(${
                mood.img || "https://via.placeholder.com/400x300?text=No+Image"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-opacity-25 group-hover:bg-opacity-50 transition duration-300" />
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
