import React, { useEffect, useState } from "react";

export default function TrendingNow() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/1da313f7-0bb1-4dc0-9895-ac4ef1b388e4"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch trending songs");
        }
        const data = await response.json();
        setSongs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  if (loading)
    return (
      <div className="text-white px-6 py-10 text-center text-lg">
        Loading trending songs...
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 px-6 py-10 text-center text-lg">
        Error: {error}
      </div>
    );

  return (
    <div className="px-6 md:px-16 py-10 text-white bg-[#0f172a]">
      <h2 className="text-2xl font-bold mb-1">Trending Now</h2>
      <p className="text-gray-400 text-sm mb-6">What's hot right now</p>

      <div className="space-y-4">
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={song.img}
                alt={song.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold">{song.title}</h3>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>{song.time}</span>
              <button className="hover:text-white">♡</button>
              <button className="hover:text-white">＋</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
