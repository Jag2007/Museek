import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PopularPlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/a1f73634-1271-4af4-939c-bded34204440"
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

  const handleSeeAll = () => {
    navigate("/playlists");
  };

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
    <div className="px-6 md:px-16 py-10 text-white bg-[#0f172a] mt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl sm:text-3xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
            🫶🏻 Popular Playlists
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
            Popular choices of listeners
          </p>
        </div>
        <button
          onClick={handleSeeAll}
          className="text-sm text-blue-400 hover:underline cursor-pointer"
        >
          See all
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-6 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent pb-2 mt-5">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="min-w-[180px] flex-shrink-0 group cursor-pointer"
          >
            <div className="w-full h-[240px] rounded-xl overflow-hidden shadow-md">
              <img
                src={playlist.img}
                alt={playlist.title}
                className="w-70 h-100 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-sm font-semibold truncate">
                {playlist.title}
              </h3>
              <p className="text-sm text-gray-400">{playlist.songs} songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
