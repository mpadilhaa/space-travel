"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "./styles.css";

import { Pagination } from "swiper/modules";

import { dataCrew } from "@/utils/dataPages";

export default function CarouselCrew() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataCrew.map((item) => (
          <SwiperSlide key={item.title}>
            <div className=" w-[100%] border-b-[0.5px] h-[100%]  ">
              <div className="relative w-[220px] h-[220px] mx-auto ">
                <Image
                  src={item.img}
                  fill
                  priority
                  alt="Picture of the author"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
