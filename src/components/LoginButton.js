import { useLogin } from "./login-context.js";
import "./LoginButton.css";

export default function LoginButton() {
  const { isLoggedIn, handleButtonClick } = useLogin();

  return (
    <button onClick={handleButtonClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
