import React from 'react';
import { Link } from "react-router-dom";
import imgHome from '../../../asset/home.png'
import about from '../../../asset/user.png'
import resume from '../../../asset/curriculum.png'
import works from '../../../asset/role-playing.png'
import blogs from '../../../asset/bold.png'
import Contact from '../../../asset/contact.png'

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li className='flex items-center'>
      <img src={imgHome} className="h-10" alt="" />
        Home
      </li>
      <li className='flex items-center'>
      <img src={about} className="h-10" alt="" />
        About
      </li>
      <li className='flex items-center'>
      <img src={resume} className="h-10" alt="" />
        Resume
      </li>
      <li className='flex items-center'>
      <img src={works} className="h-10" alt="" />
        Works
      </li>
      <li className='flex items-center'>
      <img src={blogs} className="h-10" alt="" />
        Blogs
      </li>
      <li className='flex items-center'>
      <img src={Contact} className="h-10" alt="" />
        Contact
      </li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl"><span style={{fontFamily:"Pacifico"}}>H</span>eezo<span style={{fontFamily:"Pacifico"}}>L</span></a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <Link to="/">
      <li className='btn rounded flex items-center tracking-wider'>
      <img src={imgHome} className="h-10" alt="" />
        Home
      </li>
      </Link>
      <Link to="/about">
      <li className='btn rounded mx-5 flex items-center tracking-wider'>
      <img src={about} className="h-10" alt="" />
        About
      </li>
      </Link>
      <Link to="/resume">
      <li className='btn rounded flex items-center tracking-wider'>
      <img src={resume} className="h-10" alt="" />
        Resume
      </li>
      </Link>
      <Link to="/works">
      <li className='btn rounded mx-5 flex items-center tracking-wider'>
      <img src={works} className="h-10" alt="" />
        Works
      </li>
      </Link>
      <Link to="/blogs">
      <li className='btn rounded flex items-center tracking-wider'>
      <img src={blogs} className="h-10" alt="" />
        Blogs
      </li>
      </Link>
      <Link to="/contacts">
      <li className='btn rounded mx-5 flex items-center tracking-wider'>
      <img src={Contact} className="h-10 hover:bg-[#191d24]" alt="" />
        Contact
      </li>
      </Link>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;