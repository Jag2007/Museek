import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function TrendingNow() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const audioRef = useRef(new Audio("/audio.mp3"));

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/67658375-141f-4f7b-9fa3-a38bd2797a61"
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

  const handlePlayPause = async (songId) => {
    if (currentPlayingId === songId && isPlaying) {
      // Pause current song
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentPlayingId(null);
    } else {
      // Stop any currently playing song
      if (isPlaying) {
        audioRef.current.pause();
      }

      // Play new song
      audioRef.current.src = "/audio.mp3";
      audioRef.current.volume = 0.7;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setCurrentPlayingId(songId);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

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
      <h2 className="text-3xl sm:text-3xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
        Trending Now
      </h2>
      <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl">
        What's hot right now
      </p>

      <div className="space-y-4">
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-lg transition group"
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
              <button
                onClick={() => handlePlayPause(index)}
                className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                {currentPlayingId === index && isPlaying ? (
                  <FaPause size={12} />
                ) : (
                  <FaPlay size={12} />
                )}
              </button>
              <button className="hover:text-white">♡</button>
              <button className="hover:text-white">＋</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
