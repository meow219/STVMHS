import React from "react";
import loaderVideo from "../assets/Loader/Loader.webm"; // ✅ Local video import

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80">
      <video
        src={loaderVideo}
        autoPlay
        loop
        muted
        playsInline // Important for iOS
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
        style={{ 
          background: "transparent",
          maxWidth: "min(28rem, 80vw)", // Responsive max-width
          maxHeight: "min(28rem, 80vh)"
        }}
        aria-label="Loading animation"
      />
    </div>
  );
};

export default Loader;