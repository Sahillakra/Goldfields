import React from "react";
import "./Video.css";
import VillaVideo from "./VideoContent/Video.mp4";
import playButton from "./VideoContent/playButton.png"
const Video = () => {
  return (
    <>

{/* <div className="videoContent">
    <video
      src={VillaVideo}
      autoPlay
      loop
      muted
    ></video>
  </div>
 */}



      <div
        // Transition

        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-once="true"
        className="backGround-video"
      >
        <div className="videoContent">
            {/* <img src={playButton} alt="" /> */}
          {/* <h1>“Enabling Future Through Modern Adaptive Technology”.</h1> */}
          <video
            src={VillaVideo}
            autoPlay
            loop
            muted
            controls="controls"
            // onclick="this.play()"
            
          ></video>
        </div>
      </div>
    </>
  );
};

export default Video;
