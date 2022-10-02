import React, { useEffect, useState } from "react";
import "./Brouchure.css";
import { CgClose } from "react-icons/cg";
import firebase from "../../firebase";
import { getBlob, getDownloadURL, getStorage, ref } from "firebase/storage";
import validator from "email-validator";
import emailjs from "@emailjs/browser";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const Brouchure = ({ setShowBrochure }) => {
  const publicKey = "Ywi3ua-Xzl6qbPMLn";
  const serviceId = "service_q0e0peh";
  const templateId = "template_ygiv94u";
  const auth = getAuth();
  auth.languageCode = "en";

  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    mobileNo: "",
    otp: "",
    downloadurl: "",
  });

  function verifyCaptcha(e) {
    e.preventDefault();
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log("1");
    // verifyCaptcha(e);
    const phoneNumber = "+91" + formDetails.mobileNo;
    const appVerifier = (window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    ));
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
        console.log("sms not sent");
      });
  }

  async function downloadBrochure() {
    // const res = await axios({
    //   url: `/file/download`,
    //   method: "get",
    //   responseType: "arraybuffer",
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const a = document.createElement("a");
    //     a.setAttribute("href", url);
    //     a.setAttribute("download", "GoldFieldBrochure.pdf");
    //     a.click();
    //     sendMail();
    //     setShowBrochure(false);
    //   })
    //   .catch((error) => console.log(error));
    // Create a reference with an initial file path and name
    const storage = getStorage();
    const pathReference = ref(storage, "GoldFieldBrochure.pdf");
    // Create a reference from a Google Cloud Storage URI
    const gsReference = ref(
      storage,
      "gs://goldfieldsvillas-b2814.appspot.com/GoldFieldBrochure.pdf"
    );
    // Create a reference from an HTTPS URL
    // Note that in the URL, characters are URL escaped!
    const httpsReference = ref(
      storage,
      "https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas-b2814.appspot.com/o/GoldFieldBrochure.pdf?alt=media&token=5059d992-7f9b-47f1-8cc4-bfc5f6df7f5f"
    );
    getDownloadURL(ref(storage, "GoldFieldBrochure.pdf"))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
        // const a = document.createElement("a");
        // a.setAttribute("href", url);
        // a.setAttribute("target", "_blank");
        // a.setAttribute("download", "GoldFieldBrochure.pdf");
        // a.click();
        setFormDetails({ ...formDetails, downloadurl: url });
        // setShowBrochure(false);
      })
      .catch((error) => {
        // Handle any errors
      });
  }

  async function sendMail() {
    if (!formDetails.name || !formDetails.mobileNo) {
      return alert("all fields are required");
    } else if (!validator.validate(formDetails.email)) {
      return alert("Enter a valid email");
    } else if (
      formDetails.mobileNo.length < 10 &&
      formDetails.mobileNo.length > 10
    ) {
      return alert("Enter a valid mobile no");
    }

    let obj = {
      name: formDetails.name,
      email: formDetails.email,
      num: formDetails.mobileNo,
    };
    emailjs.send(serviceId, templateId, formDetails, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    // await axios.post("/user/contact", obj);
  }

  function submitOtp(e) {
    e.preventDefault();
    const code = formDetails.otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("otp verified");
        sendMail();
        downloadBrochure();
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }

  return (
    <>
      <div className="brouchure-mainContainer">
        <div
          className="brouchurecloseButton"
          onClick={() => setShowBrochure(false)}
        >
          <CgClose />
        </div>

        <div className="brouchure-subContainer">
          <form className="brouchure-form" onSubmit={(e) => onSubmit(e)}>
            <div className="brouchure-mainHeading">
              <p>Enter your details</p>
            </div>

            <div className="brouchure-formDeatils">
              <div className="brouchureformDeatils-name">
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

              <div className="brouchureformDeatils-email">
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

              <div className="brouchureformDeatils-number">
                <div className="brouchureformDeatils-numberLeft">
                  <label htmlFor="">Enter you mobile number</label>
                  <input
                    type="number"
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
                <div className="brouchureformDeatils-numberRight">
                  <button id="sign-in-button" type="submit">
                    Get OTP
                  </button>
                </div>
              </div>
              <div className="brouchureformDeatils-bottom">
                <div className="brouchureformDeatils-download">
                  <label htmlFor="">Enter OTP</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={formDetails.otp}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        otp: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="brouchure-submitButton">
                  <button onClick={submitOtp}>Submit</button>
                  {formDetails.downloadurl && (
                    <a
                      href={formDetails.downloadurl}
                      download
                      // target="_blank"
                      // onClick={setShowBrochure(false)}
                    >
                      Download
                    </a>
                  )}
                  {/* <a href={formDetails.downloadurl} download target="_blank">
                    Download
                  </a> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Brouchure;
