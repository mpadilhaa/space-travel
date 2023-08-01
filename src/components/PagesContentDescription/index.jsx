import React from "react";

const PagesContentDescription = ({ children, numberPage }) => {
  return (
    <div className="">
      <h3 className=" text-base md:text-xl xl:text-3xl tracking-[2.7px] uppercase ">
        <span className=" text-base md:text-xl xl:text-3xl font-bold opacity-25 mr-2">
          {numberPage}
        </span>
        {children}
      </h3>
    </div>
  );
};

export default PagesContentDescription;
