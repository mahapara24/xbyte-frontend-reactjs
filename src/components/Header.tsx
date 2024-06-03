import React, { useState, useEffect, useRef } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 400); //  delay in list
  };

  return (
    <div
      className={`fixed grid grid-cols-3 w-[412px] ${
        isScrolled ? "bg-gray-200 text-black" : "bg-gray-900/5 text-white"
      } top-0 items-center justify-center p-2 sm:p-5 z-50 transition-colors duration-300 sm:justify-between sm:w-full`}
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
          <li
            className="relative group"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              className={`hover:text-purple-800 cursor-pointer text-nowrap`}
            >
              Services <span className="mt-0">⌄</span>
            </button>
            {isServicesOpen && (
              <ul
                className="absolute left-0 mt-2 flex flex-wrap bg-gray-200 text-purple-800 shadow-lg rounded z-10 p-"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
                style={{ gap: "1rem" }} // Adjust gap as needed
              >
                <div className="grid grid-cols-3 h-[700px] gap-x-[0px] w-[800px]">
                  <li className="flex-1 hover:text-purple-800 text-black cursor-pointer">
                    <div className="rounded-lg h-[280px] w-full sm:w-[220px] hover:bg-blue-700 hover:text-white p-4 md:p-6 bg-purple-100/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="66"
                        viewBox="0 0 64 66"
                        fill="none"
                      >
                        <path
                          id="Vector"
                          d="M32.0001 63.5413L62.1108 25.6371L47.0555 2.45874M32.0001 63.5413L1.88933 25.6371L16.9447 2.45874M32.0001 63.5413L47.0555 2.45874M32.0001 63.5413L16.9447 2.45874M16.9447 2.45874L47.0555 2.45874M60.6231 25.3059H1.88916"
                          stroke="#0FA4EA"
                          strokeWidth="3.44505"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h1 className="font-semibold text-md sm:text-xl py-1 mt-4">
                        Product Scope
                      </h1>
                      <p className="leading-5 sm:leading-6 font-normal text-base">
                        The Structured Process Behind Successful Product
                        Development
                      </p>
                    </div>
                  </li>
                  <li className="flex-1 hover:text-purple-800 text-black cursor-pointer">
                    <div className="rounded-lg h-[280px] w-full sm:w-[220px] hover:bg-blue-700 hover:text-white p-4 md:p-6 bg-purple-100/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="66"
                        viewBox="0 0 66 74"
                        fill="none"
                      >
                        <path
                          id="Vector"
                          d="M2.59026 19.4326L33.17 36.9997M33.17 36.9997L63.0993 19.4331M33.17 36.9997L33.1702 72.1342M2.59009 19.4426L33.0445 1.86572L63.41 19.3931V54.4479L33.0445 71.972L2.67912 54.4479L2.59009 19.4426Z"
                          stroke="#E7107E"
                          strokeWidth="3.25832"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h1 className="font-semibold text-xl sm:text-2xl py-1 mt-4">
                        UX/UI
                      </h1>
                      <p className="leading-5 sm:leading-6 font-normal text-base">
                        Design an engaging product that is easy-to-use,
                        attractive, and functional
                      </p>
                    </div>
                  </li>
                  <li className="flex-1 hover:text-purple-800 text-black cursor-pointer">
                    <div className="rounded-lg h-[280px] w-full sm:w-[220px] hover:bg-blue-700 hover:text-white p-4 md:p-6 bg-purple-100/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="66"
                        viewBox="0 0 60 60"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.7849 0.667554C30.5466 0.254501 30.106 1.09351e-05 29.6291 0C29.6289 0 29.6287 4.89693e-08 29.6285 1.63704e-07C29.6282 5.45722e-08 29.628 0 29.6278 0C29.1117 0 28.6641 0.29294 28.4422 0.721598L3.90145 43.2565C3.70213 43.602 3.67481 43.9995 3.79288 44.3499C3.89111 44.6414 4.08998 44.9003 4.37417 45.0696L28.9413 59.8099C29.3638 60.0634 29.8917 60.0634 30.3143 59.8099L54.8824 45.069C55.5014 44.6996 55.715 43.9044 55.3644 43.2747C55.3606 43.2679 55.3568 43.2612 55.3529 43.2544L30.7849 0.667554ZM50.5953 40.348L30.9621 6.31515V29.2225L50.5953 40.348ZM28.2935 6.3193L8.66061 40.3477L28.2935 29.2225V6.3193ZM7.70552 43.9563L28.2935 32.2898V56.309L7.70552 43.9563ZM30.9621 32.2898V56.309L51.55 43.9563L30.9621 32.2898Z"
                          fill="#F6D200"
                        />
                      </svg>
                      <h1 className="font-semibold text-xl sm:text-2xl py-1 mt-4">
                        MVP Builder
                      </h1>
                      <p className="leading-5 sm:leading-6 font-normal text-base">
                        Go to market quickly with a high-quality Minimum Viable
                        Product (MVP)
                      </p>
                    </div>
                  </li>
                  <li className="flex-1 hover:text-purple-800 text-black cursor-pointer">
                    <div className="rounded-lg h-[280px] w-full sm:w-[220px] hover:bg-blue-700 hover:text-white p-4 md:p-6 bg-purple-100/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="66"
                        viewBox="0 0 64 72"
                        fill="none"
                      >
                        <g id="Vector">
                          <path
                            d="M22.5793 35.8477L42.0349 69.8438H61.4905L42.0349 35.8477H22.5793Z"
                            stroke="#7B5AB4"
                            strokeWidth="3.17109"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.50952 69.8438L22.1699 35.8477H41.8303L22.1699 69.8438H2.50952Z"
                            stroke="#7B5AB4"
                            strokeWidth="3.17109"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M45.7093 16.0127C45.7093 8.35991 39.5055 2.15613 31.8528 2.15613C24.2 2.15613 17.9962 8.35991 17.9962 16.0127C17.9962 23.6654 24.2 29.8692 31.8528 29.8692C39.5055 29.8692 45.7093 23.6654 45.7093 16.0127Z"
                            stroke="#7B5AB4"
                            strokeWidth="3.17109"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      <h1 className="font-semibold text-xl sm:text-2xl py-1 mt-4">
                        Dedicated Teams
                      </h1>
                      <p className="leading-5 sm:leading-6 font-normal text-base">
                        Handpicked Frontend & Fullstack software developers
                        perfectly tailored to your needs
                      </p>
                    </div>
                  </li>
                  <li className="flex-1 hover:text-purple-800 text-black cursor-pointer">
                    <div className="rounded-lg h-[280px] w-full sm:w-[220px] hover:bg-blue-700 hover:text-white p-4 md:p-6 bg-purple-100/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30.6964 0C30.3263 0 29.9745 0.161073 29.7326 0.441264L4.70222 29.44C4.28676 29.9213 4.29011 30.6354 4.71006 31.1128L29.7405 59.5677C29.9817 59.842 30.3291 59.9994 30.6944 60C31.0597 60.0006 31.4076 59.8442 31.6497 59.5708L44.1649 45.4339L44.1702 45.4279L56.6854 31.1097C57.1029 30.6322 57.1051 29.9201 56.6906 29.44L31.6602 0.441264C31.4184 0.161073 31.0666 0 30.6964 0ZM53.5793 29.7323L31.9696 38.0254V4.69666L53.5793 29.7323ZM29.4233 4.69666V38.0254L7.81357 29.7323L29.4233 4.69666ZM10.0367 33.3129L27.0832 39.8548L18.56 43.0023L10.0367 33.3129ZM20.3622 45.0511L29.4233 41.705V55.3518L20.3622 45.0511ZM31.9696 55.368V41.7175L41.0331 45.1301L31.9696 55.368ZM34.2794 39.8663L42.834 43.0874L51.3887 33.3004L34.2794 39.8663Z"
                          fill="#49B0B0"
                        />
                      </svg>{" "}
                      <h1 className="font-semibold text-xl sm:text-2xl py-1 mt-4">
                        Custom Software Development
                      </h1>
                      <p className="leading-5 sm:leading-6 font-normal text-base">
                        Whatever problem you’re solving, choose the right tech
                        and build the right User Experience for your users
                      </p>
                    </div>
                  </li>
                </div>{" "}
              </ul>
            )}
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
            className={`text-2xl px-4 ml-4 rounded ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={handleMenuToggle}
          >
            <span>☰</span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 pt-10 leading-[60px] bg-gray-300/90 w-full h-screen text-black md:hidden backdrop-blur-md">
          <ul className="flex flex-col items-start justify-between pl-8 text-[28px] font-semibold space-y-4 py-4">
            <li className={`hover:text-purple-800 cursor-pointer`}>Work</li>
            <li
              className={`hover:text-purple-800 cursor-pointer`}
              onClick={handleServicesEnter}
            >
              Services
              {isServicesOpen && (
                <ul className="pl-4 text-[24px] font-normal space-y-2">
                  <li className="hover:text-purple-800 cursor-pointer">
                    UX Product
                  </li>
                  <li className="hover:text-purple-800 cursor-pointer">UX</li>
                  {/* Add more dropdown items here */}
                </ul>
              )}
            </li>
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
