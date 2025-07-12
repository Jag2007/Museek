import React, { useEffect, useState, useRef } from "react";

export default function Recommendation() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playingId, setPlayingId] = useState(null);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/551be12f-036e-475f-bdbf-c5015549326a"
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

  const handlePlayPause = async (item) => {
    const audio = audioRef.current;

    try {
      if (playingId === item.id) {
        // Pause current song
        audio.pause();
        setPlayingId(null);
      } else {
        // Stop any currently playing audio
        audio.pause();

        // Set new audio source
        audio.src = item.music;
        audio.volume = 1.0; // Full volume
        audio.preload = "auto";

        // Add event listeners
        audio.onended = () => {
          setPlayingId(null);
        };

        audio.onerror = (e) => {
          console.error("Audio error:", e);
          setPlayingId(null);
        };

        // Load and play the audio
        await audio.load();
        await audio.play();
        setPlayingId(item.id);
      }
    } catch (err) {
      console.error("Audio playback error:", err);
      setPlayingId(null);
    }
  };

  if (loading)
    return (
      <div className="text-white px-6 py-10 text-center text-lg">
        Loading recommendations...
      </div>
    );
  if (error)
    return (
      <div className="text-red-500 px-6 py-10 text-center text-lg">
        Error: {error}
      </div>
    );

  return (
    <div className="px-4 md:px-16 py-10 text-white">
      <h2 className="text-3xl font-extrabold mb-2 tracking-tight">
        🎧 Recommended For You
      </h2>
      <p className="text-gray-400 text-base mb-8">
        Based on your recent listening history
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-cover bg-center relative group-hover:shadow-2xl transition-all duration-300"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>

            <div className="mt-3 flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-2">
                <div>
                  <h3 className="text-base font-semibold truncate">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm truncate">
                    {item.artist}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPause(item);
                  }}
                  className={`ml-2 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    playingId === item.id
                      ? "bg-pink-600 text-white shadow-lg"
                      : "bg-purple-500 text-white shadow-md"
                  }`}
                >
                  {playingId === item.id ? (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
