import React from "react";
import Typed from 'react-typed';
import { FaHackerrank, FaYoutube, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import banner from "./assest/banner.png";



const Header = () => {
   

    return(
        <>
         {/* Banner Design */}
         
         <section id="home">
         <div className="max-w-[1400px] mx-auto py-5 flex flex-col md:flex-row md:py-[20px] overflow-hidden" >
            
            <div className="basis-[50%]">

                <div className="p-5 my-[10px] md:my-[110px]  md:leading-relaxed font-sans">

                    <h1 className="font-bold text-gray-700 md:text-3xl md:my-5 sm:text-2xl sm:my-3 
                    tab:text-4xl tab:my-5 tab:text-center md:text-left font-[Lora]"><span className="italic">Hello,</span> my name is</h1>

                    <h2 className="font-bold text-cyan-500 md:text-6xl md:my-5 sm:text-[32px] sm:my-3 
                    tab:text-6xl tab:my-5 tab:text-center md:text-left font-['Roboto Slab',serif] ">Aditya Pratap Singh</h2>

                    <h1 className="font-bold text-gray-700 md:text-3xl md:my-5 sm:text-2xl sm:my-3 
                    tab:text-4xl tab:my-5 tab:text-center md:text-left font-[Lora] ">I'm a  
                    
                    <Typed
                        className="text-cyan-500 font-sans"
                        strings={[' Python Developer', ' React Developer', ' django Developer', ' Full-Stack Developer']}
                        typeSpeed={80}
                        backSpeed={60}
                        loop
                    />
                    </h1>

                    <a href="https://www.linkedin.com/in/theaditya-pratap-singh/"><button className='w-[200px] rounded-md 
                    font-medium my-5 py-3 text-white flex flex-row items-center gap-1 px-7 cursor-pointer
                     bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[18px] sm:w-[150px] tab:mx-[42%] md:mx-0 '>
                        <BsLinkedin/>Hire me</button></a>

                  <div className="max-w-[300px] flex flex-row gap-8 mt-5 md:mt-10 tab:mx-[35%] md:ml-0">

                    <a href = "https://www.linkedin.com/in/theaditya-pratap-singh/">
                       <FaLinkedinIn size="25" className="text-cyan-500 "/>
                    </a>

                    <a href = "https://github.com/git-aditya-pratap-singh"><FaGithub size="25" className="text-cyan-500"/></a>

                    <a href = "https://www.hackerrank.com/aditya_singh_20"><FaHackerrank size="25" className="text-cyan-500"/></a>

                    <a href = "https://www.youtube.com/c/CodingHubTech"><FaYoutube size="25" className="text-cyan-500"/></a>

                    <a href = "https://www.instagram.com/aditya_singh_rajpoot_2.0/"><FaInstagram size="25" className="text-cyan-500"/></a>

                   
                  </div>

                </div>  
            
            </div>
        
            <div className="basis-[50%] md:py-[60px]">
               <img src={banner} alt="Error" />
            </div>

        </div>
        </section>
        </>
    );
}
export default Header;