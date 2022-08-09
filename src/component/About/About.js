import React from 'react';
import phone from '../../asset/hand-phone.png'
import location from '../../asset/placeholder.png'
import email from '../../asset/email.png'
import calender from '../../asset/calendar.png'

const About = () => {
    return (
        <div className='container mx-auto px-3 lg:px-20'>
            <div className='static'>
            <h1 className='text-6xl	my-5 text-green-50'>About Me</h1>
            <div className='flex absolute left-36 top-36 animate-bounce'>
                <div className='bg-green-300 w-11 h-2'></div>
                <div className='bg-red-300 w-10 h-2'></div>
                <div className='bg-purple-300 w-12 h-2'></div>
            </div>
            </div>
            {/* <div className='grid lg:grid-cols-2'>
                <div className=''>
                <img className='rounded-2xl mx-auto' src="https://bostamireact.ibthemespro.com/static/media/about.01c11c889888a40123f4.jpg" alt="" />
                </div>
                <div className='ml-10'>
                    <h1 className='text-3xl text-gray-50 mb-5'>About Me</h1>
                    <p style={{fontFamily:"Poppins"}}>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                    <p style={{fontFamily:"Poppins"}} className="my-5">My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                    <h1 className='text-3xl text-gray-50 mb-5'>Personal Info</h1>
                </div>
            </div> */}

<div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" class="rounded-lg shadow-2xl" alt='' />
    <div className='lg:w-3/6 ml-10'>
      <h1 class="text-3xl text-white" style={{fontFamily:"Poppins"}}>Who am i?</h1>
      <p class="py-6" style={{fontFamily:"Poppins"}}>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
      <br /> <br />
      My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
      <div>
      <h1 class="text-3xl text-white" style={{fontFamily:"Poppins"}}>Personal Info</h1>
      <div className="gird lg:grid-cols-2">
      <div className='flex my-5'>
        <div>
            <img className='w-10' src={phone} alt="" />
        </div>
        <div className='text-start ml-3'>
        <p class="" style={{fontFamily:"Poppins"}}>
            Phone
        </p>
        <p className='text-xs' style={{fontFamily:"Poppins"}}>+123 456 7890</p>
        </div>
      </div>
      <div className='flex my-5'>
        <div>
            <img className='w-10' src={location} alt="" />
        </div>
        <div className='text-start ml-3'>
        <p class="" style={{fontFamily:"Poppins"}}>
            Location
        </p>
        <p className='text-xs' style={{fontFamily:"Poppins"}}>Tejgaon I/A, Dhaka 1208, Bangladesh</p>
        </div>
      </div>
      </div>
      <div className="gird lg:grid-cols-2">
      <div className='flex my-5'>
        <div>
            <img className='w-10' src={email} alt="" />
        </div>
        <div className='text-start ml-3'>
        <p class="" style={{fontFamily:"Poppins"}}>
            Email
        </p>
        <p className='text-xs' style={{fontFamily:"Poppins"}}>shahriarrahmanheezol@gmail.com</p>
        </div>
      </div>
      <div className='flex my-5'>
        <div>
            <img className='w-10' src={phone} alt="" />
        </div>
        <div className='text-start ml-3'>
        <p class="" style={{fontFamily:"Poppins"}}>
            Birthday
        </p>
        <p className='text-xs'>Nov 1, 2002</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default About;