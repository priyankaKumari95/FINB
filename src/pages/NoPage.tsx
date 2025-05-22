import React from 'react';
import { Link } from 'react-router-dom';

const NoPage: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500 dark:text-blue-400">404</h1>
        <p className="text-2xl md:text-3xl font-light mt-4 mb-8">
          Oops! Page Not Found.
        </p>
        <p className="text-lg mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
        >
          Go to Homepage
        </Link>
      </div>
      <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} FINB. All rights reserved.</p>
        <p>Illustration by <a href="https://storyset.com/web" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Storyset</a> (Optional: if you use an illustration)</p>
      </div>
    </div>
  );
};

export default NoPage;