"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowLeft from "../../../../public/arrow-left.svg";
import arrowRight from "../../../../public/arrow-right.svg";
import Image from "next/image";
import BlogHeroCard from "../BlogHeroCard";
import { Fragment } from "react";
export default function BlogCardsSlider({ data }) {

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
      >
        {data.safeList.map((blog) => {
          return(   
            <SwiperSlide key={blog._id}>
            <div className="h-screen">
              <BlogHeroCard title={blog.title} description={blog.mobileDescription} slug={blog.slug} image={blog.blogHeroImage} />
            </div>
          </SwiperSlide>
          
          )
        })}
      </Swiper>


      <button className="prev-btn absolute left-2 top-1/2 z-100 -translate-y-1/2 cursor-pointer">
        <Image src={arrowLeft} alt="left" className="w-[50px]" />

      </button>
      <button className="next-btn absolute right-0 top-1/2 z-100 -translate-y-1/2 cursor-pointer">
        <Image src={arrowRight} alt="right" className="w-[50px]" />
      </button>
    </div>
  );

}
