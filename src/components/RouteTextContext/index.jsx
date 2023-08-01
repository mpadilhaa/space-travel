import React from "react";

const RouteTextContext = ({
  children,
  title,
  crewPage = false,
  technologyPage = false,
  description,
}) => {
  return (
    <div>
      {technologyPage && (
        <h3 className="pt-4 text-sm md:text-base xl:text-base">
          {description}
        </h3>
      )}
      {crewPage && (
        <h2 className=" pt-4 text-[16px] md:text-[24px] xl:text-[32px] opacity-50 ">
          {description}
        </h2>
      )}

      {crewPage || technologyPage ? (
        <h2 className="pb-4 text-[24px] md:text-[40px] xl:text-[56px]">
          {title}
        </h2>
      ) : (
        <h2 className="text-[56px] md:text-[80px] xl:text-[100px]">{title}</h2>
      )}
      <p className=" text-[15px] md:text-[16px] xl:text-[18px] xl:w-[444px] ">
        {children}
      </p>
    </div>
  );
};

export default RouteTextContext;
