import React from 'react';

const GoogleButton = () => {
  return (
    <div>
      <button className="flex items-center justify-center w-full bg-white text-gray-800 font-bold text-sm border border-gray-300 rounded-3xl shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 px-4 py-2">
        <svg
          className="w-6 h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.12 0 5.9 1.07 8.1 2.9l6-6C34.3 3.8 29.5 1.5 24 1.5 14.8 1.5 7 8.4 4.4 17h7.8C13.7 12 18.4 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.6 24.5c0-1.9-.2-3.7-.6-5.5H24v11h12.8c-.7 3.7-2.8 6.7-5.8 8.7l8.9 7.3c5.2-4.7 8.2-11.7 8.2-20.5z"
          />
          <path
            fill="#FBBC05"
            d="M7.8 28.5c-1.1-3.2-1.1-6.8 0-10h-7.8C-2.5 24.4-.5 31.6 4.3 36.5l8.9-7.3c-1.6-1.8-2.9-4-3.6-6.7z"
          />
          <path
            fill="#34A853"
            d="M24 46.5c5.5 0 10.3-1.8 13.7-4.9l-8.9-7.3c-2.4 1.6-5.5 2.6-8.8 2.6-5.6 0-10.3-3.8-12-8.9h-7.8l-.1.1C5.8 39.6 14.2 46.5 24 46.5z"
          />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>
        Sign Up with Google
      </button>
    </div>
  );
};

export default GoogleButton;
