import React from "react";
import "./Footer.css";
import GoldfieldsLogo from "./FooterImage/GoldfieldsLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerUpper">
          <div className="footer-left">
            <img src={GoldfieldsLogo} alt="" />
          </div>

          <div className="footer-center">
            <div>
              <p>
                Nava India, Avinashi Road, Next to Hindustan Hospital Coimbatore
                - 641028
              </p>
              <p>Contact number : 770860422 </p>
              <p>Email us: goldfields.navaindia@gmail.com</p>
            </div>
            {/* <div>
            <p>All rights reserved 2022</p>
          </div> */}
          </div>

          <div className="footer-right">
            <p>
              Book now
              <hr />
            </p>

            <p>
              Contact Us
              <hr />
            </p>
            <p className="footer-right-last">
              Download Brouchre
              <hr />
            </p>
          </div>
      
        </div>
        <div className="footerBottom">
        <p>All rights reserved 2022</p>
      </div>
      </div>
    
    </>
  );
};

export default Footer;
