import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-purple-950 text-white text-2xl min-h-screen  '>
        <div className=' absolute left-[50%]  top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col gap-4 items-center'>
            <div className='border-2 bg-slate-800 rounded-lg p-3'>
            Error 404! Page Not Found...    
            </div>
            <span onClick={()=>{
                navigate('/')
            }} className=' border-2 text-xl bg-pink-800 rounded-lg p-2 hover:bg-purple-800 hover:animate-pulse hover:outline-2'>Return Home</span>
        </div>
        
    </div>
  )
}

export default ErrorPage