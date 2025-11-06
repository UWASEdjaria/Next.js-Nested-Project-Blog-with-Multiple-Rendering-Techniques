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
    <div className="flex flex-col justify-center items-center min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-purple-600">About the Author</h1>
      <div className='w-60 h-60 text-center mt-4 italic bg-gray-900 rounded-lg shadow-lg p-4'>
      <p className="mt-2 text-white"><span className='text-pink-400'>Name:</span>{data.name}</p>
      <p className="mt-2 text-white"><span className='text-pink-400'>Email:</span> {data.email}</p>
      <p className="mt-2 text-white"><span className='text-pink-400'>Street:</span> {data.address.street}</p>
      <p className="mt-2 text-white"><span className='text-pink-400'>City:</span> {data.address.city}</p>
      <p className="mt-2 text-white"><span className='text-pink-400'>Phone:</span> {data.phone}</p>
      </div>
    </div>
  )
}

