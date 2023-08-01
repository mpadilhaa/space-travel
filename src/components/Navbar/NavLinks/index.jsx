import { data } from "../../../utils/dataNavlinks";

import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex flex-col gap-6 px-10 py-28 md:flex-row  md:pr-[30px] md:py-12 md:items-center md:gap-8 xl:gap-[52px] xl:py-8 xl:px-[140px] xl:max-w-[1600px]">
      {data.map((data) => (
        <li key={data.name} className=" uppercase cursor-pointer">
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
