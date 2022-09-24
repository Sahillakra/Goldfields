import React from "react";
import "./Contact.css";
import { CgClose } from "react-icons/cg";

const Contact = () => {
  return (
    <>
      <div className="contact-mainContainer">
        <div className="ContactcloseButton">
          <CgClose />
        </div>

        <div className="contact-subContainer">
          <div className="contact-form">
            <div className="contact-mainHeading">
              <p>Contact us</p>
            </div>

            <div className="contact-formDeatils">
              <div className="contactformDeatils-name">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" required />
              </div>

              <div className="contactformDeatils-email">
                <label htmlFor="">Your email address</label>
                <input type="text" name="" id="" required />
              </div>

              <div className="contactformDeatils-number">
                <label htmlFor="">Enter you mobile number</label>
                <input type="text" name="" id="" required />
              </div>

              <div className="contactformDeatils-description">
                <label htmlFor="">Description</label>
                <textarea name="" id="" cols="30" rows="10" required></textarea>
              </div>
            </div>
            <div className="contact-submitButton">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
