import React from "react";

// Local video and image imports
import videoFile from "../../assest/vdo/violet.mp4";
import posterImage from "../../assest/vdo/violet.mp4";

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
          preload="auto"
          className="w-full h-full object-cover"
          poster={posterImage}
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 🔹 Optional dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* 🔹 Motto Label - Bottom Left */}
      <div className="absolute bottom-0 left-0 z-20">
        <div
          className="bg-cyan-500 text-black font-bold text-lg sm:text-xl md:text-2xl px-6 py-2 shadow-md font-serif"
          style={{
            clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
            width: "fit-content",
          }}
        >
          Arise and Shine
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
