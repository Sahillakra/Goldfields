import React, { useState } from "react";
import "./Gallery.css";
import Brouchure from "../Brouchure/Brouchure";


const Gallery = ({setShowBrochure,showBrochure}) => {
  return (
    <>
      <div className="galleryContainer">
        <div className="galleryTopSection">
          <div className="galleryTopSection-left">
          <img src='https://drive.google.com/uc?export=view&amp;id=1LvzXomjm6xCftiO5ACWRdwgWShSdhm6N'/>
          </div>
          <div className="galleryTopSection-right">
          <img src='https://drive.google.com/uc?export=view&amp;id=1491Y38ZTij-TbH5P5P_ntSzkXuUVDGNu'/>
          </div>
        </div>
        <div className="galleryBottomSection">
          <div className="galleryBottomSection-left">
          <img src='https://drive.google.com/uc?export=view&amp;id=1HdZnQE5O5ZEK7HgDHPJgbCXwC9yOWshP'/>
          </div>
          <div className="galleryBottomSection-right">
          <img src='https://drive.google.com/uc?export=view&amp;id=1caWiheFUrQ0pNcNEf9b0D7hs0b2M849C'/>
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
