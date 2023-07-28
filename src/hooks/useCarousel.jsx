"use client";

import React, { useState } from "react";

export const useCarousel = () => {
  const [carouselItem, setCarouselItem] = useState(0);

  const handlePlanetDetails = (id) => {
    setCarouselItem(id);
  };

  const handleBeforeSlide = () => {
    if (carouselItem === 0) {
      return;
    }
    setCarouselItem((prev) => prev - 1);
  };

  const handleNextSlide = (data) => {
    if (data.length - 1 === carouselItem) {
      return;
    }
    setCarouselItem((prev) => prev + 1);
  };

  return [
    carouselItem,
    handleBeforeSlide,
    handleNextSlide,
    handlePlanetDetails,
  ];
};
