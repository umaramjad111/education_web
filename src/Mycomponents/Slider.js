import React from 'react'
import img1 from './images/std3.jpg'
import img2 from './images/std2.jpg'
import img3 from './images/std1.jpg'

export default function Slider() {

//     const dataimages = [
//         {
//             image: <img src={img1} alt="education"/>
//         },
//         {
//             image: <img src={img2} alt="education"/>
//         }
//    dataimages.map(arr => (arr.image))
//   ]


    return (
        <div id="slider">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} className="d-block w-100 imgheight" height="800px" alt="education1"/>
          </div>
          <div class="carousel-item">
            <img src={img2} className="d-block w-100 imgheight" height="800px" alt="education2"/>
          </div>
          <div class="carousel-item">
            <img src={img3} className="d-block w-100 imgheight" height="800px" alt="education2"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    )
}
