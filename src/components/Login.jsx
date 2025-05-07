import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin() {
    if (email && pass) {
      alert("Login successful 🎉");
      navi("/home");
    } else {
      alert("Please enter email and password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md">
        <button
          onClick={() => navi("/")}
          className="text-purple-400 text-sm mb-4"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold text-center mb-4">Login to Museek</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded bg-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-gray-700"
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full p-2 rounded bg-purple-600 hover:bg-purple-700"
        >
          Sign In
        </button>
        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navi("/signup")}
            className="text-purple-400 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
