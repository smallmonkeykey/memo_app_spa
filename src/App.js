import React from "react";
import Memo from "./components/Memo.js";
import { useState } from "react";
import { LoginContext } from "./components/Context.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Memo />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
