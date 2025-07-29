import { useNavigate } from "react-router-dom";

export default function HomeImage() {
  const navigate = useNavigate();

  const handleStartListening = () => {
    navigate("/playlists");
  };

  return (
    <div className="bg-[#1a1e2a] text-white p-6 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-14 mb-20 shadow-xl border border-[#2a3142] hover:border-blue-500/20">
      <div className="max-w-md mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-blue-400">
          Discover Music That Matches Your Mood
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Get personalized album recommendations tailored to your listening
          habits.
        </p>
        <button
          onClick={handleStartListening}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium"
        >
          Start Listening
        </button>
      </div>

      <div className="relative w-full md:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/80 to-transparent rounded-2xl"></div>
        <img
          src="https://wallpapersok.com/images/hd/neon-music-art-elrh6xcvqpnv09d9.jpg"
          alt="Neon concert scene"
          className="rounded-2xl object-cover h-64 sm:h-80 md:h-96 w-full"
        />
      </div>
    </div>
  );
}
