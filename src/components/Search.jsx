import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Search() {
  const [moods, setMoods] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [moodRes, recRes] = await Promise.all([
          fetch("https://mocki.io/v1/72a1e5f5-e98a-4a1e-89bc-76f6299e9bd2"),
          fetch("https://mocki.io/v1/acb7ed6b-40b0-4de8-b097-6df54ad962a1"),
        ]);

        if (!moodRes.ok || !recRes.ok) throw new Error("Failed to fetch data");

        const moodData = await moodRes.json();
        const recData = await recRes.json();

        setMoods(moodData);
        setRecommendations(recData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const filteredMoods = moods.filter((mood) =>
    mood.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredRecs = recommendations.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return <div className="text-white text-center p-10">Loading...</div>;
  if (error)
    return <div className="text-red-500 text-center p-10">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      <div className="px-6 mt-10">
        <input
          type="text"
          placeholder="Search genres, moods, artists..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-xl mx-auto block px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Mood Playlists */}
      <div className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">🎧 Mood Playlists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {filteredMoods.map((mood) => (
            <div
              key={mood.id}
              className="rounded-xl overflow-hidden shadow-md bg-cover bg-center h-40 group relative transition-all duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${mood.img})` }}
            >
              <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-50 transition duration-300" />
              <div className="absolute bottom-3 left-3">
                <h3 className="text-white font-semibold drop-shadow">
                  {mood.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Picks */}
      <div className="px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6">🔥 Top Picks For You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {filteredRecs.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="rounded-xl overflow-hidden h-40 bg-cover bg-center relative shadow-md group-hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-base font-semibold truncate">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm truncate">{item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
