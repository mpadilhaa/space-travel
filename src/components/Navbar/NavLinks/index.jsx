import { data } from "../../../utils/dataNavlinks";

import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex flex-col gap-6 px-10 py-28 md:flex-row  md:pr-[30px] md:py-12 md:items-center md:gap-8 xl:gap-12 xl:py-8 xl:px-[140px] ">
      <li className=" uppercase ">
        <Link href="/" className="">
          <span className="pr-[7px] md:hidden xl:inline xl:font-bold xl:pr-3">
            00
          </span>
          HOME
        </Link>
      </li>
      <li className=" uppercase ">
        <Link href="/destination" className="">
          <span className="pr-[7px] md:hidden xl:inline xl:font-bold xl:pr-3">
            01
          </span>
          destination
        </Link>
      </li>
      <li className=" uppercase ">
        <Link href="/crew" className="">
          <span className="pr-[7px] md:hidden xl:inline xl:font-bold xl:pr-3">
            02
          </span>
          crew
        </Link>
      </li>
      <li className=" uppercase ">
        <Link href="/technology" className="">
          <span className="pr-[7px] md:hidden xl:inline xl:font-bold xl:pr-3">
            03
          </span>
          technology
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
