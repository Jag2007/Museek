import { FaHome, FaSearch, FaList, FaUser, FaSignOutAlt } from "react-icons/fa";
import { FiLogIn, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import LogoutConfirmation from "./LogoutConfirmation";

export default function Nav() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
    setMenuOpen(false);
  };

  const handleLogoutConfirm = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setShowLogoutConfirmation(false);
    }
  };

  const handleLogoutCancel = () => {
    setShowLogoutConfirmation(false);
  };

  const handleProfile = () => {
    navigate("/profile");
    setMenuOpen(false);
  };

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

  if (loading) {
    return (
      <nav className="bg-[#1a1e2a] px-4 sm:px-6 lg:px-8 py-4 shadow-lg border-b border-[#2a3142] sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
            Museek
          </div>
          <div className="animate-pulse bg-gray-600 h-8 w-24 rounded"></div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="bg-[#1a1e2a] px-4 sm:px-6 lg:px-8 py-4 shadow-lg border-b border-[#2a3142] sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
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

            {user ? (
              <>
                <button
                  className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1"
                  onClick={handleProfile}
                >
                  <FaUser className="w-5 h-5" />
                  <span>{user.displayName || user.email}</span>
                </button>
                <button
                  onClick={handleLogoutClick}
                  className="flex items-center space-x-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <FaSignOutAlt className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center space-x-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <FiLogIn className="w-5 h-5" />
                <span>Login</span>
              </button>
            )}
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

            {user ? (
              <>
                <button
                  className="flex items-center space-x-2 text-base font-semibold hover:text-blue-300 transition-colors py-2 px-3 rounded-lg hover:bg-[#222733] focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={handleProfile}
                >
                  <FaUser className="w-5 h-5" />
                  <span>{user.displayName || user.email}</span>
                </button>
                <button
                  onClick={handleLogoutClick}
                  className="flex items-center space-x-2 text-base font-semibold text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <FaSignOutAlt className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center space-x-2 text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <FiLogIn className="w-5 h-5" />
                <span>Login</span>
              </button>
            )}
          </div>
        )}
      </nav>

      <LogoutConfirmation
        isVisible={showLogoutConfirmation}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </>
  );
}
