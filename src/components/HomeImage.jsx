import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeImage() {
  const navigate = useNavigate();

  const handleStartListening = () => {
    navigate("/playlists");
  };

  return (
    <div className="bg-[#1a1e2a] text-white p-6 sm:p-10 lg:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-12 mb-16 shadow-2xl transition-all duration-300 border border-[#2a3142] hover:border-blue-500/20">
      <div className="max-w-md mb-8 md:mb-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-blue-400">
          Discover Music That Matches Your Mood
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-lg">
          Get personalized album recommendations tailored to your listening
          habits.
        </p>
        <button
          onClick={handleStartListening}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Start Listening
        </button>
      </div>
      <div className="relative w-full md:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/80 to-transparent rounded-2xl"></div>
        <img
          src="https://wallpapersok.com/images/hd/neon-music-art-elrh6xcvqpnv09d9.jpg"
          alt="Concert scene with vibrant neon lights"
          className="rounded-2xl object-cover h-64 sm:h-80 md:h-96 w-full"
        />
      </div>
    </div>
  );
}
