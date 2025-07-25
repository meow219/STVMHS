import React from "react";

// Use ImageKit CDN version of your modal image
const ModalImage = "https://ik.imagekit.io/zmcjodd1h/School%20website/modal/modal.png?updatedAt=1751313622697?tr=w-800,q-80,f-webp";

const AdmissionModal = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative w-[90vw] sm:w-[85vw] md:w-[70vw] lg:w-[480px] transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        {/* Modal Container */}
        <div className="relative rounded-md shadow-2xl overflow-hidden w-full bg-white">
          {/* Modal Image */}
          <img
            src={ModalImage}
            alt="Admission Open Banner"
            className="w-full h-auto object-cover"
            loading="lazy"
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-green-900 text-white text-lg w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-700 transition"
            aria-label="Close Modal"
          >
            &times;
          </button>

          {/* Register Button */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 px-2 w-full flex justify-center">
            <a
              href="https://forms.gle/YyJB5x3ssc4CSbkz8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[220px]"
            >
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded shadow-md transition text-sm sm:text-base">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;
