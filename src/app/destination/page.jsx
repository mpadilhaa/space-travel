"use client";
import React, { useState } from "react";

import PagesContentDescription from "@/components/PagesContentDescription";
import { dataDestination } from "@/utils/dataPages";
import Image from "next/image";
import PlanetData from "@/components/PlanetData";
import RouteTextContext from "@/components/RouteTextContext";

const menuChosePlanet = ["moon", "mars", "europa", "titan"];

export default function Destination() {
  const [carouselItem, setCarouselItem] = useState(0);
  const data = dataDestination[carouselItem];

  function menuDestiantionChange(id) {
    setCarouselItem(id);
  }

  return (
    <div
      className="bg-black 
    bg-destination-bg-mobile md:bg-destination-bg-tablet 
     xl:bg-destination-bg-desktop bg-no-repeat bg-cover min-h-screen "
    >
      <div className=" px-8 text-center pt-20 md:pt-40 xl:flex xl:flex-row xl:px-[164px] xl:gap-20 xl:max-w-[1440px] 2xl:mx-auto xl:pt-[250px]">
        <div className="xl:flex-[50%]">
          <div className="pb-8 md:text-left md:pb-16">
            <PagesContentDescription numberPage={"01"}>
              pick your destination
            </PagesContentDescription>
          </div>
          <div className=" relative mx-auto w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px]  xl:mx-8 ">
            <Image src={data.img} fill priority alt={`planet ${data.title}`} />
          </div>
        </div>

        <div className="">
          <ul className="pt-8 flex flex-row gap-4 justify-center">
            {menuChosePlanet.map((item, i) => (
              <li key={i} onClick={() => menuDestiantionChange(i)} className="">
                {item.toUpperCase()}
              </li>
            ))}
          </ul>
          <div className="md:px-20 xl:pr-0 xl:text-left xl:w-[450px] 2xl:w-[650px]">
            <div className="py-7 min-h-[255px] border-b-[0.5px] border-[#383B4B]">
              <RouteTextContext title={data.title}>
                {data.text}
              </RouteTextContext>
            </div>
            <div className="pt-7  md:flex md:flex-row md:justify-center md:gap-20 xl:justify-start">
              <PlanetData
                title={data.descDistance}
                description={data.distance}
              />
              <PlanetData
                title={data.descTravel}
                description={data.travelTime}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
