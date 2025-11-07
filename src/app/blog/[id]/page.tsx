

export default async function BlogIdPage({ params }: { params: { id: string } }) {
  // Fetch the post by ID
  const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await resPost.json();

  // Fetch the author
  const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  const user = await resUser.json();

  return (
    <div className="max-w-2xl p-6 mx-auto text-white bg-gray-800 rounded shadow">
      <h1 className="mb-4 text-2xl font-bold text-purple-600">Blog Post Details</h1>
      <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
      <p className="mb-4">{post.body}</p>
      <p className="text-gray-400">Author: {user.name}</p>
    </div>
  );
}
