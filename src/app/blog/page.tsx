import Link from 'next/link';
import React from 'react';
import { getPosts, Post } from '@/lib/data';

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <div className="flex flex-col min-h-screen gap-6 p-4 md:flex-row">
      {/* Sidebar on the left */}
      <aside className="p-4 text-white bg-gray-900 rounded-lg md:w-1/4">
        <p className='p-4 m-4 font-bold text-center'>Categories</p>
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
            href={`/blog/${post.id}`}
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
