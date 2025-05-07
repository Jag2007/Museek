import Chill from "../Images/Chillvibes.jpg";
import WorkoutImg from "../Images/Workout.jpeg";
import DriveImg from "../Images/LateNights.jpg";

const playlists = [
  {
    title: "Chill Vibes",
    img: Chill,
    songs: 4,
  },
  {
    title: "Workout Mix",
    img: WorkoutImg,
    songs: 7,
  },
  {
    title: "Late Night Drive",
    img: DriveImg,
    songs: 6,
  },
];

export default function PopularPlaylist() {
  return (
    <div className="px-6 md:px-16 py-10 text-white bg-[#0f172a]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Playlists</h2>
        <a href="#" className="text-sm text-purple-400 hover:underline">
          See all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {playlists.map((playlist, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={playlist.img}
              alt={playlist.title}
              className="rounded-xl w-full h-48 object-cover"
            />
            <div className="mt-3">
              <h3 className="text-base font-semibold">{playlist.title}</h3>
              <p className="text-sm text-gray-400">{playlist.songs} songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
