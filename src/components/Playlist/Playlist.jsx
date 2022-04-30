import React, { useState } from "react";
import { Container, Typography, Divider, Button, Box } from "@mui/material";
import "../../index.css";

const PlaylistComponent = ({ currVidId, vidData, selectNextVid, currVidDetails }) => {
  const [showFullPlaylist, setShowFullPlaylist] = useState(false);

  const playlist = vidData.map((vid) => {
    if (vid.contentId !== currVidId) {
      let hours   = Math.floor(vid.metadata.duration / 3600); 
      let minutes = Math.floor((vid.metadata.duration - (hours * 3600)) / 60); 
      let seconds = vid.metadata.duration - (hours * 3600) - (minutes * 60); 

      let duration;
      if (minutes < 10) {minutes = "0" + minutes.toString();}
      if (seconds < 10) {seconds = "0" + seconds.toString();}

      if (hours > 0) {duration = `${hours}:${minutes}:${seconds}`;}
      else {duration = `${minutes}:${seconds}`;}
      
      return (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "space-between",
              mb: "2vh",
              mt: "2vh",
            }}
            onClick={() => selectNextVid(vid)}
          >
            <img src={vid.thumbnails.at(0).url} className="link"/>
            <span className="link_duration">{duration}</span>
            <Typography variant="h7" sx={{ mx: "1vw", "&:hover": { textDecoration: "underline" } }}>
              {vid.metadata.title}
            </Typography>
          </Box>
          <Divider variant="middle" />
        </Box>
      );
    }
  });

  return (
    <>
      <Container
        sx={{
          width: "32%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          {showFullPlaylist ? playlist : playlist.slice(0,5)}
          <Button
            onClick={() => {
              setShowFullPlaylist(!showFullPlaylist);
            }}
            sx={{ bgcolor: "#D51D29", color: "#FFF", width: "100%", mb: "2vh", "&:hover": {color: "#D51D29"} }}
          >
            {showFullPlaylist ? "Show Less" : "Load More"}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default PlaylistComponent;
