'use client';
import React,{useState,useEffect} from 'react';
function Home() {
   const[dateTime,setDateTime]=useState(new Date().toLocaleString());
   useEffect(()=>{
    const timer=setInterval(()=>{
        setDateTime(new Date().toLocaleString());
    },1000);
    return()=>clearInterval(timer);
   },[])
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
       <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-purple-600">Welcome to Our Blog</h1>
      <p className="mt-4 text-white">Explore articles on technology, lifestyle, and education.</p>
      <p className="mt-6 text-lg ">
          🕓 Current Date & Time: <span className="text-purple-400 font-semibold">{dateTime}</span>
        </p>
    </div>
    </div>
  )
}

export default Home
