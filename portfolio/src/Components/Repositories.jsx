import React, {useEffect} from "react";
import { FaGithub } from "react-icons/fa";
import { RepData } from "./Data";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";


const RepCards = (props) => {
    return(
        <>
            <div className="bg-gray-200 p-5 flex flex-col md:flex-row items-center gap-5 rounded-lg shadow-lg" data-aos="flip-right">
                <img src={props.imgsrc} alt="Error!" className="rounded-[50px] drop-shadow-2xl w-[100px] "/>

                <div className="flex flex-col  items-center text-center">
                   <h1 className="text-2xl tab:text-3xl md:text-2xl text-gray-800 font-bold ">{props.title}</h1>
                   <p className="mt-2 text-[14px] tab:text-[18px] md:text-[14px] font-semibold">{props.detail}</p>
                    <a href = {props.link}><FaGithub size="25" className="text-gray-800 mt-3"/></a>
                </div>
            </div>
        </>
    );
}

const Repositories = () => {

    useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in',
            delay: 100});
    },[])

    return(
        <>

        {/* Repositories Heading */}

        <section id="reposit">
        <div className="max-w-[500px] mx-auto p-5 text-center mt-8">

            <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-gray-800 font-serif">Repositories</h1>

            <div className="w-[250px] mx-auto flex flex-row gap-x-3 items-center">

                <div className="w-[50px] h-1 bg-gray-800 rounded-md ml-3"></div>
                <h1 className="text-cyan-500 font-semibold">Who I Provide</h1>
                <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>

            </div>

        </div>


        {/* Repositories Design */}

        <div className="max-w-[1200px] mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-5 " >
            {
                RepData.map((val) => {
                    return(
                        <>
                          <RepCards
                          key = {val.id}
                          imgsrc = {val.imgsrc}
                          title = {val.title}
                          detail = {val.details}
                          link = {val.link}
                          />
                        </>
                    );
                })
            }
        </div>
        </section>
        </>
    );
}

export default Repositories;