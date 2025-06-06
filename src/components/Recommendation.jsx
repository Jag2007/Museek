import React, { useEffect, useState } from "react";

export default function Recommendation() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/acb7ed6b-40b0-4de8-b097-6df54ad962a1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recommendations");
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading)
    return (
      <div className="text-white px-6 py-10 text-center text-lg">
        Loading recommendations...
      </div>
    );
  if (error)
    return (
      <div className="text-red-500 px-6 py-10 text-center text-lg">
        Error: {error}
      </div>
    );

  return (
    <div className="px-4 md:px-16 py-10 text-white">
      <h2 className="text-3xl font-extrabold mb-2 tracking-tight">
        🎧 Recommended For You
      </h2>
      <p className="text-gray-400 text-base mb-8">
        Based on your recent listening history
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-cover bg-center relative group-hover:shadow-2xl transition-all duration-300"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>

            <div className="mt-3 text-center">
              <h3 className="text-base font-semibold truncate">{item.title}</h3>
              <p className="text-gray-400 text-sm truncate">{item.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
