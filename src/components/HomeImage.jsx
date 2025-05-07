import backgroundImg from "../Images/background.png";

export default function HomeImage() {
  return (
    <div className="bg-[#121826] text-white p-8 rounded-2xl flex items-center justify-between max-w-6xl mx-auto mt-10 shadow-lg">
      <div className="max-w-md">
        <div className="mb-2">
          <button className="bg-[#2f2f3a] text-sm text-white px-3 py-1 rounded-full">
            ✨ New Feature
          </button>
        </div>
        <div className="text-3xl font-bold leading-snug mb-2">
          Discover music that matches your mood
        </div>
        <div className="text-sm text-gray-300 mb-4">
          Personalized recommendations based on your listening habits and
          preferences.
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Start Listening
        </button>
      </div>
      <div className="hidden md:block w-1/2">
        <img
          src={backgroundImg}
          alt="concert"
          className="rounded-2xl object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
