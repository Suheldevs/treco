import React from "react";
import companyLogo from "../assets/cclogo-MohdSuhel.webp";
// import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  // Copyright 2024 Dr. Mamta || All Rights Reserved || Designed By
  return (
    <div className="bg-black ">
      <div className="h-[0.6px] bg-white/20 w-full mb-1" />
      <div className="flex flex-wrap items-center justify-center text-xs sm:text-sm md:text-[14px]  text-gray-200 w-full gap-1 px-4">
        <div className="flex flex-wrap items-center justify-center gap-1 text-center">
          <p className="">Copyright</p>
          {/* <FaRegCopyright className="text-[1rem]" /> */}
          <p className=" messiri">
            {new Date().getFullYear()} A-Mad Electricals Technical Services
          </p>
          <span className="hidden sm:inline-block">||</span>
          <p className="">All Rights Reserved</p>
          <span className="hidden sm:inline-block">||</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1 text-center">
          <span className="">Designed by</span>
          <Link
            to="https://www.codecrafter.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <img
              src={companyLogo}
              alt="Designed by Company"
              className="h-auto w-[6rem] md:w-[7rem] lg:w-[8rem] inline-block"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
