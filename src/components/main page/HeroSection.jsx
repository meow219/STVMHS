import React from "react";
import heroVideo from "../../assets/vdo/main.mp4";

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
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 🔹 Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* 🔹 Motto Label - Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
        <div
          className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 py-2 font-serif shadow-lg backdrop-blur-sm"
          style={{
            clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
          }}
        >
          Arise and Shine
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
