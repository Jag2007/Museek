import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Playlists = () => {
  const playlist = {
    name: "Chill Vibes",
    description: "Relaxing songs to unwind",
    songs: [
      { title: "Anti-Hero", artist: "Taylor Swift", time: "3:20" },
      { title: "Happier Than Ever", artist: "Billie Eilish", time: "4:18" },
      { title: "Levitating", artist: "Dua Lipa", time: "3:23" },
      { title: "Save Your Tears", artist: "The Weeknd", time: "3:35" },
    ],
    suggestions: ["Workout Mix", "Late Night Drive"],
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row bg-slate-900 text-white min-h-screen mt-10">
        <aside className="w-full md:w-1/4 p-4 bg-slate-800">
          <h2 className="text-xl font-bold mb-4">Your Playlists</h2>

          <div className="space-y-3">
            <div className="bg-slate-700 p-3 rounded-md cursor-pointer font-semibold">
              Chill Vibes
              <p className="text-sm text-gray-300">4 songs</p>
            </div>
            <div className="p-3 cursor-pointer hover:bg-slate-700 rounded-md">
              Workout Mix
              <p className="text-sm text-gray-300">4 songs</p>
            </div>
            <div className="p-3 cursor-pointer hover:bg-slate-700 rounded-md">
              Late Night Drive
              <p className="text-sm text-gray-300">4 songs</p>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4 p-6">
          <h3 className="uppercase text-sm text-gray-400">Playlist</h3>
          <h1 className="text-3xl font-bold">{playlist.name}</h1>
          <p className="text-gray-300">{playlist.description}</p>
          <p className="text-sm text-gray-400 mt-1">
            {playlist.songs.length} songs • 14:36
          </p>

          <button className="mt-4 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-md text-white font-medium">
            ▶ Play All
          </button>

          <div className="mt-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700 text-gray-400">
                  <th className="py-2">#</th>
                  <th className="py-2">Title</th>
                  <th className="py-2 text-right">Time</th>
                </tr>
              </thead>
              <tbody>
                {playlist.songs.map((song, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2">
                      <strong>{song.title}</strong>
                      <div className="text-sm text-gray-400">{song.artist}</div>
                    </td>
                    <td className="py-2 text-right">{song.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mt-10 mb-4">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {playlist.suggestions.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 rounded-md hover:bg-slate-700 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Playlists;
