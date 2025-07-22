import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <video
        src="https://ik.imagekit.io/zmcjodd1h/School%20website/Loader/Loader.webm?tr=w-100,f-webm"
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
