import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import StarfieldBackground from "../components/StarfieldBackground";
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Notification from "../components/Notification";

export default function Login() {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  async function handleLogin() {
    setError("");
    if (!email || !pass) {
      setError("Please enter email and password");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setNotificationMessage("Login successful! 🎉");
      setShowNotification(true);
      setTimeout(() => {
        navi("/home");
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setNotificationMessage(
        `Welcome, ${result.user.displayName || result.user.email}! 🎉`
      );
      setShowNotification(true);
      setTimeout(() => {
        navi("/home");
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <StarfieldBackground />
      <Notification
        message={notificationMessage}
        type="success"
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
      <div className="min-h-screen flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1e2a] p-8 sm:p-10 lg:p-12 rounded-2xl w-full max-w-lg z-10 shadow-2xl border border-[#2a3142] hover:border-blue-500/20 transition-all duration-300">
          <h1 className="text-4xl sm:text-4xl font-extrabold text-center mb-8 text-blue-500 tracking-tight">
            Login to Museek
          </h1>
          {error && (
            <div className="bg-red-500/90 text-white text-sm rounded-lg p-3 mb-6 text-center">
              {error}
            </div>
          )}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 p-4 mb-6 rounded-lg bg-[#222733] text-gray-100 font-semibold text-lg hover:bg-[#2a3142] hover:shadow-lg transition-all duration-300 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading}
            aria-label="Sign in with Google"
          >
            <FcGoogle className="w-6 h-6" />
            Sign in with Google
          </button>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 mb-4 rounded-lg bg-[#222733] text-gray-100 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-60"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={loading}
            aria-label="Email address"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 rounded-lg bg-[#222733] text-gray-100 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-60"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            disabled={loading}
            aria-label="Password"
          />
          <button
            onClick={handleLogin}
            className="w-full p-4 rounded-lg bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
          <p className="text-center text-base text-gray-300 mt-6">
            Don't have an account?{" "}
            <span
              onClick={() => navi("/signup")}
              className="text-blue-400 hover:text-blue-300 cursor-pointer hover:underline transition-colors"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
