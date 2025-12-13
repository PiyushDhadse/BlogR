/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign Out</button>
  //     </>
  //   );
  // }

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
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/">
                {" "}
                {/* Assuming new links to the root or a new post page */}
                <div className="createnew flex items-center gap-2 bg-[#005461] dark:bg-[#00B7B5] text-white font-semibold rounded-md p-2 px-4 hover:bg-[#005461]/90 dark:hover:bg-[#00B7B5]/90 hover:cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  New
                  <img className="h-6" src="./edit1.gif" alt="" />
                </div>
              </Link>
            </li>
          </ul>

          {/* Right Buttons */}
          <div className="flex items-center space-x-3">
            {session && (
              <>
                <p className=" sm:text-xl font-bold text-[#005461]">
                  <Link href={`/${encodeURIComponent(session.user.name)}`}>
                    {session.user.name}
                  </Link>
                </p>

                <button
                  onClick={() => signOut()}
                  className="bg-[#00B7B5] dark:bg-[#00B7B5] text-white font-medium hover:bg-[#00B7B5]/90 px-5 py-2 rounded-md transition-colors duration-200 shadow-sm"
                >
                  Logout
                </button>
              </>
            )}

            {!session && (
              <>
                <Link href="./login">
                  <button className="text-[#005461] dark:text-gray-300 font-medium hover:text-[#005461]/80 dark:hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
                    Login
                  </button>
                </Link>
                <Link href="./signup">
                  {" "}
                  {/* Assuming Signup also goes to the login/signup page */}
                  <button className="bg-[#00B7B5] dark:bg-[#00B7B5] text-white font-medium hover:bg-[#00B7B5]/90 px-5 py-2 rounded-md transition-colors duration-200 shadow-sm">
                    Signup
                  </button>
                </Link>
              </>
            )}

            {/* Dark Mode Toggle */}
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
              <Link href="/">
                {" "}
                {/* Assuming new links to the root or a new post page */}
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
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="py-4 border-t dark:border-gray-800">
              <ul className="flex flex-col space-y-3 text-lg text-[#050E3C] dark:text-gray-300">
                <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
                  <Link href="./about">About</Link>{" "}
                  {/* FIX: Changed href="" to href="/about" */}
                </li>
                <li className="hover:text-[#005461] dark:hover:text-white hover:bg-[#00B7B5]/20 p-2 rounded-sm hover:cursor-pointer transition-colors duration-200">
                  <Link href="./contact">Contact</Link>{" "}
                  {/* FIX: Changed href="" to href="/contact" */}
                </li>
                {session ? (
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 pt-2">
                    <Link
                      href={`/${encodeURIComponent(session.user.name)}`}
                      className="text-sm font-bold text-[#005461] dark:text-white"
                    >
                      {session.user.name}
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="bg-[#00B7B5] dark:bg-[#00B7B5] text-white font-medium hover:bg-[#00B7B5]/90 px-5 py-2 rounded-md transition-colors duration-200 shadow-sm w-full sm:w-auto"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-2">
                    <Link href="./login">
                      <button className="text-[#005461] dark:text-gray-300 font-medium hover:text-[#005461]/80 dark:hover:text-white px-4 py-2 rounded-md transition-colors duration-200 border border-[#005461] dark:border-gray-600 w-full sm:w-auto">
                        Login
                      </button>
                    </Link>
                    <Link href="./signup">
                      <button className="bg-[#00B7B5] dark:bg-[#00B7B5] text-white font-medium hover:bg-[#00B7B5]/90 px-5 py-2 rounded-md transition-colors duration-200 shadow-sm w-full sm:w-auto">
                        Signup
                      </button>
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
