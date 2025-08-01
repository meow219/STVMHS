import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial checks
    handleScroll();
    handleResize();

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div 
      className={`fixed z-[999] transition-all duration-300 ${
        isMobile ? 'right-4 bottom-20' : 'right-6 bottom-28'
      }`}
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            bg-cyan-600 hover:bg-cyan-700 text-white 
            rounded-full shadow-lg transition-all 
            duration-300 transform hover:scale-110 
            focus:outline-none focus:ring-2 focus:ring-cyan-500 
            focus:ring-opacity-50
            ${isMobile ? 'p-3' : 'p-4'}
          `}
          aria-label="Scroll to top"
        >
          <FaArrowUp className={isMobile ? 'h-5 w-5' : 'h-6 w-6'} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;