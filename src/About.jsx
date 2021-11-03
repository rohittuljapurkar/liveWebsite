import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/hero-img.png';
import Comman from './Comman';

const About = () =>{
    return(
      <>
        <Comman
          name='Welcome to' 
          imgsrc={web} 
          visit='/contact' 
          btname="Contact Now" 
        />
      </>
    ) 
};

export default About;
