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
import RequireAuth from "./components/RequireAuth";
import ComingSoon from "./pages/ComingSoon";
import RevisitAnimator from "./components/RevisitAnimator";

function App() {
  return (
    <MusicPlayerProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RevisitAnimator path="/">
                <Main />
              </RevisitAnimator>
            }
          />
          <Route
            path="/login"
            element={
              <RevisitAnimator path="/login">
                <Login />
              </RevisitAnimator>
            }
          />
          <Route
            path="/signup"
            element={
              <RevisitAnimator path="/signup">
                <Signin />
              </RevisitAnimator>
            }
          />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <RevisitAnimator path="/home">
                  <Home />
                </RevisitAnimator>
              </RequireAuth>
            }
          />
          <Route
            path="/search"
            element={
              <RequireAuth>
                <RevisitAnimator path="/search">
                  <Search />
                </RevisitAnimator>
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <RevisitAnimator path="/profile">
                  <Profile />
                </RevisitAnimator>
              </RequireAuth>
            }
          />
          <Route
            path="/playlists"
            element={
              <RequireAuth>
                <RevisitAnimator path="/playlists">
                  <Playlists />
                </RevisitAnimator>
              </RequireAuth>
            }
          />
          <Route
            path="/coming-soon"
            element={
              <RevisitAnimator path="/coming-soon">
                <ComingSoon />
              </RevisitAnimator>
            }
          />
        </Routes>
        <BottomPlayer />
      </BrowserRouter>
    </MusicPlayerProvider>
  );
}

export default App;
