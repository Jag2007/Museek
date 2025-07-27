import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Search() {
  const [moods, setMoods] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const moodRes = await fetch(
          "https://mocki.io/v1/a1f73634-1271-4af4-939c-bded34204440"
        );
        const albumRes = await fetch(
          "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Cher&api_key=93103733c58ba7d7923970eaac3637e2&format=json"
        );

        if (!moodRes.ok || !albumRes.ok)
          throw new Error("Failed to fetch data");

        const moodData = await moodRes.json();
        const albumData = await albumRes.json();

        const topAlbums = albumData?.topalbums?.album || [];
        const formattedAlbums = topAlbums
          .map((album, index) => ({
            id: album.mbid || index,
            name: album.name,
            listeners: album.listeners,
            url: album.url,
          }))
          .slice(0, 12);

        setMoods(moodData);
        setAlbums(formattedAlbums);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const filteredMoods = moods.filter((mood) =>
    mood.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl animate-pulse gap-2">
        <span>🎶</span> Loading search results...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 text-xl gap-2">
        <span>❌</span> {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#121826] text-white">
      <Nav />
      <div className="px-4 sm:px-6 lg:px-8 pt-10">
        <input
          type="text"
          placeholder="Search moods or albums..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-2xl mx-auto block px-4 py-3 sm:py-4 rounded-lg bg-[#222733] text-gray-100 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
      </div>

      {/* Mood Playlists */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12">
        <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          🎤 Moods Matching
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredMoods.map((mood) => (
            <div
              key={mood.id}
              className="rounded-xl h-44 sm:h-48 bg-cover bg-center relative group transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#2a3142] hover:border-blue-500/50"
              style={{
                backgroundImage: `url(${mood.img})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/80 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-300">
                  {mood.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Albums */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          🔥 Cher Albums Matching
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAlbums.map((album) => (
            <a
              key={album.id}
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-[#1a1e2a] p-5 hover:bg-[#222733] transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 border border-[#2a3142] hover:border-blue-500/50"
            >
              <h3 className="text-lg font-semibold mb-2 truncate group-hover:text-blue-300">
                {album.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                👥 {album.listeners} listeners
              </p>
              <p className="text-blue-400 text-sm font-medium group-hover:text-blue-300 flex items-center gap-1">
                View on Last.fm
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </p>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
