import React from 'react'
import notFoundImg from '../../images/404.jpeg';
// import { notFoundImg } from '..';
export default function NotFound() {
  return (
    <>
    <h1 className='text-center'>
        Not Found
        This page doesn't exist.
    </h1>
    <img className=' w-25' src={ notFoundImg}alt="" />

    </>
  )
}
