import React from "react";
import { projectData } from "./Data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper";

import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";
//import { IconName } from "react-icons/gi";
//import { IoEarth } from "react-icons/io";


const Projectscards = (props) =>{
 
    return(
        <>
        <div className="w-[300px] tab:w-[360px] md:w-[300px] bg-neutral-800 rounded-md shadow-lg mx-auto ">

            <div className="p-2 overflow-hidden">
                 <img src={props.image} alt="Error!" className="rounded-md "/>
            </div>
            
            <h1 className="text-white text-center text-2xl tab:text-3xl md:text-2xl p-2 font-semibold">{props.title}</h1>

            <p className="text-white text-[13px] tab:text-[19px] md:text-[13px]  text-justify px-5 pt-2">{props.detail}</p>

            <div className="max-w-[80px] flex flex-row gap-8  mx-auto py-5">
                   
                    <a href = {props.github}><FaGithub size="20" className="text-white"/></a>

                    {props.id === 0 || props.id === 1 ? (<a href = {props.youtube}><FaYoutube size="20" className="text-white"/></a>):
                    (<a href = {props.youtube}><FaGlobe size="20" className="text-white"/></a>)}
                    
                   
                    
            </div>

        </div>
         
        </>
    );
}

const Projects = (props) => {
    return(
        <>

        {/* Projects Heading */}
        <section id="project">
        <div className="max-w-[500px] mx-auto p-5 text-center mt-8">

            <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-gray-800 font-serif">Projects</h1>

            <div className="w-[250px] mx-auto flex flex-row gap-x-3 items-center">

                <div className="w-[50px] h-1 bg-gray-800 rounded-md ml-2"></div>
                <h1 className="text-cyan-500 font-semibold">Who I Provide</h1>
                <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>

            </div>

        </div>

        {/* Projects Cards */}

        
            <div className="max-w-[90%] mx-auto p-3 flex flex-row mt-[25px]  place-items-center" >
              <Swiper
              freeMode={true}
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
               
               breakpoints={{
                "0":{
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                "600":{
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "1280":{
                  slidesPerView: 3,
                  spaceBetween: 10,
                }
             }}
              >

              
              {
                projectData.map((val,index) => {
                   return(
                    <>
                      <SwiperSlide>
                          <Projectscards
                            key = {val.id}
                            id = {index}
                            image = {val.imgsrc}
                            title = {val.title}
                            detail = {val.details}
                            github = {val.github}
                            youtube = {val.youtube}
                          />
                      </SwiperSlide>
                      

                    </>
                   );
                })

              }

              </Swiper>  
            </div>
            </section>
        
        </>
    );
}
export default Projects;