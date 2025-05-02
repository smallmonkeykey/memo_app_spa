import React from "react";
import Memo from "./components/Memo.js";
import { LoginProvider } from "./components/login-context.js";

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
