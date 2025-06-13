export default function HomeImage() {
  return (
    <div className="bg-gradient-to-br from-[#001440] via-[#5f0466] to-[#1c052f] text-white p-8 rounded-2xl flex items-center justify-between max-w-6xl mx-auto mt-10 shadow-xl transition duration-300">
      <div className="max-w-md">
        <div className="mb-2">
          <button className="bg-[#5a189a] text-sm text-white px-3 py-1 rounded-full">
            ✨ New Feature
          </button>
        </div>
        <div className="text-3xl font-bold leading-snug mb-2">
          Discover music that matches your mood
        </div>
        <div className="text-sm text-purple-200 mb-4">
          Personalized recommendations based on your listening habits and
          preferences.
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Start Listening
        </button>
      </div>
      <div className="hidden md:block w-1/2">
        <img
          src="https://wallpapersok.com/images/hd/neon-music-art-elrh6xcvqpnv09d9.jpg"
          alt="concert"
          className="rounded-2xl object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
