/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";

const HeaderSection = () => {
  const fullText =
    "Where ideas connect, knowledge grows, and creativity finds its audience.";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsTyping(false);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="headersection relative overflow-hidden bg-linear-to-b from-[#E8F6F6] via-white to-[#F0FAFA]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300B7B5%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#00B7B5]/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-[#005461]/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00B7B5]/10 rounded-full blur-3xl" />

      <div className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-center py-12 sm:py-16 md:py-20 px-4">
        {/* Logo Section */}
        <div className="flex justify-center items-center gap-1 mb-4 text-center">
          <span className="text-[#005461] tracking-tight hover:scale-105 transition-transform duration-300 drop-shadow-sm">
            Blog
          </span>
          <span className="text-[#00857F] relative inline-flex items-center">
            R
            <img
              className="h-5 sm:h-5 md:h-6 ml-0.5"
              src="./edit2.gif"
              alt="Writing animation"
            />
          </span>
        </div>

        {/* Tagline under logo */}
        <p className="text-xs sm:text-sm font-semibold text-[#00857F] tracking-widest uppercase mb-6">
          Your Creative Space
        </p>

        {/* Decorative line */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <div className="h-0.5 w-12 sm:w-16 bg-linear-to-r from-transparent via-[#00B7B5] to-[#00B7B5] rounded-full" />
          <div className="h-3 w-3 rounded-full bg-[#00B7B5] animate-pulse shadow-lg shadow-[#00B7B5]/50" />
          <div className="h-0.5 w-12 sm:w-16 bg-linear-to-l from-transparent via-[#00B7B5] to-[#00B7B5] rounded-full" />
        </div>

        {/* Typewriter Text */}
        <div className="max-w-2xl mx-auto min-h-16 sm:min-h-12 bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-[#00B7B5]/20">
          <p className="text-sm sm:text-base md:text-lg font-medium text-[#004550] leading-relaxed">
            {displayText}
            {isTyping && (
              <span className="inline-block w-0.5 h-4 sm:h-5 bg-[#00B7B5] ml-1 animate-blink align-middle rounded-full" />
            )}
          </p>
        </div>

        {/* CTA Buttons (Optional) */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Primary Button */}
          <button className="group relative inline-flex items-center gap-3 px-7 py-3 bg-linear-to-br from-[#005461] via-[#00696B] to-[#00857F] text-white font-medium rounded-2xl shadow-lg shadow-[#005461]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#005461]/30 hover:-translate-y-0.5 active:translate-y-0">
            <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              className="relative w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <span className="relative">Start Writing</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B7B5] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
          </button>

          {/* Divider */}
          <span className="hidden sm:block text-[#005461]/30 text-sm font-light">
            or
          </span>

          {/* Secondary Button */}
          <button className="group relative inline-flex items-center gap-3 px-7 py-3 bg-white/70 backdrop-blur-sm text-[#005461] font-medium rounded-2xl border border-[#005461]/10 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:border-[#00B7B5]/30 hover:-translate-y-0.5 active:translate-y-0">
            <svg
              className="w-5 h-5 text-[#00857F] transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <span>Explore Blogs</span>
            <svg
              className="w-4 h-4 text-[#00B7B5] transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 sm:mt-12 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-[#00857F] tracking-wide">
              Scroll Down
            </span>
            <svg
              className="w-5 h-5 text-[#00B7B5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
