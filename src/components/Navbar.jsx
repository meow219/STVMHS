import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import emblem from "../assets/logo org/emblem.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-full">
        {/* Navbar Content */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 rtl:space-x-reverse min-w-0 flex-shrink-0"
            onClick={handleNavClick}
          >
            <img
              src={emblem}
              className="h-8 sm:h-10 w-auto object-contain"
              alt="School Logo"
            />
            <span className="text-sm sm:text-base md:text-lg font-serif text-white truncate">
              St.Thomas Vidyalayam Matriculation Higher Secondary School
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-8 h-8 sm:w-10 sm:h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-800 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="font-serif flex space-x-6 xl:space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "Violetblock", path: "/VioletBlock" },
                { name: "Blog", path: "/Blog" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li className="relative group" key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`block py-2 px-1 transition-colors duration-300 text-sm xl:text-base ${
                      isActive(item.path) ? "text-[#f5f5dc]" : "text-white"
                    } hover:text-white`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-0 h-1 bg-[#00BCD4] transition-all duration-300 ${
                        isActive(item.path)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu - Appears below navbar */}
        <div
          className={`lg:hidden bg-black transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 py-2" : "max-h-0 py-0"
          }`}
        >
          <ul className="font-serif flex flex-col px-4 sm:px-6 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Violetblock", path: "/VioletBlock" },
              { name: "Blog", path: "/Blog" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li className="relative group" key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block py-2 px-3 rounded transition-colors duration-300 text-base ${
                    isActive(item.path) ? "text-[#f5f5dc]" : "text-white"
                  } hover:text-[#f5f5dc] hover:bg-gray-800`}
                >
                  {item.name}
                  <span
                    className={`absolute left-3 right-3 bottom-1 h-0.5 bg-[#f5f5dc] transition-all duration-300 ${
                      isActive(item.path)
                        ? "w-[calc(100%-1.5rem)]"
                        : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
