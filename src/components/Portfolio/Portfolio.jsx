import React from 'react'
import './Portfolio.css'
import man1 from '../../images/image/1.jpg'
import man2 from '../../images/image/2.jpg'
import man3 from '../../images/image/3.jpg'
export default function Portfolio() {
  return (
    <>
      <h1 className='text-center py-4 fw-bolder'>PORTFOLIO COMPONENT</h1>
      <div className=" so py-2"><i class="fa-solid fa-star"></i>  </div>

      <div className="container">
        <div className="row gy-2 gx-2 ">
          <div className="col-md-4">
            <img src={man1} alt="" className='image' />
            <div className="overlay layer">
              <div className="oo"><i class="fa-solid fa-plus"></i></div>
            </div>

          </div>
          <div className="col-md-4">
            <img src={man2} alt="" className='image' />
            <div className="overlay layer">
              <div className="oo"><i class="fa-solid fa-plus"></i></div>
            </div>

          </div>
          <div className="col-md-4">
            <img src={man3} alt="" className='image' />
            <div className="overlay layer">
              <div className="oo"><i class="fa-solid fa-plus"></i></div>
            </div>

          </div>
          <div className="col-md-4">
            <img src={man1} alt="" className='image' />
            <div className="overlay layer">
              <div className="oo"><i class="fa-solid fa-plus"></i></div>
            </div>

          </div>
          <div className="col-md-4">
            <img src={man2} alt="" className='image' />
            <div className="overlay layer">
              <div className="oo"><i class="fa-solid fa-plus"></i></div>
            </div>

          </div>
          <div className="col-md-4">
            <img src={man3} alt="" className='image' />
            <div className="overlay layer">
              <div className="oo"><i class="fa-solid fa-plus"></i></div>
            </div>

          </div>








        </div>

      </div>

    </>
  )
}
