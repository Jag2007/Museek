import { useState } from "react";
import Footer from "../components/Footer";
import HomeImage from "../components/HomeImage";
import MoodMusic from "../components/MoodMusic";
import Nav from "../components/Nav";
import PopularPlaylist from "../components/PopularPlaylist";
import Recommendation from "../components/Recommendation";
import TrendingNow from "../components/TrendingNow";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = (isOpen) => {
    setShowSidebar(isOpen);
  };

  return (
    <div>
      <Nav />
      <div
        className={`transition-all duration-300 ${showSidebar ? "mr-80" : ""}`}
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
