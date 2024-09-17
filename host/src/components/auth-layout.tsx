import React from "react";
import { Outlet, Link } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/">MyApp</Link>
          </h1>
          <nav>
            <Link
              to="/login"
              className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-gray-600">&copy; 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
