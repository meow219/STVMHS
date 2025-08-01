import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();
    toggleVisibility();

    // Event listeners
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isMobile ? "right-4 bottom-20" : "right-6 bottom-28"
      }`}
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 ${
            isMobile ? "p-3" : "p-4"
          }`}
          aria-label="Scroll to top"
        >
          <FaArrowUp className={isMobile ? "h-5 w-5" : "h-6 w-6"} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;