import React, {useEffect, useRef} from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaHackerrank, FaYoutube, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";



const Contact = () =>{

    useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in',
            delay: 100});
    },[])

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_az18ci9', 'template_adav6ic', e.target, 'DrGpzWOEz9bCkQAc9')
        .then((result) => {
            Swal.fire(
                'Successfully',
                'Your email has been Send!',
                'success'
              )
              e.target.reset();
        }, 
        (error) => {
            Swal.fire(
                'Error',
                'Your email has been not Send!',
                'error'
              )
        });
    };

    return(
        <>
        {/* Contact Heading */}
        <section id="contact">
        <div className="max-w-[500px] mx-auto p-5 text-center mt-8">

            <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-gray-800 font-serif">Contact-Us</h1>

            <div className="w-[250px] mx-auto flex flex-row gap-x-3 items-center">

            <div className="w-[50px] h-1 bg-gray-800 rounded-md ml-4 "></div>
               <h1 className="text-cyan-500 font-semibold">get in touch</h1>
               <div className="w-[50px] h-1 bg-gray-800 rounded-md"></div>
             </div>

        </div>

        {/* Contact Form */}
        
        <div className="w-full p-5 bg-cyan-700 overflow-hidden" >

            <div className="max-w-[1200px] mx-auto p-2  flex flex-col md:flex-row sm:space-y-[20px] md:space-x-[100px]">

                <div className="flex flex-col justify-between md:py-14" data-aos="fade-right">

                    <div className="text-white">
                      <h1 className="font-bold text-3xl tab:text-4xl tracking-wide">Get in touch</h1>
                      <p className="pt-2 text-cyan-100 text-sm font-medium tab:text-[20px] sm:leading-loose md:text-sm">Building a successful product is a challenge. 
                        I am highly energetic in user experience design, 
                        interfaces and web development.</p>
                    </div>
                    
                    <div className="flex flex-col gap-5 text-white sm:mt-8 md:mt-0 tab:text-[18px] md:text-sm">
                    <div className="inline-flex space-x-2 items-center">
                        <FaPhoneAlt/>
                        <span>+91 8433399250</span>
                    </div>

                    <div className="inline-flex space-x-2 items-center">
                        <FaEnvelope/>
                        <span>singhadityapratap370@gmail.com</span> 
                    </div>

                    <div className="inline-flex space-x-2 items-center">
                        <FaMapMarkerAlt/>
                        <span>Sahadatpura, Mau</span>
                    </div>
                    </div>
                
                    
                    <div className="flex flex-row gap-x-6 text-white text-2xl 
                    sm:mt-11 tab:text-3xl md:text-2xl tab:gap-x-8 md:gap-x-5">
                        
                    <a href = "https://www.linkedin.com/in/theaditya-pratap-singh/"><FaLinkedinIn/></a>

                    <a href = "https://github.com/git-aditya-pratap-singh"><FaGithub/></a>

                    <a href = "https://www.hackerrank.com/aditya_singh_20"><FaHackerrank/></a>

                    <a href = "https://www.youtube.com/c/CodingHubTech"><FaYoutube/></a>

                    <a href = "https://www.instagram.com/aditya_singh_rajpoot_2.0/"><FaInstagram/></a>

                    </div>
                
                </div>


                <div className="relative">
                    <div className="absolute z-0 w-40 h-40 rounded-full bg-teal-400 md:left-[350px] md:-top-20 
                    sm:left-[-50px] sm:top-[450px]"></div>

                    <div className="absolute z-0 w-40 h-40 rounded-full bg-teal-400 md:left-[10px] md:top-[450px] 
                    sm:left-[230px] sm:top-[-40px] tab:left-[670px]"></div>

                </div>

                <div className="relative z-10 bg-white rounded-xl shadow-lg sm:px-6 sm:py-8 tab:p-8 text-gray-600 md:w-250" data-aos="fade-left">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 text-gray-800">
                        <div>
                            <label for="" className="text-sm font-bold tab:text-[20px] md:text-sm">Your name</label>
            
                            <input type="text" 
                            name="user_name"
                            placeholder="Your name" 
                            required
                            autoComplete="off"
                            className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                        </div>

                        <div>
                            <label for="" className="text-sm font-bold tab:text-[20px] md:text-sm">Email Address</label>
                        
                            <input type="email"
                            name="user_email" 
                            placeholder="Email Address" 
                            required
                            autoComplete="off"
                            className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                        </div>

                        <div>
                            <label for="" className="text-sm font-bold tab:text-[20px] md:text-sm">Subject</label>
            
                            <input type="text" 
                            name="user_subject"
                            placeholder="Subject" 
                            autoComplete="off"
                            required
                            className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                        </div>

                        <div>
                            <label for="" className="text-sm font-bold tab:text-[20px] md:text-sm">Message</label>
                        
                            <textarea
                            placeholder="Message"
                            name="message" 
                            required
                            rows="4"
                            className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300">
                            </textarea>
                        </div>
                        
                        <input type="submit" value="Send Message" className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 tab:py-3 md:py-2
                        uppercase cursor-pointer text-sm tab:text-lg md:text-sm" />
                
                    </form>
                </div>
            </div>
        </div>

        {/* Footer Design */}

        <div className="w-full bg-slate-900 text-center items-center py-5 px-3">
            <h1 className=" text-white font-semibold text-sm tab:text-[20px] md:text-[16px]">Created By <span className="text-cyan-400">Aditya Pratap Singh</span> | ©️ 2023 All rights reserved.</h1>
        </div>
        </section>
       
        </>
    );
}

export default Contact;