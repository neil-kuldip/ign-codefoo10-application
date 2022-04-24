import React, { useState, useEffect } from "react";
import Player from "./components/Player";
import './App.css';
import jsonp from "jsonp";

const App = () => {

  const [videoData, setVideoData] = useState([]);
  const videosAPILink = "https://ign-apis.herokuapp.com/videos";

  useEffect(() => {
    getVideoData();
  }, [videoData]);

  const getVideoData = async () => {
    await jsonp(videosAPILink, null, (error, response) => {
      if (error) {
        console.log(error.message);
      }
      else {
        if (videoData.length != response.data.length) {
          setVideoData(response.data);
        }
        console.log(response);
      }
    });
  };

  return (
    <div className="App">
        <Player />
    </div>
  );
}

export default App;
