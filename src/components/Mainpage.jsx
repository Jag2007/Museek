import React from "react";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navi = useNavigate();
  function handleCLikc() {
    navi("/login");
  }
  function handleSign() {
    navi("/signup");
  }
  return (
    <div>
      <h1 class="bg-sky-500 hover:bg-sky-700">This is your music space</h1>
      <h4>Enjoy !!</h4>
      <button class="bg-grey" onClick={handleCLikc}>
        Login
      </button>
      <button onClick={handleSign}>Signin</button>
    </div>
  );
}
