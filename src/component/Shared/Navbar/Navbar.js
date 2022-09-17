import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineCodeSandbox , AiOutlineHome,AiOutlineContacts, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FaBloggerB } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div>
      <div class="navbar ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
               <Link to="/">
              <li className="">
                <button className="btn">
                <AiOutlineHome/>
                Home
                </button>
              </li>
            </Link>
            <Link to="/about">
              <li className=" rounded mx-5 flex items-center tracking-wider">
              <button className="btn">
              <AiOutlineUser />
                About
                </button>
              </li>
            </Link>
            <Link to="/skillsEducation">
              <li className=" rounded flex items-center tracking-wider">
              <button className="btn">
              <HiOutlineClipboardList />
              Skills & Education
                </button>
              </li>
            </Link>
            <Link to="/works">
              <li className=" rounded mx-5 flex items-center tracking-wider">
              <button className="btn">
              <AiOutlineCodeSandbox />
                Works
                </button>
              </li>
            </Link>
            <Link to="/blogs">
              <li className=" rounded flex items-center tracking-wider">
              <button className="btn">
                <FaBloggerB/>
                Blogs
                </button>
              </li>
            </Link>
            <Link to="/contacts">
              <li className=" rounded mx-5 flex items-center tracking-wider">
              <button className="btn">
                <AiOutlineContacts/>
                Contact
                </button>
              </li>
            </Link>
            </ul>
          </div>
          <h1 class="btn btn-ghost normal-case hidden lg:flex text-2xl text-blue-300 ">
            <span style={{ fontFamily: "Pacifico" }}>H</span>eezo
            <span style={{ fontFamily: "Pacifico" }}>L</span>
          </h1>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <Link to="/">
              <li className="">
                <button className="btn">
                <AiOutlineHome/>
                Home
                </button>
              </li>
            </Link>
            <Link to="/about">
              <li className=" rounded mx-5 flex items-center tracking-wider">
              <button className="btn">
              <AiOutlineUser />
                About
                </button>
              </li>
            </Link>
            <Link to="/skillsEducation">
              <li className=" rounded flex items-center tracking-wider">
              <button className="btn">
              <HiOutlineClipboardList />
              Skills & Education
                </button>
              </li>
            </Link>
            <Link to="/works">
              <li className=" rounded mx-5 flex items-center tracking-wider">
              <button className="btn">
              <AiOutlineCodeSandbox />
                Works
                </button>
              </li>
            </Link>
            <Link to="/blogs">
              <li className=" rounded flex items-center tracking-wider">
              <button className="btn">
                <FaBloggerB/>
                Blogs
                </button>
              </li>
            </Link>
            <Link to="/contacts">
              <li className=" rounded mx-5 flex items-center tracking-wider">
              <button className="btn">
                <AiOutlineContacts/>
                Contact
                </button>
              </li>
            </Link>
          </ul>
        </div>
          <h1 class="btn btn-ghost normal-case lg:hidden navbar-end text-xl text-blue-300 ">
            <span style={{ fontFamily: "Pacifico" }}>H</span>eezo
            <span style={{ fontFamily: "Pacifico" }}>L</span>
          </h1>
      </div>
    </div>
  );
};

export default Navbar;
