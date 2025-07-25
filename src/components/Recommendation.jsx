import React, { useEffect, useState } from "react";

export default function Recommendation() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await fetch(
          "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Cher&api_key=93103733c58ba7d7923970eaac3637e2&format=json"
        );
        if (!response.ok) throw new Error("Failed to fetch albums");

        const data = await response.json();
        const topAlbums = data?.topalbums?.album || [];

        const filteredAlbums = topAlbums
          .map((album, index) => ({
            id: album.mbid || index,
            name: album.name,
            listeners: album.listeners,
            url: album.url,
          }))
          .slice(0, 10);

        setAlbums(filteredAlbums);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopAlbums();
  }, []);

  if (loading)
    return (
      <div className="text-white px-6 py-24 text-center text-xl animate-pulse flex items-center justify-center gap-2">
        <span className="text-2xl">🎶</span> Fetching top albums for you...
      </div>
    );

  if (error)
    return (
      <div className="text-red-400 px-6 py-24 text-center text-xl flex items-center justify-center gap-2">
        <span className="text-2xl">❌</span> Error: {error}
      </div>
    );

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-16 text-white min-h-screen">
      <h2 className="text-3xl sm:text-3xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        🎧 Top Albums by Cher
      </h2>
      <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl">
        Discover the most popular albums by Cher, based on Last.fm data
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {albums.map((album) => (
          <a
            key={album.id}
            href={album.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-[#1a1e2a] p-5 hover:bg-[#222733] transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 border border-[#2a3142] hover:border-blue-500/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative text-xl font-semibold mb-3 truncate text-gray-100 group-hover:text-blue-300 transition-colors">
              {album.name}
            </div>
            <div className="relative text-gray-400 text-sm mb-4">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                {album.listeners} listeners
              </span>
            </div>
            <div className="relative text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors flex items-center gap-1">
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
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
