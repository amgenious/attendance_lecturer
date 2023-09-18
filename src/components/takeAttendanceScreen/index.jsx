import React,{useState, useEffect} from 'react'
import { Navbar } from '../shared/Navbar'
import axios from 'axios'
import {Link, useParams,useNavigate} from 'react-router-dom'

export const TakeAttendanceindex = () => {
  const history = useNavigate()
  const [klass, setKlass] = useState('')
  const classid = useParams()

  useEffect(() => {
    axios.get("https://attendance-backend-gsu3.onrender.com/takeattendance/"+[classid.id])
    .then(response => setKlass(response.data))
    .catch(err => console.log(err))
    },[ ])


    const [uniquecode, setUniqueCode] = useState('')
    const [time, setTimer] = useState('')
    
    async function submit(e) {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://attendance-backend-gsu3.onrender.com/setattendance", {
        uniquecode: uniquecode,
        time: time
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
  
      if (response.data === "created") {
        alert("attendance set")
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
          <h2 className="text-2xl">Take Attendance</h2>
          <hr className="mt-2"></hr>
          <div className="mt-2">
            <form className="flex flex-col justify-center items-center" method='POST'>
            <div className='flex justify-center'>
       <div className='w-[350px]'>
       {
        <div className='w-fit h-fit mb-2 text-white bg-gray-600 p-4'>
            <p >Class Name : {klass.classname}</p>
            <p>Level : {klass.level} </p>
            <p>Course Name : {klass.coursename}</p>
            <div id='inputfields' className='flex flex-col mt-4'>
            <input
                className="w-[330px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="enter unique code"
                type="text"
                onChange={(e)=>{setUniqueCode(e.target.value)}}
                required
              />
            <input
            onChange={(e)=>{setTimer(e.target.value)}}
                className="w-[330px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3"
                placeholder="set timer"
                type="time"
                required
              />
            </div>
        </div> 
                }
       </div>
       </div>
              <div className="px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg">
               <p onClick={submit}>Set Attendance </p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
