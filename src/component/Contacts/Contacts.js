import React from "react";
import phone from "../../asset/phone-call.png";
import email from "../../asset/email.png";
import map from "../../asset/map.png";

const Contacts = () => {
  return (
    <div className="container mx-auto px-3 lg:px-20 py-5 mt-20">
      <div className="static">
        <h1 className="text-6xl	my-5 text-green-50">Contact</h1>
        <div className="flex absolute left-28 animate-bounce">
          <div className="bg-green-300 w-11 h-2"></div>
          <div className="bg-red-300 w-10 h-2"></div>
          <div className="bg-purple-300 w-12 h-2"></div>
        </div>
      </div>
      {/* contact sections  */}
      <div className="my-20 flex">
        {/* contact items  */}
        <div>
          <div className="flex bg-[#21004f] p-5 rounded-xl my-5">
            {/* icon */}
            <div>
              <img src={phone} className="w-10" alt="" />
            </div>
            {/* numbers  */}
            <div className="ml-5">
              <h1 className="text-xl text-white">Phone :</h1>
              <h1 className="text-xxl">+8801629249295</h1>
            </div>
          </div>
          <div className="flex bg-[#21004f] p-5 rounded-xl my-5">
            {/* icon */}
            <div>
              <img src={email} className="w-10" alt="" />
            </div>
            {/* numbers  */}
            <div className="ml-5">
              <h1 className="text-xl text-white">Email :</h1>
              <h1 className="text-xxl">shahriarrahmanheezol@gmail</h1>
            </div>
          </div>
          <div className="flex bg-[#21004f] p-5 rounded-xl my-5">
            {/* icon */}
            <div>
              <img src={map} className="w-10" alt="" />
            </div>
            {/* numbers  */}
            <div className="ml-5">
              <h1 className="text-xl text-white">Address :</h1>
              <h1 className="text-xxl">Tejgaon I/A, Dhaka 1208, Bangladesh</h1>
            </div>
          </div>
        </div>
        {/* contact via email  */}
        <div className="mx-20 my-5 py-10 px-10 rounded-lg border-2">
          <div>
            <h1 className="text-2xl" style={{ fontFamily: "Poppins" }}>
              I'm always open to discussing product <br />{" "}
              <span className="text-white">design work or partnerships.</span>
            </h1>
            <div className="flex my-5">
              <input
                type="text"
                className="bg-transparent focus:outline-0 border-b-2 border-b-gray-100 w-full max-w-xs pb-2 mr-2"
                placeholder="Your name*"
              />
              <input
                type="text"
                className="bg-transparent focus:outline-0 border-b-2 border-b-gray-100 w-full max-w-xs pb-2 mr-2"
                placeholder="Your email*"
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
              my-6"
            ></textarea>
            <button class="btn btn-outline btn-secondary px-10 py-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
