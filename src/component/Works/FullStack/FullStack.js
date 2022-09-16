import React from "react";
import { Link } from "react-router-dom";

const FullStack = () => {
  return (
    <div className="my-10">
      <h1
        className="text-3xl text-white"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        Full-Stack Projects
      </h1>
      {/* cards */}
      <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-1 md:grid-cols-1  my-[70px]">
        {/* nest  */}
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-80 cursor-pointer mt-5">
          <img
            alt="blog"
            src="https://i.ibb.co/JnzcDnS/ezgif-com-gif-maker-6.gif"
            class="max-h-60 lg:h-60 w-full object-cover"
            data-aos="fade-down"
          />
          <div
            class="bg-white dark:bg-gray-800 w-full p-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2" data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
              Nest
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md" data-aos="zoom-out-left">
              Nest It is a e-commerce website you can buy all of you want.
            </p>
            <Link to="/nest" className="btn btn-accent my-5 w-full" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              Details
            </Link>
          </div>
        </div>
        {/* brain skill */}
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-80 cursor-pointer mt-5">
          <img
            alt="blog"
            src="https://i.ibb.co/3WwPMzP/ezgif-com-gif-maker-1.gif"
            class="max-h-60 lg:h-60 w-full object-cover"
            data-aos="fade-down"
          />
          <div
            class="bg-white dark:bg-gray-800 w-full p-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2" data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
              Brain Skill
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md" data-aos="zoom-out-left">
              Brain Skill Brain Skill is a Full Stack Project. It is E-Learning
              website.
            </p>
            <Link to="/brainSkill" className="btn btn-accent my-5 w-full" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              Details
            </Link>
          </div>
        </div>
        {/* Travel Destination */}
        <div
          class="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-80 cursor-pointer mt-5"
          alt="Click for details"
        >
          <img
            alt="blog"
            src="https://i.ibb.co/WsNc6L5/ezgif-com-gif-maker-4.gif"
            class="max-h-60 lg:h-60 w-full object-cover"
            data-aos="fade-down"
          />
          <div
            class="bg-white dark:bg-gray-800 w-full p-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2" data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
              Travel Destination
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md" data-aos="zoom-out-left">
              Travel Destination Travel Destination is a Full Stack Project. It
              is A tourism related website.
            </p>
            <Link
              to="/travelDestination"
              className="btn btn-accent my-5 w-full"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Details
            </Link>
          </div>
        </div>
        {/* royal enfield  */}
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-80 cursor-pointer mt-5">
          <img
            alt="blog"
            src="https://i.ibb.co/KrN1gXM/ezgif-com-gif-maker-5.gif"
            class="max-h-60 lg:h-60 w-full object-cover"
            data-aos="fade-down"
          />
          <div
            class="bg-white dark:bg-gray-800 w-full p-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2" data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
              Royal Enfield
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md" data-aos="zoom-out-left">
              Royal Enfield Royal Enfield is a Full Stack Project. It is A bike
              showroom's website.
            </p>
            <Link to="/royalEnfield" className="btn btn-accent my-5 w-full" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              Details
            </Link>
          </div>
        </div>
        {/* apartment  */}
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-80 cursor-pointer mt-5">
          <img
            alt="blog"
            src="https://i.ibb.co/PQDGBTK/ezgif-com-gif-maker-7.gif"
            class="max-h-60 lg:h-60 w-full object-cover"
            data-aos="fade-down"
          />
          <div
            class="bg-white dark:bg-gray-800 w-full p-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2" data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
              Apartment Seller
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md" data-aos="zoom-out-left">
              Apartment Seller Apartment Seller is a Full-Stack Project. It is a
              selling or buying appertment website.
            </p>
            <Link to="/apartmentSeller" className="btn btn-accent my-5 w-full" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStack;
