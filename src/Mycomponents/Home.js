import React from 'react'
import Slider from './Slider'
import About from './About'
import Services from './Services'
import Contact from './Contact'



export default function Home() {


  
    return (
        <div>
            <Slider/>
            <About title = "''Educational Quotes''" title2 = "''Types of Education''"/>
            <hr className="container mt-4"/>
            <Services/>
            <hr className="container mt-4"/> 
            <Contact/>
            {/* <div id="slider">
            <Slider/>
            </div>
            <div id="about">
            <About title = "''Educational Quotes''" title2 = "''Types of Education''"/>
            <hr className="container mt-4"/> 
            </div>
            
            <div id="services">
            <Services/> 
            <hr className="container mt-4"/> 
            </div>
            <div id="contact">
            <Contact/>
            </div> */}
                 
        </div>
    )
}
