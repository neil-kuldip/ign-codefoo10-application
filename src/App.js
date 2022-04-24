import React, { useState } from "react";
import Player from "./components/Player";
import './App.css';

const App = () => {

  const [urls, setUrls] = useState([]);

  return (
    <div className="App">
        <Player />
    </div>
  );
}

export default App;
