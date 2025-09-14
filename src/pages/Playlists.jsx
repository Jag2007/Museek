import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useMusicPlayer } from "../contexts/MusicPlayerContext";

export default function Playlists() {
  const [moods, setMoods] = useState([]);
  const [recs, setRecs] = useState([]);
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { playSong, currentSong, isPlaying } = useMusicPlayer();

  useEffect(() => {
    // Static data for playlists
    const playlistData = [
      {
        id: 1,
        title: "Late Night Chill",
        img: "https://i.ytimg.com/vi/9r8VtP5kdoo/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEkgPihyMA8=&rs=AOn4CLC4fktL4paNiSOpIcHrTmYD87dMBQ",
        songs: [
          {
            title: "After Dark",
            artist: "Mr.Kitty",
            time: "4:20",
            music: "/audio.mp3",
          },
          {
            title: "Nightcall",
            artist: "Kavinsky",
            time: "4:30",
            music: "/audio.mp3",
          },
          {
            title: "Sunset Lover",
            artist: "Petit Biscuit",
            time: "3:55",
            music: "/audio.mp3",
          },
        ],
      },
      {
        id: 2,
        title: "Moody Love",
        img: "https://cdn.esquireindia.co.in/article/-2024-12-04T11%3A09%3A49.258Z-LEAD_GettyImages-1283162436.jpg",
        songs: [
          {
            title: "Earned It",
            artist: "The Weeknd",
            time: "4:38",
            music: "/audio.mp3",
          },
          {
            title: "Ivy",
            artist: "Frank Ocean",
            time: "4:09",
            music: "/audio.mp3",
          },
          {
            title: "All I Want",
            artist: "Kodaline",
            time: "5:05",
            music: "/audio.mp3",
          },
        ],
      },
      {
        id: 3,
        title: "Telugu Romance",
        img: "https://images.tv9telugu.com/wp-content/uploads/2024/09/romantic-movie-1.jpg",
        songs: [
          {
            title: "Inkem Inkem",
            artist: "Sid Sriram",
            time: "3:51",
            music: "/audio.mp3",
          },
          {
            title: "Samajavaragamana",
            artist: "Sid Sriram",
            time: "3:40",
            music: "/audio.mp3",
          },
          {
            title: "Neeli Neeli Aakasam",
            artist: "Sid Sriram",
            time: "4:18",
            music: "/audio.mp3",
          },
        ],
      },
      {
        id: 4,
        title: "Dreamy Afternoons",
        img: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747446.jpg&fm=jpg",
        songs: [
          {
            title: "Daydream",
            artist: "Lily Meola",
            time: "3:42",
            music: "/audio.mp3",
          },
          {
            title: "Golden Hour",
            artist: "JVKE",
            time: "3:29",
            music: "/audio.mp3",
          },
          {
            title: "Bloom",
            artist: "The Paper Kites",
            time: "3:20",
            music: "/audio.mp3",
          },
        ],
      },
      {
        id: 5,
        title: "Focus Vibes",
        img: "https://photographers.lightrocket.com/_next/image?url=%2Fimg%2Fblog%2Ffocus-on-focus-between-quality-and-creativity%2FFocusOnFocus_Cover_Image_lIghtRocket_Blog-1536x1024.webp&w=3840&q=75",
        songs: [
          { title: "Intro", artist: "M83", time: "5:40", music: "/audio.mp3" },
          {
            title: "Weightless",
            artist: "Marconi Union",
            time: "8:00",
            music: "/audio.mp3",
          },
          {
            title: "Experience",
            artist: "Ludovico Einaudi",
            time: "5:30",
            music: "/audio.mp3",
          },
        ],
      },
      {
        id: 6,
        title: "90s Nostalgia",
        img: "https://d1u6g1e1nisfhs.cloudfront.net/wp-content/uploads/articles-90s-look-sq.jpg",
        songs: [
          {
            title: "Wonderwall",
            artist: "Oasis",
            time: "4:18",
            music: "/audio.mp3",
          },
          {
            title: "I Want It That Way",
            artist: "Backstreet Boys",
            time: "3:33",
            music: "/audio.mp3",
          },
          {
            title: "My Heart Will Go On",
            artist: "Celine Dion",
            time: "4:40",
            music: "/audio.mp3",
          },
        ],
      },
    ];

    try {
      setMoods(playlistData);
      setRecs(playlistData);
      setActive({ ...playlistData[0], type: "mood" });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSongClick = (song) => {
    const songWithImage = {
      ...song,
      img: active.img,
      title: song.title,
      artist: song.artist,
      music: song.music,
    };
    playSong(songWithImage);
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
      <div className="flex flex-col md:flex-row bg-black text-white min-h-screen mt-8 pb-20">
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
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/40x40/1a1e2a/ffffff?text=No+Image";
                }}
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
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/192x192/1a1e2a/ffffff?text=No+Image";
              }}
            />
            <div>
              <p className="uppercase text-sm text-gray-400">Playlist</p>
              <h1 className="text-4xl font-bold">{active.title}</h1>
              <p className="mt-2 text-gray-400">
                {playlist.songs?.length || 0} songs
              </p>
              <button
                onClick={() => {
                  if (playlist.songs && playlist.songs.length > 0) {
                    handleSongClick(playlist.songs[0]);
                  }
                }}
                className="mt-4 bg-blue-500 hover:bg-green-700 px-6 py-2 rounded-full font-medium transition"
              >
                ▶ Play Playlist
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
                {playlist.songs?.map((s, i) => {
                  const isCurrentSong =
                    currentSong &&
                    currentSong.title === s.title &&
                    currentSong.artist === s.artist;
                  return (
                    <tr
                      key={i}
                      className={`hover:bg-gray-800 transition cursor-pointer ${
                        isCurrentSong ? "bg-blue-900/30" : ""
                      }`}
                      onClick={() => handleSongClick(s)}
                    >
                      <td className="p-4">
                        {isCurrentSong && isPlaying ? (
                          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                        ) : (
                          i + 1
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <span
                            className={
                              isCurrentSong
                                ? "text-blue-400 font-semibold"
                                : "text-white"
                            }
                          >
                            {s.title}
                          </span>
                          {isCurrentSong && isPlaying && (
                            <span className="text-xs text-blue-400">
                              Now Playing
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-gray-300">{s.artist}</td>
                      <td className="p-4">{s.time}</td>
                    </tr>
                  );
                })}
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
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/160x160/1a1e2a/ffffff?text=No+Image";
                    }}
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
