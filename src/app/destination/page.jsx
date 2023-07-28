"use client";
import React from "react";
import { useCarousel } from "@/hooks/useCarousel";

export default function Crew() {
  const [
    carouselItem,
    handleBeforeSlide,
    handleNextSlide,
    handlePlanetDetails,
  ] = useCarousel();
  return (
    <div
      className="bg-black 
    bg-destination-bg-mobile md:bg-destination-bg-tablet 
     lg:bg-destination-bg-desktop bg-no-repeat bg-cover min-h-screen"
    >
      ola
    </div>
  );
}
