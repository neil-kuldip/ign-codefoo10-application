import React, { useState, useEffect } from "react";
import PlayerComponent from "./components/Player/Player";
import "./App.css";
import jsonp from "jsonp";

const App = () => {
  const [vidData, setVidData] = useState([]);
  const [vidCount, setVidCount] = useState(0);
  const videosAPILink = "https://ign-apis.herokuapp.com/videos";
  const [currVidIndex, setCurrVidIndex] = useState(0);
  const [currVidUrl, setCurrVidUrl] = useState("");
  const [currVidThumbnail, setCurrVidThumbnail] = useState("");

  useEffect(() => {
    getVidData();
    getCurrentVid();
  });

  //  Retrieves IGN video playlist data using jsonp library for callback function
  const getVidData = async () => {
    await jsonp(videosAPILink, null, (error, response) => {
      if (error) {
        console.log(error.message);
      } else {
        if (vidData.length !== response.data.length) {
          setVidData(response.data);
          setVidCount(response.count);
        }
        console.log(response);
      }
    });
  };

  // Retrieves current video array element for player and queue content
  const getCurrentVid = () => {
    if (vidData.length > 0) {
      let index = currVidIndex % vidCount;
      setCurrVidUrl(vidData[index].assets.at(-1).url);
      setCurrVidThumbnail(vidData[index].thumbnails.at(-1).url);
    }
  };

  const setNextVid = () => {
    setCurrVidIndex(currVidIndex + 1);
  };

  const setPrevVid = () => {
    setCurrVidIndex(currVidIndex - 1);
  };

  return (
    <div className="App">
      <PlayerComponent vidUrl={currVidUrl} vidThumbnail={currVidThumbnail} setNextVid={setNextVid} setPrevVid={setPrevVid}/>
    </div>
  );
};

export default App;
