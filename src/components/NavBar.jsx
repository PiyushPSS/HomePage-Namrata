import React from "react";
import { ChevronDown, Globe } from "lucide-react";

const NavBar = () => {
  return (
    <div>
      <header className="bg-[#1e1919] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <img src="./global/mainlogo.png" alt="Logo" className="h-8 w-8" />
            <span className="ml-2 font-bold text-lg">Namrata Universal</span>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <button className="px-3 py-2 rounded hover:bg-gray-700 flex items-center">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <button className="px-3 py-2 rounded hover:bg-gray-700 flex items-center">
              Training & Development <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <button className="px-3 py-2 rounded hover:bg-gray-700">
              Internship
            </button>
            <button className="px-3 py-2 rounded hover:bg-gray-700">
              Blog
            </button>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <button className="hidden md:block px-3 py-2 rounded hover:bg-gray-700">
            Who we are
          </button>
          <button className="hidden md:flex items-center px-3 py-2 rounded hover:bg-gray-700">
            Portfolio
          </button>
          <button className="hidden md:block px-3 py-2 rounded hover:bg-gray-700">
            Reviews
          </button>
          <button className="hidden md:block px-3 py-2 rounded hover:bg-gray-700">
            Contact
          </button>
          <button className="bg-white text-black font-medium px-4 py-2 rounded hover:bg-gray-200">
            Get Quote
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
