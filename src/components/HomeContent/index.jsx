import React from "react";

const HomeContent = () => {
  return (
    <div className="flex flex-col justify-around h-screen pt-20">
      <div className="flex flex-col text-center gap-4 ">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-[121px] h-[121px] rounded-full bg-[#FFF] flex justify-center items-center mx-auto">
        <h1 className="text-[#0B0D17] text-center">EXPLORE</h1>
      </div>
    </div>
  );
};

export default HomeContent;
