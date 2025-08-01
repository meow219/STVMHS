import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import emblem from "../assets/Emblem/emblem.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Violetblock", path: "/VioletBlock" },
    { name: "Blog", path: "/Blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo with optimized school name display */}
          <Link
            to="/"
            className="flex items-center space-x-2 rtl:space-x-reverse min-w-0 flex-1"
            onClick={handleNavClick}
            aria-label="Home"
          >
            <img
              src={emblem}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain flex-shrink-0"
              alt="STVMHS School Emblem"
              loading="lazy"
              width="40"
              height="40"
            />
            {/* School name with responsive truncation */}
            <span className="text-sm sm:text-base md:text-lg font-serif text-white whitespace-nowrap overflow-hidden text-ellipsis min-w-[100px] max-w-[180px] xs:max-w-[220px] sm:max-w-[280px] md:max-w-none">
              St.Thomas Vidyalayam Matriculation Higher Secondary School
            </span>
          </Link>

          {/* Mobile Toggle - positioned to the right */}
          <div className="flex lg:hidden items-center ml-2">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="font-serif flex space-x-4 md:space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <li className="relative group" key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`block py-2 px-1 transition-colors duration-300 text-sm md:text-base ${
                      isActive(item.path) ? "text-[#f5f5dc] font-medium" : "text-white hover:text-[#f5f5dc]"
                    }`}
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-[#00BCD4] transition-all duration-300 ${
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

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden bg-gray-900/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-screen py-2" : "max-h-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <ul className="font-serif flex flex-col px-4 sm:px-6 space-y-1">
            {navItems.map((item) => (
              <li className="relative group" key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block py-3 px-3 rounded transition-colors duration-300 text-base ${
                    isActive(item.path) ? "text-[#f5f5dc] bg-gray-800/50" : "text-white hover:text-[#f5f5dc] hover:bg-gray-800/30"
                  }`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute left-3 right-3 bottom-2 h-0.5 bg-[#f5f5dc] transition-all duration-300 ${
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