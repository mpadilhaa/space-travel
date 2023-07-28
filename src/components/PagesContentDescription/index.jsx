import React from "react";

const PagesContentDescription = ({ children, numberPage }) => {
  return (
    <div>
      <h3 className=" text-base md:text-xl xl:text-3xl tracking-[2.7px]">
        <span className="font-bold opacity-25">{numberPage}</span>
        {children}
      </h3>
    </div>
  );
};

export default PagesContentDescription;
