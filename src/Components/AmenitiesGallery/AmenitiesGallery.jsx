import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./AmenitiesGallery.css";
import { Pagination } from "swiper";
import AmenitiesGym from "./AmenitiesGalleryImage/AmenitiesGym.svg";
import AmenitiesGolf from "./AmenitiesGalleryImage/AmenitiesGolf.svg";
import AmenitiesCycling from "./AmenitiesGalleryImage/AmenitiesCycling.svg";
import AmenitiesLawns from "./AmenitiesGalleryImage/AmenitiesLawns.svg";
import AmenitiesIndoor from "./AmenitiesGalleryImage/AmenitiesIndoor.svg";
import AmenitiesPool from "./AmenitiesGalleryImage/AmenitiesPool.svg";
import AmenitiesPlayArea from "./AmenitiesGalleryImage/AmenitiesPlayArea.svg";
export default function App() {
  return (
    <>
    <div className="amenitiesGalleryContainer">
    <Swiper
        slidesPerView={"auto"}
        // centeredSlides={true}
        spaceBetween={10}
        pagination={{
            clickable: true,
            dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="swiperAmenities"
      >
        <SwiperSlide className="firstImgBlock swiper-slideAmenities ">
          <img src={AmenitiesGolf} alt="" />
            <p>Golf</p>
        </SwiperSlide>

        <SwiperSlide className="secondImgBlock swiper-slideAmenities ">
          <img src={AmenitiesGym} alt="" />
            <p>Fully equipped gym</p>
        </SwiperSlide>

        <SwiperSlide className="thirdImgBlock swiper-slideAmenities ">
          <img src={AmenitiesCycling} alt="" />
            <p>Cycling</p>
        </SwiperSlide>

        <SwiperSlide className="fourthImgBlock swiper-slideAmenities ">
          <img src={AmenitiesPool} alt="" />
            <p>Terrace pool</p>
        </SwiperSlide>

        <SwiperSlide className="fifthImgBlock swiper-slideAmenities ">
          <img src={AmenitiesPlayArea} alt="" />
            <p>Walking paths & kids play areas.</p>
        </SwiperSlide>

        <SwiperSlide className="sixthImgBlock swiper-slideAmenities ">
          <img src={AmenitiesLawns} alt="" />
            <p>Banquet & Banquet lawns</p>
        </SwiperSlide>

        <SwiperSlide className="seventhImgBlock swiper-slideAmenities ">
          <img src={AmenitiesIndoor} alt="" />
            <p>Indoor games</p>
        </SwiperSlide>

       
      </Swiper>
    </div>
     
    </>
  );
}
