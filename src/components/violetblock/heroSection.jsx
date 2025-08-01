import React from "react";

// Local video and image imports
import videoFile from "../../assets/vdo/violet.mp4";
import posterImage from "../../assets/vdo/violet.mp4"; // Recommend replacing with actual image file

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Fullscreen Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover object-center"
          poster={posterImage}
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 🔹 Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* 🔹 Motto Label - Bottom Left */}
      <div className="absolute bottom-0 left-0 z-20">
        <div
          className="bg-cyan-500 text-black font-bold shadow-md font-serif 
                     px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-base sm:text-lg md:text-xl 
                     rounded-tr-lg"
          style={{
            clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
            maxWidth: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Arise and Shine
        </div>
      </div>
    </section>
  );
};

export default HeroSection;