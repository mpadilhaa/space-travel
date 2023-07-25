"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toogle, setToogle] = useState(true);

  const toogleMenu = () => {
    setToogle(!toogle);
  };

  return (
    <div className="flex justify-between px-8 h-10 absolute top-2.5 w-full ">
      <Image
        src="/shared/logo.svg"
        width={40}
        height={40}
        alt="logo space-travel"
      />

      <nav
        className={
          toogle
            ? "h-screen w-[70%] absolute top-[-10px] right-0 bg-red-800 "
            : ""
        }
      >
        <ul>
          <li>
            <Link href="/">
              <span>00</span>
              home
            </Link>
          </li>
          <li>
            <Link href="/destination">
              <span>01</span>
              destination
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <span>02</span>
              crew
            </Link>
          </li>
          <li>
            <Link href="/technology">
              <span>03</span>
              technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
