import React, { useState, useEffect } from "react";
import PlayerComponent from "./components/Player/Player";
import PlaylistComponent from "./components/Playlist/Playlist";
import "./App.css";
import jsonp from "jsonp";

const App = () => {
  const [vidData, setVidData] = useState([]);
  const [vidCount, setVidCount] = useState(0);
  const videosAPILink = "https://ign-apis.herokuapp.com/videos";
  const [currVidIndex, setCurrVidIndex] = useState(0);
  const [currVidUrl, setCurrVidUrl] = useState("");
  const [currVidThumbnail, setCurrVidThumbnail] = useState("");
  const [currVidId, setCurrVidId] = useState("");
  const [currVidDetails, setCurrVidDetails] = useState([]);

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
          console.log(response);
        }
      }
    });
  };

  //  Retrieves current video array element for player and queue content
  const getCurrentVid = () => {
    if (vidData.length > 0) {
      let index = currVidIndex % vidCount;
      setCurrVidUrl(vidData[index].assets.at(-1).url);
      setCurrVidThumbnail(vidData[index].thumbnails.at(-1).url);
      setCurrVidId(vidData[index].contentId);
      setCurrVidDetails(vidData[index].metadata);
    }
  };

  const setNextVid = () => {
    setCurrVidIndex(currVidIndex + 1);
    getCurrentVid();
  };

  const setPrevVid = () => {
    setCurrVidIndex(currVidIndex - 1);
    getCurrentVid();
  };

  const selectNextVid = (event) => {
    let index = -1;
    let counter = 0;
    vidData.forEach((vid) => {
      if (vid.contentId === event.contentId) {
        index = counter;
      }
      counter++;
    })
    setCurrVidIndex(index);
    getCurrentVid();
  };

  return (
    <div className="App">
      {currVidUrl.length > 0 ? (
        <PlayerComponent
          vidUrl={currVidUrl}
          vidThumbnail={currVidThumbnail}
          vidId={currVidId}
          setNextVid={setNextVid}
          setPrevVid={setPrevVid}
          vidDetails={currVidDetails}
        /> 
      ) : 
      <>Application Could Not Connect to IGN API</>}
      {currVidUrl.length > 0 ? (
        <PlaylistComponent 
          currVidId={currVidId}
          currVidDetails={currVidDetails}
          vidData={vidData}  
          selectNextVid={selectNextVid}  
        />
      ) 
      : <></> } 
      
    </div>
  );
};

export default App;
