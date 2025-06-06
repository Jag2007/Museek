import React, { useEffect, useState } from "react";

export default function PopularPlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/212338fc-e551-4695-92c9-ded3ba4f9f22"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch playlists");
        }
        const data = await response.json();
        setPlaylists(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  if (loading) {
    return (
      <div className="text-white px-6 py-10 text-center text-lg">
        Loading playlists...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 px-6 py-10 text-center text-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 py-10 text-white bg-[#0f172a]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Playlists</h2>
        <a href="#" className="text-sm text-purple-400 hover:underline">
          See all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="cursor-pointer group transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={playlist.img}
                alt={playlist.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-base font-semibold">{playlist.title}</h3>
              <p className="text-sm text-gray-400">{playlist.songs} songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
