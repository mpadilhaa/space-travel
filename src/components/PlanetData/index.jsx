import React from "react";

const PlanetData = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-sm">{title}</h3>
      <h2 className="text-3xl">{description}</h2>
    </div>
  );
};

export default PlanetData;
