import { useState } from "react";
import { Container } from "@mui/material";
import ReactPlayer from "react-player";
import VideoContentComponent from "../VideoContent/VideoContent";
import "../../index.css";

const PlayerComponent = ({
  vidUrl,
  vidThumbnail,
  vidId,
  setPrevVid,
  setNextVid,
  vidDetails,
}) => {
  return (
    <Container
      sx={{
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ml: "8vw",
      }}
    >
      <ReactPlayer
        className="react-player"
        key={vidId}
        url={vidUrl}
        //light={vidThumbnail}
        playing
        controls
        loop={false}
        onEnded={setNextVid}
        width="100%"
        height="100%"
      />
      <VideoContentComponent vidDetails={vidDetails} />
    </Container>
  );
};

export default PlayerComponent;
