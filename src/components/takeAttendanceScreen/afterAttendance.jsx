import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../shared/Navbar'

export const AfterAttendance = () => {
  return (
 <>
  <div className="flex flex-col h-screen">
        <Navbar />
        <div className="pt-[4.5rem] p-2">
          <h2 className="text-2xl">Take Attendance</h2>
          <hr className="mt-2"></hr>
          <div className="mt-2">
            <form className="flex flex-col justify-center items-center">
            <div className='flex justify-center'>
       <div className='w-[350px]'>
        <div className='w-full border h-fit mb-2 text-white bg-gray-600 p-4'>
            <p>Class Name :</p>
            <p>Level :</p>
            <p>Course Name :</p>
            <div className='flex justify-between mt-4'>
            <div className='flex flex-col text-center'>
            <i className="fa-solid fa-circle-xmark"></i>
                <small>Stop timer</small>    
                </div>
                <div className='flex flex-col text-center'>
                <i className="fa-solid fa-file-pdf"></i>
                <Link to="/takeattendance"><small>Get PDF</small></Link>    
                </div>
            </div>
        </div>
       </div>
       </div>
            </form>
          </div>
        </div>
      </div>
 </>
  )
}
