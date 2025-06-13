import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Profile() {
  const [moods, setMoods] = useState([]);
  const [recs, setRecs] = useState([]);
  const [tab, setTab] = useState("Overview");

  useEffect(() => {
    async function fetchData() {
      const moodRes = await fetch(
        "https://mocki.io/v1/72a1e5f5-e98a-4a1e-89bc-76f6299e9bd2"
      );
      const recRes = await fetch(
        "https://mocki.io/v1/acb7ed6b-40b0-4de8-b097-6df54ad962a1"
      );

      const moodData = await moodRes.json();
      const recData = await recRes.json();

      setMoods(moodData);
      setRecs(recData);
    }

    fetchData();
  }, []);

  const playlists = moods;
  const recent = recs.slice(0, 6);
  const artists = recs.slice(6, 12);

  const TabButton = ({ name }) => (
    <button
      onClick={() => setTab(name)}
      className={`pb-2 px-4 text-lg ${
        tab === name
          ? "border-b-2 border-purple-500 text-white"
          : "text-gray-400"
      }`}
    >
      {name}
    </button>
  );

  const Card = ({ img, title, sub }) => (
    <div className="bg-gray-800 rounded-xl p-3 hover:bg-gray-700 transition-all">
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

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Nav />

      <div className="p-6 flex flex-col items-center">
        <img
          src={recs[0]?.img}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-purple-500 mb-4"
        />
        <h1 className="text-3xl font-bold">Jahnavi</h1>
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
              <h2 className="text-xl font-bold mb-4 text-purple-400">
                Recently Played
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {recent.map((item, i) => (
                  <Card
                    key={i}
                    img={item.img}
                    title={item.title}
                    sub={item.artist}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-purple-400">
                Your Playlists
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {playlists.map((item, i) => (
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
              <h2 className="text-xl font-bold mb-4 text-purple-400">
                Following
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {artists.map((a, i) => (
                  <ArtistCard key={i} img={a.img} title={a.artist || a.title} />
                ))}
              </div>
            </div>
          </>
        )}

        {tab === "Playlists" && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-purple-400">
              Your Playlists
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {playlists.map((item, i) => (
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
            <h2 className="text-xl font-bold mb-4 text-purple-400">
              Recently Played
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {recent.map((item, i) => (
                <Card
                  key={i}
                  img={item.img}
                  title={item.title}
                  sub={item.artist}
                />
              ))}
            </div>
          </div>
        )}

        {tab === "Following" && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-purple-400">
              Following
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {artists.map((a, i) => (
                <ArtistCard key={i} img={a.img} title={a.artist || a.title} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
