import React from "react";
import "./Video.css";
import VillaVideo from "./VideoContent/Video.mp4";
import playButton from "./VideoContent/playButton.png"
const Video = () => {
  return (
    <>
        <div className="videoContent">
            {/* <img src={playButton} alt="" /> */}
          <video
            src={VillaVideo}
            autoPlay
            loop
            muted
            controls="controls"
            // onclick="this.play()"
            
          ></video>
        </div>
    </>
  );
};

export default Video;
