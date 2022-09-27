import React, { useState } from "react";
import "./Factors.css";
import Contact from "../Contact/Contact";


const Factors = () => {
  const [showBrochure, setShowBrochure] = useState(false);
  return (
    <>
      <div className="factorsContainer">
        <div className="factors-headingArea">
          <div className="factors-heading">
            <p>Surrounded by Major essential factors such as </p>
          </div>
        </div>
        <div className="factors-content">
          <div className="factors-subContent">
            <div className="factors-subContent-text">
              <p>International Airport</p>
              <p>Railway Station</p>
              <p>Renowned Educational Institutions</p>
            </div>
            <div className="factors-subContent-text">
              <p>Top Class Restaurants</p>
              <p>Reputed Hospitals</p>
              <p>Famous Shopping Malls</p>
            </div>
          </div>
        </div>

        <div className="factors-bottomSection"></div>
      </div>
      <div className="factorsContact-container">
        <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FcontactButtonImg.svg?alt=media&token=d0029c2a-b49f-4257-8bb4-87a529e63f52"} alt="" />
        <div className="factorsContantButton">
          <p>Everything to cater all your requirements.</p>
          <button onClick={() => setShowBrochure(!showBrochure)}  >Contact</button>
        </div>
        
        {showBrochure && <Contact setShowBrochure={setShowBrochure} />}
      </div>
      
    </>
  );
};

export default Factors;
