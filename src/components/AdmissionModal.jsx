import React from "react";
import ModalImage from "../assets/Modal/modal.png";

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
        {/* Modal Container - Removed bg-white */}
        <div className="relative rounded-md shadow-2xl overflow-hidden w-full">
          {/* Modal Image with aspect ratio preservation */}
          <div className="relative" style={{ paddingBottom: '133.33%' }}>
            <img
              src={ModalImage}
              alt="Admission Open Banner"
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
              width={600}
              height={800}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-green-900 text-white text-lg w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-700 transition"
            aria-label="Close Modal"
          >
            &times;
          </button>

          {/* Register Button - Updated design from second code */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 flex justify-center">
            <a
              href="https://forms.gle/YyJB5x3ssc4CSbkz8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[240px]"
            >
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base md:text-lg">
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