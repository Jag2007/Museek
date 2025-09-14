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
    // Static data for trending songs
    const trendingData = [
      {
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGcJrJCAoX_OsMuTOY8qb0H1SCephmGJRINBptCA7NJE8fTqQpN-NLe-FSZxNNddgGw_-p5QtmAxZ4_1Xk02PsXQ",
        title: "Espresso",
        artist: "Sabrina Carpenter",
        time: "2:55",
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7qCGuSNZwtVMgstLYYHY4YiQcrgL99VZtdwggDEvWUFfe25wa-JPselCzjF7y5cuu8p0Q-x1e7RxzpNf_XZaahw",
        title: "I Had Some Help",
        artist: "Post Malone, Morgan Wallen",
        time: "3:44",
      },
      {
        img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQQsaL6nLiqqlkEGDwkIGv75G-3auflf4qkH9wgY-KwGL4mZa1i0Ik05PtxXWC6bbmpRbsQbaBSTL0Ra1w",
        title: "Not Like Us",
        artist: "Kendrick Lamar",
        time: "4:31",
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTot_2nt2IYzwGxAWxfAjyKgVpySMWB5wqYRBrOUH_lxG0xBHO52fKJz584EXEZFjmGhfCz8n8s-yakaISpgJ2PkQ",
        title: "Birds of a Feather",
        artist: "Billie Eilish",
        time: "3:16",
      },
      {
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2025-02/250202-chappell-roan-ew-942p-a054b1.jpg",
        title: "Good Luck, Babe!",
        artist: "Chappell Roan",
        time: "4:09",
      },
    ];

    try {
      setSongs(trendingData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handlePlayPause = async (songId) => {
    if (currentPlayingId === songId && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentPlayingId(null);
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      }

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
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/48x48/1a1e2a/ffffff?text=No+Image";
                }}
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
