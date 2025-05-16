import React from "react";
import Memo from "./components/Memo.js";
import { LoginProvider } from "./hooks/useLogin.js";

function App() {
  return (
    <div>
      <LoginProvider>
        <Memo />
      </LoginProvider>
    </div>
  );
}

export default App;
