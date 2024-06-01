import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed grid grid-cols-3 bg-gray-900/10 top-0 w-full text-white items-center p-5 z-50">
      <div className="ml-2 p-0 text-[20px] sm:text-[30px] font-bold">
        <a href="#">
          <span className="text-purple-800">x</span>Bytes.io
        </a>
      </div>
      <div className="hidden md:flex justify-between space-x-8 text-base py-2.5 font-normal">
        <ul className="flex space-x-8">
          <li className="hover:text-purple-800 cursor-pointer">Work</li>
          <li className="relative">
            <button className="hover:text-purple-800 cursor-pointer text-nowrap">
              Services <span className="mt-0">⌄</span>
            </button>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-gray-200 shadow-lg rounded z-10">
              <li className="p-4 hover:text-purple-800 hover:bg-gray-800 cursor-pointer">
                UX Product
              </li>
              <li className="p-4 hover:text-purple-800 hover:bg-gray-800 cursor-pointer">
                UX
              </li>
              {/* Add more dropdown items here */}
            </ul>
          </li>
          <li className="hover:text-purple-800 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-800 cursor-pointer text-center text-nowrap">
            About Us
          </li>
          <li className="hover:text-purple-800 cursor-pointer">Careers</li>
          <li className="hover:text-purple-800 cursor-pointer">Tech</li>
          <li className="hover:text-purple-800 cursor-pointer">Blog</li>
        </ul>
      </div>
      <div className="flex w-full sm:justify-end mr-10 justify-between items-center sm:mr-20">
        <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-blue-300 font-bold rounded-full text-[12px] sm:text-[15px] px-6 sm:px-9 py-3 whitespace-nowrap">
          BOOK A CALL
        </button>
        <div className="sm:hidden ml-[90px]">
          <button className="text-white text-2xl  p-4 rounded">
            <span>☰</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
