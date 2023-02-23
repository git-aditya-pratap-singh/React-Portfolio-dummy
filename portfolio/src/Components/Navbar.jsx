import React, {useState} from "react";
import logo from "./assest/logo.png";
import {Link} from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome,FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaPhoneAlt, FaUserGraduate, FaProjectDiagram  } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
//import { HiSquaresPlus } from "react-icons/hi";

//import { HashLink as Link } from "react-router-hash-link";

const Navbar = () =>{

  const [toggle, setToggle] = useState(false);
  
    
    return(
        <>
         {/* Navbar Design */}
          
          <div className="w-full bg-slate-50 shadow-md p-3">

            <div className="max-w-[1450px] mx-auto flex justify-between items-center px-[20px]">

            <div className="text-2xl font-bold text-cyan-500 flex items-center gap-3">
                    <img src={logo} alt="Error" className="w-[50px] md:w-[50px]"/>
                    <h1>Portfo<span className="text-red-500">lio.</span></h1>
            </div>

            {
                    toggle?
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-2xl block md:hidden"/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-2xl block md:hidden"/>
            }

            <ul className="hidden md:flex text-gray-800 font-semibold gap-12 items-center">

                    <li className="hover:text-cyan-500 ease-in duration-300 break-before-column cursor-pointer ">
                        <Link to="home" smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaHome/>Home</Link>
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <Link to="about" smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaUserAlt/>About-Us</Link>
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <Link to="skill" smooth={true} duration={800} className="flex flex-row items-center gap-1"><GiSkills/>Skills</Link>
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <Link to="education" smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaUserGraduate/>Education</Link>
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <Link to="project" smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaProjectDiagram/>Projects</Link>
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <Link to="reposit" smooth={true} duration={800} className="flex flex-row items-center gap-1"><FiCodepen/>Repositories</Link>                  
                    </li>

                    <li className="hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                        <Link to="contact" smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaPhoneAlt/>Contact</Link>
                    </li>
            </ul>

            {/* Mobile/tab Menu bar*/}

            <ul className={`block duration-300 md:hidden w-full text-center absolute bg-slate-50 shadow-lg rounded-b-lg
             top-0 left-0 text-gray-800 font-semibold transition-all-duration-500 ease-in-out border-t-2
             ${toggle? 'top-[74px]':'top-[-100%]'}
             `}>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="home" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaHome/>Home</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="about" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaUserAlt/>About-Us</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="skill" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><GiSkills/>Skills</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="education" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaUserGraduate/>Education</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="project" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaProjectDiagram/>Projects</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="reposit" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><FiCodepen/>Repositories</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-cyan-500 ease-in duration-300 cursor-pointer">
                       <Link to="contact" onClick={() => setToggle(false)} smooth={true} duration={800} className="flex flex-row items-center gap-1"><FaPhoneAlt/>Contact</Link>
                    </li>
            </ul>

            
            </div>
          </div>
        </>
    );
}
export default Navbar;