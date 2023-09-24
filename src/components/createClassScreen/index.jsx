import React,{useState} from 'react'
import { Navbar } from '../shared/Navbar'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

export const CreateClassindex = () => {
  const history = useNavigate()
  const [classname, setClassName] = useState('')
  const [coursename, setCourseName] = useState('')
  const [level, setLevel] = useState('')
  const [numberofstudents, setNumberofstudents] = useState('')
  const [lecturername, setLectureName] = useState('')


  async function submit(e) {
  e.preventDefault();

  try {
    const response = await axios.post("https://attendance-backend-gsu3.onrender.com/createclass", {
      classname: classname,
      coursename: coursename,
      level: level,
      numberofstudents: numberofstudents,
      lecturername: lecturername
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.data === "created") {
      history('/home');
    } else if (response.data === "notcreated") {
      alert('Class not created');
    }
  } catch (error) {
    console.error('Error creating class:', error);
  }
}


  return (
    <>
   <div className="flex flex-col h-screen">
        <Navbar />
        <div className="pt-[4.5rem] p-2">
          <h2 className="text-2xl">Create Class</h2>
          <hr className="mt-2"></hr>
          <div className="mt-2">
            <form className="flex flex-col justify-center items-center" method='POST'>
              <input
              onChange={(e)=>{setClassName(e.target.value)}}
              name='classname'
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="Class Name"
                type="text"
                required
              />
              <input
              onChange={(e)=>{setCourseName(e.target.value)}}
              name='coursename'
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="Course Name"
                type="text"
                required
              />
              <input
              onChange={(e)=>{setNumberofstudents(e.target.value)}}
              name='numberofstudents'
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="Number of Students"
                type="number"
                required
              />
                <select id="level" onChange={(e)=>{setLevel(e.target.value)}} className="border-2 text-white bg-gray-600 w-[350px] h-[35px]">
                  <option value="" disabled>Choose level</option>
                  <option value="L100">L1OO</option>
                  <option value="L200">L2OO</option>
                  <option value="L300">L3OO</option>
                  <option value="L400">L4OO</option>
                  </select>
              <input
              onChange={(e)=>{setLectureName(e.target.value)}}
              name='lecturername'
                className="w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="Lecturer's Full Name"
                type="text"
                required
              />
              <div>
              </div>
              <div className="px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg">
               <p onClick={submit}>Create Class</p> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
