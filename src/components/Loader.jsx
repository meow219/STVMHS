import React from "react";
import loaderVideo from "../assets/Loader/Loader.webm"; // Adjust the path based on your folder structure

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/30">
      <video
        src={loaderVideo}
        autoPlay
        loop
        muted
        className="w-20 h-20 object-contain"
      />
    </div>
  );
};

export default Loader;
