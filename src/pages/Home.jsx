import Footer from "../components/Footer";
import HomeImage from "../components/HomeImage";
import MoodMusic from "../components/MoodMusic";
import Nav from "../components/Nav";
import PopularPlaylist from "../components/PopularPlaylist";
import Recommendation from "../components/Recommendation";
import TrendingNow from "../components/TrendingNow";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeImage />
      <MoodMusic />
      <Recommendation />
      <PopularPlaylist />
      <TrendingNow />
      <Footer />
    </div>
  );
}
