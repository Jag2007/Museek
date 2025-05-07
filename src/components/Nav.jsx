import { FaHome, FaSearch, FaList, FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0F172A] shadow-md">
      <div className="text-pink-400 text-2xl font-bold">Museek</div>

      <div className="flex space-x-6 items-center text-white">
        <button className="flex items-center space-x-1 hover:text-pink-400">
          <FaHome />
          <span>Home</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-pink-400">
          <FaSearch />
          <span>Search</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-pink-400">
          <FaList />
          <span>Playlists</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-pink-400">
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
