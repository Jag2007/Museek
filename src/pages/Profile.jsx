import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Profile() {
  const [moods, setMoods] = useState([]);
  const [recs, setRecs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tab, setTab] = useState("Overview");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const moodRes = await fetch(
        "https://mocki.io/v1/67658375-141f-4f7b-9fa3-a38bd2797a61"
      );
      const recRes = await fetch(
        "https://mocki.io/v1/9034afa2-3893-4060-b694-7b09967b3792"
      );
      const followRes = await fetch(
        "https://mocki.io/v1/bb80d578-7d38-4f28-af49-7c4359a0fe75"
      );

      const moodData = await moodRes.json();
      const recData = await recRes.json();
      const followData = await followRes.json();

      setMoods(moodData);
      setRecs(recData);
      setArtists(followData);
    }

    fetchData();
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
      />
      <p className="text-white font-semibold truncate">{title}</p>
      <p className="text-sm text-gray-400">{sub}</p>
    </div>
  );

  const ArtistCard = ({ img, title }) => (
    <div className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700">
      <img src={img} alt={title} className="w-24 h-24 rounded-full mb-2" />
      <p className="text-white font-medium">{title}</p>
    </div>
  );

  const recent = recs.slice(0, 6);

  const handleRecentClick = (item) => {
    navigate("/playlists", { state: { selected: item } });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Nav />

      <div className="p-6 flex flex-col items-center">
        <img
          src={recs[0]?.img}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
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
