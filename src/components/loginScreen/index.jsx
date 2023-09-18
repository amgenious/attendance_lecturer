import React,{useState} from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

export const LoginScreenindex = () => {
    const history = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("https://attendance-backend-gsu3.onrender.com/lecturerlogin",{
               username,email,password
            })
            .then(res =>{
                if(res.data="exist"){
                    history('/home',{state:{id:username}})
                }
                else if(res.data="notexist"){
                    alert("Wrong Credentials")
                }
                else if(res.data="notexisted"){
                    alert("Not signed up yet")
                    history('/signup')
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }

  return (
   <>
   <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-evenly text-center  p-4'>
            <h1 className='text-3xl font-bold mb-5'>LOGIN</h1>
            <div>
                <form className='flex flex-col' method='POST'>
                <input onChange={(e)=>{setUsername(e.target.value)}} className='w-[350px] h-[35px] border-2 text-white p-6 bg-gray-600 placeholder:text-gray mb-6' placeholder='username' type='text' required/>
                    <input onChange={(e)=>{setEmail(e.target.value)}} className='w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6' placeholder='email' type='email' required/>
                    <input onChange={(e)=>{setPassword(e.target.value)}} className='w-[350px] h-[35px] border-2 p-6 bg-gray-600 text-white placeholder:text-gray mb-6' placeholder='password' type='password' required/>
                    <button onClick={submit} className='bg-black text-white px-12 py-4 border-2 hover:border-black hover:text-black hover:bg-white mb-5'>LOGIN</button>
                </form>
            </div>
            <div>
                <p><Link to={"/signup"}><i>Signup</i></Link></p>
            </div>
        </div>
    </div>
   </>
  )
}
