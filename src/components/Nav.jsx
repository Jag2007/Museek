import { FaHome, FaSearch, FaList, FaUser } from "react-icons/fa";
import { FiLogIn, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogin() {
    navigate("/login");
    setMenuOpen(false);
  }
  function handleSearch() {
    navigate("/search");
    setMenuOpen(false);
  }
  function handleHome() {
    navigate("/home");
    setMenuOpen(false);
  }
  function handlePlaylist() {
    navigate("/playlists");
    setMenuOpen(false);
  }
  function handleProfile() {
    navigate("/profile");
    setMenuOpen(false);
  }

  return (
    <nav className="bg-[#0F172A] shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-pink-400 text-2xl font-bold">Museek</div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu - Hidden on small screens, visible on md+ */}
        <div className="hidden md:flex space-x-6 items-center text-white">
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-4 text-white md:hidden">
          <button
            className="flex items-center space-x-2 hover:text-pink-400"
            onClick={handleHome}
          >
            <FaHome />
            <span>Home</span>
          </button>
          <button
            className="flex items-center space-x-2 hover:text-pink-400"
            onClick={handleSearch}
          >
            <FaSearch />
            <span>Search</span>
          </button>
          <button
            className="flex items-center space-x-2 hover:text-pink-400"
            onClick={handlePlaylist}
          >
            <FaList />
            <span>Playlists</span>
          </button>
          <button
            className="flex items-center space-x-2 hover:text-pink-400"
            onClick={handleProfile}
          >
            <FaUser />
            <span>Profile</span>
          </button>
          <button
            onClick={handleLogin}
            className="flex items-center space-x-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            <FiLogIn />
            <span>Login</span>
          </button>
        </div>
      )}
    </nav>
  );
}
