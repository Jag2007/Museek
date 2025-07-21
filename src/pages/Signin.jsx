import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StarfieldBackground from "../components/StarfieldBackground";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default function Signin() {
  const navi = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup() {
    setError("");
    if (!name || !email || !pass) {
      setError("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      await updateProfile(userCredential.user, { displayName: name });
      alert("Signup successful 🎉");
      navi("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignup() {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Signup successful 🎉");
      navi("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <StarfieldBackground />
      <div className="min-h-screen flex items-center justify-center text-white px-4">
        <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-md z-10 shadow-2xl border border-gray-700">
          <button
            onClick={() => navi("/")}
            className="text-purple-400 text-sm mb-4 hover:underline"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-extrabold text-center mb-6 text-purple-300 tracking-tight drop-shadow">
            Sign Up for Museek
          </h1>
          {error && (
            <div className="bg-red-500/80 text-white text-sm rounded p-2 mb-4 text-center animate-pulse">
              {error}
            </div>
          )}
          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-2 p-3 mb-6 rounded bg-white text-gray-800 font-semibold shadow hover:bg-gray-100 transition disabled:opacity-60"
            disabled={loading}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 48 48"
              className="inline-block"
            >
              <g>
                <path
                  fill="#4285F4"
                  d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.3 5.1 29.4 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c10.1 0 19-7.3 19-20 0-1.3-.1-2.7-.3-4z"
                />
                <path
                  fill="#34A853"
                  d="M6.3 14.7l7 5.1C15.1 17.1 19.2 14 24 14c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.3 5.1 29.4 3 24 3c-7.2 0-13.4 4.1-16.7 10.1z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 43c5.4 0 10.3-1.8 14.1-4.9l-6.5-5.3C29.8 36 24 36 24 36c-5.8 0-10.7-2.9-13.7-7.2l-7 5.4C6.6 39.1 14.1 43 24 43z"
                />
                <path
                  fill="#EA4335"
                  d="M44.5 20H24v8.5h11.7c-1.6 4.1-6.1 7.5-11.7 7.5-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.3 5.1 29.4 3 24 3c-7.2 0-13.4 4.1-16.7 10.1z"
                />
              </g>
            </svg>
            Sign up with Google
          </button>
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-600" />
            <span className="mx-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-600" />
          </div>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg placeholder-gray-400 transition"
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={loading}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg placeholder-gray-400 transition"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg placeholder-gray-400 transition"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            disabled={loading}
          />
          <button
            onClick={handleSignup}
            className="w-full p-3 rounded bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 font-bold text-lg shadow-lg transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navi("/login")}
              className="text-purple-400 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
