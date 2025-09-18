import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import HomeImage from "../components/HomeImage";
import MoodMusic from "../components/MoodMusic";
import Nav from "../components/Nav";
import PopularPlaylist from "../components/PopularPlaylist";
import Recommendation from "../components/Recommendation";
import TrendingNow from "../components/TrendingNow";
import StarfieldBackground from "../components/StarfieldBackground";
export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const containerRef = useRef(null);
  const [pulseKey, setPulseKey] = useState(0);

  const handleSidebarToggle = (isOpen) => {
    setShowSidebar(isOpen);
  };

  useEffect(() => {
    function onRevisit() {
      setPulseKey((k) => k + 1);
    }
    window.addEventListener("home-revisit", onRevisit);
    return () => window.removeEventListener("home-revisit", onRevisit);
  }, []);

  return (
    <div>
      <StarfieldBackground />
      <Nav />
      <div
        ref={containerRef}
        key={pulseKey}
        className={`transition-all duration-300 ${
          showSidebar ? "mr-80" : ""
        } animate-[pulse_400ms_ease-out]`}
        style={{
          animationName: pulseKey ? "homeRevisitPulse" : undefined,
          animationDuration: pulseKey ? "400ms" : undefined,
        }}
      >
        <HomeImage />
        <MoodMusic onSidebarToggle={handleSidebarToggle} />
        <Recommendation />
        <PopularPlaylist />
        <TrendingNow />
        <Footer />
      </div>
    </div>
  );
}
