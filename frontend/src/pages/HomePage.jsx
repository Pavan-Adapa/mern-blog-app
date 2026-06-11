import api from "../services/api.js";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const response = await api.get("/posts");

      const postsWithAuthors = await Promise.all(
        response.data.posts.map(async (post) => {
          const userRes = await api.get(`/auth/${post.author}`);

          return {
            ...post,
            authorName: userRes.data.username,
          };
        }),
      );

      setPosts(postsWithAuthors);
    } catch (err) {
      console.log("Posts Fetching failed:", err.response?.data || err.message);
    }
  }
  async function updatePost(id, currentTitle, currentContent) {
    try {
      const newTitle = prompt("Enter new title:", currentTitle);
      if (newTitle === null) return;

      const newContent = prompt("Enter new content:", currentContent);
      if (newContent === null) return;

      const response = await api.put(`/posts/${id}`, {
        title: newTitle,
        content: newContent,
      });

      if (response.data.success) {
        fetchPosts(); // refresh posts
      }
    } catch (err) {
      console.log(`Update Failed: ${err}`);
    }
  }

  async function deletePost(id) {
    try {
      const response = await api.delete(`/posts/${id}`);
      if (response.data.success) {
        fetchPosts();
      }
    } catch (err) {
      console.log(`Delete Failed:${err}`);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Posts Feed
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border border-gray-100 flex flex-col"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-4 flex-grow line-clamp-4">
                {post.content}
              </p>

              <div className="border-t pt-3 mt-auto">
                <p className="text-sm text-gray-500">
                  Author:{" "}
                  <span className="font-medium text-indigo-600">
                    {post.authorName}
                  </span>
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => updatePost(post._id, post.title, post.content)}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Update
                </button>

                <button
                  onClick={() => deletePost(post._id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No posts available.
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
