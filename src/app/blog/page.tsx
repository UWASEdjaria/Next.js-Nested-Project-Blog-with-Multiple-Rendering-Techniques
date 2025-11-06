import React from 'react'
interface Post {
  id: number;
  title: string;
  body: string;
}
export default async function Blog() {
  let posts:Post[]=[];
  try {
    const res =await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    if(!res.ok){
      throw new Error('Failed to fetch posts data');
    }
    posts=await res.json();
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="flex flex-col  justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold text-purple-600 m-5">Blog posts</h1>
      {posts.map((post)=>(
        <div key={post.id}
        className='border border-purple-400 p-4 m-2 rounded-lg w-full md:w-3/4 shadow-lg'>
          <h2 className=' text-pink-300 text-center font-bold italic p-1'>{post.title}</h2>
          <p className='text-gray-400'>{post.body}</p>
        </div>
      ))}
    </div>

  )
}