import HomeImage from "./HomeImage";
import MoodMusic from "./MoodMusic";
import Nav from "./NAv";
import PopularPlaylist from "./PopularPlaylist";
import Recommendation from "./Recommendation";
import TrendingNow from "./TrendingNow";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeImage />
      <MoodMusic />
      <Recommendation />
      <PopularPlaylist />
      <TrendingNow />
    </div>
  );
}
