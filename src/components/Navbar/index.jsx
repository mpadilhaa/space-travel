"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  const toogleMenu = () => {
    setToogle(!toogle);
  };

  return (
    <div className="flex justify-between items-center px-[30px] h-10 absolute top-2.5 w-full ">
      <Image
        src="/shared/logo.svg"
        width={40}
        height={40}
        alt="logo space-travel"
      />
      <div className="absolute right-8  z-10" onClick={toogleMenu}>
        {toogle ? (
          <IoCloseOutline size={25} fill="#FFF" />
        ) : (
          <BiMenu size={25} fill="#FFF" />
        )}
      </div>

      <nav
        className={
          toogle
            ? "h-screen w-[240px] absolute top-[-10px] right-0  bg-rgba-menu backdrop-blur-[40.774227142333984px]"
            : "hidden"
        }
      >
        <NavLinks />
      </nav>
    </div>
  );
};

export default Navbar;
