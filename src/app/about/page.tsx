import React from 'react'



export default async function About() {
  let data;
  try {
  const res= await fetch('https://jsonplaceholder.typicode.com/users/1');
    if(!res.ok){
      throw new Error('Failed to fetch user data');
    }
       data=await res.json();
  
   } catch (error) {
    console.log(error);
   }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold text-purple-600">About the Author</h1>
      <p className="mt-2 text-white">Name:{data.name}</p>
      <p className="mt-2 text-white">Email:{data.email}</p>
      <p className="mt-2 text-white">street{data.address.street}</p>
      <p className="mt-2 text-white">city{data.address.city}</p>
      <p className="mt-2 text-white">phone{data.phone}</p>
      
    </div>
  )
}

