import { useNavigate } from "react-router-dom";
import Nav from "./NAv";

export default function Main() {
  const navi = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <div>
        <h1 className="text-4xl font-bold text-purple-400 mb-2">Museek</h1>
      </div>

      <p className="text-gray-300 mb-6">Your music space. Enjoy!!</p>

      <div className="flex gap-4">
        <button
          onClick={() => navi("/login")}
          className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700"
        >
          Login
        </button>
        <button
          onClick={() => navi("/signup")}
          className="px-4 py-2 rounded bg-pink-600 hover:bg-pink-700"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
