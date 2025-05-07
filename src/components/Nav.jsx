import { FaHome, FaSearch, FaList, FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  function handleSearch() {
    navigate("/search");
  }
  function handleHome() {
    navigate("/home");
  }
  function handlePlaylist() {
    navigate("/playlists");
  }
  function handleProfile() {
    navigate("/profile");
  }
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0F172A] shadow-md">
      <div className="text-pink-400 text-2xl font-bold">Museek</div>

      <div className="flex space-x-6 items-center text-white">
        <button
          className="flex items-center space-x-1 hover:text-pink-400"
          onClick={handleHome}
        >
          <FaHome />
          <span>Home</span>
        </button>
        <button
          className="flex items-center space-x-1 hover:text-pink-400"
          onClick={handleSearch}
        >
          <FaSearch />
          <span>Search</span>
        </button>
        <button
          className="flex items-center space-x-1 hover:text-pink-400"
          onClick={handlePlaylist}
        >
          <FaList />
          <span>Playlists</span>
        </button>
        <button
          className="flex items-center space-x-1 hover:text-pink-400"
          onClick={handleProfile}
        >
          <FaUser />
          <span>Profile</span>
        </button>
        <button
          onClick={handleLogin}
          className="flex items-center space-x-1 text-white bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
        >
          <FiLogIn />
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
}
