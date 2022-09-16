import React from "react";
import { Link } from "react-router-dom";

const TeamProject = () => {
  return (
    <div className="my-10">
      <h1
        className="text-3xl text-white"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        Team Projects
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
            <p
              class="text-gray-800 dark:text-white text-xl font-medium mb-2"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              Nest
            </p>
            <p
              class="text-gray-400 dark:text-gray-300 font-light text-md"
              data-aos="zoom-out-left"
            >
              Nest It is a e-commerce website you can buy all of you want.
            </p>
            <Link
              to="/nest"
              className="btn btn-accent my-5 w-full"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
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
            <p
              class="text-gray-800 dark:text-white text-xl font-medium mb-2"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              Brain Skill
            </p>
            <p
              class="text-gray-400 dark:text-gray-300 font-light text-md"
              data-aos="zoom-out-left"
            >
              Brain Skill Brain Skill is a Full Stack Project. It is E-Learning
              website.
            </p>
            <Link
              to="/brainSkill"
              className="btn btn-accent my-5 w-full"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProject;
