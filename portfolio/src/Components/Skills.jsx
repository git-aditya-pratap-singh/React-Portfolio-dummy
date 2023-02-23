import React from "react";
import Data from "./Data";

const Pic = (props) => {
    return(
        <>
        <div className="shadow-lg rounded overflow-hidden md:h-[180px]">
            <img src={props.imgsrc} alt="Error!" className="hover:scale-125 duration-1000"/>
        </div>
        </>
    );
}

const Skiils = () =>{
   
    return(
        <>
           
           {/* Skills Heading */}

           <section id="skill">
           <div className="max-w-[500px] mx-auto p-5 text-center mt-8">

               <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-gray-800 font-serif">Skills</h1>

               <div className="w-[250px] mx-auto flex flex-row gap-x-3 items-center">

                    <div className="w-[50px] h-1 bg-gray-800 rounded-md ml-4"></div>
                    <h1 className="text-cyan-500 font-semibold">Who I Know</h1>
                    <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>

                </div>

            </div>

            {/* Skills section */}

            <div className="max-w-[1220px] mx-auto p-5 md:mt-4 grid tab:grid-cols-2 md:grid-cols-4 gap-5" >

                {Data.map((val) => {
                    return(
                    <Pic 
                       key = {val.id}
                       imgsrc = {val.imgsrc}
                    />
                   )

                })}

            </div>
            </section>
        </>
    );
}

export default Skiils;