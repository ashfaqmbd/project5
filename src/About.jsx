import React from 'react';
//import  './index.css';
import web from "../src/images/hero-img.png";
import Common from './Common';


const About = () => {
    return(
        <>
        <Common name="Thank you for your visit to" 
        imgsrc={web} 
        visit="/contact"
         btname="Contact Now"
         />
        </>
    );
};

export default About;