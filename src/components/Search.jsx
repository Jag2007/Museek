import React from "react";
import Nav from "./Nav";
import ChillImg from "../Images/Chill.jpeg";
import EnergeticImg from "../Images/Energetic.png";
import FocusImg from "../Images/Focus.png";
import WorkoutImg from "../Images/Workout.png";
import Footer from "./Footer";

const categories = [
  {
    title: "Chill",
    img: ChillImg,
  },
  {
    title: "Energetic",
    img: EnergeticImg,
  },
  {
    title: "Focus",
    img: FocusImg,
  },
  {
    title: "Workout",
    img: WorkoutImg,
  },
];

const Search = () => {
  return (
    <div>
      <Nav />
      <div className="px-6 mt-10">
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search genres, artists, moods..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </div>
      <div className="px-6 py-10 mt-10">
        <h2 className="text-2xl font-bold text-white mb-6">Browse All</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
                {cat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
