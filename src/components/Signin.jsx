import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signin() {
  const navi = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleSignup() {
    if (name && email && pass) {
      alert("Signup successful 🎉");
      navi("/home");
    } else {
      alert("Please fill all fields");
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
        <h1 className="text-2xl font-bold text-center mb-4">
          Sign Up for Museek
        </h1>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-3 rounded bg-gray-700"
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={handleSignup}
          className="w-full p-2 rounded bg-pink-600 hover:bg-pink-700"
        >
          Sign Up
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
  );
}
