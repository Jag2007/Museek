import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Mainpage";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Playlists from "./components/Playlists";

function App() {
  return (
    <>
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
      </BrowserRouter>
    </>
  );
}

export default App;
