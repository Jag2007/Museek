import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause, FaTimes, FaRedo } from "react-icons/fa";

export default function MoodMusic({ onSidebarToggle, searchTerm = "" }) {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const audioRef = useRef(new Audio("/audio.mp3"));

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/a1f73634-1271-4af4-939c-bded34204440"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched moods data:", data);
        setMoods(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoods();
  }, []);

  // Filter moods based on search term
  const filteredMoods = moods.filter((mood) =>
    mood.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePlayPause = async (mood, e) => {
    e.stopPropagation();

    if (currentPlayingId === mood.id) {
      // Pause current audio
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentPlayingId(null);
    } else {
      // Stop any currently playing audio
      audioRef.current.pause();

      // Set new audio source and play
      audioRef.current.src = "/audio.mp3";
      audioRef.current.volume = 0.7;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setCurrentPlayingId(mood.id);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

  const handleReplay = async () => {
    audioRef.current.currentTime = 0;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Audio replay error:", err);
    }
  };

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    setShowSidebar(true);
    if (onSidebarToggle) {
      onSidebarToggle(true);
    }
  };

  const closeSidebar = () => {
    setShowSidebar(false);
    setSelectedMood(null);
    if (onSidebarToggle) {
      onSidebarToggle(false);
    }
  };

  const handleRecommendationClick = (mood) => {
    setSelectedMood(mood);
  };

  if (loading) {
    return (
      <div className="text-white px-6 py-12 text-center text-xl animate-pulse flex items-center justify-center gap-2">
        <span className="text-2xl">🎵</span> Loading moods...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 px-6 py-12 text-center text-xl flex items-center justify-center gap-2">
        <span className="text-2xl">❌</span> Error: {error}
      </div>
    );
  }

  return (
    <>
      <div className="px-6 md:px-16 py-10 text-white bg-[#0f172a]">
        <h2 className="text-3xl sm:text-3xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
          🎤 Mood Music
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl">
          Find your perfect mood
        </p>

        {searchTerm && filteredMoods.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No moods found matching "{searchTerm}"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredMoods.map((mood) => (
              <div
                key={mood.id}
                className="rounded-xl h-44 sm:h-48 bg-cover bg-center relative group transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#2a3142] hover:border-blue-500/50 cursor-pointer"
                style={{
                  backgroundImage: `url(${mood.img})`,
                }}
                onClick={() => handleMoodClick(mood)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/80 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                {/* Play Button */}
                <button
                  onClick={(e) => handlePlayPause(mood, e)}
                  className="absolute top-4 right-4 w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100"
                >
                  {currentPlayingId === mood.id && isPlaying ? (
                    <FaPause />
                  ) : (
                    <FaPlay />
                  )}
                </button>

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-300">
                    {mood.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar */}
      {showSidebar && selectedMood && (
        <div className="fixed top-16 right-0 w-80 h-full bg-[#1a1e2a] border-l border-[#2a3142] shadow-2xl z-40 overflow-y-auto">
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Mood Details</h2>
              <button
                onClick={closeSidebar}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <FaTimes size={20} />
              </button>
            </div>
            {/* Enlarged Image */}
            <div className="mb-6">
              <img
                src={
                  selectedMood.img ||
                  "https://via.placeholder.com/400x300?text=No+Image"
                }
                alt={selectedMood.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            {/* Mood Name */}
            <h3 className="text-xl font-bold text-white mb-4">
              {selectedMood.title}
            </h3>
            {/* Play Controls */}
            <div className="flex space-x-3 mb-6">
              <button
                onClick={(e) => handlePlayPause(selectedMood, e)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                {currentPlayingId === selectedMood.id && isPlaying ? (
                  <>
                    <FaPause />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <FaPlay />
                    <span>Play</span>
                  </>
                )}
              </button>
              <button
                onClick={handleReplay}
                className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors"
                title="Replay"
              >
                <FaRedo />
              </button>
            </div>
            {/* Recommendations */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Similar Moods
              </h4>
              <div className="space-y-3">
                {moods
                  .filter((mood) => mood.id !== selectedMood.id)
                  .slice(0, 3)
                  .map((mood) => (
                    <div
                      key={mood.id}
                      className="flex items-center space-x-3 p-3 bg-[#222733] rounded-lg cursor-pointer hover:bg-[#2a3142] transition-colors"
                      onClick={() => handleRecommendationClick(mood)}
                    >
                      <img
                        src={
                          mood.img ||
                          "https://via.placeholder.com/60x60?text=No+Image"
                        }
                        alt={mood.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <h5 className="text-white font-medium">{mood.title}</h5>
                        <p className="text-gray-400 text-sm">Similar vibe</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
