"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container flex justify-center min-w-screen border bg-[#F4F4F4] dark:bg-gray-900 dark:border-gray-800">
      <nav className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between py-3">
          {/* Left Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <span className="dark:text-white">Blog</span>
              <span className="text-[#005461] dark:text-[#00B7B5]">R</span>
            </Link>
          </div>

          {/* Center Menu */}
          <ul className="flex space-x-8 items-center text-lg text-[#050E3C] dark:text-gray-300">
            <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
              <Link href="">Home</Link>
            </li>
            <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
              <Link href="">About</Link>
            </li>
            <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
              <Link href="">Contact</Link>
            </li>
            <li>
              <Link href="">
                <div className="createnew flex items-center gap-2 bg-[#005461] dark:bg-[#00B7B5] text-white font-semibold rounded-md p-2 px-4 hover:bg-[#005461]/90 dark:hover:bg-[#00B7B5]/90 hover:cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  New
                  <img className="h-6" src="./edit1.gif" alt="" />
                </div>
              </Link>
            </li>
          </ul>

          {/* Right Buttons */}
          <div className="flex items-center space-x-3">
            <button className="text-[#005461] dark:text-gray-300 font-medium hover:text-[#005461]/80 dark:hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
              Login
            </button>
            <button className="bg-[#00B7B5] dark:bg-[#00B7B5] text-white font-medium hover:bg-[#00B7B5]/90 px-5 py-2 rounded-md transition-colors duration-200 shadow-sm">
              Signup
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-3">
            {/* Left Logo */}
            <div className="text-2xl font-bold">
              <Link href="/">
                <span className="dark:text-white">Blog</span>
                <span className="text-[#005461] dark:text-[#00B7B5]">R</span>
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-3">
              <Link href="">
                <div className="createnew flex items-center gap-2 bg-[#005461] dark:bg-[#00B7B5] text-white font-semibold rounded-md p-2 px-4 hover:bg-[#005461]/90 dark:hover:bg-[#00B7B5]/90 hover:cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  <span className="hidden sm:inline">New</span>
                  <img className="h-6" src="./edit1.gif" alt="" />
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#005461] dark:text-gray-300 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {darkMode ? (
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="py-4 border-t dark:border-gray-800">
              <ul className="flex flex-col space-y-3 text-lg text-[#050E3C] dark:text-gray-300">
                <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
                  <Link href="">Home</Link>
                </li>
                <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
                  <Link href="">About</Link>
                </li>
                <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
                  <Link href="">Contact</Link>
                </li>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-2">
                  <button className="text-[#005461] dark:text-gray-300 font-medium hover:text-[#005461]/80 dark:hover:text-white px-4 py-2 rounded-md transition-colors duration-200 border border-[#005461] dark:border-gray-600">
                    Login
                  </button>
                  <button className="bg-[#00B7B5] dark:bg-[#00B7B5] text-white font-medium hover:bg-[#00B7B5]/90 px-5 py-2 rounded-md transition-colors duration-200 shadow-sm">
                    Signup
                  </button>
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
