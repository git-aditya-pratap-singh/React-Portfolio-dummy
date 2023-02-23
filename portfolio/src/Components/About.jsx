import React, {useEffect} from "react";
import Typed from 'react-typed';
import about from "./assest/abous.png";
import { RiDownloadCloudFill} from "react-icons/ri";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in',
            delay: 100});
    },[])

    return(
        <>

        {/* About Design */}
        <section id="about" className="sm:mb-[-50px] md:mb-[110px] overflow-hidden">
        <div className="max-w-[500px] mx-auto p-5 text-center mt-7 md:mt-0">

            <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-gray-800 font-serif">About Us</h1>

            <div className="w-[200px] mx-auto flex flex-row gap-x-3 items-center">

                <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>
                <h1 className="text-cyan-500 font-semibold">Who I am</h1>
                <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>

            </div>
            
        </div>


        <div className="max-w-[1220px] mx-auto flex flex-col md:flex-row mt-[-30px] md:my-9  md:gap-x-[130px] p-5" >

            <div className="basis-[20%] md:basis-[35%] bg-contain rounded-[50px] md:drop-shadow-2xl items-center mx-auto" data-aos="fade-right">
                <img src={about} alt="Error!" className="rounded-[50px] tab:w-[500px] md:w-[400px]"/>
            </div>

            <div className="basis-[50%] p-4 text-justify md:mt-[6%] tab:mt-3" data-aos="fade-left">

                 <h1 className="font-bold text-[25px] md:text-2xl tab:text-[33px] text-gray-800 text-left">Hey, I'm Aditya and I'm a 
                 
                 <Typed
                        className="text-cyan-500"
                        strings={[' Python Developer', ' React Developer', ' django Developer', ' Full-Stack Developer']}
                        typeSpeed={130}
                        backSpeed={180}
                        loop
                    />

                 </h1>
                 <p className="mt-3 tab:text-2xl tab:leading-9 md:text-[16px] md:leading-6">I'm Aditya Pratap Singh from Mau, and I'm pursuing MCA from Bundelkhand University, Jhansi. 
                 I'm looking for opportunities as a Software Developer and Full-stack Web Developer.
                 if you feel that I'm eligible for your job post so please you can contact me at <span className="font-bold text-cyan-500">
                    singhadityapratap370@gmail.com</span></p>

                <a download="Resume_AdityaSingh.pdf" href="Resume.pdf"><button className='w-[350px] rounded-md flex flex-row items-center gap-1 
                    font-medium  mx-auto my-5 py-3 text-white px-1
                     bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[17px] 
                     sm:w-[150px] tab:mx-[42%] md:mx-0'><RiDownloadCloudFill className="ml-2"/>Download CV</button></a>

            </div>

        </div>
        </section>
        </>
    );
}

export default About;