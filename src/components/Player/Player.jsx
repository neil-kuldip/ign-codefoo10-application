import { useState } from "react";
import { Container } from "@mui/material";
import ReactPlayer from "react-player";
import "../../index.css";


const PlayerComponent = ({ vidUrl, vidThumbnail }) => {
  console.log(vidUrl);
  return (
    <Container sx={{width: "100%", height: "100%"}}>
      <ReactPlayer 
        url={vidUrl}
        light={vidThumbnail}
        playing
        controls
        // width="100%"
        // height="100%"
      />
    </Container>
  );
};

export default PlayerComponent;
