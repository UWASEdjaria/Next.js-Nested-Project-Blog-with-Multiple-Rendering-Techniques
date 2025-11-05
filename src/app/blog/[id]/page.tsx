import React from 'react'
interface BlogPageProps{
    params:{id:string};
};

function BlogPageId({params}:BlogPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-black text-white">
       <h1 className="text-3xl font-bold text-purple-400">Blog ID: {params.id}</h1>
        <p className="text-gray-300 mt-3">
        This is a dynamic blog page showing the ID from the URL.
      </p>
    </div>
  )
}

export default BlogPageId
