import React from 'react';

export const dynamic = 'force-dynamic';

async function getUserData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function About() {
  const data = await getUserData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-purple-600">About the Author</h1>
      {data ? (
        <div className='w-60 h-auto text-center mt-4 italic bg-gray-900 rounded-lg shadow-lg p-4'>
          <p className="mt-2 text-white"><span className='text-pink-400'>Name:</span> {data.name}</p>
          <p className="mt-2 text-white"><span className='text-pink-400'>Email:</span> {data.email}</p>
          <p className="mt-2 text-white"><span className='text-pink-400'>Street:</span> {data.address.street}</p>
          <p className="mt-2 text-white"><span className='text-pink-400'>City:</span> {data.address.city}</p>
          <p className="mt-2 text-white"><span className='text-pink-400'>Phone:</span> {data.phone}</p>
        </div>
      ) : (
        <p className="mt-4 text-red-500">Could not load user data.</p>
      )}
    </div>
  );
}

