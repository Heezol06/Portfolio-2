import React from "react";
import { Link, Outlet } from "react-router-dom";

const Works = () => {
  return (
    <div className="container mx-auto px-3 lg:px-20 py-5 mt-20">
      <div className="lg:flex justify-between items-center">
        <div className="static">
          <h1 className="text-6xl	my-5 text-green-50" data-aos="fade-right">
            Work
          </h1>
          <div
            className="flex absolute lg:left-[115px] animate-bounce"
            data-aos="fade-left"
            data-aos-duratio1="3000"
          >
            <div className="bg-green-300 w-6 h-1"></div>
            <div className="bg-red-300 w-8 h-1"></div>
            <div className="bg-purple-300 w-10 h-1"></div>
          </div>
        </div>
        <div className="flex justify-between mt-16">
          <Link
            to="react"
            className="lg:text-3xl md:text-sm sm:text-sm  mx-6 text-emerald-100 relative after:absolute after:bg-emerald-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            data-aos="zoom-in-down"
          >
            React
          </Link>
          <Link
            to="fullStack"
            className="lg:text-3xl md:text-sm sm:text-sm  text-emerald-100 relative after:absolute after:bg-emerald-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            data-aos="zoom-in-up"
          >
            Full-Stack
          </Link>
          <Link
            to="teamProject"
            className="lg:text-3xl md:text-sm sm:text-sm  mx-6 text-emerald-100 relative after:absolute after:bg-emerald-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            data-aos="zoom-in-down"
          >
            Team Project
          </Link>
          <Link
            to="reactNative"
            className="lg:text-3xl md:text-sm sm:text-sm  text-emerald-100 relative after:absolute after:bg-emerald-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            data-aos="zoom-in-up"
          >
            React-Native
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Works;
