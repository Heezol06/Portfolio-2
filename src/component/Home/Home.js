import React from "react";
import facebook from "../../asset/facebook (1).png";
import twiter from "../../asset/twitter (1).png";
import git from "../../asset/github.png";
import linkedin from "../../asset/linkedin (1).png";
import instagram from "../../asset/instagram.png";
import download from "../../asset/down-arrow.png";
import { Dna } from "react-loader-spinner";

const Home = () => {
  <Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />;
  return (
    <div className="flex justify-center items-center my-10 flex-col leading-8">
      <div className="flex justify-center items-center flex-col px-1 lg:mx-auto ">
        <div className="w-56 h-56 rounded-full">
          <img
            className="rounded-full"
            src="https://i.ibb.co/2SbpBmz/2339181-01.jpg"
            alt=""
          />
        </div>
        <h1
          className="text-4xl lg:text-5xl font-bold mt-5 text-white"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          Shahriar Rahman Heezol
        </h1>
        <p className="my-5 text-center" style={{ fontFamily: "Poppins" }}>
          <span data-aos="fade-right">
            I am Shahriar Rahman Heezol. And i am MERN Stack developer.
          </span>
          <br />
          <span
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          >
            I have rich experience in both front end and back end development.
          </span>
          <br />
          <span>I always try to be unique.</span>
        </p>
      </div>
      <div data-aos="zoom-in">
        <a
          href="https://m.facebook.com/heeZol.5"
          target="_blank"
          rel="noreferrer"
        >
          <button class="btn glass mx-1 lg:mx-2">
            <img className="w-8 lg:w-10" src={facebook} alt="" srcset="" />
          </button>
        </a>
        <a href="https://twitter.com/SHeezol" target="_blank" rel="noreferrer">
          <button class="btn glass mx-1 lg:mx-2">
            <img className="w-8 lg:w-10" src={twiter} alt="" srcset="" />
          </button>
        </a>
        <a href="https://github.com/Heezol06" target="_blank" rel="noreferrer">
          <button class="btn glass mx-1 lg:mx-2">
            <img className="w-8 lg:w-10" src={git} alt="" srcset="" />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/sr-heezol/" target="_blank" rel="noreferrer">
          <button class="btn glass mx-1 lg:mx-2">
            <img className="w-8 lg:w-10" src={linkedin} alt="" srcset="" />
          </button>
        </a>
        <a href="https://www.instagram.com/roy_jon_/" target="_blank" rel="noreferrer">
          <button class="btn glass mx-1 lg:mx-2">
            <img className="w-8 lg:w-10" src={instagram} alt="" srcset="" />
          </button>
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1ag2QaJtCLt0oWPQazmUdvqEQ6KuV6kax/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button class="btn btn-active btn-accent my-5" data-aos="flip-down">
          <img className="w-10 sm:w-8" src={download} alt="" /> Download CV{" "}
        </button>
      </a>
    </div>
  );
};

export default Home;
