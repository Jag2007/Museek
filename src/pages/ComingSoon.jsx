import { motion } from "framer-motion";
import StarfieldBackground from "../components/StarfieldBackground";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ComingSoon() {
  return (
    <>
      <Nav />
      <StarfieldBackground />
      <div className="min-h-[70vh] flex items-center justify-center px-6 text-white relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-400"
          >
            Coming Soon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 max-w-xl mx-auto"
          >
            We’re building this page. Check back shortly!
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  );
}
