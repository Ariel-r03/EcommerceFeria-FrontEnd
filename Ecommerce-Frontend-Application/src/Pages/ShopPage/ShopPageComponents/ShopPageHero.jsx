import React from "react";
import { imgsShop } from "../../../Constants";
// Import Swiper React components
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation,} from "swiper";
import {BannerCard}from '../ShopPageComponents'
function ShopPageHero() {
  return (
    <section className="flex flex-col justify-center my-0">
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {imgsShop.map((img) => (
            <SwiperSlide>
             <BannerCard props={img}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ShopPageHero;
