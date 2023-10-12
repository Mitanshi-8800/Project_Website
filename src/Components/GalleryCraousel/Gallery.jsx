import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow ,Pagination , Navigation} from 'swiper';


function Gallery() {
  return (
    <div className='Container'>
      <h1 className='Gallery_Heading'> Myflower </h1>
      <Swiper
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={ true }
       loop ={ true }
       slidesPerView={'auto'}
       coverflowEffect={
        {
            rotate:0,
            stretch:0,
            depth:100,
            modifier:2.5
        }
       }
       className='swiper_container'
      >
        <SwiperSlide>
            <img src='./Image/Delivery1.png' alt="Image1"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='./Image/Delivery2.png' alt="Image1"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='./Image/Delivery3.png' alt="Image1"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='./Image/Delivery4.png' alt="Image1"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='./Image/Delivery5.png' alt="Image1"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='./Image/Delivery6.png' alt="Image1"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='./Image/Delivery7.png' alt="Image1"/>
        </SwiperSlide>
       <div className='slider-controler'>
         <div className='swiper-button-prev slider-arrow'>
         <ion-icon name="arrow-back-outline"></ion-icon> 
         </div>
         <div className='swiper-button-next slider-arrow'>
         <ion-icon name="arrow-forward-outline"></ion-icon> 
         </div>
       </div>

      </Swiper>
    </div>
  )
}

export default Gallery
