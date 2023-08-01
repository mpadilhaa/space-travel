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
import RouteTextContext from "../RouteTextContext";
import PagesContentDescription from "../PagesContentDescription";

export default function CarouselCrew() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideIndex = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="  px-[30px] pt-[200px] h-screen md:flex md:flex-col md:justify-end ">
      <div className="text-center py-6 md:text-start md:py-[64px] xl:ml-[140px] xl:py-0 xl:pt-[40px] ">
        <PagesContentDescription numberPage={"02"}>
          MEET YOUR CREW
        </PagesContentDescription>
      </div>
      <div className=" flex flex-col md:flex-col-reverse md:gap-12  items-center  xl:flex-row-reverse">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          onSlideChange={handleSlideIndex}
          modules={[Pagination]}
          className="mySwiper"
        >
          {dataCrew.map((item, i) => (
            <>
              <SwiperSlide key={item.id}>
                <div className="relative w-[100%] border-b-[1px] h-[100%] border-[#383B4B] md:border-none xl:pl-[530px] xl:-z-10 ">
                  <div className="relative w-[220px] h-[220px] mx-auto md:w-[456px] md:h-[480px] xl:w-[590px] xl:h-[620px] ">
                    <Image
                      src={item.img}
                      fill
                      priority
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        <div className="text-center  md:h-[200px] md:w-[458px] xl:absolute xl:left-[164px] xl:bottom-[300px] xl:w-[640px] xl:text-start xl:z-10 ">
          <RouteTextContext
            crewPage
            description={dataCrew[activeIndex].subTitle.toLocaleUpperCase()}
            title={dataCrew[activeIndex].title.toLocaleUpperCase()}
          >
            {dataCrew[activeIndex].description}
          </RouteTextContext>
        </div>
      </div>
    </div>
  );
}
