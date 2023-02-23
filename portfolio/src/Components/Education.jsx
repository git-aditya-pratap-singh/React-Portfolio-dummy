import React, {useEffect} from 'react';
import {education} from'./Data';

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) =>{
    return(
        <>
        
        <div className="flex flex-row gap-10 mx-auto max-w-[500px] p-5" data-aos="fade-up" >
        
                <div className="w-3 h-3 p-2 mt-2 bg-gray-800 rounded-full drop-shadow-md"></div>
                

                <div className="flex flex-col">
                    <h1 className="font-bold text-[20px] tab:text-xl">{props.course}</h1>
                    <p className="text-cyan-600 font-semibold">{props.college}</p>
                    <p className="text-[14px]">Percentage : {props.percentage}%</p>
                    <p className="text-[14px]">{props.year}</p>
                    <p className="text-gray-500 text-[13px]">{props.summary}</p>
                </div>

                <div className="mt-0 w-[150px] ">
                    <img src={props.imgsrc} alt="Error" className="w-[50px]  mx-auto "/>
                </div>
        </div>

        </>
    );
}

const Education = () =>{

    useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in',
            delay: 100});
    },[])
    
    return(
        <>
        <section id="education"> 
        <div className="w-full mx-auto px-1">

            <div className="max-w-[500px] mx-auto p-5 text-center mt-7 md:mt-0">

                <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-gray-800 font-serif">Education</h1>

                <div className="max-w-[250px] mx-auto flex flex-row gap-x-3 items-center justify-evenly">

                    <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>
                        <h1 className="text-cyan-500 font-semibold">What I doing</h1>
                    <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>

                </div>

            </div>

            <div className="flex flex-col border-l-3">
          
            {
                education.map((val,index)=>{
                    return(
                        <>
                        <Card
                        key = {val.id}
                        course ={val.course}
                        college ={val.college}
                        percentage ={val.percentage}
                        year ={val.year}
                        summary = {val.summary}
                        imgsrc = {val.imgsrc}
                        />
                        </>
                    )
                })
            }
            
            </div>

        </div>
        </section>
        </>
    );
}
export default Education;