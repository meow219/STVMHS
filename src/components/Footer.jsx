import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import emblem from "../assest/Emblem/emblem.png"; // ✅ Local image import

const Footer = () => {
  return (
    <footer className="bg-black text-[#F5F5DC] py-10 px-4 sm:px-8 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-between gap-8">
          {/* Logo */}
          <div className="w-full sm:w-auto flex-shrink-0 flex flex-col items-center lg:items-start">
            <img
              src={emblem}
              alt="STVMHS Emblem"
              loading="lazy"
              className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          {/* Divider */}
          <div className="hidden lg:flex flex-col justify-center items-center relative h-[180px] px-2">
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-3">
              <div className="w-[1px] h-[120px] bg-[#F5F5DC] opacity-50" />
              <div className="w-[1px] h-[150px] bg-[#F5F5DC] opacity-50" />
              <div className="w-[1px] h-[120px] bg-[#F5F5DC] opacity-50" />
            </div>
          </div>

          {/* Info */}
          <div className="w-full sm:w-auto space-y-4 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              St. Thomas Vidyalayam
            </h2>
            <h3 className="text-base sm:text-lg lg:text-xl tracking-wider font-medium opacity-80">
              Matric | Higher Secondary School
            </h3>

            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaPhone className="text-sm" />
                <a
                  href="tel:+918939649600"
                  className="hover:underline hover:opacity-80 text-sm sm:text-base"
                >
                  +91 8939649600
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaEnvelope className="text-sm" />
                <a
                  href="mailto:st0581thomasvid@gmail.com"
                  className="hover:underline hover:opacity-80 text-sm sm:text-base"
                >
                  st0581thomasvid@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaMapMarkerAlt className="text-sm" />
                <span className="text-sm sm:text-base">
                  No.10 Dhanalakshmi Nagar, Vanagaram, Chennai - 600095
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaGlobe className="text-sm" />
                <a
                  href="https://www.stvmhs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:opacity-80 text-sm sm:text-base"
                >
                  www.stvmhs.in
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex flex-col justify-center items-center relative h-[180px] px-2">
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-3">
              <div className="w-[1px] h-[120px] bg-[#F5F5DC] opacity-50" />
              <div className="w-[1px] h-[150px] bg-[#F5F5DC] opacity-50" />
              <div className="w-[1px] h-[120px] bg-[#F5F5DC] opacity-50" />
            </div>
          </div>

          {/* Social & Map */}
          <div className="w-full sm:w-auto flex flex-col items-center space-y-4">
            <div className="flex space-x-4 sm:space-x-6 text-xl sm:text-2xl">
              <a
                href="https://www.youtube.com/@stthomasvidyalayamvioleted7279"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC] hover:text-red-500 transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC] hover:text-pink-400 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC] hover:text-blue-400 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029Va9R63NAojZ17JrlGS35"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC] hover:text-green-400 transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6514183840427!2d80.15025687578257!3d13.05784618726547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52617261b0aa17%3A0xef80f22da9e567a3!2sSt%20Thomas%20Vidyalaya!5e0!3m2!1sen!2sin!4v1745074970522!5m2!1sen!2sin"
              title="St. Thomas Vidyalayam Location on Google Maps"
              aria-label="Map to St. Thomas Vidyalayam"
              className="w-full xs:w-64 h-40 border border-[#F5F5DC] opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 border-t border-[#F5F5DC] border-opacity-30">
          <p className="text-xs sm:text-sm text-center text-[#F5F5DC] opacity-70">
            © {new Date().getFullYear()} St. Thomas Vidyalayam | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
