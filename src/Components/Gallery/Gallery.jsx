import React, { useState } from "react";
import "./Gallery.css";
import Brouchure from "../Brouchure/Brouchure";


const Gallery = ({setShowBrochure,showBrochure}) => {
  return (
    <>
      <div className="galleryContainer">
        <div className="galleryTopSection">
          <div className="galleryTopSection-left">
            <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FGalleryOne.svg?alt=media&token=351a202b-9d8b-449e-ba61-177581d1399a"} alt="" />
          </div>
          <div className="galleryTopSection-right">
            <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FGalleryTwo.svg?alt=media&token=7388b7f7-69d0-440e-8c41-887b0372981e"} alt="" />
          </div>
        </div>
        <div className="galleryBottomSection">
          <div className="galleryBottomSection-left">
            <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FGalleryThree.svg?alt=media&token=1647a810-f99a-45ca-a7ac-73e8a9c6b2b6"} alt="" />
          </div>
          <div className="galleryBottomSection-right">
            <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FGalleryFour.svg?alt=media&token=b08dbc86-add9-42ed-a1ff-317c76446799"} alt="" />
            <button onClick={() => setShowBrochure(!showBrochure)}>
              BROCHURE
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Gallery;
