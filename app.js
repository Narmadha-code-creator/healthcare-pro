import React, { useState } from "react";
import Login from "./components/Login";
import Predictor from "./components/Predictor";

function App() {
  const [token, setToken] = useState(null);

  return token ? <Predictor token={token} /> : <Login setToken={setToken} />;
}

export default App;