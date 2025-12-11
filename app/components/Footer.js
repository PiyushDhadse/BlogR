import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full bg-[#F4F4F4] dark:bg-gray-900 border-t dark:border-gray-800 ${className}`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left - Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005461] dark:text-gray-400 hover:text-[#00B7B5] dark:hover:text-white transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005461] dark:text-gray-400 hover:text-[#00B7B5] dark:hover:text-white transition-colors duration-200"
            >
              <FaTwitter size={24} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005461] dark:text-gray-400 hover:text-[#00B7B5] dark:hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Center - Copyright */}
          <div className="text-center text-[#005461] dark:text-gray-400 text-sm">
            © {currentYear} BlogR. All rights reserved.
            <div className="mt-1 text-xs text-gray-500 dark:text-gray-500">
              Made with <FaHeart className="inline text-red-500" /> for the
              community
            </div>
          </div>

          {/* Right - Address/Location */}
          <div className="flex flex-col items-center space-x-2">
            <FaMapMarkerAlt className="text-[#00B7B5] dark:text-[#00B7B5]" />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005461] dark:text-gray-400 hover:text-[#00B7B5] dark:hover:text-white transition-colors duration-200 text-sm"
            >
              {/* Add your address here */}
              <div className="text-center">
                <span className="italic text-center">47, Vyankatesh IR</span>
                <br />
                <span className="italic text-center">Narsala, Nagpur</span>
                <br />
                <span className="italic text-center">440034</span>
                <br />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-4 border-t dark:border-gray-800 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Simple blogging platform for everyone
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
