import {CardStarProduct} from './../HomePageComponents'
import {starProducts} from '../../../Constants'
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

function HomePageBestProducts() {
 
  return (
    <section className='bg-white px-[3rem] flex flex-col  py-[2rem] justify-center sm:w-[80%] '>
      <h1 className='font-bold text-[20px] sm:text-[24px] self-center mb-5'>PRODUCTOS DESTACADOS</h1>
      <div className='w-full sm:flex hidden'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          starProducts.map((product)=>(
            <SwiperSlide><CardStarProduct product={product}/></SwiperSlide>
          ))
        }
        
        
      </Swiper>
      </div>

      <div className='w-full sm:hidden'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          starProducts.map((product)=>(
            <SwiperSlide><CardStarProduct product={product}/></SwiperSlide>
          ))
        }
        
        
      </Swiper>
      </div>

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-[2rem] rounded self-center'><a href="">Ir a tienda{" >"}</a></button>
      
    </section>
  )
}

export default HomePageBestProducts


/*
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import {CardStarProduct} from '../HomePageComponents'
import {starProducts} from '../../../Constants'

export default function HomePageBestProducts() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          starProducts.map((product)=>(
            <SwiperSlide><CardStarProduct product={product}/></SwiperSlide>
          ))
        }
        
        
      </Swiper>
    </>
  );
}

*/