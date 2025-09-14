import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Mainpage";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Playlists from "./pages/Playlists";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import BottomPlayer from "./components/BottomPlayer";

function App() {
  return (
    <MusicPlayerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/playlists" element={<Playlists />} />
        </Routes>
        <BottomPlayer />
      </BrowserRouter>
    </MusicPlayerProvider>
  );
}

export default App;
