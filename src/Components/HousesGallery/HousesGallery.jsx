import React, { useRef, useState } from "react";
import houseOne from "./HousesImages/houseOne.svg";
import houseTwo from "./HousesImages/houseTwo.svg";
import houseThird from "./HousesImages/houseThird.svg";
import houseFour from "./HousesImages/houseFour.svg";
import houseFive from "./HousesImages/houseFive.svg";
import BooknowBtn from "./HousesImages/BooknowBtn.svg"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HousesGallery.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <div className="houseGalleryContainer">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={-30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiperHouseGallery"
        >
          <SwiperSlide className="houseOne">
            <img src={houseOne} alt="" />
            <div className="HouseGalleryBookNow-btn">
            <img src={BooknowBtn} alt="" />
            </div>
          </SwiperSlide>
       
          <SwiperSlide className="houseTwo">
            <img src={houseTwo} alt="" />
          </SwiperSlide>
          <SwiperSlide className="houseThird">
            <img src={houseThird} alt="" />
          </SwiperSlide>
          <SwiperSlide className="houseFour">
            <img src={houseFour} alt="" />
          </SwiperSlide>
          <SwiperSlide className="houseFive">
            <img src={houseFive} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
