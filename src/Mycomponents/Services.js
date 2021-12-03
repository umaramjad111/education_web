import React from 'react'

export default function Services() {

    const servicesarray = [
        {
            image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iXZ.MKhjdI2c/v0/-1x-1.jpg",

        },
        {
            image: "https://d33wubrfki0l68.cloudfront.net/3ac241f9fee2e294ee3a5594c2d8b3bf80551379/f5ae6/images/blog/makers_hu5afb5e99e7dda64a600e168d07337c38_68572_960x640_fill_q90_lanczos_center.jpg",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJ3PAuIRCSy1t5KIfrZp7vwlnVZgnW-0xHA&usqp=CAU",
        },
        {
            image: "https://www.socialworkdegreeguide.com/wp-content/uploads/2014/04/school-social-worker.jpg"
        }

    ]
    return (
        <div data-aos="fade-up">
            <section className="service pt-5 mt-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center" >
                                <h4 className="display-5 fw-bold mt-4">Services</h4>
                                <div className="underline mx-auto"></div>
                            </div>
                            <p className="lead mt-3 text-center">
                                Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, habits,
                                and personal development. Educational methods
                                include teaching, training, storytelling, discussion and directed research.ducational Services sector comprises establishments that provide instruction and training in a wide variety of subjects. This instruction and training is provided by specialized establishments, such as schools, colleges,
                                universities, and training centers.Service provides opportunities for staff working in education settings to equip them to respond appropriately to concern that a child may have been abused or be at risk of significant harm.
                                There are three main types of services, based on their sector: business services, social services and personal services.
                                What are special services in education?
                                They may include transportation, speech - language services, psychological services, physical therapy , occupational therapy , therapeutic recreation, assistive technology , social work services, counseling services, and school nurse services.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4 text-center">
                        {servicesarray.map(sarr => (
                            <div className="col mt-3" >
                                
                                <img src={sarr.image} alt="images" width="300px" height="200px" className="mx-auto"  />
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
