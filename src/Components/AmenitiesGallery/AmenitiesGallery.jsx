import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./AmenitiesGallery.css";
import { Pagination } from "swiper";

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
          <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FAmenitiesGolf.svg?alt=media&token=e95012f9-02df-408f-8676-d01dd86e7469"} alt="" />
            <p>Golf</p>
        </SwiperSlide>

        <SwiperSlide className="secondImgBlock swiper-slideAmenities ">
          <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FAmenitiesGym.svg?alt=media&token=5831825f-3a89-4f21-85c2-19c1539634fa"} alt="" />
            <p>Fully equipped gym</p>
        </SwiperSlide>

        <SwiperSlide className="thirdImgBlock swiper-slideAmenities ">
          <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FAmenitiesCycling.svg?alt=media&token=04454af0-077a-4748-9b09-833127d2a4d2"} alt="" />
            <p>Cycling</p>
        </SwiperSlide>

        <SwiperSlide className="fourthImgBlock swiper-slideAmenities ">
          <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FAmenitiesPool.svg?alt=media&token=912e839b-8b15-47ac-9c61-7003cab5da3b"} alt="" />
            <p>Terrace pool</p>
        </SwiperSlide>

        <SwiperSlide className="fifthImgBlock swiper-slideAmenities ">
          <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FAmenitiesPlayArea.svg?alt=media&token=6914c1db-da0a-4eb0-a5b0-96f25b21f432"} alt="" />
            <p>Walking paths & kids play areas.</p>
        </SwiperSlide>

        <SwiperSlide className="sixthImgBlock swiper-slideAmenities ">
          <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FAmenitiesLawns.svg?alt=media&token=9eca60b4-0994-4479-ab95-2be3ec7f315f"} alt="" />
            <p>Banquet & Banquet lawns</p>
        </SwiperSlide>

        <SwiperSlide className="seventhImgBlock swiper-slideAmenities ">
          <img src={"https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FAmenitiesIndoor.svg?alt=media&token=2b3eb6cf-e597-4020-bb65-5029c71553d3"} alt="" />
            <p>Indoor games</p>
        </SwiperSlide>

       
      </Swiper>
    </div>
     
    </>
  );
}
