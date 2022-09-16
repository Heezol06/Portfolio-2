import React from "react";
import phone from "../../asset/hand-phone.png";
import location from "../../asset/placeholder.png";
import email from "../../asset/email.png";
import calender from "../../asset/calendar.png";
import webDev from "../../asset/code.png";
import app from "../../asset/development.png";
import uiux from "../../asset/ui.png";
import photography from "../../asset/photography.png";
import settings from "../../asset/settings.png";

const About = () => {
  return (
    <div className="container mx-auto px-3 lg:px-20 py-5 mt-20">
      <div className="static">
        <h1 className="text-6xl	my-5 text-green-50" data-aos="fade-right">
          About Me
        </h1>
        <div
          className="flex absolute left-36 top- animate-bounce"
          data-aos="fade-left"
          data-aos-duratio1="3000"
        >
          <div className="bg-green-300 w-11 h-1"></div>
          <div className="bg-red-300 w-10 h-1"></div>
          <div className="bg-purple-300 w-12 h-1"></div>
        </div>
      </div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/16hfqkg/123143440-183343230087043-2165664656976034618-n.jpg"
            class="rounded-lg shadow-2xl w-96"
            alt=""
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          />
          {/* about me  */}
          <div className="lg:w-3/6 lg:ml-10">
            <h1
              class="text-3xl text-white"
              style={{ fontFamily: "Poppins" }}
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              Who am i?
            </h1>
            <p
              class="py-6"
              style={{ fontFamily: "Poppins" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              I am Shahriar Rahman Heezol. And i am MERN Stack developer. On
              React & Node.js I completed more then 15 project. I have rich
              experience in both front end and back end development. I always
              try to be unique.
              <br /> <br />I got an internship in india they are web development
              company. I create a law website with them. Recently I started
              Freelancing on{" "}
              <a
                href="https://www.fiverr.com/shahriarrahmanh?up_rollout=true"
                className="text-red-300"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                fiver.com
              </a>
              . I am also available on{" "}
              <a
                className="text-red-300"
                href="https://www.linkedin.com/feed/"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                linkedin.com
              </a>
              .
            </p>
            <div>
              <h1
                class="text-3xl text-white"
                style={{ fontFamily: "Poppins" }}
                data-aos="zoom-in-up"
              >
                Personal Info
              </h1>
              <div className="grid gap-3 lg:grid-cols-2">
                <div className="flex my-5">
                  <div data-aos="zoom-in-right">
                    <img className="w-10" src={phone} alt="" />
                  </div>
                  <div className="text-start ml-3" data-aos="zoom-in-left">
                    <p class="" style={{ fontFamily: "Poppins" }}>
                      Phone
                    </p>
                    <p className="text-xs" style={{ fontFamily: "Poppins" }}>
                      +8801629249295
                    </p>
                  </div>
                </div>
                <div className="flex my-5">
                  <div data-aos="zoom-in-right">
                    <img className="w-10" src={location} alt="" />
                  </div>
                  <div className="text-start ml-3" data-aos="zoom-in-left">
                    <p class="" style={{ fontFamily: "Poppins" }}>
                      Location
                    </p>
                    <p className="text-xs" style={{ fontFamily: "Poppins" }}>
                      Tejgaon I/A, Dhaka 1208, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                <div className="flex my-5">
                  <div data-aos="zoom-in-right">
                    <img className="w-10" src={email} alt="" />
                  </div>
                  <div className="text-start ml-3" data-aos="zoom-in-left">
                    <p class="" style={{ fontFamily: "Poppins" }}>
                      Email
                    </p>
                    <p className="text-xs" style={{ fontFamily: "Poppins" }}>
                      shahriarrahmanheezol@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex my-5">
                  <div data-aos="zoom-in-right">
                    <img className="w-10" src={calender} alt="" />
                  </div>
                  <div className="text-start ml-3" data-aos="zoom-in-left">
                    <p class="" style={{ fontFamily: "Poppins" }}>
                      Birthday
                    </p>
                    <p className="text-xs">Nov 1, 2002</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What I do! */}
      <div>
        <h1
          className="text-3xl text-[#ffff] "
          style={{ fontFamily: "Poppins" }}
          class="text-3xl text-white"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          What i do!
        </h1>
        <div className="grid gap-3 lg:grid-cols-3 my-5 ">
          <div
            className="border-2 rounded-md border-slate-800 p-5 flex glass"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={webDev}
              className="w-10 h-12 mr-5"
              alt=""
              srcset=""
              data-aos="zoom-out-right"
            />
            <div data-aos="zoom-out-left">
              <h1 className="text-2xl text-white">Web Development</h1>
              <p style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit,{" "}
                <br /> sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div
            className="border-2 rounded-md border-slate-800 p-5 flex glass"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={app}
              className="w-11 h-12 mr-5"
              alt=""
              srcset=""
              data-aos="zoom-out-right"
            />
            <div data-aos="zoom-out-left">
              <h1 className="text-2xl text-white">App Development</h1>
              <p style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit,{" "}
                <br /> sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div
            className="border-2 rounded-md border-slate-800 p-5 flex glass"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={uiux}
              className="w-12 h-12 mr-5"
              alt=""
              srcset=""
              data-aos="zoom-out-right"
            />
            <div data-aos="zoom-out-left">
              <h1 className="text-2xl text-white">Ui/Ux Design</h1>
              <p style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit,{" "}
                <br /> sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div
            className="border-2 rounded-md border-slate-800 p-5 flex glass"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src={photography}
              className="w-10 h-12 mr-5"
              alt=""
              srcset=""
              data-aos="zoom-out-right"
            />
            <div data-aos="zoom-out-left">
              <h1 className="text-2xl text-white">Photography</h1>
              <p style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit,{" "}
                <br /> sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div
            className="border-2 rounded-md border-slate-800 p-5 flex glass"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src={settings}
              className="w-12 h-12 mr-5"
              alt=""
              srcset=""
              data-aos="zoom-out-right"
            />
            <div data-aos="zoom-out-left">
              <h1 className="text-2xl text-white">Managment</h1>
              <p style={{ fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit,{" "}
                <br /> sed diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel  */}
    </div>
  );
};

export default About;
