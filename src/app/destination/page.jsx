"use client";
import React from "react";
import { useCarousel } from "@/hooks/useCarousel";

const DestinationPage = () => {
  const [
    carouselItem,
    handleBeforeSlide,
    handleNextSlide,
    handlePlanetDetails,
  ] = useCarousel();

  return <h1 className="bg-red-500">ola</h1>;
};

export default DestinationPage;
