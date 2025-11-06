import React from 'react'

interface BlogDetails{
    params:{id:string}
}
export default async function BlogDetails({params}:BlogDetails) {
    let post;
   try {
     const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if(!res.ok){
        throw new Error('Failed to fetch blog details');
    }
     post=await res.json();
   } catch (error) {
    console.log(error)
   }
   if(!post){
    return <div>Loading...</div>
   }

  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen p-10 font-sans">
      <div key={post.id} className="flex flex-row max-w-lg p-6 text-white bg-gray-900 shadow-lg rounded-xl">
        <h2 className="mb-4 text-2xl font-bold text-purple-400">{post.title}</h2>
        <p className="text-gray-300">{post.body}</p>
      </div>
      
        </div>
      
 
  )
}


