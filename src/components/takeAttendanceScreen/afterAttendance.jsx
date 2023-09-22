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
      const response = await axios.get("https://attendance-backend-gsu3.onrender.com/searchpdf?q="+[query]);
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
          value={query}
          onChange={(e)=>{setQuery(e.target.value)}}
          className="w-full h-[35px] border-2 p-3 bg-gray-600 text-white placeholder:text-gray mb-6 mt-3" 
          placeholder='enter unique number to view attended students'/>
          <button className="px-8 py-4 bg-black text-white w-fit rounded-xl cursor-pointer hover:bg-white hover:text-black hover:shadow-lg" onClick={submit}>Get Students</button>
          </form>
       </div>
       </div>
            </div>
          <table className='text-center mt-5 text-black'>
            <thead>
            <th>index number from the forms</th>
            <th>index number from the model</th>
            <th>Date and Time</th>
            
            </thead>
         {results.map((result) => (
          <>
            <tr>
              <td key={result._id} 
         >{result.indexnumber} 
        </td>
              <td >{result.indexnumber} 
        </td>
              <td ><td>{
                result.updatedAt.slice(0,10)
              } </td>
              <td>
               {
                result.updatedAt.slice(11,16)
              } 
              </td>
        </td>
            </tr>
         
         </>
        ))}
        </table>
        <p className='bg-green-600 mt-4 text-center p-2 text-white' onClick={window.print}>get pdf</p>
          </div>
        </div>
      </div>
 </>
  )
}
