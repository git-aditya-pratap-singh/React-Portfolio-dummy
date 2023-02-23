import c from "./assest/c.png";
import java from "./assest/java.png";
import python from "./assest/python.png";
import html from "./assest/html.png";
import css from "./assest/css.png";
import tailwind from "./assest/tailwind.png";
import js2 from "./assest/js2.png";
import rect from "./assest/rect.png";
import php from "./assest/php.png";
import dj from "./assest/dj.png";
import sql from "./assest/sql.png";
import github from "./assest/github.png";
import vote from "./assest/vote.png";
import algo from "./assest/algo.png";
import ds from "./assest/ds.png";
import todo from "./assest/todo.png"
import weather from "./assest/weather.png";
import student from "./assest/student.png";

import bu from "./assest/bu.png";
import srmu from "./assest/srmu.png";
import tdic from "./assest/tdic.png";

/* Skills Data-Set */

const Data = [
    {
        id : 1,
        imgsrc : c,
    },
    {
        id: 2,
        imgsrc : java,
    },
    {
        id: 3,
        imgsrc: python,
    },
    {
        id: 4,
        imgsrc: html,
    },
    {
        id: 5,
        imgsrc: css,
    },
    {
        id: 6,
        imgsrc: tailwind,
    },
    {
        id: 7,
        imgsrc: js2,
    },
    {
        id: 8,
        imgsrc: rect,
    },
    {
        id: 9,
        imgsrc: php,
    },
    {
        id: 10,
        imgsrc: dj,
    },
    {
        id: 11,
        imgsrc: sql,
    },
    {
        id: 12,
        imgsrc: github,
    }
]


/* Project Data-set */

const projectData = [
    {
       id : 1,
       imgsrc : "https://user-images.githubusercontent.com/68802755/168081638-05a3933b-9f36-4c6f-98a4-581fd265123d.png",
       title : "Library Management System",
       details : "I have developed a library management system using Tkinter libraries in python. so all components are used in the library management system.",
       github : "https://github.com/git-aditya-pratap-singh/LibrarySystempython",
       youtube : "https://youtu.be/gfKtsv5npWY",
    },

    {
        id : 2,
        imgsrc : student,   
        title : "Student Management System",
        details : "I have developed students management system using PyQt5 libraries in python. so all components are used in Students management system",
        github : "https://github.com/git-aditya-pratap-singh/Student-management-System",
        youtube : "https://youtu.be/dVb0inSkKjA",
    },

    {
        id : 3,
        imgsrc : weather,
        title : "React Weather App",
        details : "I have developed Weather App using New Technology like Tailwind CSS and React. In this app you get relevant and all information from the weather. We get all the information in the Weather app through the Weather API.",
        github : "https://github.com/git-aditya-pratap-singh/React-Weather-App",
        youtube : "https://weatherapk2.netlify.app",
    },
    
    {
        id : 4,
        imgsrc : todo,
        title : "ToDo App",
        details : "I'm talking about the project being completed. As the data is stored locally, there is no data loss when refreshing the app as it uses JavaScript frontend library ReactJs and CSS framework Tailwindcss.",
        github : "https://github.com/git-aditya-pratap-singh/Todo_App_React",
        youtube : "https://todoappin.netlify.app/",
    },



    {
        id : 5,
        imgsrc : "https://user-images.githubusercontent.com/68802755/168384063-69377546-1e64-446d-a51d-b9e567081c59.png",
        title : "Simple Calculator",
        details : "I have developed Web Calculator using Python & PyQt5 Library and Performs Some task like as Addition, Substraction, Multiplication & Division etc.",
        github : "https://github.com/git-aditya-pratap-singh/Calculator-with-Python",
        youtube : "https://youtu.be/0swFdwO2YaU",
    },

    {
        id : 6,
        imgsrc : vote,
        title : "Online Voting System",
        details : "I have developed Online Voting System using fronted languages(HTML5,CSS,JavaScript) and Backend languages(PHP) and MySql Database.",
        github : "",
        youtube : "",
    },


]

/* Repositories Data-set */



const RepData = [
    {
        id : 1,
        imgsrc : ds,
        title : "Data Structure With Python",
        details : "All Data Structure concepts like Linked List, Stack, Queues, Tree, Graphs, and Heaps are included inside Repositories.",
        link : "https://github.com/git-aditya-pratap-singh/Data-Structure-with-Python",
    },

    {
        id : 2,
        imgsrc : algo,
        title : "Algorithms With Python",
        details : "Inside Repositories, All Algorithms like Searching, Sorting, and Greedy are included.",
        link : "https://github.com/git-aditya-pratap-singh/Algorithms-with-Python",
    },
]

const education = [
    {
        id : 1,
        course : "Master Of Computer Application (MCA)",
        college : "BundelKhand University, Jhansi",
        percentage : 74,
        year : "July 2021 - June 2023",
        summary : "Completed Master Of Computer Application from Bundelkhand University, Jhansi I got overall 74% in my MCA Degree.",
        imgsrc : bu

    },
    {
        id : 2,
        course : "Bachelor Of Computer Application (BCA)",
        college : "Shri Ramswaroop Memorial University, Lucknow",
        percentage : 64,
        year : "July 2018 - June 2021",
        summary : "Completed Bachelor Of Computer Application from Shri Ramswaroop Memorial university, Lucknow I got overall 64% in my BCA Degree.",
        imgsrc : srmu
    },
    {
        id : 3,
        course : "Intermediate",
        college : "Tileshwari Devi Intermediate College, Ballia",
        percentage : 90,
        year : "July 2016 - June 2017",
        summary : "Completed Intermediate from TDI College, Ballia I got overall 90% in Board.",
        imgsrc : tdic
    },
    {
        id : 4,
        course : "High School",
        college : "Tileshwari Devi Intermediate College, Ballia",
        percentage : 88,
        year : "July 2014 - June 2015",
        summary : "Completed Higher Education from TDI College, Ballia I got overall 88% in Board.",
        imgsrc : tdic
    }
]

export default Data;
export {projectData};
export {RepData};
export {education};