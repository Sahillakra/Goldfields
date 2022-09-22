import React from "react";
import "./HomeQuote.css";
import homeQuoteBottom from "./HomeQuoteImages/homeQuoteBottom.svg";

const HomeQuote = () => {
  return (
    <>
      <div className="homeQuote-mainContainer">
        <div className="topBorder">
          <div className="topBorder-left"></div>
          <div className="topBorder-right"></div>
        </div>
        <div className="homeQuoteText">
          <p>
            “ Top quality building materials are used to give you luxury
            dwelling with world-class features, which is few metres away from
            Avinashi road. ”
          </p>
        </div>
        <div className="bottomBorder">
          <div className="bottomBorder-left"></div>
          <div className="bottomBorder-right"></div>
        </div>
        <div className="homeQuote-bottomSection">
          <div className="homeQuote-bottomSectionImg">
            <img src={homeQuoteBottom} alt="" />
          </div>
          <div className="homeQuote-bottomSectionContent">
            <p>
              Prominently located gated community comprising of 27 opulent
              villas, out of which 13 exclusive units that belong to its reputed
              land owner, are ready for immediate sale.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeQuote;
