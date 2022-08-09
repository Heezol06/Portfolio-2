import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto'>
            <div className='static'>
            <h1 className='text-6xl	m-5 text-green-50'>About Me</h1>
            <div className='flex absolute left-20 top-36 animate-bounce'>
                <div className='bg-green-300 w-11 h-2'></div>
                <div className='bg-red-300 w-10 h-2'></div>
                <div className='bg-purple-300 w-12 h-2'></div>
            </div>
            </div>
            <div className='flex'>
                <div className=''>
                <img className='rounded-lg' src="https://bostamireact.ibthemespro.com/static/media/about.01c11c889888a40123f4.jpg" alt="" />
                </div>
                <div className='ml-10'>
                    <h1 className='text-3xl text-gray-50 mb-5'>About Me</h1>
                    <p style={{fontFamily:"Poppins"}}>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                    <p style={{fontFamily:"Poppins"}} className="my-5">My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                    <h1 className='text-3xl text-gray-50 mb-5'>Personal Info</h1>
                </div>
            </div>
        </div>
    );
};

export default About;