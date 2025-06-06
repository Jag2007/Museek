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

  if (loading) return <div className="text-white px-6 py-10">Loading...</div>;
  if (error)
    return <div className="text-red-500 px-6 py-10">Error: {error}</div>;

  return (
    <div className="px-6 md:px-16 py-10 text-white">
      <h2 className="text-2xl font-bold mb-1">Recommended For You</h2>
      <p className="text-gray-400 mb-6">Based on your recent listening</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="cursor-pointer group">
            <div
              className="h-48 w-full rounded-2xl overflow-hidden shadow-lg bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
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
