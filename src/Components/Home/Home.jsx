import React from "react";
import "../Home/Style/Home.css";
import goldFieldLogo from "../Home/HomeImages/GoldfieldsLogo.svg"
import homeImage from "../Home/HomeImages/homeImage.svg"
import booknowHomeButton from './HomeImages/booknowHomeButton.svg'
import HomeQuote from "../HomeQuote/HomeQuote";
import Factors from "../Factors/Factors";
import Gallery from "../Gallery/Gallery";
import Video from "../VideoSection/Video";
import HousesGallery from "../HousesGallery/HousesGallery"
import Amenities from "../Amenities/Amenities";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import BookNow from "../BookNow/BookNow";
import Brouchure from "../Brouchure/Brouchure";
import AmenitiesGallery from "../AmenitiesGallery/AmenitiesGallery";

const Home = () => {
  return (
    <>
    <div className="home-superContainer">
      <div className="home-container">
        <div className="homeUpper-section">
        <div className="homeLogo" >
            <img src={goldFieldLogo} alt="" />
            <p className="home-mainHead" >GOLDFIELDS NAVA INDIA</p>
          </div>
     
          
          {/* <div className="homeBookNow" > <img src={booknowHomeButton} alt="" /></div> */}
    
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
    <HousesGallery/>
    <Amenities/>
    <AmenitiesGallery/>
    <Footer/>
    {/* <Brouchure/>
    <Contact/>
    <BookNow/> */}
    </>
  );
};

export default Home;
