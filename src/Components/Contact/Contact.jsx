import React, { useState } from "react";
import "./Contact.css";
import { CgClose } from "react-icons/cg";
import axios from "axios";

const Contact = ({ setShowContact }) => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    mobileNo: "",
    desc: "",
  });

  async function sendMail() {
    if (
      !formDetails.name ||
      !formDetails.email ||
      !formDetails.mobileNo ||
      !formDetails.desc
    ) {
      alert("all fields are required");
    }
    let obj = {
      name: formDetails.name,
      email: formDetails.email,
      num: formDetails.mobileNo,
      desc: formDetails.desc,
    };

    await axios.post("/user/contact", obj);
    setFormDetails({
      ...formDetails,
      desc: "",
      name: "",
      email: "",
      mobileNo: "",
    });
  }
  return (
    <>
      <div className="contact-mainContainer">
        <div className="ContactcloseButton"
          onClick={() => setShowContact(false)}
        >
          
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
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  value={formDetails.name}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="contactformDeatils-email">
                <label htmlFor="">Your email address</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  value={formDetails.email}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div className="contactformDeatils-number">
                <label htmlFor="">Enter you mobile number</label>
                <input
                  type="number"
                  name=""
                  id=""
                  minLength="10"
                  maxLength="10"
                  required
                  value={formDetails.mobileNo}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      mobileNo: e.target.value,
                    })
                  }
                />
              </div>

              <div className="contactformDeatils-description">
                <label htmlFor="">Description</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  required
                  value={formDetails.desc}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      desc: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
            <div className="contact-submitButton">
              <button onClick={sendMail}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
