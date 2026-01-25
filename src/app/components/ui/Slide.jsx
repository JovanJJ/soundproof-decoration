"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import hero1 from "../../../../public/hero1.png";
import hero2 from "../../../../public/hero2.png";
import hero3 from "../../../../public/hero3.png";


export default function Slide() {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 3000 }}
            loop
            className="w-full h-full"
        >
            <SwiperSlide><Image src="/hero1.png" alt="Hero 1" fill className="object-cover w-full h-full" /></SwiperSlide>
            <SwiperSlide><Image src="/hero2.png" alt="Hero 2" fill className="object-cover w-full h-full" /></SwiperSlide>
            <SwiperSlide><Image src="/hero3.png" alt="Hero 3" fill className="object-cover w-full h-full" /></SwiperSlide>
        </Swiper>
    );
}