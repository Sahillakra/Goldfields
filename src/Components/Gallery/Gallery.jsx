import React from "react";
import './Gallery.css'
import GalleryOne from './GalleryImages/GalleryOne.svg'
import GalleryTwo from './GalleryImages/GalleryTwo.svg'
import GalleryThree from './GalleryImages/GalleryThree.svg'
import GalleryFour from './GalleryImages/GalleryFour.svg'

const Gallery = () => {
  return (
    <>
      <div className="galleryContainer">
        <div className="galleryTopSection">
          <div className="galleryTopSection-left" >
            <img src={GalleryOne} alt="" />
          </div>
          <div className="galleryTopSection-right"  >
            <img src={GalleryTwo} alt="" />
          </div>
        </div>
        <div className="galleryBottomSection">
        <div className="galleryBottomSection-left" >
            <img src={GalleryThree} alt="" />
          </div>
          <div className="galleryBottomSection-right"  >
            <img src={GalleryFour} alt="" />
            <button>BROCHURE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
