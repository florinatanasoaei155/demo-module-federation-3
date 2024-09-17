import { Outlet, Link } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <Link to="/">MyApp</Link>
          </h1>
          <div className="space-x-4">
            <Link
              to="/"
              className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700 transition"
            >
              Home
            </Link>
            <Link
              to="/reports"
              className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-700 transition"
            >
              Reports
            </Link>
          </div>
        </div>
      </nav>
      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default Root;
