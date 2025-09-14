import React, { useEffect, useState } from "react";
import { FaPlay, FaPause, FaTimes, FaRedo } from "react-icons/fa";
import { useMusicPlayer } from "../contexts/MusicPlayerContext";

export default function MoodMusic({ onSidebarToggle, searchTerm = "" }) {
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const { playSong, currentSong, isPlaying } = useMusicPlayer();

  useEffect(() => {
    // Static data for mood music
    const musicData = [
      {
        id: "1",
        title: "Kesariya",
        artist: "Arijit Singh",
        img: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/arijit-singh-1048083-24-03-2017-18-02-00.jpg",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        id: "2",
        title: "Chaleya",
        artist: "Shilpa Rao",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy2dz4Is-u0gveo-GkrYOaFYbfW2xVT4Bjg&s",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      },
      {
        id: "3",
        title: "Pasoori",
        artist: "Ali Sethi",
        img: "https://www.beatcurry.com/wp-content/uploads/2021/12/Ali-Sethi-Thumbnail.jpg",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      },
      {
        id: "4",
        title: "Ranjha",
        artist: "B Praak",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfngW7SHaWq50VILST2ql5FVgfQnJTPLN38g&s",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      },
      {
        id: "5",
        title: "Makhna",
        artist: "Tanishk Bagchi",
        img: "https://cinetown.s3.ap-south-1.amazonaws.com/people/profile_img/1703164333.jpeg",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      },
      {
        id: "6",
        title: "Excuses",
        artist: "AP Dhillon",
        img: "https://imagesvs.oneindia.com/webp/img/2024/09/ap-dhillon-1725280142.jpg",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
      },
      {
        id: "7",
        title: "Lehanga",
        artist: "Jass Manak",
        img: "https://cdn-images.dzcdn.net/images/artist/4844200d1bbd953d966fbb906bbf2340/1900x1900-000000-80-0-0.jpg",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
      },
      {
        id: "8",
        title: "Naatu Naatu",
        artist: "Rahul Sipligunj",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4kqmH-jgB7VGhRTfGfdnkOmfJrnon0jZBQ&s",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
      },
      {
        id: "9",
        title: "Samajavaragamana",
        artist: "Sid Sriram",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Sid_Sriram.jpg",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
      },
      {
        id: "10",
        title: "Vaaste",
        artist: "Dhvani Bhanushali",
        img: "https://assets.entrepreneur.com/images/misc/1584192010_4.jpg?width=1000",
        music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      },
    ];

    try {
      setMoods(musicData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const filtered = moods.filter((mood) =>
    mood.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const playPause = async (mood, e) => {
    e.stopPropagation();
    const songWithImage = {
      ...mood,
      title: mood.title,
      artist: mood.artist,
      music: mood.music,
      img: mood.img,
    };
    playSong(songWithImage);
  };

  const openSidebar = (mood) => {
    setSelectedMood(mood);
    setShowSidebar(true);
    onSidebarToggle?.(true);
  };

  const closeSidebar = () => {
    setSelectedMood(null);
    setShowSidebar(false);
    onSidebarToggle?.(false);
  };

  const selectRecommendation = (mood) => {
    setSelectedMood(mood);
  };

  if (loading)
    return (
      <div className="text-white text-xl text-center py-20">
        🎵 Loading moods...
      </div>
    );
  if (error)
    return <div className="text-red-500 text-center py-20">❌ {error}</div>;

  return (
    <>
      <div className="px-6 md:px-16 py-10 bg-[#0f172a] text-white">
        <h2 className="text-3xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
          🎤 Mood Music
        </h2>
        <p className="text-gray-300 mb-10">Find your perfect mood</p>

        {searchTerm && filtered.length === 0 ? (
          <div className="text-center text-gray-400">
            No moods matching "{searchTerm}"
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((mood) => (
              <div
                key={mood.id}
                onClick={() => openSidebar(mood)}
                className="h-48 rounded-xl bg-cover bg-center relative group border border-[#2a3142] hover:border-blue-500/50 cursor-pointer"
                style={{ backgroundImage: `url(${mood.img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#121826]/80 to-transparent rounded-xl"></div>
                <button
                  onClick={(e) => playPause(mood, e)}
                  className="absolute top-4 right-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100"
                >
                  {currentSong &&
                  currentSong.title === mood.title &&
                  currentSong.artist === mood.artist &&
                  isPlaying ? (
                    <FaPause />
                  ) : (
                    <FaPlay />
                  )}
                </button>
                <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                  {mood.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showSidebar && selectedMood && (
        <div className="fixed top-16 right-0 w-80 h-full bg-[#1a1e2a] border-l border-[#2a3142] shadow-2xl z-40 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-bold">Mood Details</h2>
              <button
                onClick={closeSidebar}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <img
              src={selectedMood.img}
              alt={selectedMood.title}
              className="w-full h-60 object-cover rounded-lg mb-6"
            />

            <h3 className="text-white text-lg font-bold mb-2">
              {selectedMood.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              by {selectedMood.artist}
            </p>

            <div className="flex space-x-3 mb-6">
              <button
                onClick={(e) => playPause(selectedMood, e)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 py-3 rounded-lg flex items-center justify-center gap-2"
              >
                {currentSong &&
                currentSong.title === selectedMood.title &&
                currentSong.artist === selectedMood.artist &&
                isPlaying ? (
                  <>
                    <FaPause />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <FaPlay />
                    <span>Play</span>
                  </>
                )}
              </button>
            </div>

            <h4 className="text-white font-semibold mb-3">Similar Moods</h4>
            <div className="space-y-3">
              {moods
                .filter((m) => m.id !== selectedMood.id)
                .slice(0, 3)
                .map((mood) => (
                  <div
                    key={mood.id}
                    onClick={() => selectRecommendation(mood)}
                    className="flex items-center space-x-3 p-3 bg-[#222733] rounded-lg hover:bg-[#2a3142] cursor-pointer"
                  >
                    <img
                      src={mood.img}
                      alt={mood.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <h5 className="text-white font-medium">{mood.title}</h5>
                      <p className="text-gray-400 text-sm">{mood.artist}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
