import React from "react";
import { Box, Typography } from "@mui/material";

const VideoContentComponent = ({ vidDetails }) => {

  function getArticleDate(dateValue) {
    let articleDate = new Date(dateValue).toDateString();
    articleDate = [...articleDate.split(" ").slice(1,4)]
    let temp = articleDate[0];
    articleDate[0] = articleDate[1];
    articleDate[1] = temp;
    return articleDate.join(" ");
  }

  return (
    <Box
      sx={{
        mx: "3vw",
        mt: "2vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h8" fontWeight="bold" sx={{ mb: "1vh" }}>• {getArticleDate(vidDetails.publishDate)}</Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ mr: "5vw" }}>
        {vidDetails.title}
      </Typography>
      <Typography variant="h7" sx={{ mt: "1vh", mr: "3vw" }}>
        {vidDetails.description}
      </Typography>
    </Box>
  );
};

export default VideoContentComponent;
