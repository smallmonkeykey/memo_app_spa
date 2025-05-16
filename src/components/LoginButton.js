import { useLogin } from "../hooks/useLogin.js";

export default function LoginButton() {
  const { isLoggedIn, handleButtonClick } = useLogin();

  return (
    <button onClick={handleButtonClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
