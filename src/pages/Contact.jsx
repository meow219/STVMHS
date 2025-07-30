import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import backgroundImage from "../assets/bg/blogbg.jpg";
const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Background Section */}
      <div
        className="text-white py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="max-w-6xl mt-12 mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          {" "}
          <span className="text-amber-600">Contact</span> Us
        </h1>
        <p className="text-xl max-w-2xl mx-auto font-serif">
          We’d love to hear from you. Reach out for any inquiries or assistance.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-6 w-6 text-gray-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-serif">
                    Address
                  </h3>
                  <p className="text-gray-600 font-serif">
                    No.10 Dhanalakshmi Nagar, Vanagaram
                  </p>
                  <p className="text-gray-600 font-serif">
                    Chennai, Tamil Nadu 600095
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="h-6 w-6 text-gray-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-serif">
                    Phone
                  </h3>
                  <p className="text-gray-600 font-serif">+91 89396 49600</p>
                  <p className="text-gray-600 font-serif">+91 98401 23456</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="h-6 w-6 text-gray-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-serif">
                    Email
                  </h3>
                  <p className="text-gray-600 font-serif">info@stvmhs.in</p>
                  <p className="text-gray-600 font-serif">
                    st0581thomasvid@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 font-serif">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <FaFacebook className="h-8 w-8" />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-pink-400 transition-colors"
                >
                  <FaInstagram className="h-8 w-8" />
                </a>
                <a
                  href="https://www.whatsapp.com/channel/0029Va9R63NAojZ17JrlGS35"
                  className="text-gray-600 hover:text-green-400 transition-colors"
                >
                  <FaWhatsapp className="h-8 w-8" />
                </a>
                <a
                  href="https://www.youtube.com/@stthomasvidyalayamvioleted7279"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  <FaYoutube className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Admission Process
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">
                  Enrollment for 2025-26
                </h3>
                <ul className="space-y-2 text-gray-700 font-serif">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Classes: Pre-KG to XII</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Application Deadline: April 30, 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Entrance Test: May 15, 2025</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">
                  Required Documents
                </h3>
                <ul className="space-y-2 text-gray-700 font-serif">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Birth Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Previous School Records</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Passport Size Photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Transfer Certificate (if applicable)</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() =>
                  window.open("https://forms.gle/YyJB5x3ssc4CSbkz8", "_blank")
                }
                className="relative w-full h-12 overflow-hidden border border-cyan-600 shadow-2xl rounded-lg text-cyan-700 font-bold group transition-all duration-500 hover:text-white"
              >
                <span className="relative z-10">Application Form</span>
                <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:w-[900px] group-hover:h-[900px] transition-all duration-500 z-0"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
