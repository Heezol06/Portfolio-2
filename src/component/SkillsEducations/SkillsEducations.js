import React from "react";
import education from "../../asset/graduation-cap.png";
import work from "../../asset/suitcase.png";
import award from "../../asset/medal.png";
import knowledge from "../../asset/thought.png";
import MultiCarousel from "../../MultiCarousel/MultiCarousel";

const SkillsEducations = () => {
  return (
    <div className="container mx-auto px-3 lg:px-20 py-5 mt-20">
      <div className="static">
        <h1 className="text-6xl	my-5 text-green-50" data-aos="fade-right">
          Skills <span className="text-4xl lg:text-6xl">&</span> Educations
        </h1>
        <div
          className="flex absolute lg:left-[350px] animate-bounce"
          data-aos="fade-left"
          data-aos-duratio1="3000"
        >
          <div className="bg-green-300 w-11 h-1"></div>
          <div className="bg-red-300 w-10 h-1"></div>
          <div className="bg-purple-300 w-12 h-1"></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 justify-between	">
          {/* Education */}
          <div>
            <div className="flex items-center mt-10" data-aos="zoom-out-up">
              <img src={education} className="w-10 mr-5" alt="" />
              <h1
                className="text-2xl text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Education
              </h1>
            </div>
            <div className="border-2 my-10 p-5 rounded-lg glass" data-aos="fade-up"
            data-aos-duration="1000">
              <p data-aos="fade-down-right">2018-2022</p>
              <h1 className="text-xl text-white" data-aos="fade-down-right">Diploma in Electronics</h1>
              <p style={{ fontFamily: "Poppins" }} data-aos="fade-down-left">
                Dhaka Polytechnic Institute, Dhaka, <br /> Bangladesh
              </p>
            </div>
            <div className="border-2 my-10 p-5 rounded-lg glass" data-aos="fade-up"
            data-aos-duration="3000">
              <p data-aos="fade-down-right">2017-2018</p>
              <h1 className="text-xl text-white" data-aos="fade-down-right">
                Secondary School Certificate
              </h1>
              <p style={{ fontFamily: "Poppins" }} data-aos="fade-down-left">
                Andharia High School, Sherpur, <br /> Bangladesh
              </p>
            </div>
          </div>
          {/* Experience */}
          <div>
            <div className="flex items-center mt-10" data-aos="zoom-out-up">
              <img src={work} className="w-10 mr-5" alt="" />
              <h1
                className="text-2xl text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Experience
              </h1>
            </div>
            <div className="border-2 my-10 p-5 rounded-lg glass" data-aos="fade-up"
            data-aos-duration="1000">
              <p data-aos="fade-down-right">March,2022-June,2022</p>
              <h1 className="text-xl text-white" data-aos="fade-down-right">
                Electrical Installation & Maintenance{" "}
              </h1>
              <p style={{ fontFamily: "Poppins" }} data-aos="fade-down-left">
                Bangladesh Industrial Technical Assistance Centre, Dhaka,
                Bangladesh
              </p>
            </div>
            <div className="border-2 my-10 p-5 rounded-lg glass" data-aos="fade-up"
            data-aos-duration="3000">
              <p data-aos="fade-down-right">July,2022</p>
              <h1 className="text-xl text-white" data-aos="fade-down-right">Web Development Internship</h1>
              <p style={{ fontFamily: "Poppins" }} data-aos="fade-down-left">
                RaiBhiLo Consultancy LLP, Indira Nagar, Lucknow, India
              </p>
            </div>
          </div>
          {/* Award */}
          <div>
            <div className="flex items-center mt-10" data-aos="zoom-out-up">
              <img src={award} className="w-10 mr-5" alt="" />
              <h1
                className="text-2xl text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Award
              </h1>
            </div>
            <div className="border-2 my-10 p-5 rounded-lg glass" data-aos="fade-up"
            data-aos-duration="1000">
              <p data-aos="fade-down-right">2020-2022</p>
              <h1 className="text-xl text-white" data-aos="fade-down-right">Full Stack Web Development</h1>
              <p style={{ fontFamily: "Poppins" }} data-aos="fade-down-left">Programming Hero</p>
              <br />
            </div>
            <div className="border-2 my-10 p-5 rounded-lg glass" data-aos="fade-up"
            data-aos-duration="3000">
              <p data-aos="fade-down-right">2021-2022</p>
              <h1 className="text-xl text-white" data-aos="fade-down-right">
                React Native App Development
              </h1>
              <p style={{ fontFamily: "Poppins" }} data-aos="fade-down-left">Programming Hero</p>
              <br />
            </div>
          </div>
        </div>
        <div>
        <div className="flex items-center mt-10" data-aos="zoom-in-left">
              <img src={knowledge} className="w-10 mr-5" alt="" />
              <h1
                className="text-2xl text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Knowledge's
              </h1>
            </div>
          <div className="lg:flex my-7">
            <h1 className="bg-slate-800 px-4 py-3 my-5 lg:mr-5 rounded-sm text-white" data-aos="flip-left">
              Web Development
            </h1>
            <h1 className="bg-slate-800 px-4 py-3 my-5 lg:mr-5 rounded-sm text-white" data-aos="flip-right">
              App Development
            </h1>
            <h1 className="bg-slate-800 px-4 py-3 my-5 lg:mr-5 rounded-sm text-white" data-aos="flip-up">
              UI/UX Design
            </h1>
            <h1 className="bg-slate-800 px-4 py-3 my-5 lg:mr-5 rounded-sm text-white" data-aos="flip-down">
              Photoshope
            </h1>
            <h1 className="bg-slate-800 px-4 py-3 my-5 lg:mr-5 rounded-sm text-white" data-aos="zoom-in-down">
              Management
            </h1>
          </div>
        </div>
        {/* MultiCarousel */}
        <MultiCarousel></MultiCarousel>
      </div>
    </div>
  );
};

export default SkillsEducations;
