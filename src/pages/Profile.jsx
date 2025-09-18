import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useMusicPlayer } from "../contexts/MusicPlayerContext";

export default function Profile() {
  const [moods, setMoods] = useState([]);
  const [recs, setRecs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tab, setTab] = useState("Overview");
  const { playSong } = useMusicPlayer();

  useEffect(() => {
    const moodData = [
      {
        id: 1,
        title: "Chill Vibes",
        img: "https://media.gq.com/photos/5e6a94d13926e00008848fba/16:9/w_5199,h_2924,c_limit/gq%20march%202020%20coronavirus%20Chill%20Things%20to%20Help%20You%20Calm%20Down.jpg",
      },
      {
        id: 2,
        title: "Party Time",
        img: "https://images.ctfassets.net/6gvyj3hhelpa/3TEm83WmmkomuVRye2pMH8/de05d20a1ea8e0eaba73f2cbe518ac52/Teen-party-with-confetti1920x1200.jpg?w=3840&q=75&fm=webp",
      },
      {
        id: 3,
        title: "Focus",
        img: "https://quotefancy.com/media/wallpaper/3840x2160/8045471-FOCUS-Wallpaper.jpg",
      },
      {
        id: 4,
        title: "Workout",
        img: "https://explosivewhey.com/cdn/shop/articles/best-workout-routine-for-gym-beginners-135325.png?v=1738755379&width=2048",
      },
      {
        id: 5,
        title: "Feel Good",
        img: "https://i1.sndcdn.com/artworks-000599283125-og8gpm-t1080x1080.jpg",
      },
      {
        id: 6,
        title: "Melancholy",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8woY4k_CNosDLlqQ1z4sFOAcXkshBaPggw&s",
      },
      {
        id: 7,
        title: "Late Night",
        img: "https://images.unsplash.com/photo-1639256029665-f0f603817412?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0ZSUyMG5pZ2h0fGVufDB8fDB8fHww",
      },
      {
        id: 8,
        title: "Dreamy Afternoons",
        img: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
      },
      {
        id: 9,
        title: "Moody Love",
        img: "https://cdn.esquireindia.co.in/article/-2024-12-04T11%3A09%3A49.258Z-LEAD_GettyImages-1283162436.jpg",
      },
      {
        id: 10,
        title: "Telugu Romance",
        img: "https://images.tv9telugu.com/wp-content/uploads/2024/09/romantic-movie-1.jpg",
      },
      {
        id: 11,
        title: "Late Night Chill",
        img: "https://i.ytimg.com/vi/9r8VtP5kdoo/hq720.jpg",
      },
      {
        id: 12,
        title: "Focus Vibes",
        img: "https://photographers.lightrocket.com/_next/image?url=%2Fimg%2Fblog%2Ffocus-on-focus-between-quality-and-creativity%2FFocusOnFocus_Cover_Image_lIghtRocket_Blog-1536x1024.webp&w=3840&q=75",
      },
      {
        id: 13,
        title: "90s Nostalgia",
        img: "https://d1u6g1e1nisfhs.cloudfront.net/wp-content/uploads/articles-90s-look-sq.jpg",
      },
    ];

    const recData = [
      {
        id: 1,
        title: "Late Night Chill",
        img: "https://i.ytimg.com/vi/9r8VtP5kdoo/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEkgPihyMA8=&rs=AOn4CLC4fktL4paNiSOpIcHrTmYD87dMBQ",
        songs: [
          { title: "After Dark", artist: "Mr.Kitty", time: "4:20" },
          { title: "Nightcall", artist: "Kavinsky", time: "4:30" },
          { title: "Sunset Lover", artist: "Petit Biscuit", time: "3:55" },
        ],
      },
      {
        id: 2,
        title: "Moody Love",
        img: "https://cdn.esquireindia.co.in/article/-2024-12-04T11%3A09%3A49.258Z-LEAD_GettyImages-1283162436.jpg",
        songs: [
          { title: "Earned It", artist: "The Weeknd", time: "4:38" },
          { title: "Ivy", artist: "Frank Ocean", time: "4:09" },
          { title: "All I Want", artist: "Kodaline", time: "5:05" },
        ],
      },
      {
        id: 3,
        title: "Telugu Romance",
        img: "https://images.tv9telugu.com/wp-content/uploads/2024/09/romantic-movie-1.jpg",
        songs: [
          { title: "Inkem Inkem", artist: "Sid Sriram", time: "3:51" },
          { title: "Samajavaragamana", artist: "Sid Sriram", time: "3:40" },
          { title: "Neeli Neeli Aakasam", artist: "Sid Sriram", time: "4:18" },
        ],
      },
      {
        id: 4,
        title: "Dreamy Afternoons",
        img: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747446.jpg&fm=jpg",
        songs: [
          { title: "Daydream", artist: "Lily Meola", time: "3:42" },
          { title: "Golden Hour", artist: "JVKE", time: "3:29" },
          { title: "Bloom", artist: "The Paper Kites", time: "3:20" },
        ],
      },
      {
        id: 5,
        title: "Focus Vibes",
        img: "https://photographers.lightrocket.com/_next/image?url=%2Fimg%2Fblog%2Ffocus-on-focus-between-quality-and-creativity%2FFocusOnFocus_Cover_Image_lIghtRocket_Blog-1536x1024.webp&w=3840&q=75",
        songs: [
          { title: "Intro", artist: "M83", time: "5:40" },
          { title: "Weightless", artist: "Marconi Union", time: "8:00" },
          { title: "Experience", artist: "Ludovico Einaudi", time: "5:30" },
        ],
      },
      {
        id: 6,
        title: "90s Nostalgia",
        img: "https://d1u6g1e1nisfhs.cloudfront.net/wp-content/uploads/articles-90s-look-sq.jpg",
        songs: [
          { title: "Wonderwall", artist: "Oasis", time: "4:18" },
          {
            title: "I Want It That Way",
            artist: "Backstreet Boys",
            time: "3:33",
          },
          { title: "My Heart Will Go On", artist: "Celine Dion", time: "4:40" },
        ],
      },
    ];

    const followData = [
      {
        img: "https://media.assettype.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F11%2F12%2Fdownload-2021-05-06t161334934-982994-1620297758-1049917-1636716655.png?w=undefined&auto=format%2Ccompress&fit=max",
        artist: "Arijit Singh",
      },
      {
        img: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-37198,resizemode-75,msid-118648354/magazines/panache/shreya-ghoshal-hacked-singer-issues-warning-against-spam-and-phishing-links-after-being-unable-to-log-into-account.jpg",
        artist: "Shreya Ghoshal",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Sid_Sriram.jpg",
        artist: "Sid Sriram",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfENiZDrOHTpKMDUQKaE693c0u39ABvf8P6NUSBDTcxuVvPvLlP_M8o6AZFeSnS51tdlW3rZXa30eZJomGQfoB9g",
        artist: "Anirudh Ravichander",
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3j8VT2TiGqU78RHu7fIZLdk7T_upvEdF1FKTfzVf7otMsIEOYpbpNzLHmpE22LKx1rm15wwNMivOBTCKmg6Te6w",
        artist: "Ritviz",
      },
    ];

    setMoods(moodData);
    setRecs(recData);
    setArtists(followData);
  }, []);

  const TabButton = ({ name }) => (
    <button
      onClick={() => setTab(name)}
      className={`pb-2 px-4 text-lg ${
        tab === name ? "border-b-2 border-blue-500 text-white" : "text-gray-400"
      }`}
    >
      {name}
    </button>
  );

  const Card = ({ img, title, sub, onClick }) => (
    <div
      className="bg-gray-800 rounded-xl p-3 hover:bg-gray-700 transition-all cursor-pointer"
      onClick={onClick}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-2"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/160x160/1a1e2a/ffffff?text=No+Image";
        }}
      />
      <p className="text-white font-semibold truncate">{title}</p>
      <p className="text-sm text-gray-400">{sub}</p>
    </div>
  );

  const ArtistCard = ({ img, title }) => (
    <div className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700">
      <img
        src={img}
        alt={title}
        className="w-24 h-24 rounded-full mb-2"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/96x96/1a1e2a/ffffff?text=No+Image";
        }}
      />
      <p className="text-white font-medium">{title}</p>
    </div>
  );

  const recent = recs.slice(0, 6);

  const handleRecentClick = (item) => {
    const sampleSong = {
      title: item.title,
      artist: item.artist || "Various Artists",
      music: "/audio.mp3",
      img: item.img,
    };

    playSong(sampleSong);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Nav />

      <div className="p-6 flex flex-col items-center">
        <img
          src={recs[0]?.img}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/128x128/1a1e2a/ffffff?text=Profile";
          }}
        />
        <h1 className="text-3xl font-bold">Jagruthi</h1>
        <p className="text-gray-400">@quirkymiss</p>
      </div>

      <div className="px-8 border-b border-gray-700 flex gap-6 justify-start">
        <TabButton name="Overview" />
        <TabButton name="Playlists" />
        <TabButton name="Recently Played" />
        <TabButton name="Following" />
      </div>

      <div className="p-8 grid grid-cols-1 gap-10">
        {tab === "Overview" && (
          <>
            <div>
              <h2 className="text-xl font-bold mb-4 text-blue-400">
                Recently Played
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {recent.map((item, i) => (
                  <Card
                    key={i}
                    img={item.img}
                    title={item.title}
                    sub={item.artist}
                    onClick={() => handleRecentClick(item)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-blue-400">
                Your Playlists
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {moods.map((item, i) => (
                  <Card
                    key={i}
                    img={item.img}
                    title={item.title}
                    sub="Playlist"
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-blue-400">
                Following
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {artists.map((a, i) => (
                  <ArtistCard key={i} img={a.img} title={a.artist} />
                ))}
              </div>
            </div>
          </>
        )}

        {tab === "Playlists" && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              Your Playlists
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {moods.map((item, i) => (
                <Card
                  key={i}
                  img={item.img}
                  title={item.title}
                  sub="Playlist"
                />
              ))}
            </div>
          </div>
        )}

        {tab === "Recently Played" && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              Recently Played
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {recent.map((item, i) => (
                <Card
                  key={i}
                  img={item.img}
                  title={item.title}
                  sub={item.artist}
                  onClick={() => handleRecentClick(item)}
                />
              ))}
            </div>
          </div>
        )}

        {tab === "Following" && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-400">Following</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {artists.map((a, i) => (
                <ArtistCard key={i} img={a.img} title={a.artist} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
