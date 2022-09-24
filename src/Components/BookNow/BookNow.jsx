import React from 'react'
import "./BookNow.css"
import { CgClose } from "react-icons/cg";

const BookNow = () => {
  return (
    <>
    <div className="bookNow-mainContainer">
    <div className="bookNowcloseButton">
          <  CgClose/>
        </div>

      <div className="bookNow-subContainer">
     
        <div className="bookNow-form">
          <div className="bookNow-mainHeading">
            <p>Book Now </p>
          </div>

          <div className="bookNow-formDeatils">
            <div className="bookNowformDeatils-name">
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" required />
            </div>

            <div className="bookNowformDeatils-email">
              <label htmlFor="">Your email address</label>
              <input type="text" name="" id="" required />
            </div>

            <div className="bookNowformDeatils-number">
              <label htmlFor="">Enter you mobile number</label>
              <input type="text" name="" id="" required />
            </div>

            <div className="bookNowformDeatils-description">
              <label htmlFor="">Description</label>
              <textarea name="" id="" cols="30" rows="10" required></textarea>
            </div>
          </div>
          <div className="bookNow-submitButton">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default BookNow