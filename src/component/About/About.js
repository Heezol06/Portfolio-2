import React from "react";
import phone from "../../asset/hand-phone.png";
import location from "../../asset/placeholder.png";
import email from "../../asset/email.png";
import calender from "../../asset/calendar.png";
import webDev from "../../asset/code.png";
import app from "../../asset/development.png"
import uiux from "../../asset/ui.png"
import photography from "../../asset/photography.png"
import settings from "../../asset/settings.png"

const About = () => {
  return (
    <div className="container mx-auto px-3 lg:px-20 py-5 mt-20">
      <div className="static">
        <h1 className="text-6xl	my-5 text-green-50">About Me</h1>
        <div className="flex absolute left-36 top- animate-bounce">
          <div className="bg-green-300 w-11 h-2"></div>
          <div className="bg-red-300 w-10 h-2"></div>
          <div className="bg-purple-300 w-12 h-2"></div>
        </div>
      </div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/16hfqkg/123143440-183343230087043-2165664656976034618-n.jpg"
            class="rounded-lg shadow-2xl w-96"
            alt=""
          />
          {/* about me  */}
          <div className="lg:w-3/6 ml-10">
            <h1 class="text-3xl text-white" style={{ fontFamily: "Poppins" }}>
              Who am i?
            </h1>
            <p class="py-6" style={{ fontFamily: "Poppins" }}>
              I'm Creative Director and UI/UX Designer from Bangladesh,
              working in web development. I enjoy turning
              complex problems into simple, beautiful and intuitive designs.
              <br /> <br />
              My aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand
              companies.
            </p>
            <div>
              <h1 class="text-3xl text-white" style={{ fontFamily: "Poppins" }}>
                Personal Info
              </h1>
              <div className="grid gap-3 lg:grid-cols-2">
                <div className="flex my-5">
                  <div>
                    <img className="w-10" src={phone} alt="" />
                  </div>
                  <div className="text-start ml-3">
                    <p class="" style={{ fontFamily: "Poppins" }}>
                      Phone
                    </p>
                    <p className="text-xs" style={{ fontFamily: "Poppins" }}>
                      +123 456 7890
                    </p>
                  </div>
                </div>
                <div className="flex my-5">
                  <div>
                    <img className="w-10" src={location} alt="" />
                  </div>
                  <div className="text-start ml-3">
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
                  <div>
                    <img className="w-10" src={email} alt="" />
                  </div>
                  <div className="text-start ml-3">
                    <p class="" style={{ fontFamily: "Poppins" }}>
                      Email
                    </p>
                    <p className="text-xs" style={{ fontFamily: "Poppins" }}>
                      shahriarrahmanheezol@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex my-5">
                  <div>
                    <img className="w-10" src={calender} alt="" />
                  </div>
                  <div className="text-start ml-3">
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
                <h1 className="text-3xl text-[#ffff] " style={{fontFamily:"Poppins"}}>What i do!</h1>
                <div className="grid gap-3 lg:grid-cols-3 my-5 ">
                  <div className="border-2 rounded-md border-slate-800 p-5 flex glass">
                    <img src={webDev} className="w-10 h-12 mr-5" alt="" srcset="" />
                    <div>
                          <h1 className="text-2xl text-white">Web Development</h1>
                          <p style={{fontFamily:"Poppins"}}>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit, <br /> sed diam euismod volutpat.</p>
                    </div>                  
                  </div>
                  <div className="border-2 rounded-md border-slate-800 p-5 flex glass">
                    <img src={app} className="w-11 h-12 mr-5" alt="" srcset="" />
                    <div>
                          <h1 className="text-2xl text-white">App Development</h1>
                          <p style={{fontFamily:"Poppins"}}>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit, <br /> sed diam euismod volutpat.</p>
                    </div>                  
                  </div>
                  <div className="border-2 rounded-md border-slate-800 p-5 flex glass">
                    <img src={uiux} className="w-12 h-12 mr-5" alt="" srcset="" />
                    <div>
                          <h1 className="text-2xl text-white">Ui/Ux Design</h1>
                          <p style={{fontFamily:"Poppins"}}>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit, <br /> sed diam euismod volutpat.</p>
                    </div>                  
                  </div>
                  <div className="border-2 rounded-md border-slate-800 p-5 flex glass">
                    <img src={photography} className="w-10 h-12 mr-5" alt="" srcset="" />
                    <div>
                          <h1 className="text-2xl text-white">Photography</h1>
                          <p style={{fontFamily:"Poppins"}}>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit, <br /> sed diam euismod volutpat.</p>
                    </div>                  
                  </div>
                  <div className="border-2 rounded-md border-slate-800 p-5 flex glass">
                    <img src={settings} className="w-12 h-12 mr-5" alt="" srcset="" />
                    <div>
                          <h1 className="text-2xl text-white">Managment</h1>
                          <p style={{fontFamily:"Poppins"}}>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit, <br /> sed diam euismod volutpat.</p>
                    </div>                  
                  </div>
                </div>
      </div>
      {/* Carousel  */}
      
    </div>
  );
};

export default About;
