import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import {TestimonialCard} from '../Components'
import {testimonials} from '../Constants'

function Testimonials() {
  return (
    <section className='bg-smoothSlate px-[3rem] flex flex-col  py-[2rem] justify-center sm:w-[80%]'>
       <h1 className='font-bold text-[20px] sm:text-[24px] self-center mb-5'>Reseñas</h1>

       <div className='w-full'>
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
          testimonials.map((testimonial)=>(
            <SwiperSlide><TestimonialCard testimonial={testimonial}/></SwiperSlide>
          ))
        }
        
        
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials