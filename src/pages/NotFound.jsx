import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-24">
      <h1 className="text-7xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-6">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-4">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
      >
        Back Home
      </Link>
    </div>
  );
}