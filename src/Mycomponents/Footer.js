import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

export default function Footer() {
    return (
        <div>
            <section className="footer bg-dark opacity50 p-4 mt-4">
        <div className="container">
            <div className="row ">


                <div className="col-md-4 text-white">
                 <h4 className="display-6">
                     Education Learning
                 </h4>
                 <p className="lead">
                     Learn new Technologies with us 
                 </p>
                 <p>0392039931093</p>
                 <p>mnabra@gmail.com</p>
                </div>


                <div className="col-md-4 text-center my-auto mt-3">
                 <div className="card rounded-pill">
                     <Link smooth to="#contact" className="my-auto p-2 rounded-pill text-decoration-none text-black" >Contact Us</Link>
                 </div>
                 <div className="card mt-2 rounded-pill">
                     <Link smooth to="#services" className="my-auto p-2 rounded-pill text-decoration-none text-black">Our Services</Link>
                 </div>
                 <div className="card mt-2 rounded-pill ">
                     <Link smooth to="#about" className="my-auto p-2 rounded-pill text-decoration-none text-black">About Us</Link>
                 </div>
                </div>
                 
                <div className="col-md-4 text-white text-center mt-3">
                 <p className="lead">
                 Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments, as opposed to various nonformal and informal means of socialization.
                 </p>
                </div>
                 
                
            </div>
        </div>
        </section>
        </div>
    )
}
