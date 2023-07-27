import Link from "next/link";
import React from "react";

const HomeContent = () => {
  return (
    <div className="flex flex-col justify-around  px-[30px] py-[110px]">
      <div className="flex flex-col text-center gap-1 ">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className="text-[80px]">SPACE</h1>
        <p className="px-2 leading-6">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-[121px] h-[121px] rounded-full bg-[#FFF] flex justify-center items-center mx-auto my-24">
        <Link href="/destination">
          <h1 className="text-[#0B0D17] text-center">EXPLORE</h1>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
