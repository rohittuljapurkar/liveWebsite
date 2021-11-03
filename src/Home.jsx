import React from 'react';
import web from '../src/images/img2.svg'
import Comman from './Comman';

const Home = () =>{
    return(
     <>
        <Comman
            name='Grow your business with' 
            imgsrc={web} 
            visit='/contact' 
            btname="Get Started"   
        />
     </>
    ) 
};

export default Home;
