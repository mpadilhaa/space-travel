import { data } from "./dataNavlinks";

import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex flex-col gap-6 px-10 py-28 md:flex-row  md:pr-[30px] md:py-12 md:items-center md:gap-8 xl:gap-12 xl:py-8 xl:px-[140px] ">
      {data &&
        data.map((data) => (
          <li className=" uppercase ">
            <Link href={data.route} className="">
              <span className="pr-[7px] md:hidden xl:inline xl:font-bold xl:pr-3">
                {data.number}
              </span>
              {data.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default NavLinks;
