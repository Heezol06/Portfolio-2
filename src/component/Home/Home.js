import React from 'react';
import facebook from '../../asset/facebook (1).png'
import twiter from '../../asset/twitter (1).png'
import git from '../../asset/github.png'
import linkedin from '../../asset/linkedin (1).png'
import instagram from '../../asset/instagram.png'
import download from '../../asset/down-arrow.png'

const Home = () => {
    return (
        <div className='flex justify-center items-center my-10 flex-col leading-8'>
            <div className='flex justify-center items-center flex-col'>
            <div className='w-56 h-56 rounded-full'>
                <img className='rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
            </div>
            <h1 className='text-5xl font-bold mt-5 text-white'>Shahriar Rahman Heezol</h1>
            <p className='my-5 animate-bounce' style={{fontFamily:"Poppins"}}>MERN Stack Developer</p>
            </div>
            <div>
            <button class="btn glass">
                <img className='w-10' src={facebook} alt="" srcset="" />
            </button>
            <button class="btn glass mx-2">
                <img className='w-10' src={twiter} alt="" srcset="" />
            </button>
            <button class="btn glass mx-2">
                <img className='w-10' src={git} alt="" srcset="" />
            </button>
            <button class="btn glass">
                <img className='w-10' src={linkedin} alt="" srcset="" />
            </button>
            <button class="btn glass mx-2">
                <img className='w-10' src={instagram} alt="" srcset="" />
            </button>
            </div>
            <button class="btn btn-active btn-accent my-5"><img className='w-10' src={download} alt="" /> Download CV </button>
        </div>
    );
};

export default Home;