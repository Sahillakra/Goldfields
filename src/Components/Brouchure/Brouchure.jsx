import React from "react";
import "./Brouchure.css";
import { CgClose } from "react-icons/cg";

const Brouchure = () => {
  return (
    <>
      <div className="brouchure-mainContainer">
        <div className="brouchurecloseButton">
          <CgClose />
        </div>

        <div className="brouchure-subContainer">
          <div className="brouchure-form">
            <div className="brouchure-mainHeading">
              <p>Enter your details</p>
            </div>

            <div className="brouchure-formDeatils">
              <div className="brouchureformDeatils-name">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" required />
              </div>

              <div className="brouchureformDeatils-email">
                <label htmlFor="">Your email address</label>
                <input type="text" name="" id="" required />
              </div>

              <div className="brouchureformDeatils-number">
                <div className="brouchureformDeatils-numberLeft">
                  <label htmlFor="">Enter you mobile number</label>
                  <input type="text" name="" id="" required />
                </div>
                <div className="brouchureformDeatils-numberRight">
                  <button>Get OTP</button>
                </div>
              </div>
              <div className="brouchureformDeatils-bottom">
                <div className="brouchureformDeatils-download">
                  <label htmlFor="">Enter OTP</label>
                  <input type="text" name="" id="" required />
                </div>
                <div className="brouchure-submitButton">
                  <button>Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brouchure;
