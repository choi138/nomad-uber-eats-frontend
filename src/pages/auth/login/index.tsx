import React from 'react';

export const LoginPage: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800 ">
      <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center ">
        <h3 className="text-3xl text-gray-800">Login Page</h3>
        <form className=" flex flex-col mt-5 px-5">
          <input
            placeholder="Email"
            className=" bg-gray-100 mb-3 py-3 px-5 rounded-lg shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600"
          />
          <input
            placeholder="Password"
            className=" bg-gray-100 py-3 px-5 rounded-lg shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600"
          />
          <button className="px-5 py-3 bg-gray-800 text-white mt-3 text-md rounded-lg focus:outline-none hover:opacity-90 transition-all">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
