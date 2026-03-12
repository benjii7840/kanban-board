import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 p-4 bg-gray-900">
      {/* Top section */}
      <div>
        <h1 className="text-white font-bold uppercase">Boardly</h1>
      </div>

      {/* Middle links */}
      <div className="flex flex-col mt-8 gap-4 text-gray-300 ">
        <Link to="/" className="hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/" className="hover:bg-gray-700">
          Tasks
        </Link>
        <Link to="/" className="hover:bg-gray-700">
          Members
        </Link>
        <Link to="/" className="hover:bg-gray-700">
          Settings
        </Link>
      </div>

      {/* Bottom section */}
      <div className="mt-auto mb-5 text-gray-500">
        <h2>Best Manager to have.</h2>
      </div>
    </div>
  );
};

export default Sidebar;
