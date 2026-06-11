import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function onSubmitHandler(e) {
    e.preventDefault();

    try {
      const newPost = { title, content };
      const response = await api.post("/posts", newPost);
      if (response.data.success) {
        navigate("/");
      }
    } catch (err) {
      console.log("Post creation failed:", err.response?.data || err.message);
    }
  }
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Post
        </h1>

        <form className="space-y-5" onSubmit={onSubmitHandler}>
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter post title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>

            <textarea
              id="content"
              rows="8"
              placeholder="Write your post..."
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
