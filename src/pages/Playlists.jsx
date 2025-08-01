import React, { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Playlists() {
  const [moods, setMoods] = useState([]);
  const [recs, setRecs] = useState([]);
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/audio.mp3"));

  useEffect(() => {
    (async () => {
      try {
        const [moodRes, recRes] = await Promise.all([
          fetch("https://mocki.io/v1/29d09cb5-1a41-47d0-809c-5aaf27afec63"),
          fetch("https://mocki.io/v1/29d09cb5-1a41-47d0-809c-5aaf27afec63"),
        ]);
        if (!moodRes.ok || !recRes.ok) throw new Error("API error");

        const moodJson = await moodRes.json();
        const recJson = await recRes.json();

        setMoods(moodJson);
        setRecs(recJson);
        setActive({ ...moodJson[0], type: "mood" });
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handlePlayPause = async () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = "/audio.mp3";
      audioRef.current.volume = 0.7;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

  if (loading)
    return <div className="text-white text-center p-10">Loading...</div>;
  if (error)
    return <div className="text-red-500 text-center p-10">Error: {error}</div>;

  const playlist =
    active.type === "mood"
      ? recs.find((r) => r.id === active.id) || { songs: [] }
      : recs.find((r) => r.id === active.id) || { songs: [] };

  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row bg-black text-white min-h-screen mt-8">
        <aside className="w-full md:w-1/4 p-4 space-y-4 bg-gray-900">
          <h2 className="text-lg font-bold mb-2">Your Playlists</h2>
          {[...moods, ...recs].map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setActive({
                  ...item,
                  type: moods.includes(item) ? "mood" : "rec",
                })
              }
              className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-800 transition ${
                active.id === item.id ? "bg-gray-800" : ""
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 object-cover rounded"
              />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-400">
                  {item.type === "mood" ? "Mood" : "Playlist"}
                </p>
              </div>
            </div>
          ))}
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center space-x-6">
            <img
              src={active.img}
              alt={active.title}
              className="w-48 h-48 object-cover shadow-lg rounded-md"
            />
            <div>
              <p className="uppercase text-sm text-gray-400">Playlist</p>
              <h1 className="text-4xl font-bold">{active.title}</h1>
              <p className="mt-2 text-gray-400">
                {playlist.songs?.length || 0} songs
              </p>
              <button
                onClick={handlePlayPause}
                className="mt-4 bg-blue-500 hover:bg-green-700 px-6 py-2 rounded-full font-medium transition"
              >
                {isPlaying ? "⏸ Pause" : "▶ Play"}
              </button>
            </div>
          </div>

          <div className="mt-8 bg-gray-900 rounded-md shadow-inner">
            <table className="w-full">
              <thead className="text-gray-400 uppercase text-sm border-b border-gray-700">
                <tr>
                  <th className="text-left p-4">#</th>
                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4">Artist</th>
                  <th className="text-left p-4">Duration</th>
                </tr>
              </thead>
              <tbody>
                {playlist.songs?.map((s, i) => (
                  <tr key={i} className="hover:bg-gray-800 transition">
                    <td className="p-4">{i + 1}</td>
                    <td className="p-4">{s.title}</td>
                    <td className="p-4 text-gray-300">{s.artist}</td>
                    <td className="p-4">{s.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Suggested for you
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {recs
              .filter((r) => r.id !== playlist.id)
              .slice(0, 8)
              .map((r) => (
                <div
                  key={r.id}
                  onClick={() => setActive({ ...r, type: "rec" })}
                  className="bg-gray-900 rounded-lg p-3 cursor-pointer hover:bg-gray-800 transition"
                >
                  <img
                    className="w-full h-40 object-cover rounded mb-3"
                    src={r.img}
                    alt={r.title}
                  />
                  <p className="font-semibold truncate">{r.title}</p>
                  <p className="text-sm text-gray-400 truncate">
                    {r.artist || r.title}
                  </p>
                </div>
              ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
