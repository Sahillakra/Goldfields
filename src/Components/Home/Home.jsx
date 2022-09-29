import React, { useState } from "react";
import "../Home/Style/Home.css";
import HomeQuote from "../HomeQuote/HomeQuote";
import Factors from "../Factors/Factors";
import Gallery from "../Gallery/Gallery";
import Video from "../VideoSection/Video";
import HousesGallery from "../HousesGallery/HousesGallery";
import Amenities from "../Amenities/Amenities";
import Footer from "../Footer/Footer";
import AmenitiesGallery from "../AmenitiesGallery/AmenitiesGallery";
import Contact from "../Contact/Contact";
import Brouchure from "../Brouchure/Brouchure";
import BookNow from "../BookNow/BookNow";

const Home = () => {
  const [showBookNow, setShowBookNow] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <div className="home-superContainer">
        <a href="https://wa.me/+919087856027" className="chat-icon" target="_blank" rel="noopener noreferrer" >
          <img
            src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2Ftest.webp?alt=media&token=b86b8647-5e02-488b-869b-3b6613747ff2"}
            alt=""
          />
        </a>
        <a href="tel:+919087856027" className="call-icon"  >
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2F9-99404_contact-icons-png.png?alt=media&token=ab5ee9da-b40a-479b-86ff-f93d6217113f"
            }
            alt=""
          />
        </a>
        <div className="book-icon" onClick={() => setShowBookNow(!showBookNow)}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FBooknowBtn.svg?alt=media&token=39e0494f-3b75-41b8-9b1e-227db6079cb9"
            alt=""
          />
        </div>

        {showBookNow && (
          <div className="book-main">
            <BookNow setShowBookNow={setShowBookNow} />
          </div>
        )}
        {showBrochure && (
          <div className="brochure-main">
            <Brouchure setShowBrochure={setShowBrochure} />
          </div>
        )}
        {showContact && (
          <div className="contact-main">
            <Contact setShowContact={setShowContact} />
          </div>
        )}

        <div className="home-container">
          <div className="homeUpper-section">
            <div className="homeLogo">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FGoldfieldsLogo.svg?alt=media&token=eec1cf03-d5c0-4a67-8312-9ded5a1b33f5"
                }
                alt=""
              />
              <p className="home-mainHead">GOLDFIELDS NAVA INDIA</p>
            </div>

            {/* <div className="homeBookNow" > <img src={booknowHomeButton} alt="" /></div> */}
          </div>

          <div className="home-lowerSection">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FhomeImage.svg?alt=media&token=83c3f937-3af6-4537-a890-8f84843f74e4"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <HomeQuote />
      <Factors setShowContact={setShowContact} showContact={showContact} />
      <Video />
      <Gallery setShowBrochure={setShowBrochure} showBrochure={showBrochure} />
      <HousesGallery
        setShowBookNow={setShowBookNow}
        showBookNow={showBookNow}
      />
      <Amenities />
      <AmenitiesGallery />
      <Footer setShowBookNow={setShowBookNow} showBookNow={showBookNow}
            setShowBrochure={setShowBrochure} showBrochure={showBrochure}
            setShowContact={setShowContact} showContact={showContact}
      />

    </>
  );
};

export default Home;
