import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1 text-purple-600 text-[25px] font-extrabold">
            <a href="#">
              <span className="">x</span>
              <span className="text-white"> Bytes.io</span>
            </a>
          </div>
          <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Global</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Technology</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Tech
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Open Source
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:underline">
                    Product Scope
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    UX/UI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    MVP Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Dedicated Teams
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Custom Software Development
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Build</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Play with Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mr-4">
            &copy; 2024 xByte.io all rights reserved.
          </p>
          <div className="container mx-auto px-4 sm:px-10">
            <div className="flex flex-row justify-center space-x-2 sm:space-x-4 sm:px-10 px-1 text-center sm:text-left whitespace-nowrap">
              <p>
                Privacy policy <span className="ml-2">|</span>
              </p>
              <p>
                Security <span className="ml-2">|</span>
              </p>
              <p>Terms of service</p>
            </div>
          </div>

          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
