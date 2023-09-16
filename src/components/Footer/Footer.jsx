import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <>
    <footer className='bg-danger py-1 text-center  text-white  w-100'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <div className="icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-dribbble"></i>
            </div>
            
          </div>
          <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route

</p>
            
          </div>
        </div>
      </div>
      
      

        <p className=" bg-dark text-white text-center  m-auto">Copyright © Your Website 2021</p>
    </footer>

    </>
  )
}
