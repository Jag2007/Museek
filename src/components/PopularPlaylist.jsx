import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMusicPlayer } from "../contexts/MusicPlayerContext";

export default function PopularPlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clickedPlaylist, setClickedPlaylist] = useState(null);
  const navigate = useNavigate();
  const { playSong, currentSong, isPlaying } = useMusicPlayer();

  useEffect(() => {
    // Static data for popular playlists
    const playlistData = [
      {
        id: "1",
        title: "Late Night Chill",
        img: "https://i.ytimg.com/vi/9r8VtP5kdoo/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEkgPihyMA8=&rs=AOn4CLC4fktL4paNiSOpIcHrTmYD87dMBQ",
        songs: 24,
      },
      {
        id: "2",
        title: "Moody Love",
        img: "https://cdn.esquireindia.co.in/article/-2024-12-04T11%3A09%3A49.258Z-LEAD_GettyImages-1283162436.jpg",
        songs: 28,
      },
      {
        id: "3",
        title: "Telugu Romance",
        img: "https://images.tv9telugu.com/wp-content/uploads/2024/09/romantic-movie-1.jpg",
        songs: 19,
      },
      {
        id: "4",
        title: "Dreamy Afternoons",
        img: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747446.jpg&fm=jpg",
        songs: 30,
      },
      {
        id: "5",
        title: "Focus Vibes",
        img: "https://photographers.lightrocket.com/_next/image?url=%2Fimg%2Fblog%2Ffocus-on-focus-between-quality-and-creativity%2FFocusOnFocus_Cover_Image_lIghtRocket_Blog-1536x1024.webp&w=3840&q=75",
        songs: 16,
      },
      {
        id: "6",
        title: "90s Nostalgia",
        img: "https://d1u6g1e1nisfhs.cloudfront.net/wp-content/uploads/articles-90s-look-sq.jpg",
        songs: 36,
      },
    ];

    try {
      setPlaylists(playlistData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSeeAll = () => {
    navigate("/playlists");
  };

  const handlePlaylistClick = (playlist) => {
    setClickedPlaylist(playlist.id);

    // Create a sample song for the playlist
    const sampleSong = {
      title: playlist.title,
      artist: "Various Artists",
      music: "/audio.mp3",
      img: playlist.img,
    };

    playSong(sampleSong);

    // Add visual feedback with a timeout
    setTimeout(() => {
      setClickedPlaylist(null);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="text-white px-6 py-10 text-center text-lg">
        Loading playlists...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 px-6 py-10 text-center text-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 py-10 text-white bg-[#0f172a] mt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl sm:text-3xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
            🫶🏻 Popular Playlists
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
            Popular choices of listeners
          </p>
        </div>
        <button
          onClick={handleSeeAll}
          className="text-sm text-blue-400 hover:underline cursor-pointer"
        >
          See all
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-6 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent pb-2 mt-5">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() => handlePlaylistClick(playlist)}
            className={`min-w-[120px] flex-shrink-0 group cursor-pointer relative transition-all duration-300 ${
              clickedPlaylist === playlist.id
                ? "transform scale-95 shadow-2xl"
                : "hover:scale-105"
            }`}
          >
            <div className="w-full h-[150px] rounded-xl overflow-hidden shadow-md relative">
              <img
                src={playlist.img}
                alt={playlist.title}
                className="w-full h-full object-cover transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x240/1a1e2a/ffffff?text=No+Image";
                }}
              />

              {/* Overlay with play button */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  {currentSong &&
                  currentSong.title === playlist.title &&
                  isPlaying ? (
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  ) : (
                    <div className="w-0 h-0 border-l-[4px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-1"></div>
                  )}
                </div>
              </div>

              {/* Click feedback overlay */}
              {clickedPlaylist === playlist.id && (
                <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                  <div className="text-white font-bold text-xs animate-pulse">
                    {currentSong &&
                    currentSong.title === playlist.title &&
                    isPlaying
                      ? "Playing..."
                      : "Paused"}
                  </div>
                </div>
              )}

              {/* Playing indicator */}
              {currentSong &&
                currentSong.title === playlist.title &&
                isPlaying && (
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                )}
            </div>

            <div className="mt-2">
              <h3
                className={`text-xs font-semibold truncate transition-colors ${
                  currentSong && currentSong.title === playlist.title
                    ? "text-blue-400"
                    : "group-hover:text-blue-300"
                }`}
              >
                {playlist.title}
              </h3>
              <p className="text-xs text-gray-400">{playlist.songs} songs</p>

              {/* Status indicator */}
              {currentSong && currentSong.title === playlist.title && (
                <p className="text-xs text-blue-400 mt-1 animate-pulse">
                  {isPlaying ? "Now Playing" : "Click to Play"}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
