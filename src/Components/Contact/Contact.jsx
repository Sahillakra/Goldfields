import React, { useState } from "react";
import "./Contact.css";
import { CgClose } from "react-icons/cg";
import axios from "axios";
import validator from "email-validator";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";

const Contact = ({ setShowContact }) => {
  const publicKey = "Ywi3ua-Xzl6qbPMLn";
  const serviceId = "service_q0e0peh";
  const templateId = "template_xqtvcu1";
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    mobileNo: "",
    desc: "",
    msg: "Contact Us requested by",
  });

  async function sendMail() {
    if (!formDetails.name || !formDetails.mobileNo || !formDetails.desc) {
      return alert("all fields are required");
    } else if (!validator.validate(formDetails.email)) {
      return alert("Enter a valid email");
    } else if (formDetails.mobileNo.length != 10) {
      return alert("Enter a valid mobile no");
    }
    let obj = {
      name: formDetails.name,
      email: formDetails.email,
      num: formDetails.mobileNo,
      desc: formDetails.desc,
    };

    // await axios.post("/user/contact", obj);
    emailjs.send(serviceId, templateId, formDetails, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setFormDetails({
      ...formDetails,
      desc: "",
      name: "",
      email: "",
      mobileNo: "",
      msg: " ",
    });

    swal("Success!", "Query submitted successfully", "success", {
      button: "close",
    });
    setShowContact(false);
  }
  return (
    <>
      <div className="contact-mainContainer">
        <div
          className="ContactcloseButton"
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
                  name="user_name"
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
                  name="user_email"
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
                  name="user_mobile"
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
                  name="user_desc"
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
