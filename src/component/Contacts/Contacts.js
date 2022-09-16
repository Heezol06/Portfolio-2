import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import phone from "../../asset/phone-call.png";
import email from "../../asset/email.png";
import map from "../../asset/map.png";
import swal from "sweetalert";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h21h2cn",
        "template_xqd0d55",
        form.current,
        "user_gMTsEXepOjxBr7dInIGlo"
      )
      .then(
        (result) => {
          swal(
            "Your Email Already Sent.",
            result.text,
            window.location.reload()
          );
        },
        (error) => {
          alert();
          swal("Error!", error.text, "error");
        }
      );
  };

  return (
    <div className="container mx-auto px-3 lg:px-20 py-5 mt-20">
      <div className="static">
        <h1 className="text-6xl	my-5 text-green-50" data-aos="fade-right">
          Contact
        </h1>
        <div
          className="flex absolute lg:left-28 animate-bounce"
          data-aos="fade-left"
          data-aos-duratio1="3000"
        >
          <div className="bg-green-300 w-11 h-1"></div>
          <div className="bg-red-300 w-10 h-1"></div>
          <div className="bg-purple-300 w-12 h-1"></div>
        </div>
      </div>
      {/* contact sections  */}
      <div className="my-20 lg:flex">
        {/* contact items  */}
        <div>
          <div className="flex bg-[#21004f] p-5 rounded-xl my-5">
            {/* icon */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <img src={phone} className="w-10" alt="" />
            </div>
            {/* numbers  */}
            <div className="ml-5" data-aos="zoom-out-left">
              <h1 className="text-xl text-white">Phone :</h1>
              <h1 className="text-xxl">+8801629249295</h1>
            </div>
          </div>
          <div className="flex bg-[#21004f] p-5 rounded-xl my-5">
            {/* icon */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <img src={email} className="w-10" alt="" />
            </div>
            {/* numbers  */}
            <div className="ml-5" data-aos="zoom-out-left">
              <h1 className="text-xl text-white">Email :</h1>
              <h1 className="text-xxl">shahriarrahmanheezol@gmail</h1>
            </div>
          </div>
          <div className="flex bg-[#21004f] p-5 rounded-xl my-5">
            {/* icon */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <img src={map} className="w-10" alt="" />
            </div>
            {/* numbers  */}
            <div className="ml-5" data-aos="zoom-out-left">
              <h1 className="text-xl text-white">Address :</h1>
              <h1 className="text-xxl">Tejgaon I/A, Dhaka 1208, Bangladesh</h1>
            </div>
          </div>
        </div>
        {/* contact via email  */}
        <div className="lg:mx-20 my-5 py-10 px-10 rounded-lg border-2">
          <form ref={form} onSubmit={sendEmail}>
            <h1
              className="text-2xl"
              data-aos="zoom-in"
              style={{ fontFamily: "Poppins" }}
            >
              <span data-aos="fade-up-left">
                I'm always open to discussing product{" "}
              </span>
              <br />{" "}
              <span className="text-white" data-aos="fade-up-right">
                design work or partnerships & Development
              </span>
            </h1>
            <div className="flex my-5">
              <input
                type="text"
                name="user_name"
                className="bg-transparent focus:outline-0 border-b-2 border-b-gray-100 w-full max-w-xs pb-2 mr-2"
                placeholder="Your name*"
                data-aos="zoom-out"
              />
              <input
                type="text"
                name="user_email"
                className="bg-transparent focus:outline-0 border-b-2 border-b-gray-100 w-full max-w-xs pb-2 mr-2"
                placeholder="Your email*"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              />
            </div>
            <textarea
              name="message"
              id=""
              cols="90"
              rows="4"
              placeholder="Your message*"
              className="
              bg-transparent
              focus:outline-0
              border-b-2
              border-b-gray-100
              pb-10
              my-6
              w-[100%]"
              data-aos="fade-up"
              data-aos-duration="1000"
            ></textarea>{" "}
            <br />
            <button class="btn btn-outline btn-secondary px-10 py-3"  data-aos="flip-down">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
