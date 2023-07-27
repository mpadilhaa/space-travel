import Link from "next/link";
import React from "react";

const HomeContent = () => {
  return (
    <div className="flex flex-col justify-around  px-[30px]  md:w-[440px] md:mx-auto md:pb-0 xl:pb-0 xl:flex-row xl:gap-[386px] xl:pt-40 xl:items-center xl:w-full xl:px-36 ">
      <div className="flex flex-col text-center pt-[110px] items-center gap-1 md:mt-20 xl:items-start xl:w-[450px]">
        <h3 className="md:text-[20px] xl:text-[28px]">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-[80px] md:text-[150px] ">SPACE</h1>
        <p className="px-2 leading-6 md:px-0 xl:text-start">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-[121px] h-[121px] rounded-full bg-[#FFF] flex justify-center items-center mx-auto my-24 md:mt-30 md:w-[180px] md:h-[180px] xl:w-[200px] xl:h-[200px] xl:self-end xl:m-0">
        <Link href="/destination">
          <h1 className="text-[#0B0D17] text-center md:text-3xl">EXPLORE</h1>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
