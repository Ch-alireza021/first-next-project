import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header className="w-full flex justify-between item-baseline px-20 py-[10%] h-20 bg-trueGray-800">
      <div className="text-2xl h-full flex justify-center items-center text-cyan-200 md:text-[2.5rem]">
        <Link href={"/"}>Next event</Link>
      </div>
      <nav className="no-underline text-teal-300 text-base">
        <ul>
          <li>
            <Link href={"/events"} className="no-underline md:text-2xl ">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
