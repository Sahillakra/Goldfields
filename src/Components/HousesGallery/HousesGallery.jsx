import React, { useRef, useState } from "react";
import BookNow from "../BookNow/BookNow";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HousesGallery.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  const [showBrochure, setShowBrochure] = useState(false);
  return (
    <>
    
      <div className="houseGalleryContainer">
      {showBrochure && <BookNow setShowBrochure={setShowBrochure} />}
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
            <img src={'https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FhouseOne.svg?alt=media&token=b7965433-164e-425f-a570-7d33f978e12f'} alt="" />
            <div className="HouseGalleryBookNow-btn" onClick={() => setShowBrochure(!showBrochure)} >
            <img src={'https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FBooknowBtn.svg?alt=media&token=39e0494f-3b75-41b8-9b1e-227db6079cb9'} alt=""   />
            </div>
            
          </SwiperSlide>
       
          <SwiperSlide className="houseTwo">
            <img src={'https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FhouseTwo.svg?alt=media&token=7237bb99-4192-4e74-9af6-5a37df1d7f3b'} alt="" />
          </SwiperSlide>
          <SwiperSlide className="houseThird">
            <img src={'https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FhouseThird.svg?alt=media&token=3c5bbcb7-f067-4985-a026-ad8fa4cea133'} alt="" />
          </SwiperSlide>
          <SwiperSlide className="houseFour">
            <img src={'https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FhouseFour.svg?alt=media&token=ee5f8ba5-3492-4012-b618-1f2fe1a10b3b'} alt="" />
          </SwiperSlide>
          <SwiperSlide className="houseFive">
            <img src={'https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas.appspot.com/o/ProjectImages%2FhouseFive.svg?alt=media&token=c81d98b0-8562-44d8-8e3e-63e7dc309af1'} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
