import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          BlogApp
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/login" className="hover:text-blue-400">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-400">
            Register
          </Link>
          <Link to="/logout" className="hover:text-blue-400">
            Logout
          </Link>
          <Link
            to="/create-post"
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
