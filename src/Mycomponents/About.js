import React from 'react'
import educationquote from './data'
export default function About() {

        //educationtypes

const educaiontypes = [
    {
        image: "https://www.unicef.org/turkey/sites/unicef.org.turkey/files/styles/hero_mobile/public/DSCF0182.jpg?itok=SOjIQmJ1",
        desc: "Formal education refers to the structured education system that runs from primary (and in some countries from nursery) school to university, ",
       
    },
    {
        image: "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/b8-1611574511.png",
        desc: "Informal education refers to a lifelong learning process, whereby each individual acquires attitudes, values, skills and knowledge",
        
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcFXNcVjoQhZ189ATkneeWG-MCeXQO1BP0g&usqp=CAU",
        desc: "Non-formal education refers to planned, structured programmes and processes of personal and social education for young people",
        
    }
]
    return (
        <div data-aos="fade-up">
            
        <section className="pt-5 mt-1">
            <div className="text-center">
            <h4 className="display-5 fw-bold mt-5">"Education Quote"</h4>
            <div className="underline mx-auto"></div>
            </div>
           <section className="sec1">
            <div className="container-fluid">

                <div className="row text-center m-3 direction">
                   
                    {educationquote.map(arr =>(
                        <div className="col mt-2 ">
                            <div className="card p-3 shadow">
                            <p className="lead mt-2">{arr.quote}</p>
                            </div>    
                        </div>
                    ))}
                
                </div>
            </div>
            </section>
             
             {/* //foreducation types */}
            <div className="text-center">
            <h4 className="display-5 fw-bold mt-5">"Types of Education"</h4>
            <div className="underline mx-auto"></div>
            </div>
            <div className="container">

            <div className="row text-center m-3 direction">
   
             {educaiontypes.map(ar =>(
            <div className="col mt-2 w-100 h-100">
              <div className="card p-3 link-dark shadow">
              <img src={ar.image} alt="images" height="200px" className="mx-auto w-100" />
            <p className="lead mt-2">{ar.desc}</p>   
            </div>    
        </div>
        
    ))}

</div>
</div>
</section>
        </div>
      
    )
}
