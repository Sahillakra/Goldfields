import React from "react";
import "../Home/Style/Home.css";
import goldFieldLogo from "../Home/HomeImages/GoldfieldsLogo.svg"
import homeImage from "../Home/HomeImages/homeImage.svg"
import HomeQuote from "../HomeQuote/HomeQuote";
import Factors from "../Factors/Factors";
import Gallery from "../Gallery/Gallery";
import Video from "../VideoSection/Video";

const Home = () => {
  return (
    <>
    <div className="home-superContainer">
      <div className="home-container">
          <div className="homeLogo" >
            <img src={goldFieldLogo} alt="" />
            <p className="home-mainHead" >GOLDFIELDS NAVA INDIA</p>
          </div>
        <div className="home-lowerSection">
            
                <img src={homeImage} alt="" />
           
        </div>
      </div>
    </div>
    <HomeQuote/>
    <Factors/>
    <Video/>
    <Gallery/>
    </>
  );
};

export default Home;
