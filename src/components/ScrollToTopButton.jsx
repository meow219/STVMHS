import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed right-6 z-50 transition-all duration-300"
      style={{ bottom: "7rem" }}
    >
      {" "}
      {/* Positioned above chat button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
