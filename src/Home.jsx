import React from 'react';
//import  './index.css';
import web from "../src/images/developers.png";
import Common from './Common';


const Home = () => {
    return(
        <>
        <Common name="Extend your services with" 
        imgsrc={web} 
        visit="/service"
         btname="Get Started"
         />
        </>
    );
};

export default Home;