import { data } from "./dataNavlinks";

import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex flex-col gap-6 px-10 py-28">
      {data &&
        data.map((data) => (
          <li className=" uppercase line-normal">
            <Link href={data.route} className="">
              <span className="pr-[7px]">{data.number}</span>
              {data.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default NavLinks;
