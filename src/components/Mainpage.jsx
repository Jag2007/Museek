import { useNavigate } from "react-router-dom";

export default function Main() {
  const navi = useNavigate();

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
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(5px, -3px) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translate(-4px, 4px) scale(1);
            opacity: 0.7;
          }
          75% {
            transform: translate(3px, -2px) scale(1.2);
            opacity: 0.9;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
        }
      `}</style>

      <div className="background-stars">
        {[...Array(80)].map((_, i) => {
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
