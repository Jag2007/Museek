import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Mainpage";
import Login from "./components/Login";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
