import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause, FaTimes, FaRedo } from "react-icons/fa";

export default function MoodMusic({ onSidebarToggle, searchTerm = "" }) {
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const audioRef = useRef(new Audio("/audio.mp3"));

  useEffect(() => {
    fetch("https://mocki.io/v1/a1f73634-1271-4af4-939c-bded34204440")
      .then((res) => res.json())
      .then(setMoods)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = moods.filter((mood) =>
    mood.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const playPause = async (mood, e) => {
    e.stopPropagation();
    const same = currentId === mood.id;
    audioRef.current.pause();
    if (!same) {
      audioRef.current.src = "/audio.mp3";
      audioRef.current.volume = 0.5;
      try {
        await audioRef.current.play();
        setCurrentId(mood.id);
        setIsPlaying(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      setCurrentId(null);
      setIsPlaying(false);
    }
  };

  const handleReplay = async () => {
    audioRef.current.currentTime = 0;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error(err);
    }
  };

  const openSidebar = (mood) => {
    setSelectedMood(mood);
    setShowSidebar(true);
    onSidebarToggle?.(true);
  };

  const closeSidebar = () => {
    setSelectedMood(null);
    setShowSidebar(false);
    onSidebarToggle?.(false);
  };

  const selectRecommendation = (mood) => {
    setSelectedMood(mood);
  };

  if (loading)
    return (
      <div className="text-white text-xl text-center py-20">
        🎵 Loading moods...
      </div>
    );
  if (error)
    return <div className="text-red-500 text-center py-20">❌ {error}</div>;

  return (
    <>
      <div className="px-6 md:px-16 py-10 bg-[#0f172a] text-white">
        <h2 className="text-3xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
          🎤 Mood Music
        </h2>
        <p className="text-gray-300 mb-10">Find your perfect mood</p>

        {searchTerm && filtered.length === 0 ? (
          <div className="text-center text-gray-400">
            No moods matching "{searchTerm}"
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((mood) => (
              <div
                key={mood.id}
                onClick={() => openSidebar(mood)}
                className="h-48 rounded-xl bg-cover bg-center relative group border border-[#2a3142] hover:border-blue-500/50 cursor-pointer"
                style={{ backgroundImage: `url(${mood.img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/80 to-transparent rounded-xl"></div>
                <button
                  onClick={(e) => playPause(mood, e)}
                  className="absolute top-4 right-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100"
                >
                  {currentId === mood.id && isPlaying ? (
                    <FaPause />
                  ) : (
                    <FaPlay />
                  )}
                </button>
                <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                  {mood.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showSidebar && selectedMood && (
        <div className="fixed top-16 right-0 w-80 h-full bg-[#1a1e2a] border-l border-[#2a3142] shadow-2xl z-40 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-bold">Mood Details</h2>
              <button
                onClick={closeSidebar}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <img
              src={selectedMood.img}
              alt={selectedMood.title}
              className="w-full h-60 object-cover rounded-lg mb-6"
            />

            <h3 className="text-white text-lg font-bold mb-4">
              {selectedMood.title}
            </h3>

            <div className="flex space-x-3 mb-6">
              <button
                onClick={(e) => playPause(selectedMood, e)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 py-3 rounded-lg flex items-center justify-center gap-2"
              >
                {currentId === selectedMood.id && isPlaying ? (
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
                className="bg-gray-600 hover:bg-gray-700 p-3 rounded-lg"
              >
                <FaRedo />
              </button>
            </div>

            <h4 className="text-white font-semibold mb-3">Similar Moods</h4>
            <div className="space-y-3">
              {moods
                .filter((m) => m.id !== selectedMood.id)
                .slice(0, 3)
                .map((mood) => (
                  <div
                    key={mood.id}
                    onClick={() => selectRecommendation(mood)}
                    className="flex items-center space-x-3 p-3 bg-[#222733] rounded-lg hover:bg-[#2a3142] cursor-pointer"
                  >
                    <img
                      src={mood.img}
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
      )}
    </>
  );
}
