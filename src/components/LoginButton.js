import { useLogin } from "../hooks/useLogin.js";

export default function LoginButton() {
  const { isLoggedIn, toggleIsLoggedIn } = useLogin();

  return (
    <button onClick={toggleIsLoggedIn}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
