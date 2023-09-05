import React from 'react'
import { Navbar } from '../shared/Navbar'
import { Link } from 'react-router-dom'

export const CreateClassindex = () => {
  return (
    <>
   <div className="flex flex-col h-screen">
        <Navbar />
        <div className="pt-[4.5rem] p-2">
          <h2 className="text-2xl">Create Class</h2>
          <hr className="mt-2"></hr>
          <div className="mt-2">
            <form className="flex flex-col justify-center items-center">
              <input
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="Class Name"
                type="text"
                required
              />
              <input
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="Course Name"
                type="text"
                required
              />
              <input
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="Number of Students"
                type="number"
                required
              />
              <input
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="Level"
                type="text"
                required
              />
              <input
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="Lecturer's Full Name"
                type="text"
                required
              />
              <div>
              </div>
              <div className="px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg">
               <Link to={'/home'}><p>Create Class</p></Link> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
