import { useState } from "react";
import { Container } from "@mui/material";
import ReactPlayer from "react-player";
import "../../index.css";

const PlayerComponent = ({ vidUrl, vidThumbnail, vidId, setPrevVid, setNextVid }) => {
  return (
    <Container sx={{width: "100%", height: "100%"}}>
      <ReactPlayer
        className="react-player"
        key={vidId}
        url={vidUrl}
        light={vidThumbnail}
        playing
        controls
        loop={false}
        onEnded={setNextVid}
        // width="100%"
        // height="100%"
      />
    </Container>
  );
};

export default PlayerComponent;
