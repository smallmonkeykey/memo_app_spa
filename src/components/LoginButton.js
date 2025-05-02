import { useContext } from "react";
import { LoginContext } from "./Context.js";
import "./LoginButton.css";

export default function LoginButton() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <button onClick={handleButtonClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
