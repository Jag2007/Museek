import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import LevitatingImg from "../Images/levitating.webp";
import LavenderImg from "../Images/lavender.jpeg";
import SaveTearsImg from "../Images/Blindlights.jpeg";
import NDAImg from "../Images/nda.jpeg";
import Way2sexyImg from "../Images/Way2sexy.jpg";
import WorkoutImg from "../Images/Workout.png";
import Billi from "../Images/Billi.jpg";
import Dua from "../Images/Dua.jpeg";
import Taylor from "../Images/Taylor.webp";
import Pro from "../Images/profile.jpg";
const userProfile = {
  name: "Jahnavi",
  username: "@quirkymiss",
  profilePicture: Pro,
  recentlyPlayed: [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      imageUrl: SaveTearsImg,
    },
    {
      title: "Way 2 Sexy",
      artist: "Drake",
      imageUrl: Way2sexyImg,
    },
    {
      title: "Lavender Haze",
      artist: "Taylor Swift",
      imageUrl: LavenderImg,
    },
  ],
  playlists: [
    {
      name: "Chill Vibes",
      imageUrl: LevitatingImg,
      songCount: 4,
    },
    {
      name: "Workout Mix",
      imageUrl: WorkoutImg,
      songCount: 4,
    },
    {
      name: "Late Night Drive",
      imageUrl: NDAImg,
      songCount: 4,
    },
  ],
  followedArtists: [
    {
      name: "Taylor Swift",
      imageUrl: Taylor,
      type: "Artist",
    },
    {
      name: "Billie Eilish",
      imageUrl: Billi,
      type: "Artist",
    },
    {
      name: "Dua Lipa",
      imageUrl: Dua,
      type: "Artist",
    },
  ],
};

const Profile = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Nav />
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 flex items-center">
        <img
          src={userProfile.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{userProfile.name}</h1>
          <p className="text-sm">{userProfile.username}</p>
        </div>
      </div>

      <div className="bg-gray-800 px-6 py-4">
        <div className="flex space-x-4">
          <button className="bg-gray-700 px-4 py-2 rounded">Overview</button>
          <button className="hover:bg-gray-700 px-4 py-2 rounded">
            Favorites
          </button>
          <button className="hover:bg-gray-700 px-4 py-2 rounded">
            Playlists
          </button>
          <button className="hover:bg-gray-700 px-4 py-2 rounded">
            Following
          </button>
          <button className="hover:bg-gray-700 px-4 py-2 rounded">
            Settings
          </button>
        </div>
      </div>

      <div className="bg-gray-900 px-6 py-6">
        <h2 className="text-xl font-semibold mb-4">Recently Played</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {userProfile.recentlyPlayed.map((song, index) => (
            <div key={index} className="bg-gray-800 rounded-md overflow-hidden">
              <img
                src={song.imageUrl}
                alt={song.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-bold">{song.title}</h3>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 px-6 py-6">
        <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {userProfile.playlists.map((playlist, index) => (
            <div key={index} className="bg-gray-800 rounded-md overflow-hidden">
              <img
                src={playlist.imageUrl}
                alt={playlist.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-bold">{playlist.name}</h3>
                <p className="text-sm text-gray-400">
                  {playlist.songCount} songs
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 px-6 py-6">
        <h2 className="text-xl font-semibold mb-4">Artists You Follow</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {userProfile.followedArtists.map((artist, index) => (
            <div key={index} className="bg-gray-800 rounded-md text-center p-4">
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
              />
              <h3 className="text-lg font-bold">{artist.name}</h3>
              <p className="text-sm text-gray-400">{artist.type}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
