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
        <h3 className="text-sm md:text-base xl:text-base">{description}</h3>
      )}
      {crewPage && (
        <h3 className="text-[16px] md:text-[24px] xl:text-[32px]">
          {description}
        </h3>
      )}

      {crewPage || technologyPage ? (
        <h2 className="text-[24px] md:text-[40px] xl:text-[56px]">{title}</h2>
      ) : (
        <h2 className="text-[56px] md:text-[80px] xl:text-[100px]">{title}</h2>
      )}
      <p className="text-[18px]">{children}</p>
    </div>
  );
};

export default RouteTextContext;
