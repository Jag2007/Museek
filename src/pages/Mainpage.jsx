import { useNavigate } from "react-router-dom";
import StarfieldBackground from "../components/StarfieldBackground";

export default function Main() {
  const navi = useNavigate();

  return (
    <>
      <StarfieldBackground />
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1e2a] p-8 sm:p-10 lg:p-12 rounded-2xl max-w-lg w-full z-10 shadow-2xl border border-[#2a3142] hover:border-blue-500/20 transition-all duration-300 text-center">
          <h1 className="text-5xl sm:text-4xl font-extrabold mb-4 text-blue-500 tracking-tight">
            Museek
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-md mx-auto">
            Discover and enjoy music tailored to your taste
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navi("/login")}
              className="px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Go to login page"
            >
              Login
            </button>
            <button
              onClick={() => navi("/signup")}
              className="px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Go to signup page"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
