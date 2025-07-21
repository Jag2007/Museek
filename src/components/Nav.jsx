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
    <nav className="bg-[#1a1e2a] px-4 sm:px-6 lg:px-8 py-4 shadow-lg border-b border-[#2a3142] sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Museek
        </div>

        <button
          className="md:hidden text-white text-2xl p-2 rounded-full hover:bg-[#222733] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="hidden md:flex items-center space-x-8 text-gray-100">
          <button
            className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1"
            onClick={handleHome}
          >
            <FaHome className="w-5 h-5" />
            <span>Home</span>
          </button>
          <button
            className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1"
            onClick={handleSearch}
          >
            <FaSearch className="w-5 h-5" />
            <span>Search</span>
          </button>
          <button
            className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1"
            onClick={handlePlaylist}
          >
            <FaList className="w-5 h-5" />
            <span>Playlists</span>
          </button>
          <button
            className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1"
            onClick={handleProfile}
          >
            <FaUser className="w-5 h-5" />
            <span>Profile</span>
          </button>
          <button
            onClick={handleLogin}
            className="flex items-center space-x-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FiLogIn className="w-5 h-5" />
            <span>Login</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-3 text-gray-100 md:hidden animate-slide-in">
          <button
            className="flex items-center space-x-2 text-base font-semibold hover:text-blue-300 transition-colors py-2 px-3 rounded-lg hover:bg-[#222733] focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleHome}
          >
            <FaHome className="w-5 h-5" />
            <span>Home</span>
          </button>
          <button
            className="flex items-center space-x-2 text-base font-semibold hover:text-blue-300 transition-colors py-2 px-3 rounded-lg hover:bg-[#222733] focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleSearch}
          >
            <FaSearch className="w-5 h-5" />
            <span>Search</span>
          </button>
          <button
            className="flex items-center space-x-2 text-base font-semibold hover:text-blue-300 transition-colors py-2 px-3 rounded-lg hover:bg-[#222733] focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handlePlaylist}
          >
            <FaList className="w-5 h-5" />
            <span>Playlists</span>
          </button>
          <button
            className="flex items-center space-x-2 text-base font-semibold hover:text-blue-300 transition-colors py-2 px-3 rounded-lg hover:bg-[#222733] focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleProfile}
          >
            <FaUser className="w-5 h-5" />
            <span>Profile</span>
          </button>
          <button
            onClick={handleLogin}
            className="flex items-center space-x-2 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FiLogIn className="w-5 h-5" />
            <span>Login</span>
          </button>
        </div>
      )}
    </nav>
  );
}
