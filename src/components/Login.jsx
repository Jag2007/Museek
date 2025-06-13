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
    <>
      <style>{`
        .background-stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at bottom, #1a1a2e 0%, #0f0f1f 100%);
          overflow: hidden;
          z-index: -1;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.8;
          animation: driftStar ease-in-out infinite;
        }

        @keyframes driftStar {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(5px, -3px) scale(1.1); opacity: 1; }
          50% { transform: translate(-4px, 4px) scale(1); opacity: 0.7; }
          75% { transform: translate(3px, -2px) scale(1.2); opacity: 0.9; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        }
      `}</style>

      <div className="background-stars">
        {[...Array(70)].map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const duration = 10 + Math.random() * 10;
          const delay = Math.random() * 10;
          const size = 1 + Math.random() * 2;

          return (
            <div
              key={i}
              className="star"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <div className="min-h-screen flex items-center justify-center text-white px-4">
        <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md z-10">
          <button
            onClick={() => navi("/")}
            className="text-purple-400 text-sm mb-4"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-center mb-4">
            Login to Museek
          </h1>
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
    </>
  );
}
