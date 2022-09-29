import React, { useState } from "react";
import "./BookNow.css";
import { CgClose } from "react-icons/cg";
import axios from "axios";

const BookNow = ({ setShowBookNow }) => {
  // const [showBrochure, setShowBookNow] = useState(false);
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

    await axios.post("/user/book", obj);
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
      <div className="bookNow-mainContainer">
        <div className="bookNowcloseButton"
        onClick={() => setShowBookNow(false)}
        >
          <CgClose />
        </div>

        <div className="bookNow-subContainer">
          <div className="bookNow-form">
            <div className="bookNow-mainHeading">
              <p>Book Now </p>
            </div>

            <div className="bookNow-formDeatils">
              <div className="bookNowformDeatils-name">
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

              <div className="bookNowformDeatils-email">
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

              <div className="bookNowformDeatils-number">
                <label htmlFor="">Enter you mobile number</label>
                <input
                  type="text"
                  name=""
                  id=""
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

              <div className="bookNowformDeatils-description">
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
            <div className="bookNow-submitButton">
              <button onClick={sendMail}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
