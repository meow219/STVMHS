import React from "react";
import loaderVideo from "../assest/Loader/Loader.webm"; // ✅ Local video import

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <video
        src={loaderVideo}
        autoPlay
        loop
        muted
        className="w-20 h-20 object-contain"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default Loader;
