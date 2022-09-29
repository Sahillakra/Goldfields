import React from "react";
import "./Video.css";
// import playButton from "./VideoContent/playButton.png"
const Video = () => {
  return (
    <>
        <div className="videoContent">
            {/* <img src={playButton} alt="" /> */}
          <video
            src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FVideo.mp4?alt=media&token=af409e05-1597-49ee-813a-6fa1fc0303e6"}
            autoPlay
            loop
            muted
            controls="controls"
            controlsList="nodownload" 
            // onclick="this.play()"
            
          ></video>
        </div>
    </>
  );
};

export default Video;
