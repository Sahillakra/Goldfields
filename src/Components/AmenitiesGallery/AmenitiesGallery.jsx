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
        <img src='https://drive.google.com/uc?export=view&amp;id=1DczeKsgUF6XOFA7yoQHsxh9QTMan5-R5'/>
            <p>Golf</p>
        </SwiperSlide>

        <SwiperSlide className="secondImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=13uejdWcgOeQXf_jSeTRKVSLNXeAkidqP'/>
            <p>Fully equipped gym</p>
        </SwiperSlide>

        <SwiperSlide className="thirdImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1aGYHv5a6FpTeP3kH4qio7ZRz3SjthP1G'/>
            <p>Cycling</p>
        </SwiperSlide>

        <SwiperSlide className="fourthImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1d8A48VB44E6n0_h7fX6Ibh-yLhF8J_wF'/>
            <p>Terrace pool</p>
        </SwiperSlide>

        <SwiperSlide className="fifthImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=12C1G18kp1e9OkHIKh2jDZct7pNOdLyrk'/>
            <p>Walking paths & kids play areas.</p>
        </SwiperSlide>

        <SwiperSlide className="sixthImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1dP86bhgKXWo__QJcJpTZWughZ_t6qVNA'/>
            <p>Banquet & Banquet lawns</p>
        </SwiperSlide>

        <SwiperSlide className="seventhImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1A-1exPlzpcclxzmanthj8J8SJBUI-dOz'/>
            <p>Indoor games</p>
        </SwiperSlide>

       
      </Swiper>
    </div>
     
    </>
  );
}
