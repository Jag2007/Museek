import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Search() {
  const [moods, setMoods] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "93103733c58ba7d7923970eaac3637e2";
    const BASE_URL = "https://api.example.com/v1";

    const fetchAllData = async () => {
      try {
        const [moodRes, recRes] = await Promise.all([
          fetch(`${BASE_URL}/moods?limit=20`, {
            headers: { Authorization: `Bearer ${API_KEY}` },
          }),
          fetch(`${BASE_URL}/recommendations?limit=20`, {
            headers: { Authorization: `Bearer ${API_KEY}` },
          }),
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
    return (
      <div className="min-h-screen flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="text-xl sm:text-2xl text-gray-100 flex items-center gap-2 animate-pulse">
          <span className="text-2xl sm:text-3xl">🎶</span> Loading...
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="text-xl sm:text-2xl text-red-400 flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">❌</span> Error: {error}
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#121826] text-white">
      <Nav />
      <div className="px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <input
          type="text"
          placeholder="Search genres, moods, artists..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-2xl mx-auto block px-4 py-3 sm:py-4 rounded-lg bg-[#222733] text-gray-100 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          aria-label="Search for genres, moods, or artists"
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          🎧 Mood Playlists
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {filteredMoods.map((mood) => (
            <div
              key={mood.id}
              className="rounded-xl overflow-hidden shadow-lg bg-cover bg-center h-44 sm:h-48 relative group transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#2a3142] hover:border-blue-500/50"
              style={{ backgroundImage: `url(${mood.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/80 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-300 transition-colors">
                  {mood.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          🔥 Top Picks For You
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {filteredRecs.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="rounded-xl overflow-hidden h-44 sm:h-48 bg-cover bg-center relative shadow-lg border border-[#2a3142] group-hover:border-blue-500/50"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/80 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-100 group-hover:text-blue-300 truncate transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 truncate">{item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
