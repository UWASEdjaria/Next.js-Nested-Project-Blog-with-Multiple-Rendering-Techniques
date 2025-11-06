import Link from 'next/link';
import React from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function BlogPage() {
  let posts: Post[] = [];
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error('Failed to fetch posts');
    posts = await res.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col min-h-screen gap-6 p-4 md:flex-row">
      {/* Sidebar on the left */}
      <aside className="p-4 text-white bg-gray-900 rounded-lg md:w-1/4">
        <p  className='p-4 m-4 font-bold text-center'>Categories</p>
        <p className='p-4 m-4 font-bold text-center'>Tech</p>
        <p  className='p-4 m-4 font-bold text-center'>LifeStyle</p>
        <p  className='p-4 m-4 font-bold text-center'>Education</p>
      </aside>

      {/* Blog posts on the right */}
      <div className="flex-1">
        <h1 className="mb-4 text-2xl font-bold text-purple-600">Blog posts</h1>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blogDetails/${post.id}`}
            className="block p-4 mb-4 text-white bg-gray-800 rounded-lg"
          >
            <h2 className="font-bold">{post.title}</h2>
            <p className="text-gray-300">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
