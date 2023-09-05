import React from 'react'
import { Navbar } from '../shared/Navbar'
import { Link } from 'react-router-dom'

export const HomeScreenindex = () => {
  return (
    <>
    <div className='flex flex-col h-screen'>
       <Navbar />
       <div className='pt-[4.5rem] p-2'>
        <div className='px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg'>
            <Link to={'/createclass'}>Create Class</Link>
        </div>
        <hr className='mt-2'></hr>
       </div>
       <div className='flex justify-center'>
       <div className='w-[350px]'>
        <h1 className='text-3xl'> Class Created</h1>
        <div className='w-full border h-fit mb-2 text-white bg-gray-600 p-4'>
            <p>Class Name :</p>
            <p>Level :</p>
            <p>Course Name :</p>
            <p>Number of Students :</p>
            <div className='flex justify-between mt-4'>
                <div className='flex flex-col text-center'>
                <i className="fa-solid fa-trash-can"></i>
                <small>Delete</small>    
                </div>
                <div className='flex flex-col text-center'>
                <i className="fa-solid fa-pen-to-square"></i>
                <Link to="/editclass"><small>Edit</small></Link>    
                </div>
                <div className='flex flex-col text-center'>
                <i className="fa-solid fa-clipboard-user"></i>
                <Link to="/takeattendance"><small>Take Attendance</small></Link>    
                </div>
            </div>
        </div>
       </div>
       </div>
    </div>
    </>
  )
}
