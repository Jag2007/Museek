import { useNavigate } from "react-router-dom";
import StarfieldBackground from "./StarfieldBackground";

export default function Main() {
  const navi = useNavigate();

  return (
    <>
      <StarfieldBackground />
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl font-bold text-purple-400 mb-2">Museek</h1>
        <p className="text-gray-300 mb-6">Your own music space. Enjoy!!</p>

        <div className="flex gap-4">
          <button
            onClick={() => navi("/login")}
            className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 transition duration-200"
          >
            Login
          </button>
          <button
            onClick={() => navi("/signup")}
            className="px-4 py-2 rounded bg-pink-600 hover:bg-pink-700 transition duration-200"
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
