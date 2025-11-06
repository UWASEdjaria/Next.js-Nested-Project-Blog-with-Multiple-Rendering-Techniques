import React from 'react'

interface BlogDetails{
    params:{id:string}
}
function BlogDetails({params}:BlogDetails) {
  return (
    <div>
      <h1>Blog ID:{params.id}</h1>
    </div>
  )
}

export default BlogDetails
