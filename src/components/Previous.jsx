import { useNavigate } from "react-router-dom";

export default function Prev() {
  const navi = useNavigate();
  function handlePRev() {
    navi("/");
  }
  return <button onClick={handlePRev}>Go Back</button>;
}
