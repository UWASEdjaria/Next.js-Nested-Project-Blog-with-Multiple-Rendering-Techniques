import React from "react";

interface BlogDetails {
  params: { id: string };
}

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function BlogDetails({ params }: BlogDetails) {
  let post: Post;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blog details");
    post = await res.json();
  } catch (error) {
    console.log(error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Failed to load post.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 font-sans">
      <div className="flex flex-col max-w-lg p-6 text-white bg-gray-900 shadow-lg rounded-xl">
        <h2 className="mb-4 text-2xl font-bold text-purple-400">{post.title}</h2>
        <p className="text-gray-300">{post.body}</p>
      </div>
    </div>
  );
}
