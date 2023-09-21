import React,{useState, useEffect} from 'react'
import { Navbar } from '../shared/Navbar'
import axios from 'axios'
import { Link, } from 'react-router-dom'

export const AfterAttendance = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  async function submit(e) {
    e.preventDefault();
    try {     
      const response = await axios.get("https://attendance-backend-gsu3.onrender.com/searchpdf");
      setResults(response.data);
    } catch (error) {
      console.error('Error creating class:', error);
    }
  }

  return (
 <>
  <div className="flex flex-col h-screen">
        <Navbar />
        <div className="pt-[4.5rem] p-2">
          <h2 className="text-2xl">Attendance</h2>
          <hr className="mt-2"></hr>
          <div className="mt-2">
            <div className="flex flex-col justify-center items-center">
            <div className='flex justify-center'>
       <div className='w-[350px]'>
        <form method='GET' className='text-center'>
          <input
          onChange={(e)=>{setQuery(e.target.value)}}
          className="w-full h-[35px] border-2 p-3 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3" 
          placeholder='enter unique number to view attended students'/>
          <button className="px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg" onClick={submit}>Get Students</button>
          </form>
       </div>
       </div>
            </div>
       <p className='text-center mt-5 text-black' onChange={(e)=>{setQuery(e.target.value)}}> {results.map((result) => (
         <Link to={'/'}><li key={result._id}>{result.indexnumber}</li></Link> 
        ))}</p>
          </div>
        </div>
      </div>
 </>
  )
}
