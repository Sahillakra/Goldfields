import React from "react";
import "../Home/Style/Home.css";
import HomeQuote from "../HomeQuote/HomeQuote";
import Factors from "../Factors/Factors";
import Gallery from "../Gallery/Gallery";
import Video from "../VideoSection/Video";
import HousesGallery from "../HousesGallery/HousesGallery"
import Amenities from "../Amenities/Amenities";
import Footer from "../Footer/Footer";
import AmenitiesGallery from "../AmenitiesGallery/AmenitiesGallery";

const Home = () => {
  return (
    <>
    <div className="home-superContainer">
      <div className="home-container">
        <div className="homeUpper-section">
        <div className="homeLogo" >
            <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FGoldfieldsLogo.svg?alt=media&token=eec1cf03-d5c0-4a67-8312-9ded5a1b33f5"} alt="" />
            <p className="home-mainHead" >GOLDFIELDS NAVA INDIA</p>
          </div>
     
          
          {/* <div className="homeBookNow" > <img src={booknowHomeButton} alt="" /></div> */}
    
        </div>
         
        <div className="home-lowerSection">
            
                <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FhomeImage.svg?alt=media&token=83c3f937-3af6-4537-a890-8f84843f74e4"} alt="" />
           
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
