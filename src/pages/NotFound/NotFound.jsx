import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#171d22] text-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-bold text-green-500 mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 rounded-full hover:bg-green-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
