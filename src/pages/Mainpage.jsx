import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StarfieldBackground from "../components/StarfieldBackground";

export default function Main() {
  const navi = useNavigate();

  return (
    <>
      <StarfieldBackground />
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#1a1e2a] p-8 sm:p-10 lg:p-12 rounded-2xl max-w-lg w-full z-10 shadow-2xl border border-[#2a3142] hover:border-blue-500/20 transition-all duration-300 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl sm:text-4xl font-extrabold mb-4 text-blue-500 tracking-tight"
          >
            Museek
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-md mx-auto"
          >
            Discover and enjoy music tailored to your taste
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navi("/login")}
              className="px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Go to login page"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navi("/signup")}
              className="px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Go to signup page"
            >
              Sign Up
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
