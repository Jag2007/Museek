import React from "react";
import { FaPlay, FaPause, FaStop, FaVolumeUp } from "react-icons/fa";
import { useMusicPlayer } from "../contexts/MusicPlayerContext";

export default function BottomPlayer() {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    stopSong,
  } = useMusicPlayer();

  if (!currentSong) return null;

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Song Info */}
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <img
            src={currentSong.img}
            alt={currentSong.title}
            className="w-12 h-12 rounded object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/48x48/1a1e2a/ffffff?text=No+Image";
            }}
          />
          <div className="min-w-0 flex-1">
            <h4 className="text-white font-semibold truncate">
              {currentSong.title}
            </h4>
            <p className="text-gray-400 text-sm truncate">
              {currentSong.artist}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors"
          >
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>

          <button
            onClick={stopSong}
            className="w-8 h-8 text-gray-400 hover:text-white transition-colors"
          >
            <FaStop size={12} />
          </button>

          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <FaVolumeUp size={12} />
            <span>70%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <div className="flex-1 bg-gray-700 rounded-full h-1">
              <div
                className="bg-blue-500 h-1 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
