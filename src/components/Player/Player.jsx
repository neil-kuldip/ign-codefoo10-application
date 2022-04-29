import { useState } from "react";
import ReactPlayer from "react-player";
import "../../index.css";

const PlayerComponent = (props) => {

  return (
    <div className="vidPlayer">
      <ReactPlayer 
        controls 
        url={props.vidUrl} 
      />
    </div>
    // <>
    //   <div className="player">
    //     <video poster="https://assets1.ignimgs.com/thumbs/userUploaded/2022/4/9/ignguideslego-star-wars-tssvideo-thumbnailall-datacard-locations-1649545586009_large.png"
    //     controls>
    //       <source
    //         src="https://assets14.ign.com/videos/zencoder/2022/04/11/1920/a3ac631fa370cf10f2c86b5aecd526cf-9000000-1649701464.mp4"
    //         type="video/mp4"
    //       />
    //     </video>
    //   </div>
    //   <div className="controls">
    //     <button className="play" data-icon="P" aria-label="play pause toggle" />
    //     <button className="stop" data-icon="S" aria-label="stop" />
    //     <div className="timer">
    //       <span aria-label="timer">00:00</span>
    //     </div>
    //     <button className="rwd" data-icon="B" aria-label="rewind" />
    //     <button className="fwd" data-icon="F" aria-label="fast forward" />
    //     Hi
    //   </div>
    // </>
  );
};

export default PlayerComponent;
