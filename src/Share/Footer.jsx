import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-pink-500 text-white ">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-lg font-bold">My Website</h2>
              <p>© 2024 All rights reserved.</p>
            </div>

            {/* Middle Section */}
            <div className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-gray-200 transition duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-gray-200 transition duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-gray-200 transition duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition duration-200"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition duration-200"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition duration-200"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
