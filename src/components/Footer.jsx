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

import emblem from "../assets/Emblem/emblem.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-[#F5F5DC] py-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-between gap-8 md:gap-10 lg:gap-12">
          {/* Logo Section */}
          <div className="w-full sm:w-auto flex-shrink-0 flex flex-col items-center lg:items-start space-y-4">
            <img
              src={emblem}
              alt="STVMHS Emblem"
              loading="lazy"
              decoding="async"
              className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 object-contain transition-transform duration-300 hover:scale-105"
              onError={(e) => (e.target.style.display = "none")}
            />
            <div className="hidden lg:block space-y-1">
              <h2 className="text-xl md:text-2xl font-bold">St. Thomas Vidyalayam</h2>
              <p className="text-sm md:text-base opacity-80">Matric | Higher Secondary School</p>
            </div>
          </div>

          {/* Vertical Divider - Desktop */}
          <div className="hidden lg:block h-auto min-h-[180px] w-px bg-[#F5F5DC]/30 mx-2"></div>

          {/* Contact Info */}
          <div className="w-full sm:w-auto space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="lg:hidden mb-4">
              <h2 className="text-xl sm:text-2xl font-bold">St. Thomas Vidyalayam</h2>
              <h3 className="text-base sm:text-lg opacity-80">Matric | Higher Secondary School</h3>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <FaPhone className="text-sm md:text-base" />
                <a
                  href="tel:+918939649600"
                  className="hover:underline hover:opacity-80 text-sm sm:text-base md:text-[15px]"
                >
                  +91 8939649600
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <FaEnvelope className="text-sm md:text-base" />
                <a
                  href="mailto:st0581thomasvid@gmail.com"
                  className="hover:underline hover:opacity-80 text-sm sm:text-base md:text-[15px]"
                >
                  st0581thomasvid@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <FaMapMarkerAlt className="text-sm md:text-base" />
                <span className="text-sm sm:text-base md:text-[15px]">
                  No.10 Dhanalakshmi Nagar, Vanagaram, Chennai - 600095
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <FaGlobe className="text-sm md:text-base" />
                <a
                  href="https://www.stvmhs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:opacity-80 text-sm sm:text-base md:text-[15px]"
                >
                  www.stvmhs.in
                </a>
              </div>
            </div>
          </div>

          {/* Vertical Divider - Desktop */}
          <div className="hidden lg:block h-auto min-h-[180px] w-px bg-[#F5F5DC]/30 mx-2"></div>

          {/* Social & Map */}
          <div className="w-full sm:w-auto flex flex-col items-center space-y-6 md:space-y-8">
            <div className="flex space-x-5 md:space-x-6 text-xl md:text-2xl">
              <a
                href="https://www.youtube.com/@stthomasvidyalayamvioleted7279"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC] hover:text-red-500 transition-colors duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC] hover:text-pink-400 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC] hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029Va9R63NAojZ17JrlGS35"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC] hover:text-green-400 transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6514183840427!2d80.15025687578257!3d13.05784618726547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52617261b0aa17%3A0xef80f22da9e567a3!2sSt%20Thomas%20Vidyalaya!5e0!3m2!1sen!2sin!4v1745074970522!5m2!1sen!2sin"
              title="St. Thomas Vidyalayam Location on Google Maps"
              aria-label="Map to St. Thomas Vidyalayam"
              className="w-full xs:w-72 sm:w-80 h-48 sm:h-52 border border-[#F5F5DC] opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-lg"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 md:mt-12 pt-6 border-t border-[#F5F5DC]/20">
          <p className="text-xs sm:text-sm text-center text-[#F5F5DC]/70">
            © {new Date().getFullYear()} St. Thomas Vidyalayam | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;