import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed grid grid-cols-3 w-[412px] ${
        isScrolled ? "bg-gray-200 text-black" : "bg-gray-900/5 text-white"
      } w- top-0 items-center justify-center p-2 sm:p-5 z-50 transition-colors duration-300 sm:justify-between sm:w-full`}
    >
      <div className="p-0 text-[20px] sm:text-[30px] font-bold">
        <a href="#">
          <span
            className={`${isScrolled ? "text-purple-800" : "text-purple-800"}`}
          >
            x
          </span>
          Bytes.io
        </a>
      </div>
      <div className="hidden md:flex justify-between text-base py-2.5 font-normal">
        <ul className="flex space-x-8">
          <li className={`hover:text-purple-800 cursor-pointer`}>Work</li>
          <li className="relative group">
            <button
              className={`hover:text-purple-800 cursor-pointer text-nowrap`}
            >
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
          <li className={`hover:text-purple-800 cursor-pointer`}>Pricing</li>
          <li
            className={`hover:text-purple-800 cursor-pointer text-center text-nowrap`}
          >
            About Us
          </li>
          <li className={`hover:text-purple-800 cursor-pointer`}>Careers</li>
          <li className={`hover:text-purple-800 cursor-pointer`}>Tech</li>
          <li className={`hover:text-purple-800 cursor-pointer`}>Blog</li>
        </ul>
      </div>
      <div className="flex sm:justify-end justify-between items-center sm:mr-10 mr-2">
        <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-blue-300 font-bold rounded-full text-[12px] sm:text-[15px] px-6 sm:px-9 py-3 whitespace-nowrap">
          BOOK A CALL
        </button>
        <div className="sm:hidden ml-4">
          <button
            className="text-white text-2xl p-4 rounded"
            onClick={handleMenuToggle}
          >
            <span>☰</span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 sm:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className={`hover:text-purple-800 cursor-pointer`}>Work</li>
            <li className={`hover:text-purple-800 cursor-pointer`}>Services</li>
            <li className={`hover:text-purple-800 cursor-pointer`}>Pricing</li>
            <li className={`hover:text-purple-800 cursor-pointer`}>About Us</li>
            <li className={`hover:text-purple-800 cursor-pointer`}>Careers</li>
            <li className={`hover:text-purple-800 cursor-pointer`}>Tech</li>
            <li className={`hover:text-purple-800 cursor-pointer`}>Blog</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
