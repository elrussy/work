import React from 'react'
import './Contact.css';
export default function Contact() {
  return (
    <>
      <div className="bl7">
        <h1 className='text-center py-4 fw-bolder'>CONATCT SECTION</h1>
        <div className=" boo text-center py-2"><i class="fa-solid fa-star"></i>  </div>
        <div className="container ">
          <div className="w-50 mx-auto py-3 ">
            <div className="form-group mb-3">
              {/* <label for="userName"></label> */}
              <input type='text' className='form-control' id="userName" placeholder='userName'></input>
            </div>
            <div className="form-group mb-3">
              {/* <label for="userAge"></label> */}
              <input type='number' className='form-control' id="userAge" placeholder='userAge'></input>
            </div> <div className="form-group mb-3">
              {/* <label for="userEmail"></label> */}
              <input type='email' className='form-control' id="userEmail" placeholder='userEmail'></input>
            </div> <div className="form-group mb-3">
              {/* <label for="userPassword"></label> */}
              <input type='Password' className='form-control' id="userPassword" placeholder='userPassword'></input>
            </div>
            <button className='btn btn-warning  '>send Message</button>
          </div>
        </div>
      </div>

    </>
  )
}
