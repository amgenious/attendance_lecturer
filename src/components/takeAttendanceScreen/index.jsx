import React from 'react'
import { Navbar } from '../shared/Navbar'
import { Link } from 'react-router-dom'

export const TakeAttendanceindex = () => {
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
        <div className='w-fit border h-fit mb-2 text-white bg-gray-600 p-4'>
            <p>Class Name :</p>
            <p>Level :</p>
            <p>Course Name :</p>
            <div className='flex flex-col mt-4'>
            <input
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="enter unique code"
                type="text"
                required
              />
            <input
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="set timer"
                type="time"
                required
              />
            </div>
        </div>
       </div>
       </div>
              <div className="px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg">
               <Link to={'/afterattendance'}><p>Set Attendance</p></Link> 
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
