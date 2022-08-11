import React from 'react';
import education from "../../asset/graduation-cap.png"
import work from "../../asset/suitcase.png"
import award from "../../asset/medal.png"

const Resume = () => {
    return (
        <div className="container mx-auto px-3 lg:px-20 py-5 mt-20">
      <div className="static">
        <h1 className="text-6xl	my-5 text-green-50">Resume</h1>
        <div className="flex absolute left-28 animate-bounce">
          <div className="bg-green-300 w-11 h-2"></div>
          <div className="bg-red-300 w-10 h-2"></div>
          <div className="bg-purple-300 w-12 h-2"></div>
        </div>
        <div className='grid lg:grid-cols-3 gap-5 justify-between	'>
            {/* Education */}
            <div>  
        <div className='flex items-center mt-10'>
            <img src={education} className="w-10 mr-5" alt="" />
            <h1 className='text-2xl text-white' style={{fontFamily:"Poppins"}}>
            Education
            </h1>
        </div>
        <div className='border-2 my-10 p-5 rounded-lg glass'>
            <p>2018-2022</p>
            <h1 className='text-xl text-white'>Diploma in Electronics</h1>
            <p style={{fontFamily:"Poppins"}}>Dhaka Polytechnic Institute, Dhaka, Bangladesh</p>
        </div>
        <div className='border-2 my-10 p-5 rounded-lg glass'>
            <p>2017-2018</p>
            <h1 className='text-xl text-white'>Secondary School Certificate</h1>
            <p style={{fontFamily:"Poppins"}}>Andharia High School, Sherpur, Bangladesh</p>
        </div>
            </div>
            {/* Experience */}
            <div>  
        <div className='flex items-center mt-10'>
            <img src={work} className="w-10 mr-5" alt="" />
            <h1 className='text-2xl text-white' style={{fontFamily:"Poppins"}}>
            Experience
            </h1>
        </div>
        <div className='border-2 my-10 p-5 rounded-lg glass'>
            <p>March,2022-June,2022</p>
            <h1 className='text-xl text-white'>Electrical Installation & Maintenance </h1>
            <p style={{fontFamily:"Poppins"}}>Bangladesh Industrial Technical Assistance Centre, Dhaka, Bangladesh</p>
        </div>
        <div className='border-2 my-10 p-5 rounded-lg glass'>
            <p>July,2022</p>
            <h1 className='text-xl text-white'>Web Development Internship</h1>
            <p style={{fontFamily:"Poppins"}}>RaiBhiLo Consultancy LLP, Indira Nagar, Lucknow, India</p>
        </div>
            </div>
            {/* Award */}
            <div>  
        <div className='flex items-center mt-10'>
            <img src={award} className="w-10 mr-5" alt="" />
            <h1 className='text-2xl text-white' style={{fontFamily:"Poppins"}}>
            Award
            </h1>
        </div>
        <div className='border-2 my-10 p-5 rounded-lg glass'>
            <p>2020-2022</p>
            <h1 className='text-xl text-white'>Full Stack Web Development</h1>
            <p style={{fontFamily:"Poppins"}}>Programming Hero</p>
            <br />
        </div>
        <div className='border-2 my-10 p-5 rounded-lg glass'>
            <p>2021-2022</p>
            <h1 className='text-xl text-white'>React Native App Development</h1>
            <p style={{fontFamily:"Poppins"}}>Programming Hero</p>
            <br />
        </div>
            </div>
        </div>
        <div>
            <h1 className='text-2xl text-white' style={{fontFamily:"Poppins"}}>knowledge's</h1>
            <div className="flex my-7">
                <h1 className="bg-slate-800 px-4 py-3 mr-5 rounded-sm text-white">Web Development</h1>
                <h1 className="bg-slate-800 px-4 py-3 mr-5 rounded-sm text-white">App Development</h1>
                <h1 className="bg-slate-800 px-4 py-3 mr-5 rounded-sm text-white">UI/UX Design</h1>
                <h1 className="bg-slate-800 px-4 py-3 mr-5 rounded-sm text-white">Photoshope</h1>
                <h1 className="bg-slate-800 px-4 py-3 mr-5 rounded-sm text-white">Management</h1>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Resume;