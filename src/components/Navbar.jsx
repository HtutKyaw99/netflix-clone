import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between p-4 absolute z-50">
      <h1 className="text-red-600 uppercase font-bold text-4xl">Netflix</h1>
      <div>
        <button className="text-white mr-4">Sign In</button>
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
